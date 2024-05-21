//botão para subir ao topo
var scrollToButton = document.getElementById("scrollTopButton");
        var docElement = document.documentElement;

        function scrolltoTop(){
            docElement.scrollTo({
                top: 0,
                behavior: "smooth"
            });
        }

        function handleScroll(){
            var scrollTotal = docElement.scrollHeight - docElement.clientHeight;
            var count = docElement.scrollTop / scrollTotal
            if(count > 0.1){
                scrollToButton.classList.add("showBtn");
            } else {
                scrollToButton.classList.remove("showBtn");
            }
        }

        document.addEventListener("scroll", handleScroll)
        scrollToButton.addEventListener("click", scrolltoTop);
  
    function criarTooltipBox(element) {
      const tooltipBox = document.createElement("div");
      const text = element.getAttribute("alt");
      tooltipBox.classList.add("tooltip");
      tooltipBox.innerText = text;
      document.body.appendChild(tooltipBox);
      return tooltipBox;
    }




