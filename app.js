(
  document.onreadystatechange = () => {
    if (document.readyState === 'complete') {
      const model = {
        currentPlayer: 'X',
        Xscore:0,
        Oscore:0,
      };
      const view = {
        init() {
          // initialization
          
          const winningConditions = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6]
        ];
          const boxes = document.getElementsByClassName('col');
          
          for (let index = 0; index < boxes.length; index++) {
            const box = boxes[index];
            
        
            box.onclick = () => { 
              box.innerText = model.currentPlayer;
              controller.handleBoxClick();
              boxes[index]=box.innerText;
              
              for (let i = 0; i <= 7; i++) {
                const win = winningConditions[i];
                let a = boxes[win[0]].innerText;
                let b = boxes[win[1]].innerText;
                let c = boxes[win[2]].innerText;
    
                if (((a == 'X' && b == 'X') && (b== 'X' && c == 'X')) ||((a == 'O' && b == 'O')&&(b=='O' && c=='O') )) {
                    
                    document.getElementById("result").innerHTML=("Result: "+ a + " win");
                    if(a == 'X'){
                      model.Xscore=model.Xscore+1;
                    }
                    if(a == 'O')
                    {
                      model.Oscore=model.Oscore+1;
                    }
                    document.getElementById("Xscore").innerHTML=(model.Xscore);
                    document.getElementById("Oscore").innerHTML=(model.Oscore);
                    boxes[0].innerText='';
                    boxes[1].innerText='';
                    boxes[2].innerText='';
                    boxes[3].innerText='';
                    boxes[4].innerText='';
                    boxes[5].innerText='';
                    boxes[6].innerText='';
                    boxes[7].innerText='';
                    boxes[8].innerText='';
                    break;
                    
                }
              }
              
            }
            
            
            
          }
          
          // TODO: @suma create a score box and connect it here
          view.render();
        },
    
        
      };
      const controller = {

        handleBoxClick() {
          
          model.currentPlayer = model.currentPlayer === 'X' ? 'O' : 'X';
          //alert("entered");
          
        },
        init() {
          //alert("entered1")
          view.init();
          //alert("entered2")
          
          
          
        }
      };
      controller.init();
    }
  }
)();