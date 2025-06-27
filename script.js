

function calculateLove() {
   const name1 = document.getElementById("name1").value;
   const name2 = document.getElementById("name2").value; 
   

   if (name1 && name2) {
    const hash = (name1 + name2).toLowerCase().split('').reduce((acc, char)=> acc + char.charCodeAt(0), 0);
    const lovePorcentage = hash % 101; 
    
    document.getElementById("result").innerHTML = `Su compatibilidad es de un ${lovePorcentage}%`;

    if (lovePorcentage >= 50) {
        
        document.getElementById("result2").textContent = `Luchen por su amor`;
    }else{
        
        document.getElementById("result2").textContent = `No hacen buena pareja`;
    }
   }else{
   
    document.getElementById("result").textContent = `Por favor ingresa bien los nombres`;

   }
}
