// ajaxReq = () => {
//   xhr = new XMLHttpRequest();

//   if (xhr) {
//     xhr.open("GET", "counties.json", true);
//     xhr.send();
//     xhr.onreadystatechange = () => {
//       if (xhr.readyState == 4 && xhr.status == 200) {
//         let data = JSON.parse(xhr.responseText);
//         let txt = "";
//         console.log(data);
//         for (let i = 0; i < data.counties.length; i++) {
//           txt += `<tr><td>${data.counties[i].countyID} - ${data.counties[i].name}</td></tr>`;
//         }
//         document.getElementById("countrylist").innerHTML = txt;
//       } else {
//         document.getElementById("updatemessage").innerHTML =
//           "Could not load request";
//       }
//     };
//   }
// };

// window.onload = ajaxReq;

// IN JQUERY

$.ajax({
  url: "counties.json",
  type: "GET",
  dataType: "json",
})
  .done(function (response) {
    // Iterate through the response using the $.each() method
    let txt = "";
    $.each(response.counties, function (index, element) {
      txt = `<tr><td>Index: ${index} -- ${element.countyID} - ${element.name}</td></tr>`;
      $("#countrylist").append(txt);
    });
    $("#updatemessage").append("Total: " + response.counties.length);
  })
  .fail(function (xhr) {
    $("#updatemessage").append("Could not load request");

    console.log(xhr.status);
  });
