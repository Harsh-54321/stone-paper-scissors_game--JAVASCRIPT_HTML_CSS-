const options = document.querySelectorAll(".option-box");
let label = document.querySelector(".status");
let user_text = document.querySelector(".user-option");
let computer_text = document.querySelector(".computer-option");
let user_count = document.querySelector(".user_count");
let computer_count = document.querySelector(".computer_count");

let computer_counter = 0;
let user_counter = 0;

  options.forEach((ops) => {

        // console.log(ops);
        ops.addEventListener("click", () => {
                let com_choice = options[random_fun()].getAttribute("id");
                let user_choice = ops.getAttribute("id");
                
                console.log("value of user", user_choice);
                console.log("value of computer", com_choice);
                 
                computer_text.innerText = com_choice;
                user_text.innerText = user_choice;

                if(com_choice === user_choice) {
                    label.innerText = "MATCH DRAW";
                }
                else {
                    let user_winner = true;
                    if(user_choice === "papper" ) { 
                        user_winner = com_choice === "stone" ? true : false;
                        winner_print(user_winner);
                       
                    } else if(user_choice === "stone") {
                        user_winner = com_choice === "scissors" ? true : false;
                        winner_print(user_winner);
                    }
                    else if(user_choice === "scissors") {
                        user_winner = com_choice === "papper" ? true : false;
                        winner_print(user_winner);
                    }
                }
        })
  })

  const random_fun = () => {
      let random_num = Math.floor(Math.random() * 3);
      return random_num;
  } 

  const winner_print = (var_1) => { 
        console.log("hiiii");
        if (var_1) {
            label.innerText = "USER IS WINNER";
            user_counter++; // ✅ Update the counter
            user_count.innerText = user_counter;
        }
        else { 
            label.innerText = "Computer IS WINNER";
            computer_counter++; // ✅ Update the counter
            computer_count.innerText = computer_counter;
        } 
    }