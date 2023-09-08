function convert() {
    var num = parseInt(document.getElementById("numInput").value);
    const ones = ['', 'One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine'];
    const tens = ['', '', 'Twenty', 'Thirty', 'Forty', 'Fifty', 'Sixty', 'Seventy', 'Eighty', 'Ninety'];
    const teens = ['Ten', 'Eleven', 'Twelve', 'Thirteen', 'Fourteen', 'Fifteen', 'Sixteen', 'Seventeen', 'Eighteen', 'Nineteen'];
      
    if (num > -10000 && num < 10000){
      if (num === 0) {
          document.getElementById("output").innerHTML = "Zero";
          return;
      }

      var negative = false;

      if (num < 0) {
          negative = true;
          num = Math.abs(num);
      }

      var words = '';

      if (Math.floor(num / 1000)) {
          words += ones[Math.floor(num / 1000)] + ' Thousand ';
          num %= 1000;
      }

      if (Math.floor(num / 100)) {
          words += ones[Math.floor(num / 100)] + ' Hundred ';
          num %= 100;
      }

      if (num >= 10 && num < 20) {
          words += teens[num - 10];
          document.getElementById("output").innerHTML = negative ? "Minus ".fontcolor('red') + words : words;
          return;
      }

      if (Math.floor(num / 10)) {
          words += tens[Math.floor(num / 10)] + ' ';
          num %= 10;
      }

      if (num) {
          words += ones[num];
      }
      
      document.getElementById("output").innerHTML = negative ? "Minus ".fontcolor('red') + words : words;

    }else {
      document.getElementById("inword").style.display="none";
      document.getElementById("output").innerHTML = "Please enter number between -10,000 to 10,000";
    }
  }