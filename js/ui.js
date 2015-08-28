var player = "X";

function addTable() {
    $("#create").hide(); 

    var myTableDiv = document.getElementById("myDynamicTable");

    //Define table 
    var table = document.createElement('TABLE');
    table.border='1';
      
    var tableBody = document.createElement('TBODY');
    table.appendChild(tableBody);
    //print table and set butten x,y cordinets.  
    for (var i=0; i<15; i++) {
        var tr = document.createElement('TR');
        tableBody.appendChild(tr);
     
        for (var j=0; j<15; j++){
            var td = document.createElement('TD');
            var btn = document.createElement('BUTTON');
            var btnID = String(i + "," + j);
            btn.width = td.width = '20';
            td.appendChild(btn);
            btn.setAttribute('id',btnID);
            //btn.setAttribute('value',(i + "," + j));
            btn.setAttribute('onClick',"btnClicked("+btnID+")");
            tr.appendChild(td);
        }
    }
    //append table to div
    myTableDiv.appendChild(table);
    initiate_board();
}

//set velue of x or o on click
function btnClicked(x,y){
    //Look for player's turn and set x or o acordingly.
    var btnID = String(x+","+y);
    var btnSelect = document.getElementById(btnID);
    btnSelect.disabled = true;
    btnSelect.innerHTML = player;
    btnSelect.style.color = "black";
    if (player === "X") {
        btnSelect.style.backgroundColor = "red";
    }
    else{
        btnSelect.style.backgroundColor = "blue";
    }
    
    var position = [x,y];
    game_logic(position, player);
    swap_player(player);

    print_array();
}

function swap_player(player) {
    if (player === "X") {
        this.player = "O";
        console.log("here");
    }
    else{
        this.player = "X";
    }
}
      
function load() {
    addTable();
	console.log("Page load finished");

}