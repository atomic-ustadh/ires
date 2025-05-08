// Load Google Charts
google.charts.load('current', {'packages': ['corechart']});

    // Set a callback to run when the API is loaded
    google.charts.setOnLoadCallback(drawChart);
  
    function drawChart() {
      // Create data
      var data = google.visualization.arrayToDataTable([
        ['Category', 'Orders'],
        ['Cosmetics', 12],
        ['Groceries', 45],
        ['Wears', 26],
        ['Electronics', 8]
      ]);
  
      // Chart options
      var options = {
        'title' : 'Orders by Category',
        'height' : '400',
        'pieSliceText' : 'percentage',
        legend: {
            position: 'left',
            textStyle: {
                fontSize: 15,
            }
        },
        titleTextStyle: {
            fontSize: 30,
          },
      };
  
      // Instantiate and draw chart
      var chart = new google.visualization.PieChart(document.getElementById('myChart'));
      chart.draw(data, options);
    }