
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
    let vnodes = [];
    let root = new node(startX,startY,0);
    queue.push(root);


    while(queue.length>0){
        let currentNode = queue.shift();
        let currentX = currentNode.x;
        let currentY = currentNode.y;
        let currentDistance = currentNode.distance;

        if(currentX===targetX && currentY===targetY){ 
            vnodes.push(currentNode);
            console.log(currentDistance);
            return currentDistance,vnodes;
        }
        visited.push([currentX,currentY]);
        vnodes.push(currentNode);

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

    console.log("HHH");
}


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


const pathFinder = function(vnodes) {
    const keys = Object.keys(vnodes);
    
    // Find the maximum distance value among the keys
    let maxDistance = Math.max(...keys);
    
    // Start building the shortest path from the target node
    let path = [vnodes[maxDistance][0]];
    
    // Traverse the keys in reverse order to find the shortest path
    for (let i = keys.length - 2; i >= 0; i--) {
      const currentKey = keys[i];
      const currentNode = vnodes[currentKey].find(node => {
        // Find the node that is adjacent to the previously added node in the path
        return node.distance === parseInt(maxDistance) - 1 &&
               Math.abs(node.x - path[path.length - 1].x) === 2 &&
               Math.abs(node.y - path[path.length - 1].y) === 1;
      });
      
      // Add the current node to the path
      path.push(currentNode);
      maxDistance--;
    }
    
    // Reverse the path to get the correct order
    path.reverse();
    
    console.log(path);
  };



let x = knightMoves(0,0,3,3);
let y = pather(x);
pathFinder(y);



















