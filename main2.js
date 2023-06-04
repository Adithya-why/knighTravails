function movesFinder(pos){
    let x = [-1,-2,-2,-1,1,2,2,1];
    let y = [-2,-1,1,2,2,1,-1,-2];
    let m = [];
    for(let i=0;i<x.length;i++){
        let a,b;
        a = pos[0] + x[i];
        b = pos[1] + y[i];
        if(a>=0 && b>=0 && a<8 && b<8 ){
            m.push([a,b]);
        }
    }
    

    return m;
}


function game(start,end){

    let cq = [];
    let visited = [];
    let path = {};

   /* const knightMoves = function(s,e){
        let vi = false;
        for(let i = 0;i<visited.length;i++){
            if(s[0]==visited[i][0] && s[1] == visited[i][1]){
                console.log("VISISTED ALREADY");
                return;
            }
        }
        if(vi == false){
        cq.push(s);
        }
        if(cq[0][0]==e[0] && cq[0][1]==e[1]){
            console.log("Found Path");
            return;
        }

        else{
            let m = movesFinder(cq[0]);
            for(let i = 0;i<m.length;i++){
                let v = false;
                for(let j= 0;j<visited.length;j++){
                    if(m[i][0] == visited[j][0] || m[i][1]==visited[j][1]){
                        v = true;
                        break;
                    }

                }

                if(v==false){
                cq.push(m[i]);
                }
            }
            visited.push(cq[0]);
            cq.shift();
            knightMoves(cq[0],end);
        }
    }*/

    const getkey = function(pos){
        return pos[0]+"-"+pos[1];
    }


    const knightMoves = function(s,e){
        cq.push(s);
        visited.push(s);
        path[getkey(s)] = null;

        if(s[0]==e[0] && s[0]==e[1]){
            console.log("Found Path");
            return;
        }

        while(cq.length>0){
            let current = cq.shift();
            if(current[0]==e[0] && current[1]==e[1]){
                console.log("FOUUUUUUUUND")
                return;
            }
            let m = movesFinder(current);
            for(let i = 0;i<m.length;i++){
                let v = false;
                for(let j= 0;j<visited.length;j++){
                    if(m[i][0] == visited[j][0] || m[i][1]==visited[j][1]){
                        v = true;
                        break;
                    }

                }

                if(v==false){
                cq.push(m[i]);
                visited.push(m[i]);
                path[getkey(s)]= current;
                }
            }
        }


    }



    const getPath = function () {
        let current = end;
        let pathArray = [current];
        while (path[current]) {
          current = path[current];
          pathArray.unshift(current);
        }
        return pathArray;
    };


    knightMoves(start,end);
    console.log(visited);
    console.log(cq);
    console.log(getPath());
}


game([0,0],[3,3]);
console.log(movesFinder([0,0]));