// Doc ready function
$(document).ready(function() {

    // Declare Global Variables
    var thirtyOne = ['Jan', 'Mar', 'May', 'Jul', 'Aug', 'Oct', 'Dec']
    var thirty = ['Apr', 'Jun', 'Sep', 'Nov']
    var feb = ['Feb']


                    // Change Date Function
                    
    // Year
    var yThou = 0;
    $('.yearThouBox button').click(function(){
        yThou = $(this).text();
        changeDate();
    });

    var yHund = 0;
    $('.yearHunBox button').click(function(){
        yHund = $(this).text();
        changeDate();
    });

    var yTens = 0;
    $('.yearTenBox button').click(function(){
        yTens = $(this).text();
        changeDate();
    });

    var yOnes = 0;
    $('.yearOneBox button').click(function(){
        yOnes = $(this).text();
        changeDate();
    });

    // Month
    var mVal = 'Null';
    $('.monthBox button').click(function(){
        mVal = $(this).text();
        changeDate();
    });

    // Day
    var dTens = 0;
    $('.dayTenBox button').click(function(){
        dTens = $(this).text();
        changeDate();
    });

    var dOnes = 0;
    $('.dayOneBox button').click(function(){
        dOnes = $(this).text();
        changeDate();
    });


                    // Assign Calender values
    function changeDate(){
        $('#calMonth').text(mVal);
        $('#calDay').text(dTens + dOnes);
        $('#calYear').text(yThou + yHund + yTens + yOnes)
    };


        // Change Button Colors 
    $('li button').click(function(){
        $(this).removeClass('btn-secondary');
        $(this).addClass('btn-primary');
        $(this).closest('ul').find('button').not(this).addClass('btn-secondary').removeClass('btn-primary');
        check31(mVal)
    });


                // Change Day Availability
    function check31(mVal) {
        $('#day30').prop('disabled', false);
        $('.day31').prop('disabled', false);
        $('.day32').prop('disabled', false);
        switch(true){
            case (thirtyOne.indexOf(mVal) !== -1):
                console.log('31 days')


                // Disable 32+
                if ($('#day30').hasClass('btn-primary')) {
                    $('.day32').prop('disabled', true);
                } else {
                    $('.day32').prop('disabled', false);
                };
                break;  


                // Disable 31+
            case (thirty.indexOf(mVal) !== -1):
                console.log('30 days')
                if ($('#day30').hasClass('btn-primary')) {
                    $('.day31').prop('disabled', true);
                } else {
                    $('.day31').prop('disabled', false);
                };
                break;


                // February Exceptions
            case (feb.indexOf(mVal) !== -1):
                console.log('28 or 29 days')
                switch(true){

                    case (parseFloat(yThou + yHund + yTens + yOnes) % 4 === 0 ):
                        $('#day30').prop('disabled',true)
                        break;
                    case (!(parseFloat(yThou + yHund + yTens + yOnes) % 4 === 0 )):
                        $('#day30').prop('disabled',true)
                        if ($('#day20').hasClass('btn-primary')) {
                            $('.day29').prop('disabled', true)
                        };
                        break;
                };
                break;
            default:
                console.log('I am Broken')
        }; 
    };
  });