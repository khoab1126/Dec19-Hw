const finalAmount = (event) => {
  let id = event.target.getAttribute("id");
  let usd = $('#USD').val();
  if (isNaN(usd) !== true) {
    $.get("https://api.fixer.io/latest?base=USD", (response) => {
    }).done( (response) => {
      for (let key in response.rates) {
        if (key === id) {
          let changedAmount = Math.round((usd * response.rates[key] * 100) / 100);
          $('#output_amount').text(changedAmount);
          $('#output_currency').text(id);
          $('#USD').val('');
        }
      }
    })
  } else {
      alert("Please put number only");
  }
}
$('#EUR').click((event) => {
  finalAmount(event);
})

$('#GBP').click((event) => {
  finalAmount(event);
})

$('#CNY').click((event) => {
  finalAmount(event);
})

$('#JPY').click((event) => {
  finalAmount(event);
})