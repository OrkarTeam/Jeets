// Function to fetch data from the API and update the HTML elements
async function fetchData(tokenAddress) {
    try {
      const response = await fetch(apiUrl(tokenAddress));
      const data = await response.json();
  
      // ... (existing code) ...
  
      // Update the chart URL with the token address
      const chartUrl = `https://www.dextools.io/widget-chart/en/solana/pe-light/${tokenAddress}?theme=dark&chartType=Candle&chart&drawingToolbars=false&chartInUsd=true`;
      document.getElementById('dextools-chart').src = chartUrl;
  
      // ... (remaining code) ...
  
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }