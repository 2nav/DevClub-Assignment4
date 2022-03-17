console.log("Loaded script.js");

let request = new XMLHttpRequest();
request.open("GET", "https://api.covid19api.com/summary", false);
request.send();

let parsedResponse = JSON.parse(request.responseText)


  let vats = new XMLHttpRequest();
vats.open("GET", "https://api.covid19api.com/dayone/country/india", false);
vats.send();

let parsedvats = JSON.parse(vats.responseText)

function Covid5(parsedResponse){
    function genlabel()
    {
        let leng = parsedResponse.length;
        let datarr = []
        for (let i = leng - 30; i < leng; i++) {
            datarr.push(parsedResponse[i].Date.substring(0,10))
        }
        return datarr
    }
    const labels = genlabel();

    function gendata(){
        let leng = parsedResponse.length;
        let datarr = []
        for (let i = leng - 30; i < leng; i++) {
            datarr.push(parsedResponse[i].Confirmed - parsedResponse[i - 1].Confirmed)
        }
        return datarr;
    }
    
    const data = {
      labels: labels,
      datasets: [{
        label: 'Daily COVID cases in India',
        backgroundColor: 'rgb(254, 139, 139)',
        borderColor: 'rgb(255, 99, 132)',
        data: gendata(),
      }]
    };
  
    const config = {
      type: 'bar',
      data: data,
      options: {
          plugins: {
              legend: {
                  display: true,
                  labels: {
                      color: 'rgb(255, 99, 132)'
                  }
              }
          }
      }
    };
    const myChart = new Chart(
        document.getElementById('ch5'),
      config
    );
  }

  
  
Covid5(parsedvats);