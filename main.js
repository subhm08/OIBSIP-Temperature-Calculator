const celciusinput=document.getElementById("celcius");
const fahrenhitinput=document.getElementById("fahrenhit");
const kelvininput=document.getElementById("kelvin");

const inputs= document.getElementsByClassName("input");

for(let i=0; i<inputs.length;i++){
    let input=inputs[i];
    input.addEventListener("input",function(e){
        let value=parseFloat(e.target.value);
        switch (e.target.name) {
            case "celcius":
                fahrenhitinput.value=(value*1.8)+32;
                kelvininput.value=value+273.15;
                break;
            case "fahrenhit":
                celciusinput.value=(value-32)/1.8;
                kelvininput.value=(value-32)+273.15;
                break;
            case "kelvin":
                celciusinput.value=value-273.15;
                fahrenhitinput.value=((value-273.15)*1.8)+32;
                break;
        }
    })
}
