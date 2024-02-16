let name = "alex"
 let code = 7777
 let money = 10000
 
 let user_name = prompt("как вас зовут?")
 if ( name.includes(user_name.toLowerCase())) {
   alert("Welcome")
   let user_code = +prompt("Номер счета")
   if (code === user_code) {
     alert("успешно")
   
     let cash_out = +prompt("сколько обналичить?")
     if (cash_out <= money) {
       alert("Успешно")
    

       let balance = money - cash_out

       if (balance <= 10000) {
          alert( `Вы успешно сняли ' ${cash_out}.` )
          alert(`Остаток на счете:'${balance}`) }
    }


   }else{alert("Пользователь не найден, досвидудули")}


 } else {
   alert("Пользователь не найден, досвидудули")
 }
 
  
 
 
 
 

