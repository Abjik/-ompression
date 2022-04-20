function load() {
    $("#textar").animate({
        opacity: 1
    }, 1000);
}

function change(element) {
    switch (element.innerHTML) {
        case "Image":
            $(".textar").animate({
                opacity: 0
            }, 300);
            $(".imgin").animate({
                opacity: 1
            }, 300);
            break;

            case "Text":
            $(".textar").animate({
                opacity: 1
            }, 300);
            $(".imgin").animate({
                opacity: 0
            }, 300);
            break;
    
        default:
            
            break;
    }
}