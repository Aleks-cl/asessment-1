// IIFE -- Immediately Invoked Function Expression
(function(){

    function Start()
    {
        console.log("App Started");

        let deleteButtons = document.querySelectorAll('.btn-danger');

        for(button of deleteButtons){
            button.addEventListener('click', (event)=>{
                event.preventDefault();
                window.location.assign('/page-items');

            })


        }

    }

    window.addEventListener("load", Start);

})();