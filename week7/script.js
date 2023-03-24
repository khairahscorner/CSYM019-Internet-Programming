function myLoadFunction() {
  const ctx = document.getElementById("myChart");
  const ctx1 = document.getElementById("chart1");

  bar_data = {
    label: "# of Votes",
    data: [12, 19, 3, 5, 2, 3],
    borderWidth: 1,
    borderColor: "#EEEEEE",
    backgroundColor: "#333333",
  };

  let ch1 = new Chart(ctx1, {
    type: "pie",
    data: {
      labels: ["Red", "Blue", "Yellow"],
      datasets: [
        {
          label: "My First Dataset",
          data: [300, 50, 100],
          backgroundColor: [
            "rgb(255, 99, 132)",
            "rgb(54, 162, 235)",
            "rgb(255, 205, 86)",
          ],
          hoverOffset: 4,
        },
      ],
    },
    options: {
      radius: 100,
      scales: {
        y: {
          beginAtZero: true,
        },
      },
    },
  });

  config = {
    type: "bar",
    data: {
      labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
      datasets: [bar_data],
    },
    options: {
      scales: {
        y: {
          beginAtZero: true,
        },
      },
    },
  };

  const myLineChart = new Chart(ctx, config);

  var element = document.getElementById("btn");
  element.addEventListener("click", () => myClickFunction(myLineChart));
}

const plotGraph = (p) => {
  const ctx = document.getElementById("myChart");

  p.destroy();
  p = new Chart(ctx, {
    type: "bar",
    data: {
      labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
      datasets: [bar_data],
    },
    options: {
      scales: {
        y: {
          beginAtZero: true,
        },
      },
    },
  });
  p.show();
};

function myClickFunction(chartObj) {
  bar_data.data = [5, 10, 15, 20, 25, 30];
  plotGraph(chartObj);
}

document.addEventListener("DOMContentLoaded", myLoadFunction);
