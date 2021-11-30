function cadastroPlayer() {
    const nick = document.getElementById('nickPlayer');
    const fileira = document.getElementsByName('fileira');
    const elo = document.getElementById('elo');
    const table = document.getElementById('playersTable');    
    if(nick.value!==''){
       if (fileira[0].checked||fileira[1].checked||fileira[2].checked||fileira[3].checked||fileira[4].checked||fileira[5].checked){
         let fileiraAtual;
         for(let i = 0; i < fileira.length; i += 1){
             if(fileira[i].checked){
                 fileiraAtual = fileira[i].value;
             }
         }
         if(elo.value==''){
             elo.value = '-';
         }
         let player = document.createElement('tr');
         let nickTable = document.createElement('td');
         nickTable.innerText = nick.value;
         player.appendChild(nickTable);
         let fileiraTable = document.createElement('td');
         fileiraTable.innerText = fileiraAtual;
         player.appendChild(fileiraTable);
         let eloTable = document.createElement('td');
         eloTable.innerText=elo.value;
         player.appendChild(eloTable);
         playersTable.appendChild(player);
         const tableTitle = document.getElementById('tableTitle');
         console.log(fileiraAtual);
         geraFileiras(fileiraAtual, nick.value);        
         tableTitle.className = '';
         nick.value = '';
         fileira[0].checked = false;
         fileira[1].checked = false;
         fileira[2].checked = false;
         fileira[3].checked = false;
         fileira[4].checked = false;
         fileira[5].checked = false;
         elo.value = '';
       }
       else{
        window.alert('Defina uma fileira para o acéfalo');
       }
    } else{
        window.alert('Defina um nick para o energúmeno');
    }
}
function geraFileiras(fileiraAtual, nick){
    const fileira1 = document.getElementById('fileira1List');
    const fileira2 = document.getElementById('fileira2List');
    const fileira3 = document.getElementById('fileira3List');
    const fileira4 = document.getElementById('fileira4List');
    const fileira5 = document.getElementById('fileira5List');  
    const undefined = document.getElementById('indefinidoList') 
    const newNick = document.createElement('li')
    newNick.innerText = nick;    
    if(fileiraAtual == 1){
        fileira1.className = 'fileira';
        newNick.className = 'fileira1-player';
        fileira1.appendChild(newNick);
    }else if(fileiraAtual == 2){
        fileira2.className = 'fileira';
        newNick.className = 'fileira2-player';
        fileira2.appendChild(newNick);
    }else if(fileiraAtual == 3){
        fileira3.className = 'fileira';
        newNick.className = 'fileira3-player';
        fileira3.appendChild(newNick);
    }else if(fileiraAtual == 4){
        fileira4.className = 'fileira';
        newNick.className = 'fileira4-player';
        fileira4.appendChild(newNick);
    }else if(fileiraAtual == 5){
        fileira5.className = 'fileira';
        newNick.className = 'fileira5-player';
        fileira5.appendChild(newNick);
    } else {
        undefined.className = 'fileira';
        newNick.className = 'undefined-player';
        undefined.appendChild(newNick);
    }
}

function shuffleArray(arr) {
    // Loop em todos os elementos
for (let i = arr.length - 1; i > 0; i--) {
        // Escolhendo elemento aleatório
    const j = Math.floor(Math.random() * (i + 1));
    // Reposicionando elemento
    [arr[i], arr[j]] = [arr[j], arr[i]];
}
// Retornando array com aleatoriedade
return arr;
}
const array = ['a','b']
console.log(shuffleArray(array))
function criaArrayHTML(HTML){
    let arrayString = [];
    for (let i = 0; i < HTML.length; i += 1){
        arrayString.push(HTML[i].innerText);
    }
    return arrayString;
}
/* var nums = [1,2,3,4,5,6,7,8,9,10],
    ranNums = [],
    i = nums.length,
    j = 0;

while (i--) {
    j = Math.floor(Math.random() * (i+1));
    ranNums.push(nums[j]);
    nums.splice(j,1);
}
console.log(ranNums); */
const btnCadastro = document.getElementById('cadastro');
btnCadastro.addEventListener('click', cadastroPlayer);

function sorteio () {
    const playersUndefined = document.getElementsByClassName('undefined-player');
    let players1 = document.getElementsByClassName('fileira1-player');
    let players2 = document.getElementsByClassName('fileira2-player');
    let players3 = document.getElementsByClassName('fileira3-player');
    let players4 = document.getElementsByClassName('fileira4-player');
    let players5 = document.getElementsByClassName('fileira5-player');
    const fileira1 = document.getElementById('fileira1List');
    const fileira2 = document.getElementById('fileira2List');
    const fileira3 = document.getElementById('fileira3List');
    const fileira4 = document.getElementById('fileira4List');
    const fileira5 = document.getElementById('fileira5List'); 
    const divTimes = document.getElementById('times');
    if(playersUndefined.length==0){
    const totalPlayers = players1.length + players2.length + players3.length + players4.length + players5.length;
    const qtdTimes = Math.ceil(totalPlayers/5);
        if(players1.length>qtdTimes||players2.length>qtdTimes||players3.length>qtdTimes||players4.length>qtdTimes||players5.length>qtdTimes){
            window.alert('As fileiras podem ter no máximo' + qtdTimes +'jumentos');
        } else {
            if(players1.length<qtdTimes){
                let dif = players1.length - qtdTimes;
                for(let i = 0; i < dif; i+=1){
                    let newRepesca = document.createElement('li');
                    newRepesca.innerText = 'Repescagem';
                    newRepesca.className = 'fileira1-player';
                    fileira1.appendChild(newRepesca);                    
                }
            }
            if(players2.length<qtdTimes){
                let dif = players2.length - qtdTimes;
                for(let i = 0; i < dif; i+=1){
                    let newRepesca2 = document.createElement('li');
                    newRepesca2.innerText = 'Repescagem';
                    newRepesca2.className = 'fileira2-player';
                    fileira2.appendChild(newRepesca2);
                }
            }
            if(players3.length<qtdTimes){
                let dif = players3.length - qtdTimes;
                for(let i = 0; i < dif; i+=1){
                    let newRepesca3 = document.createElement('li');
                    newRepesca3.innerText = 'Repescagem';
                    newRepesca3.className = 'fileira3-player';
                    fileira3.appendChild(newRepesca3);
                }
            }
            if(players4.length<qtdTimes){
                let dif = players4.length - qtdTimes;
                for(let i = 0; i < dif; i+=1){
                    let newRepesca4 = document.createElement('li');
                    newRepesca4.innerText = 'Repescagem';
                    newRepesca4.className = 'fileira4-player';
                    fileira4.appendChild(newRepesca4);
                }
            }
            if(players5.length<qtdTimes){
                let dif = players5.length - qtdTimes;
                for(let i = 0; i < dif; i+=1){
                    let newRepesca5 = document.createElement('li');
                    newRepesca5.className = 'fileira5-player';
                    newRepesca5.innerText = 'Repescagem';
                    fileira5.appendChild(newRepesca5);
                }
            }
            players1 = document.getElementsByClassName('fileira1-player');
            players2 = document.getElementsByClassName('fileira2-player');
            players3 = document.getElementsByClassName('fileira3-player');
            players4 = document.getElementsByClassName('fileira4-player');
            players5 = document.getElementsByClassName('fileira5-player');
            let arrayStrings1 = criaArrayHTML(players1);
            let arrayStrings2 = criaArrayHTML(players2);
            let arrayStrings3 = criaArrayHTML(players3);
            let arrayStrings4 = criaArrayHTML(players4);
            let arrayStrings5 = criaArrayHTML(players5);
            arrayStrings1 = shuffleArray(arrayStrings1);  
            arrayStrings2 = shuffleArray(arrayStrings2);   
            arrayStrings3 = shuffleArray(arrayStrings3);
            arrayStrings4 = shuffleArray(arrayStrings4);         
            arrayStrings5 = shuffleArray(arrayStrings5); 
            for (let i = 0; i < qtdTimes; i+=1){
                const newTime = document.createElement('ol');
                const firstPlayer = document.createElement('li');
                const secondPlayer = document.createElement('li');
                const thirdPlayer = document.createElement('li');
                const fourthPlayer = document.createElement('li');
                const fivethPlayer = document.createElement('li');
                firstPlayer.innerText = arrayStrings1[i];
                secondPlayer.innerText = arrayStrings2[i];
                thirdPlayer.innerText = arrayStrings3[i];
                fourthPlayer.innerText = arrayStrings4[i];
                fivethPlayer.innerText = arrayStrings5[i];
                newTime.appendChild(firstPlayer);
                newTime.appendChild(secondPlayer);
                newTime.appendChild(thirdPlayer);
                newTime.appendChild(fourthPlayer);
                newTime.appendChild(fivethPlayer);  
                divTimes.appendChild(newTime);              
            }
            
        }
    }
    else{
        window.alert('Antes de sortear defina as fileiras de todos os players!!')
    }
}



const btnSorteio = document.getElementById('btnSorteio');
btnSorteio.addEventListener('click', sorteio);