const kelvin = document.querySelector('#inp_kelvin');
const result_val = document.querySelector('#result_val');
const result_unit = document.querySelector('#result_Val_unit');
const option = document.querySelectorAll(".options-input")
const op_cel = document.querySelector("#options-input-celsius")
const op_fah = document.querySelector("#options-input-fahrenheit")
const op_new = document.querySelector("#options-input-newton")

function selected() {

  const celsius = Math.round(kelvin.value - 273);
  const fahrenheit = celsius * (9/5);
  const newton = celsius * (33/100);
  const formula_field = document.querySelector('#formula_field');
  
    option.forEach((element) => {
        if(element.checked){
          console.log(element.value)
      
          switch (element.value) {

              // celsius selected
              case op_cel.value:
                result_val.textContent = celsius
                result_unit.textContent = "ºC"
                formula_field.textContent = 'Kelvin_Temperature - 273'
                break;
                
                // Fahrenheit selected
                case op_fah.value:
                  result_val.textContent = fahrenheit
                  result_unit.textContent = 'ºF'
                  formula_field.textContent = 'Celsius_Temperature x (9/5)'
                  break;
                  
                  // Newton selected
                  case op_new.value:
                    result_val.textContent = newton
                    result_unit.textContent = 'º N'
                    formula_field.textContent = 'Celsius_Temperature X (33/100)'
                    break;
        
        
              default:
                break;
            }
          }
          });
        
        }
        
const btntest = document.querySelector('#btn_convert').addEventListener('click', ()=>{selected()})

