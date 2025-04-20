// This function calculates quote based on square footage and type
function calculateQuote() {
  // Get square footage and service type
  const footage = document.getElementById('footage').value;
  const type = document.getElementById('type').value;

  let rate = 0.15; // Default rate for residential
  if (type === 'commercial') {
    rate = 0.20;
  }

  // Calculate price
  const quote = footage * rate;

  // Show result
  document.getElementById('result').innerText = `Estimated Price: $${quote.toFixed(2)}`;
}
