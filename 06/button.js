
  const button = document.getElementById("button");

 button.addEventListener("mouseover", function () {


    button.button.transition = "transform 0.16s ease";
    button.button.transform = "scale(0.7)";

    setTimeout(function () {

        const x = (Math.random() - 0.5) * 800;
        const y = (Math.random() - 0.5) * 500;

       
        button.button.transition = "transform 0.3s cubic-bezier(0.25, 1, 0.5, 1)";

        button.button.transform = "translate(" + x + "px, " + y + "px) scale(1)";

       

    }, 130);
});



