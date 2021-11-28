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
         const tableTitle = document.querySelectorAll('#tableTitle td')
         for (i = 0; i < tableTitle.length; i += 1){
         tableTitle[i].style.color='black';
         }
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
const btnCadastro = document.getElementById('cadastro');
btnCadastro.addEventListener('click', cadastroPlayer);