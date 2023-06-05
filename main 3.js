class node{
    constructor(x,y,distance){
        this.x = x;
        this.y = y;
        this.distance = distance;
    }
//creates a node for a square in the board with x,y coordinates and distance from starting coordinates

    
}



//finds all the possible moves of a knight from starting location
function movesFinder(posx,posy){


    //all the x and y offsets in order
    let x = [-1,-2,-2,-1,1,2,2,1];
    let y = [-2,-1,1,2,2,1,-1,-2];
    let m = [];
    for(let i=0;i<x.length;i++){
        let a,b;

        //new position are computed from current position
        a = posx + x[i];
        b = posy + y[i];


        //checks if the new positions are out of bounds of a 8*8 board
        if(a>=0 && b>=0 && a<8 && b<8 ){
            //if correct, then pushed into an array
            m.push([a,b]);
        }
    }
    
    //returns an array of all possible moves
    return m;
}


//function BFS to find shortest path
function knightMoves(startX,startY,targetX,targetY){

    //queue for BFS
    let queue = [];
    let visited = [];
    let vnodes = [];

    //a node for starting location is created and pushed to queue
    let root = new node(startX,startY,0);
    queue.push(root);


    while(queue.length>0){

        //the first node is removed and is checked if its the target node
        let currentNode = queue.shift();
        let currentX = currentNode.x;
        let currentY = currentNode.y;
        let currentDistance = currentNode.distance;

        if(currentX===targetX && currentY===targetY){ 
            //if it is the target node,then it returns the currentDistance and an array of visited nodes
            vnodes.push(currentNode);
            console.log(currentDistance);
            return currentDistance,vnodes;
        }

        //if not,they are pushed into visited
        visited.push([currentX,currentY]);
        vnodes.push(currentNode);



        //all the possible moves from given node are computed
        let moves = movesFinder(currentX,currentY);
        for(let i = 0;i<moves.length;i++){
            let v = false;
            for(let j = 0;j<visited.length;j++){
                if(moves[i][0] === visited[j][0]  && moves[i][1] === visited[j][1]){
                    v = true;
                }
            }

            if(v===false){
                //if they are not already visited,they are pushed to queue
                let temp = new node(moves[i][0],moves[i][1],currentDistance+1);
                queue.push(temp);
            }
        }




    }

    //continues until quque empty or target node is found

    console.log("HHH");
}

//function to seperate visisted nodes based on distance
const pather = function(vnode){
    const separatedArrays = {};
    let arrayOfObjects = vnode;

// Iterate over each object in the array
for (const obj of arrayOfObjects) {
  const distance = obj.distance;

  // Check if the distance property already exists as a key in the separatedArrays object
  if (separatedArrays.hasOwnProperty(distance)) {
    // If the key exists, push the current object into the corresponding array
    separatedArrays[distance].push(obj);
  } else {
    // If the key does not exist, create a new array with the current object
    separatedArrays[distance] = [obj];
  }
}

return separatedArrays;
}

//function to find the path drom sepetatedArrays
const pathFinder = function(vnodes){
    console.log(vnodes);
    let path = [];
    let keys = Object.keys(vnodes);
    console.log(keys);
    for(let i =keys.length-1;i>=0;i--){
        let objAr = vnodes[keys[i]];
        if(i===keys.length-1){
        let obj = objAr[objAr.length-1];
        path.push(obj);
        }

        else{
            let prev = path[path.length-1];
            let moves = movesFinder(prev.x,prev.y);
            loop2:  
                for(let j=0;j<objAr.length;j++){
                    for(let k =0;k<moves.length;k++){
                        if(objAr[j].x === moves[k][0] && objAr[j].y === moves[k][1]){
                            path.push(objAr[j]);
                            break loop2;
                    }
                }
            }
        }
        
    }
    
    console.log(`It requires ${path.length-1} moves`);
    console.log(path);
}
 


let x = knightMoves(3,3,4,3);
let y = pather(x);
pathFinder(y);

