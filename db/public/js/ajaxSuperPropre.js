export function ajaxSansFrotter() {
    if (window.fetch) {
        fetch("/css/My_Monkey_darkBlueII.png",
            {
                method: "post"
            }).then(){

        }
    } else {

        var oReq = new XMLHttpRequest();
        oReq.open("get", "/css/My_Monkey_darkBlueII.png", true);
        oReq.onload = function () {
            console.log(this.responseText);
        }
        console.log(oReq.send());
    }
}