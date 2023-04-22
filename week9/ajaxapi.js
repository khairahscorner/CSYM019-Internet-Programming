$(document).ready(function () {
    $("#movies").load("movies.html")
    $("#movies").change(function () {
        let movieName = $(this).val();
        let url = "https://api.themoviedb.org/3/movie/" + movieName + "?api_key=ae719b1be4abee8d77ab673fd9f5dca8"

        $.ajax({
            url,
            type: "GET",
            dataType: "json",
        })
            .done(function (response) {
                $.each(response, function () {
                    $('#movieinfo').html("")
                    $('#movieinfo').append(response.overview)
                    if ($('#movieinfo').attr("hidden")) {
                        $('#movieinfo').show()
                    }

                    $('#movieinfo').css({
                        "border-color": "#C10EFF",
                        "border-weight": "1px",
                        "border-style": "solid",
                        "margin-top": "1rem",
                        "width": "50%",
                        "padding": "0.5rem"
                    })
                })

                // $('#movieinfo').html("")
                // $('#movieinfo').append(response.overview)
                // if($('#movieinfo').attr("hidden")) {
                //     $('#movieinfo').show()
                // }

                // $('#movieinfo').css({
                //     "border-color": "#C10EFF",
                //     "border-weight": "1px",
                //     "border-style": "solid",
                //     "margin-top": "1rem",
                //     "width": "50%",
                //     "padding": "0.5rem"
                // })
            })
            .fail(function (xhr, error) {
                $('#info').html("").append(error.toUpperCase() + " - Status: " + xhr.status)
            });

    })
})