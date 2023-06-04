class node{
    constructor(x,y,distance){
        this.x = x;
        this.y = y;
        this.distance = distance;
    }


    
}

function movesFinder(posx,posy){
    let x = [-1,-2,-2,-1,1,2,2,1];
    let y = [-2,-1,1,2,2,1,-1,-2];
    let m = [];
    for(let i=0;i<x.length;i++){
        let a,b;
        a = posx + x[i];
        b = posy + y[i];
        if(a>=0 && b>=0 && a<8 && b<8 ){
            m.push([a,b]);
        }
    }
    

    return m;
}



function knightMoves(startX,startY,targetX,targetY){
    let queue = [];
    let visited = [];
    let root = new node(startX,startY,0);
    queue.push(root);


    while(queue.length>0){
        let currentNode = queue.shift();
        let currentX = currentNode.x;
        let currentY = currentNode.y;
        let currentDistance = currentNode.distance;

        if(currentX===targetX && currentY===targetY) return currentDistance;
        visited.push([currentX,currentY]);

        let moves = movesFinder(currentX,currentY);
        for(let i = 0;i<moves.length;i++){
            let v = false;
            for(let j = 0;j<visited.length;j++){
                if(moves[i][0] === visited[j][0]  && moves[i][1] === visited[j][1]){
                    v = true;
                }
            }

            if(v===false){
                let temp = new node(moves[i][0],moves[i][1],currentDistance+1);
                queue.push(temp);
            }
        }


    }
}


console.log(movesFinder(3,3));
console.log(knightMoves(3,3,4,3));


