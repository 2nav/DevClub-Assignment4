console.log("Loaded script.js");

let request = new XMLHttpRequest();
request.open("GET", "https://api.covid19api.com/summary", false);
request.send();

let parsedResponse = JSON.parse(request.responseText)
function Covid1(parsedResponse){
  const labels = [
    'Cases',
  ];

  const data = {
    labels: labels,
    datasets: [{
      label: 'New COVID cases in the World today',
      backgroundColor: 'rgb(154, 39, 231)',
      borderColor: 'rgb(255, 99, 132)',
      data: [parsedResponse.Global.NewConfirmed],
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
    document.getElementById('ch1'),
    config
  );
}


Covid1(parsedResponse);

function Covid2(parsedResponse){
    const labels = [
      'Cases',
    ];
  
    const data = {
      labels: labels,
      datasets: [{
        label: 'Total COVID cases in the World',
        backgroundColor: 'rgb(254, 139, 139)',
        borderColor: 'rgb(255, 99, 132)',
        data: [parsedResponse.Global.TotalConfirmed],
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
        document.getElementById('ch2'),
      config
    );
  }
  
  
  Covid2(parsedResponse);

  function Covid3(parsedResponse){
    const labels = [
      'Cases',
    ];
  
    const data = {
      labels: labels,
      datasets: [{
        label: 'New COVID cases in India today',
        backgroundColor: 'rgb(154, 39, 231)',
        borderColor: 'rgb(255, 99, 132)',
        color: 'rgb(178,132,190)',
        data: [parsedResponse.Countries[77].NewConfirmed],
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
        document.getElementById('ch3'),
      config
    );
  }
  
  
  Covid3(parsedResponse);

  function Covid4(parsedResponse){
    const labels = [
      'Cases',
    ];
  
    const data = {
      labels: labels,
      datasets: [{
        label: 'Total COVID cases in India',
        backgroundColor: 'rgb(254, 139, 139)',
        borderColor: 'rgb(255, 99, 132)',
        data: [parsedResponse.Countries[77].TotalConfirmed],
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
        document.getElementById('ch4'),
      config
    );
  }
  
  
  Covid4(parsedResponse);

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