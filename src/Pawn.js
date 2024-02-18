



class Pawn{
    constructor(player){


        this.first_move = true; 
        this.player = player
        this.color = player == "Player1" ? "white" : "black"

    }




    getMoves(board,current_x,current_y){
        let moves = []

        let condition = this.first_move ? 2 : 1;
        condition = this.color == 'white' ? -Math.abs(condition) : condition;

        console.log(condition);

        if((current_y+condition) > 7 || (current_y + condition) < 0){
            console.log('out of board')
            return [];
        }

        else{

            if(condition > 0){
                for(var i = current_y; i < ((current_y+condition)+1);i++){
                    if(board[i][current_x] == undefined){
                        moves.push([i,current_x]);
                    }
                }
            }else{
                for(var i = current_y; i > ((current_y+condition)-1);i--){
                    if(board[i][current_x] == undefined){
                        moves.push([i,current_x]);

                    }
                }
            }
            
            return moves;
        }
    }
}

