  //function addValue()
  //          {
  //              var number1, number2, result;

  //             number1=Number(document.getElementById("num1").value)
  //             number2=Number(document.getElementById("num2").value)

  //              result=number1+number2;
  //            }

              function opChoice() {
              var n1 = parseFloat(document.getElementById('num1').value);
              var n2 = parseFloat(document.getElementById('num2').value);
              var operand = document.getElementById('operators').value;
                
                if(operand === '+')
                {
                    document.getElementById('result').value = num1+num2;
                }
                
                if(operand === '-')
                {
                    document.getElementById('result').value = num1-num2;
                }
                
                if(operand === '/')
                {
                    document.getElementById('result').value = num1/num2;
                }
                
                if(operand === '*')
                {
                    document.getElementById('result').value = num1*num2;
                }

              }

              opChoice();