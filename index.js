document.addEventListener("DOMContentLoaded", function () {


    document.getElementById('calculateBtn').addEventListener('click', calculatePresentValue);
  });

  

  
  function calculatePresentValue() {
    // Get input values
    var futureValue = parseFloat(document.getElementById('futureValue').value);
    var interestRate = parseFloat(document.getElementById('interestRate').value) / 100;
    var years = parseInt(document.getElementById('years').value);
  
    // Calculate present value
    if(futureValue && interestRate && years) {
        var presentValue = futureValue / Math.pow(1 + interestRate, years);
        
    // Display result
    document.getElementById('presentValue').innerText = 'Present Value: N' + presentValue.toFixed(2);
    document.getElementById('presentValue').style.color = 'white';
    }else {
        
    // Display result
    document.getElementById('presentValue').innerText = 'Please fill out all fields'
    document.getElementById('presentValue').style.color = 'red';
    }
        

  
  }
  