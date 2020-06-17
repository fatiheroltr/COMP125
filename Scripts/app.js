// IIFE - Immediately Invoked Function Expression = Anonymous Self-Executing Function - Closure
(function(){


    
    function Start()
    {
        console.log('%cMyApp Started...',"font-size:20px;")
    }

    function Second()
    {
        console.log(mynum);
    }

    window.addEventListener("load", Start);

})(); 