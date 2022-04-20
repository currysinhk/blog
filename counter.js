$( document ).ready(function() {
    $("#nav").load("./nav.html"); 
    document.getElementById("myForm").addEventListener("submit", calculate);
    console.log( "ready!" );
    function calculate(e)  {
        e.preventDefault();
        console.log("Calculate is ready");
        var result = 0;
        if (document.getElementById("1min").value!='' || document.getElementById("1min").value!=null) { var oneMin = parseInt(document.getElementById("1min").value)};
        if (document.getElementById("5mins").value!='' || document.getElementById("5mins").value!=null) { var fiveMins = parseInt(document.getElementById("5mins").value)};
        if (document.getElementById("10mins").value!='' || document.getElementById("10mins").value!=null) { var tenMins = parseInt(document.getElementById("10mins").value)};
        if (document.getElementById("15mins").value!='' || document.getElementById("15mins").value!=null) { var fifteenMins = parseInt(document.getElementById("15mins").value)};
        if (document.getElementById("30mins").value!='' || document.getElementById("30mins").value!=null) { var thirty = parseInt(document.getElementById("30mins").value)};
        if (document.getElementById("1hr").value!='' || document.getElementById("1hr").value!=null) { var oneHour = parseInt(document.getElementById("1hr").value)};
        if (document.getElementById("2hrs").value!='' || document.getElementById("2hrs").value!=null) { var twoHours = parseInt(document.getElementById("2hrs").value)};
        if (document.getElementById("3hrs").value!='' || document.getElementById("3hrs").value!=null) { var threeHours = parseInt(document.getElementById("3hrs").value)};
        if (document.getElementById("8hrs").value!='' || document.getElementById("8hrs").value!=null) { var eightHours = parseInt(document.getElementById("8hrs").value)};
        if (document.getElementById("15hrs").value!='' || document.getElementById("15hrs").value!=null) { var fifteenHours = parseInt(document.getElementById("15hrs").value)};
        if (document.getElementById("1d").value!='' || document.getElementById("1d").value!=null) { var oneDay = parseInt(document.getElementById("1d").value)};
        if (document.getElementById("3ds").value!='' || document.getElementById("3ds").value!=null) { var threeDays = parseInt(document.getElementById("3ds").value)};
        if (document.getElementById("7ds").value!='' || document.getElementById("7ds").value!=null) { var sevenDays = parseInt(document.getElementById("7ds").value)};
        (oneMin == '' || oneMin == null || oneMin < 0)? oneMin=0: result+=oneMin;
        (fiveMins == '' || fiveMins == null || fiveMins < 0)? fiveMins=0: result+=fiveMins * 5;
        (tenMins == '' || tenMins == null || tenMins < 0)? tenMins=0: result+=tenMins * 10;
        (fifteenMins == '' || fifteenMins == null || fifteenMins < 0)? fifteenMins=0: result+=fifteenMins * 15;
        (thirty == '' || thirty == null || thirty < 0)? thirty=0: result+=thirty * 30;
        (oneHour == '' || oneHour == null || oneHour < 0)? oneHour=0: result+=oneHour * 60;
        (twoHours == '' || twoHours == null || twoHours < 0)? twoHours=0: result+=twoHours * 120;;
        (threeHours == '' || threeHours == null) || threeHours < 0? threeHours=0: result+=threeHours * 180;
        (eightHours == '' || eightHours == null || eightHours < 0)? eightHours=0: result+=eightHours * 640;
        (fifteenHours == '' || fifteenHours == null || fifteenHours < 0)? fifteenHours=0: result+=fifteenHours * 900;
        (oneDay == '' || oneDay == null || oneDay < 0)? oneDay=0: result+=oneDay * 1440;
        (threeDays == '' || threeDays == null || threeDays < 0)? threeDays=0: result+=threeDays * 4320;
        (sevenDays == '' || sevenDays == null || sevenDays < 0)? sevenDays=0: result+=sevenDays * 10080;
        console.log("Result = " + Number(result));
        $('#result').val(result/60/24);
    }
});
