let option = prompt('Choose an Option');
//let option = ['Q', 'W', 'D', 'B'];
let withdraw = [ ];
let deposit = [ ];
let user = [option];



function userOption(option){
    
    switch(option){
        case 'Q':{
            return user;
            break;
        }
        case 'W':{
            return prompt('Withdraw Amount');
            break;
            
            }
        case 'D':{
            return prompt('Deposit Amount');
            break;
        }
        case 'B':{
            return alert('Balance $12.34');
            
        }
        }
    }
    
    alert(option);
    console.log(userOption(option));
    
   
    /*function userOption(user){
        let option = prompt('Choose an Option');
        if ('Q'){
            return 'Quit Program'
        }
        else if (option =='W'){
            return withdraw;
         
        }
        else if(option == 'D'){
            return deposit;
            
        } else if (option == 'B') {
            return balance;
            
        } else{
            return 'user';
        }
    }
alert(option);
*/
