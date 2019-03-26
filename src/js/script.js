var init = function(){
        if (navigator.mediaDevices && typeof navigator.mediaDevices.getUserMedia === 'function') {
            Quagga.init({
                inputStream : {
                    name : "Live",
                    type : "LiveStream",
                    target: finder
                },constraints: {
                    width: 480,
                    height: 480
                },
                decoder : {
                    readers : ["ean_reader"]
                },
                debug:{
                    drawScanline:true
                }
                }, function(err) {
                    if (err) {
                        console.log(err);
                        return
                    }
                    console.log("Initialization finished. Ready to start");
                    Quagga.start();
            })
        }
        detect()
    },
    detect = function(){
        Quagga.onDetected(function(data){
            var code = data.codeResult.code
            finder.classList.remove("active")
            console.log("code found", data.codeResult.code)
            Quagga.stop()
            window.location.pathname = "album/" + code
        })
    },
    finder = document.querySelector("#finder")

document.querySelector("[data-start]").addEventListener("click",function(){
    finder.classList.add("active")
    init()
})
