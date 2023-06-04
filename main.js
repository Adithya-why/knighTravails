console.log("hi");

const knight = function(pos = [3,3]){
    let moves = movesf(pos);
    return{pos,moves};
}


const movesf = function(pos){
    let x = [-1,-2,-2,-1,1,2,2,1];
    let y = [-2,-1,1,2,2,1,-1,-2];
    let m = [];
    for(let i=0;i<x.length;i++){
        let a,b;
        a = pos[0] + x[i];
        b = pos[1] + y[i];
        if(a>0 && b>0 && a<8 && b<8 ){
            m.push([a,b]);
        }
        



    }
    

    return m;
}


const gameBoard = function(){
    let k = knight();
    console.log(k);

   
}


gameBoard();