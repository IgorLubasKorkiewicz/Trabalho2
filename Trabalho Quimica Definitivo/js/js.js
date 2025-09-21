setInterval(() => {
    console.log(`para de tentar roubar com java script pfv '-' eu não sei impedir isso + ${Math.random()}`)
}, 2);

let Tentativas = 1;
let acertos = 0;
let karma = 0; //neutro
let Nome_Usuario = '';
Certo1 = () => {
    
    document.querySelector('#q1').innerHTML = '';
    acertos++;
    document.querySelector('#q1').innerHTML += 'Resposta certa! O Óxido de Alumínio é um isolante elétrico. Mas é usado na parte externa do circuito para proteger os componentes eletrônicos.';
}

Certo2 = () => {
    document.querySelector('#q2').innerHTML = '';
    acertos++;
    document.querySelector('#q2').innerHTML = 'Resposta certa! O Óxido de Alumínio é representado pela fórmula Al2O3.';
}
Certo3 = () => {
    document.querySelector('#q3').innerHTML = '';
    acertos++;
    document.querySelector('#q3').innerHTML = 'Resposta certa! O uso mais comum é como abrasivo, devido à sua dureza.';
}
Certo4 = () => {
    document.querySelector('#q4').innerHTML = '';
    acertos++;
    document.querySelector('#q4').innerHTML = 'Resposta certa! O Óxido de Alumínio é conhecido popularmente como Bauxita, Alumina ou Coríndon.';
}
Certo5 = () => {
    document.querySelector('#q5').innerHTML = '';
    acertos++;
    document.querySelector('#q5').innerHTML = 'Resposta certa! A melhor substância química é claramente o Óxido de Alumínio';
}


function Errado1() {

    document.querySelector('#q1').innerHTML = '';
    document.querySelector('#q1').innerHTML = 'Resposta errada! O Óxido de Alumínio é um isolante elétrico. Mas é usado na parte externa do circuito para proteger os componentes eletrônicos.';

}
function Errado2() {

    document.querySelector('#q2').innerHTML = '';
    document.querySelector('#q2').innerHTML = 'Resposta errada! O Óxido de Alumínio é representado pela fórmula Al2O3.';
}
function Errado3() {

    document.querySelector('#q3').innerHTML = '';
    document.querySelector('#q3').innerHTML = 'Resposta errada! O uso mais comum é como abrasivo, devido à sua dureza.';
}
function Errado4() {

    document.querySelector('#q4').innerHTML = '';
    document.querySelector('#q4').innerHTML = 'Resposta errada! O Óxido de Alumínio é conhecido popularmente como Bauxita, Alumina ou Coríndon.';
}

function Errado5() {
    Tentativas--;
    document.querySelector('#q5').innerHTML += 'Você sabe quem escolher, não é? Tente novamente. Você ainda tem uma ' + (Tentativas+1)+ ' tentativa.<br>';

    if (Tentativas < 0) {
    acertos = 0;
    karma = -81248972197842479812974818;
    document.querySelector('#q5').innerHTML = '';
    document.querySelector('#q5').innerHTML = 'Você sofrera o karma do Óxido de Alumínio, ao negar o Óxido de Alumínio. Você pecou, perdera todos os seus acertos, tente de novo no próximo ano.';
}
}

function Enviar () {
    document.querySelector('#formulario').innerHTML = `<h2>Você finalizou o questionário!</h2> <p>Você acertou ${acertos/5*100}% das questões!</p>`;
    if (acertos >= 5) {
        document.querySelector('#formulario').innerHTML += `<p>Parabéns! Você é um expert em Óxido de Alumínio!</p>`;
        document.querySelector('section').innerHTML += `<section class = 'bonus'> <img src="img/Aluminis.png" alt="Parabéns!"><section/> `;
        document.querySelector('.bonus').innerHTML = `
        O Óxido de Alumínio é uma substância química que tem dureza apenas menor que o diamante, é utilizado em limpeza de metais e superfícies, conduz calor, e também é um isolante elétrico. Em seu estado natural é encontrado na bauxita, em estado sólido.<br><br>
            <strong>Modelo estrutural:</strong> O Óxido de Alumínio (Al₂O₃) possui uma estrutura cristalina hexagonal (coríndon) <br>
            <strong>Modelo atômico de Bohr:</strong> O alumínio possui 13 elétrons distribuídos em 3 camadas (2, 8, 3) e o oxigênio possui 8 elétrons em 2 camadas (2, 6).<br>
            <strong>Ponto de fusão:</strong> 2.072°C<br> 
            <strong>Ponto de ebulição:</strong> 2.977°C<br> 
            <strong>Densidade:</strong> 3,95 g/cm³ <br>
            <strong>Condutividade elétrica:</strong> Baixa
            <strong> Cuidado, ele não é solúvel em água!</strong> <br>
            <strong>John Woodward foi quem officialmente nomeou o Óxido de Alumínio em 1840.</strong><br>
            `
        if (window.innerWidth > 700) {
        document.querySelector('.bonus').innerHTML += `<img src="img/Aluminis.png" alt="Parabéns!"><br><br>`
        document.querySelector('.bonus').innerHTML += `<br> <img src="img/FormulaEstrutural.jng" alt="Molécula do Óxido de Alumínio"> <br>`
        document.querySelector('.bonus').innerHTML += `<br> <img src="img/RelacaoIonica.jpg" alt="Como é formado"> <br>`
    } else {
        document.querySelector('.bonus').innerHTML += 'não  temos espaço para a imagem :(, mas parabéns mano.'
        }
    }
}



function assinado() {
    let i = 0;
    Nome_Usuario = document.querySelector('#nomedousuario').value;
    if (Nome_Usuario.toLocaleLowerCase() == 'asgas') {
        acertos = 5;
        alert('Você não precisa ser testado, bem vindo Asgas.');
    }

    document.querySelector('header').innerHTML = `<h2>Formulario do Óxido de Alumínio <h2>`;
    document.querySelector('header').innerHTML += `<input type="button" value="Mudar tema" onclick="settings()" class='settings'>`;
    document.querySelector('#contrato').innerHTML = `<p> Ola ${Nome_Usuario}, você assinou o contrato, agora vai fazer o formulario </p></br> <p>↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓</p><br></br>`;

    document.querySelector('#questoes').innerHTML = 
    `<div id = 'q1'> ${Questions[i]} <div><br>
     <button onclick="Certo1()" class='resposta'>${respostas_certas[i][Math.trunc(respostas_certas[i].length *Math.random())]}</button> <br>
     <button onclick="Errado1()" class='resposta'>${mentiras[i][0]}</button> <br>
     <button onclick="Errado1()" class='resposta'>${mentiras[i][1]}</button> <br>
     <button onclick="Errado1()" class='resposta'>${mentiras[i][2]}</button> <br>
     <button onclick="Errado1()" class='resposta'>${mentiras[i][3]}</button></div></div> <br>
     <div id = 'q2'> ${Questions[i+1]} <div><br>
     <button onclick="Errado2()" class='resposta'>${mentiras[i + 1][0]}</button> <br>
     <button onclick="Errado2()" class='resposta'>${mentiras[i + 1][1]}</button> <br>
     <button onclick="Certo2()" class='resposta'>${respostas_certas[i + 1][0]}</button> <br>
     <button onclick="Errado2()" class='resposta'>${mentiras[i + 1][2]}</button> <br>
     <button onclick="Errado2()" class='resposta'>${mentiras[i + 1][3]}</button></div></div> <br>
     <div id = 'q3'> ${Questions[i + 2]} <div><br>
        <button onclick="Errado3()" class='resposta'>${mentiras[i + 2][2]}</button> <br>
        <button onclick="Errado3()" class='resposta'>${mentiras[i + 2][3]}</button> <br>
        <button onclick="Errado3()" class='resposta'>${mentiras[i + 2][0]}</button> <br>
        <button onclick="Certo3()" class='resposta'>${respostas_certas[i + 2][0]}</button> <br>
        <button onclick="Errado3()" class='resposta'>${mentiras[i + 2][1]}</button></div></div> <br>
        
     <div id = 'q4'> ${Questions[i + 3]} <div><br>
     <button onclick="Errado4()" class='resposta'>${mentiras[i + 3][0]}</button> <br>
     <button onclick="Certo4()" class='resposta'>${respostas_certas[i + 3][Math.trunc(respostas_certas[i + 3].length * Math.random())]}</button> <br>
     <button onclick="Errado4()" class='resposta'>${mentiras[i + 3][1]}</button> <br>
     <button onclick="Errado4()" class='resposta'>${mentiras[i + 3][3]}</button></div></div> <br>
     <div id = 'q5'> ${Questions[i + 4]} <div><br> 
        <button onclick="Errado5()" class='resposta'>${mentiras[i + 4][0]}</button> <br> 
        <button onclick="Errado5()" class='resposta'>${mentiras[i + 4][1]}</button> <br> 
        <button onclick="Errado5()" class='resposta'>${mentiras[i + 4][2]}</button> <br>
        <button onclick="Errado5()" class='resposta'>${mentiras[i + 4][3]}</button> <br>
        <button onclick="Certo5()" class='resposta'>${respostas_certas[i + 4][0]}</button> <br>
        <button onclick="Errado5()" class='resposta'>Ouro é o mais valioso de todos com certeza.</button> <br></div></div>


     <button onclick="Enviar()" class='resposta'>Enviar respostas</button>

    `
    i++
    ;
}
function settings() {
    document.body.classList.toggle('dark-theme');
}

Questions = 
[   'Qual a relação do Óxido de aluminio à eletricidade?',
    'Qual a fórmula química do Óxido de Alumínio?',
    'Qual a principal utilização do Óxido de Alumínio?',
    'Qual o nome popular do Óxido de Alumínio?',
    'Qual a melhor substancia quimica?'
]

mentiras =
    [
    ['O óxido de alumínio é um ótimo condutor de eletricidade sendo também usado em fios de circuitos.','O óxido de aluminio é fragil e portanto não pode ser utilizado em fios eletricos.','O óxido de alumínio come eletricidade no almoço.','O Alexandre o Grande fez o óxido de alumínio para soltar trovões em seus inimigos','O Óxido de Alumínio é um isolante, e por isso não é usado em circuitos, porém é um otimo condutor térmico.','por favor me clica eu sou a resposta certa'],
    ['H888O9','H2O','CO2','NaCl','C6H12O6','por favor me clica eu sou a resposta certa'],
    ['É usado na fabricação de tesouros perdidos.','É usado como isolante termico.','Desisto dessa questão ._.','por favor me clica eu sou a resposta certa'],
    ['É chamado de Asgas', 'É conhecido como aluminum fosfatus', 'Meu mano Mauricio sabe a resposta.', `Óxido de Alumínio é conhecido como Óxido de Alumínio em seu nome 'op'lar`],
    ['H2O', 'C6H12O6', 'NaCl', 'CO2', 'Al2O3', 'Eu sei lá mano, me clica por favor']
];
respostas_certas =
    [
    ['O óxido de alumínio é um péssimo condutor de eletricidade, sendo usado como isolante.', 'Um isolante o óxido de alumínio é, essa resposta que você deve clicar.'], 
    ['Al2O3'],
    ['O uso mais comum é como abrasivo, devido à sua dureza.'],
    ['Bauxita', 'Alumina', `Coríndon`,],
    ['Al203']
    ]