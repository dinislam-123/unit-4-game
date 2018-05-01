
var ranNum =" ";
$(document).ready(function()
{
    function reload()
    {
        // generate random number in between 19 to 120..
        ranNum = Math.floor(Math.random() * (120-19)) + 19;
        $('#inputNum').val(ranNum);
        $('.totscore').val('0');
    }

    reload();

    // this code is for image 1 action...

    $("#button1").on('click',function()
    {
        cryNum1 = Math.floor(Math.random() * 12) +1;
        $('.totscore').val(parseInt($('#totscore').val()) + cryNum1);

        if(ranNum == parseInt($('#totscore').val()))
        {

            $('#wins').val(parseInt($('#wins').val()) + 1);
        
            reload();
            
        }
        else if(ranNum < parseInt($('#totscore').val()))
        {
             $('#loss').val(parseInt($('#loss').val()) + 1);
            reload();
        }
    });    

// the following code for image 2 .action.....

    $("#button2").on('click',function()
    {
        cryNum2 = Math.floor(Math.random() * 12) +1;
        $('.totscore').val(parseInt($('#totscore').val())+cryNum2);   
        
        if(ranNum == parseInt($('#totscore').val()))
        {
            $('#win').val(parseInt($('#win').val())+ 1);
            reload();
            
        }
        else if(ranNum < parseInt($('#totscore').val()))
        {
             $('#loss').val(parseInt($('#loss').val()) + 1);
             reload();
        }

    });

    // The following code for image button 3.....

    $("#button3").on('click',function()
    {
        cryNum3 = Math.floor(Math.random() * 12) +1;
        $('.totscore').val(parseInt($('#totscore').val())+ cryNum3);   
        
        if(ranNum == parseInt($('#totscore').val()))
        {
            $('#win').val(parseInt($('#win').val())+ 1);
            reload();
            
        }
        else if(ranNum < parseInt($('#totscore').val()))
        {
             $('#loss').val(parseInt($('#loss').val()) + 1);
             reload();
        }

    });

// The following code for image button 4....

    $("#button4").on('click',function()
    {
        cryNum4 = Math.floor(Math.random() * 12) +1;
        $('.totscore').val(parseInt($('#totscore').val())+cryNum4);
        
        if(ranNum == parseInt($('#totscore').val()))
        {
            $('#win').val(parseInt($('#win').val())+ 1);
            reload();
            
        }
        else if(ranNum < parseInt($('#totscore').val()))
        {
             $('#loss').val(parseInt($('#loss').val()) + 1);
             reload();
        }

    });    
});
