function compute()
{ 
  var principal = document.getElementById("principal").value;
  var rate = document.getElementById("rate").value;
  var years = document.getElementById("years").value;

  var year = new Date().getFullYear()+parseInt(years);
  var amount = principal*Math.pow((1.0 + (rate /100.0)), years);
  var result_html = "<p>Invalid Input</p>";

  if (principal != "")
  {
    var result_html = "<p>If you deposit <b>" + principal + "</b>,</p><p>at an interest rate of <b>"+ rate + " %</b>.</p><p>You will receive an amount of <b>" + amount.toFixed(2) + ",</b></p><p>in the year <b>" + year + "</b></p>"
  }
  document.getElementById("result").innerHTML = result_html;
}
        
function updateRate() 
{
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval;
}
