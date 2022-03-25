  function addValue()
            {
                var number1, number2, result;

                number1=Number(document.getElementById("num1").value)
                number2=Number(document.getElementById("num2").value)

                result=number1+number2;

                document.getElementById("result").value=result
                
            }