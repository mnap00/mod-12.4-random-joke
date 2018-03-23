var url = 'http://api.icndb.com/jokes/random';

var $button = $('#get-joke').click(function () {
    getJoke();
});

var $paragraph = $('#joke');

function getJoke() {
    $.ajax({
        method: 'GET',
        url: url,
        success: function(res) {  // res -> response
            $paragraph.text(res.value.joke);
        }
    });
}

getJoke();
