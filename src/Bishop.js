



class Bishop{
    constructor(player){


        this.first_move = true; 
        this.player = player
        this.color = player == "Player1" ? "white" : "black"

    }




    getMoves(board,current_x,current_y){


        var moves = [];



        let condition = this.color == 'black' ? -1 : 1;
        
        let count = 0;
        while(true){

            count +=1;
            
            
            if(current_y-count < 0  || current_x + count > 7){
                break;
            }
            if(board[current_y - count][current_x+count] == undefined){ //moving up the baord to the right.

                moves.push([current_y-count,current_x+count])
            }else{break;}
        }


        count = 0;
        
        while(true){
            count +=1;
            if(current_y-count < 0  || current_x - count < 0){
                break;
            }

            if(board[current_y-count][current_x-count] == undefined){
                moves.push([current_y-count,current_x-count])
            }else{break;}
        }


        return moves;

        
    }
}

