let TXTnum = 0,
    imageNum = 0,
    downTarget,
    currentT,
    currentItem;


$(document).ready(function () {

    var container;

    let
        cardContainer = document.querySelector('#cardCanvas'),// דיב שמכיל את התמונה 
        textAreaD,
        //   imageNum = 0,
        parentPos,//משתנים לבדיקת המיקום של הכיתוב
        //TXTnum = 0,
        relativePos,
        //currentItem,
        currentResizer,
        family;// משתנה לשמירת הפונט הנבחר


    let resizing = false;
    var handleNum = 0;
    $("#deleteImage").hide();
    $("#deleteTXT").hide();
    $("#deleteSticker").hide();



    /*-------start--------------add txt/ remove txt/ drag txt--------------start------------------------*/

    var currentTXTitem;
    $("#addTxtBtn").click(function () {
        $("#deleteTXT").show();
        textAreaD = document.createElement('div');
        //textAreaD.classList = "textAreaD " + TXTnum;
        textAreaD.id = "textAreaD" + TXTnum;
        var textArea = document.createElement('textarea');
        //textArea.classList = "textAreaClass " + TXTnum;
        textAreaD.classList = "resize-drag draggable textAreaClass textAreaClicked textAreaD dirTXTAREARDIV";
        textArea.classList = "textAreaClass " + TXTnum;
        // textArea.classList = "resize-drag draggable textAreaClicked textAreaClass" + TXTnum;
        // $("#textAreaD" + TXTnum).style = "direction:ltr";


        cardContainer.appendChild(textAreaD);
        //cardContainer.appendChild(textArea);
        textArea.id = "textAreaa" + TXTnum;
        textAreaD.appendChild(textArea);
        $("#textAreaD" + TXTnum).height($('#textAreaa' + TXTnum).height());


        currentTXTitem = textArea.id;
        // console.log(currentTXTitem);
        textAreaD.addEventListener("mousedown", Drag);
        // textArea.addEventListener("mousedown", Drag);


        //   document.getElementById("textArea" + TXTnum).addEventListener("dblclick", removeDrag);

        var resizeDiv = document.createElement('div');
        resizeDiv.classList = "resizerHandels " + handleNum;
        resizeDiv.id = "resizerHandelsDiv" + handleNum;
        cardContainer.appendChild(resizeDiv);
        $(".resizerHandels").css("position", "absolute");


        var resizerNe = document.createElement('span');
        resizerNe.classList = "TXTresizer ne textAreaClass " + TXTnum;
        resizerNe.id = "resizerNe" + TXTnum;
        var resizerNw = document.createElement('span');
        resizerNw.classList = "TXTresizer nw textAreaClass " + TXTnum;
        resizerNw.id = "resizerNw" + TXTnum;
        var resizerSw = document.createElement('span');
        resizerSw.classList = "TXTresizer sw textAreaClass " + TXTnum;
        resizerNw.id = "resizerNw" + TXTnum;

        var resizerSe = document.createElement('span');
        resizerSe.classList = "TXTresizer se textAreaClass " + TXTnum;
        resizerSe.id = "resizerSe" + TXTnum;

        //textAreaD.appendChild(resizerNe);
        //textAreaD.appendChild(resizerNw);
        //textAreaD.appendChild(resizerSw);
        //textAreaD.appendChild(resizerSe);

        console.log("ADDDDDDDD textTTTT");



        setTimeout(function () {
            // console.log("timeout")
            if ($(".textAreaD " + (TXTnum - 1))) {
                // console.log(TXTnum - 1)
                // console.log('Element exists');
                var TXTdiv = document.getElementsByClassName("textAreaD " + (TXTnum - 1))
                var TXTdivJQ = $("#textAreaD" + TXTnum).find(".TXTresizer").show();
                // console.log(TXTdivJQ)
                $("#textArea" + (TXTnum - 1)).css("border", "solid black");

                textAreaD.appendChild(resizerNe);
                textAreaD.appendChild(resizerNw);
                textAreaD.appendChild(resizerSw);
                textAreaD.appendChild(resizerSe);

                const resizers = document.querySelectorAll(".TXTresizer");
                for (let resizer of resizers) {
                    console.log("ONE");
                    resizer.addEventListener("click", ResizeFunc);
                }
            }

        }, 10);
        document.getElementById("container").addEventListener("click", removeResizer);


        TXTnum++
        //handleNum++
    });


    //----------------ריסייז --------------------//

    function ResizeFunc() {
        interact('.resize-drag')
            .resizable({

                // resize from all edges and corners
                edges: { left: true, right: true, bottom: true, top: true },

                listeners: {
                    move(event) {
                        currentResizer = event.target;
                        //  console.log(currentResizer);

                        //const rec = (document.getElementById((currentResizer.parentElement).id)).getBoundingClientRect();
                        //$(this).data('clicked', true);
                        //$(".resizer").attr("clicked", true);

                        var target = event.target
                        var x = (parseFloat(target.getAttribute('data-x')))
                        var y = (parseFloat(target.getAttribute('data-y')))

                        //אם מחזירים את האפסים זה משתגע שמרחיבים לצדדים
                        //var x = (parseFloat(target.getAttribute('data-x')) || 0)
                        //var y = (parseFloat(target.getAttribute('data-y')) || 0)

                        // update the element's style
                        // console.log(event)
                        target.style.width = event.rect.width + 'px'
                        // console.log(event.rect)
                        console.log(event.target)
                        if ($(event.target).hasClass("textAreaClass")) {
                            console.log("IFfffffffffffffffffffffffffffffffffffffffffff")

                            // console.log("hasClass(textAreaClicked)")
                            // console.log(TXTnum)
                            target.style.height = event.rect.height + 'px'

                            for (var currentI = 0; currentI < TXTnum; currentI++) {
                                //console.log("FOR");

                                if (currentI == ((event.target).id).slice(9)) {

                                    $("#textAreaa" + currentI).css("width", event.rect.width + 'px')
                                    $("#textAreaa" + currentI).css("height", event.rect.height + 'px')
                                    $("#textAreaD" + currentI).height($('#textAreaa' + currentI).height());
                                    break;
                                }
                            }
                        }

                        if ($(event.target).hasClass("imageClass")) {
                            // target.style.height = ($('#userImage' + imageNum)).css("height",event.rect.height + 'px');
                            //target.style.height = "auto"

                            // console.log($('#imageSDiv0'));

                            for (var currentImg = 0; currentImg < imageNum; currentImg++) {
                                console.log(((event.target).id));
                                // console.log("img for")
                                // console.log(((event.target).id))
                                //console.log(((event.target).id).slice(6, 7))
                                if (currentImg == ((event.target).id).slice(9)) {
                                    $("#userImage" + currentImg).css("width", event.rect.width + 'px')
                                    $("#userImage" + currentImg).css("height", "auto")
                                    $("#imageSDiv" + currentImg).height($('#userImage' + currentImg).height()); // השורה שהוספתי.........................................

                                    // console.log(target)
                                    // console.log($("#imageSDiv" + currentImg))
                                    $("#imageSDiv" + currentImg).find(".resizer").show();
                                    break;


                                    //$(".resizer").mouseup(function () {
                                    //    console.log("mouseup")
                                    //    target.style.height = ($('#userImage' + imageNum)).height
                                    //})

                                }
                                // target.style.height = ($('#userImage' + imageNum)).css("height");

                            }
                        }

                        // translate when resizing from top or left edges
                        x += event.deltaRect.left
                        y += event.deltaRect.top

                        target.style.transform = 'translate(' + x + 'px,' + y + 'px)'

                        target.setAttribute('data-x', x)
                        target.setAttribute('data-y', y)





                    }
                },
                modifiers: [
                    // keep the edges inside the parent
                    interact.modifiers.restrictEdges({
                        outer: 'parent'
                    }),

                    // minimum size
                    interact.modifiers.restrictSize({
                        min: { width: 34, height: 59 }
                    })
                ],

                inertia: true
            })
    }

    //----------------העלאת תמונה --------------------//

    document.getElementById('file').onchange = function (e) {


        var ext = this.value.match(/\.([^\.]+)$/)[1];
        switch (ext) {
            case 'JPG':
            case 'jpg':
            case 'jpeg':
            case 'JPEG':
            case 'BMP':
            case 'bmp':
            case 'PNG':
            case 'png':
            case 'tif':
            case 'TIF':
            case 'GIF':
            case 'gif':

                if (this.files && this.files[0]) {

                    var reader = new FileReader();

                    reader.onload = function (e) {
                        var image = document.createElement('img');
                        image.id = "userImage" + imageNum;
                        image.classList = "image userImageClass " + imageNum;
                        // image.classList = "resize-drag draggable imageClass userImageClass" + imageNum;
                        image.src = e.target.result;
                        imgSrcCopy = image.src;

                        var imageSDiv = document.createElement('div');
                        imageSDiv.id = "imageSDiv" + imageNum;
                        imageSDiv.classList = "resize-drag draggable imageSDivClass imageClass userImageClass " + imageNum;

                        cardContainer.appendChild(imageSDiv)



                        image.onload = function () {
                            // image.addEventListener("mouseover", Drag);
                            imageSDiv.addEventListener("mouseover", Drag);

                            $("#deleteImage").show();
                            var resizeDiv = document.createElement('div');
                            resizeDiv.classList = "resizerHandels " + handleNum;
                            resizeDiv.id = "resizerHandelsDiv" + handleNum;

                            //cardContainer.appendChild(resizeDiv);
                            imageSDiv.appendChild(image);
                            var resizerNe = document.createElement('span');
                            resizerNe.classList = "resizer userImageClass ne " + handleNum;
                            resizerNe.id = "resizerne" + handleNum;
                            var resizerNw = document.createElement('span');
                            resizerNw.classList = "resizer userImageClass nw " + handleNum;
                            resizerNw.id = "resizerNw" + handleNum;
                            var resizerSw = document.createElement('span');
                            resizerSw.classList = "resizer userImageClass sw " + handleNum;
                            resizerSw.id = "resizerSw" + handleNum;
                            var resizerSe = document.createElement('span');
                            resizerSe.classList = "resizer userImageClass se " + handleNum;
                            resizerSe.id = "resizerSe" + handleNum;

                            imageSDiv.appendChild(resizerNe);
                            imageSDiv.appendChild(resizerNw);
                            imageSDiv.appendChild(resizerSw);
                            imageSDiv.appendChild(resizerSe);
                            //console.log(document.getElementById("userImage" + imageNum).clientHeight)
                            //console.log(document.getElementById("userImage" + imageNum).clientWidth)

                            if (document.getElementById("userImage" + imageNum).clientHeight < document.getElementById("userImage" + imageNum).clientWidth) {
                                $("#userImage" + imageNum).css("width", "10vw");
                                $("#userImage" + imageNum).css("height", "auto");
                                console.log("רוחב")

                            } else {
                                $("#userImage" + imageNum).css("width", "auto");
                                $("#userImage" + imageNum).css("height", "10vw");
                                console.log("אורך")
                            }
                            $("#imageSDiv" + imageNum).height($('#userImage' + imageNum).height());
                            $("#imageSDiv" + imageNum).css("direction", "ltr")
                            // console.log("HERE")
                            //$("#imageSDiv" + imageNum).height($('#userImage' + imageNum).height());


                            $(".resizerHandels").css("position", "absolute");

                            $(".resizerHandels " + handleNum).height = $("#userImage" + imageNum).height;

                            // TouchdragElement(document.getElementById("resizerHandelsDiv" + handleNum));

                            const resizers = document.querySelectorAll(".resizer");
                            for (let resizer of resizers) {
                                console.log("ONE");
                                resizer.addEventListener("click", ResizeFunc);
                                //    resizer.addEventListener("touchstart", Resize);

                            }
                            document.getElementById("container").addEventListener("click", removeResizer);


                            imageNum++;
                            handleNum++;
                        };


                    }
                    reader.readAsDataURL(this.files[0]);
                }
                break;
            default:
                this.value = '';

        }
    };
    /*-------start--------------update selected item--------------start------------------------*/
    //$(".textAreaClicked").click(function () {
    //    document.getElementById(currentTXTitem) = event.currentTarget.id;
    //    console.log(document.getElementById(currentTXTitem))
    //});

    //$("#cardCanvas img").click(function () {
    //    console.log("imgClicked")
    // //   $(e.target).addClass("imgClicked")
    //    console.log($(e.target))
    //})


    /*-------start--------------Delete Selcected Item--------------start------------------------*/

    $(".deleteImageClass").click(function (e) {
        console.log("deleteImage");
        // currentItem = $(e.target);
        currentItem.remove();

    });


    $("#deleteTXT").click(function (e) {
        console.log("deleteImage");
        console.log(currentItem);
        currentItem.remove();
        //   currentItem = $(e.target);
        //   document.getElementById(currentTXTitem).remove();

    });
    /*-------END-----------------Delete Selcected Item----------------------END-------------*/



    //--------------start----------change background color-------------start------------------//


    document.querySelector("#BcakgroundColor").addEventListener('input', () => {

        $("#cardCanvas").css("background-color", $('#BcakgroundColor').val());
        $("#cardCanvas").css("background-image", "none");
        console.log($('#BcakgroundColor').val());
        if ($('#BcakgroundColor').val() == "#ffffff") {
            $("#cardCanvas").css("border", "solid black 1px");
        } else {
            $("#cardCanvas").css("border", "none");
        }

    });

    //--------------end----------change background color-------------end------------------//

    //--------------start----------change background img-------------start------------------//


    document.querySelector("#bg1").addEventListener('click', () => {
        console.log(document.querySelector("#bg1").src)
        $("#cardCanvas").css("background-color", "none");
        $("#cardCanvas").css("background-image", 'url(' + document.querySelector("#bg1").src + ')');
        $("#cardCanvas").css("background-size", "cover");

    });

    document.querySelector("#bg2").addEventListener('click', () => {

        $("#cardCanvas").css("background-color", "none");
        $("#cardCanvas").css("background-image", 'url(' + document.querySelector("#bg2").src + ')');
        $("#cardCanvas").css("background-size", "cover");
    });

    document.querySelector("#bg3").addEventListener('click', () => {

        $("#cardCanvas").css("background-color", "none");
        $("#cardCanvas").css("background-image", 'url(' + document.querySelector("#bg3").src + ')');
        $("#cardCanvas").css("background-size", "cover");
    });

    document.querySelector("#bg4").addEventListener('click', () => {

        $("#cardCanvas").css("background-color", "none");
        $("#cardCanvas").css("background-image", 'url(' + document.querySelector("#bg4").src + ')');
        $("#cardCanvas").css("background-size", "cover");
    });

    document.querySelector("#bg5").addEventListener('click', () => {

        $("#cardCanvas").css("background-color", "none");
        $("#cardCanvas").css("background-image", 'url(' + document.querySelector("#bg5").src + ')');
        $("#cardCanvas").css("background-size", "cover");
    });

    document.querySelector("#bg6").addEventListener('click', () => {

        $("#cardCanvas").css("background-color", "none");
        $("#cardCanvas").css("background-image", 'url(' + document.querySelector("#bg6").src + ')');
        $("#cardCanvas").css("background-size", "cover");
    });

    document.querySelector("#bg7").addEventListener('click', () => {

        $("#cardCanvas").css("background-color", "none");
        $("#cardCanvas").css("background-image", 'url(' + document.querySelector("#bg7").src + ')');
        $("#cardCanvas").css("background-size", "cover");
    });

    document.querySelector("#bg8").addEventListener('click', () => {

        $("#cardCanvas").css("background-color", "none");
        $("#cardCanvas").css("background-image", 'url(' + document.querySelector("#bg8").src + ')');
        $("#cardCanvas").css("background-size", "cover");
    });
    //--------------end----------change background img-------------end------------------//
    //--------------start----------remove background img-------------start------------------//

    document.querySelector("#bg9").addEventListener('click', () => {

        $("#cardCanvas").css("background-color", "none");
        $("#cardCanvas").css("background-image", 'none');
        //$("#cardCanvas").css("background-size", "cover");
    });

    //--------------end----------remove background img-------------end------------------//


    /*---------start-----------Font color picker----------------start--------------------*/
    document.querySelector("#fontColor").addEventListener('input', () => {

        document.getElementById(currentTXTitem).style.color = $('#fontColor').val();

    });

    /*---------End-----------Font color picker----------------end--------------------*/


    /*------------start-------------- change Font----------start--------------*/
    $("#selectFont").change(function () {
        var selector = document.getElementById('selectFont');
        family = selector.options[selector.selectedIndex].value;

        document.getElementById(currentTXTitem).style.fontFamily = family;

    });
    /*------------END-------------- change Font----------END--------------*/

    $("#selectFont").change(function () {
        var selector = document.getElementById('selectFont');
        family = selector.options[selector.selectedIndex].value;

        document.getElementById(currentTXTitem).style.fontFamily = family;

    });

    /*------START----------change font size---------START-----------*/
    for (var i = 1; i < 50; i++) {
        var fontSizeOption = document.createElement("option");
        fontSizeOption.text += i;
        document.getElementById("SelectFontSize").appendChild(fontSizeOption);

    }
    var chosenFontSize;
    $("#SelectFontSize").change(function () {
        console.log("fontSize")
        var selector = document.getElementById('SelectFontSize');
        chosenFontSize = selector.options[selector.selectedIndex].value;

        document.getElementById(currentTXTitem).style.fontSize = chosenFontSize + "px";

    });
    /*------END----------change font size---------END-----------*/


    /*-------------Start-----------------collapse  FUNC------------------Start--------------*/
    var coll = document.getElementsByClassName("collapsible");
    var i;

    for (i = 0; i < coll.length; i++) {
        coll[i].addEventListener("click", function () {
            this.classList.toggle("active");
            var content = this.nextElementSibling;
            if (content.style.display === "block") {
                content.style.display = "none";
            } else {
                content.style.display = "block";
            }
        });
    }
    /*-------------END-----------------collapse  FUNC------------------END--------------*/


    /*--------------------------------------------Stickers FUNC-------------------------------------------------------------*/

    $("#sticker1").click(function () {

        var addSticker = document.createElement("img");
        addSticker.src = document.getElementById("sticker1").src;
        addSticker.id = "userImage" + imageNum;
        //  addSticker.classList = "resize-drag draggable imageClass userImageClass" + imageNum;
        addSticker.classList = "userImageClass " + imageNum

        var stickerDiv = document.createElement("div");
        stickerDiv.id = "imageSDiv" + imageNum;
        stickerDiv.classList = "resize-drag draggable imageClass imageSDivClass userImageClass " + imageNum;


        cardContainer.appendChild(stickerDiv);


        addSticker.onload = function () {
            stickerDiv.addEventListener("mouseover", Drag)
            $("#deleteSticker").show();


            var resizeDiv = document.createElement('div');
            resizeDiv.classList = "resizerHandels " + handleNum;
            resizeDiv.id = "resizerHandelsDiv" + handleNum;

            cardContainer.appendChild(resizeDiv);

            stickerDiv.appendChild(addSticker);

            $("#userImage" + imageNum).height(50 + 'px');
            $("#imageSDiv" + imageNum).height($('#userImage' + imageNum).height());


            var resizerNe = document.createElement('span');
            resizerNe.classList = "resizer userImageClass ne " + handleNum;
            resizerNe.id = "resizerne" + handleNum;
            var resizerNw = document.createElement('span');
            resizerNw.classList = "resizer userImageClass nw " + handleNum;
            resizerNw.id = "resizerNw" + handleNum;
            var resizerSw = document.createElement('span');
            resizerSw.classList = "resizer userImageClass sw " + handleNum;
            resizerSw.id = "resizerSw" + handleNum;
            var resizerSe = document.createElement('span');
            resizerSe.classList = "resizer userImageClass se " + handleNum;
            resizerSe.id = "resizerSe" + handleNum;

            stickerDiv.appendChild(resizerNe);
            stickerDiv.appendChild(resizerNw);
            stickerDiv.appendChild(resizerSw);
            stickerDiv.appendChild(resizerSe);

            $(".resizerHandels").css("position", "absolute");

            //TouchdragElement(document.getElementById("resizerHandelsDiv" + handleNum));
            const resizers = document.querySelectorAll(".resizer");
            for (let resizer of resizers) {
                console.log("ONE");
                resizer.addEventListener("click", ResizeFunc);
            }
            document.getElementById("container").addEventListener("click", removeResizer);
            handleNum++
            imageNum++
        };
    });

    $("#sticker2").click(function () {
        var addSticker = document.createElement("img");
        addSticker.src = document.getElementById("sticker2").src;
        addSticker.id = "userImage" + imageNum;
        //  addSticker.classList = "resize-drag draggable imageClass userImageClass" + imageNum;
        addSticker.classList = "userImageClass " + imageNum

        var stickerDiv = document.createElement("div");
        stickerDiv.id = "imageSDiv" + imageNum;
        stickerDiv.classList = "resize-drag draggable imageClass imageSDivClass userImageClass " + imageNum;
        cardContainer.appendChild(stickerDiv);


        addSticker.onload = function () {

            stickerDiv.addEventListener("mouseover", Drag)
            $("#deleteSticker").show();


            var resizeDiv = document.createElement('div');
            resizeDiv.classList = "resizerHandels " + handleNum;
            resizeDiv.id = "resizerHandelsDiv" + handleNum;

            cardContainer.appendChild(resizeDiv);
            stickerDiv.appendChild(addSticker);

            $("#userImage" + imageNum).height(50 + 'px');
            $("#imageSDiv" + imageNum).height($('#userImage' + imageNum).height());


            var resizerNe = document.createElement('span');
            resizerNe.classList = "resizer userImageClass ne " + handleNum;
            resizerNe.id = "resizerne" + handleNum;
            var resizerNw = document.createElement('span');
            resizerNw.classList = "resizer userImageClass nw " + handleNum;
            resizerNw.id = "resizerNw" + handleNum;
            var resizerSw = document.createElement('span');
            resizerSw.classList = "resizer userImageClass sw " + handleNum;
            resizerSw.id = "resizerSw" + handleNum;
            var resizerSe = document.createElement('span');
            resizerSe.classList = "resizer userImageClass se " + handleNum;
            resizerSe.id = "resizerSe" + handleNum;


            stickerDiv.appendChild(resizerNe);
            stickerDiv.appendChild(resizerNw);
            stickerDiv.appendChild(resizerSw);
            stickerDiv.appendChild(resizerSe);

            $(".resizerHandels").css("position", "absolute");

            //TouchdragElement(document.getElementById("resizerHandelsDiv" + handleNum));
            const resizers = document.querySelectorAll(".resizer");
            for (let resizer of resizers) {
                console.log("ONE");
                resizer.addEventListener("click", ResizeFunc);
            }
            document.getElementById("container").addEventListener("click", removeResizer);
            handleNum++
            imageNum++
        };
    });


    $("#sticker3").click(function () {
        var addSticker = document.createElement("img");
        addSticker.src = document.getElementById("sticker3").src;
        addSticker.id = "userImage" + imageNum;
        //  addSticker.classList = "resize-drag draggable imageClass userImageClass" + imageNum;
        addSticker.classList = "userImageClass " + imageNum

        var stickerDiv = document.createElement("div");
        stickerDiv.id = "imageSDiv" + imageNum;
        stickerDiv.classList = "resize-drag draggable imageClass imageSDivClass userImageClass " + imageNum;
        cardContainer.appendChild(stickerDiv);


        addSticker.onload = function () {

            stickerDiv.addEventListener("mouseover", Drag)
            $("#deleteSticker").show();


            var resizeDiv = document.createElement('div');
            resizeDiv.classList = "resizerHandels " + handleNum;
            resizeDiv.id = "resizerHandelsDiv" + handleNum;

            cardContainer.appendChild(resizeDiv);
            stickerDiv.appendChild(addSticker);

            $("#userImage" + imageNum).height(50 + 'px');
            $("#imageSDiv" + imageNum).height($('#userImage' + imageNum).height());


            var resizerNe = document.createElement('span');
            resizerNe.classList = "resizer userImageClass ne " + handleNum;
            resizerNe.id = "resizerne" + handleNum;
            var resizerNw = document.createElement('span');
            resizerNw.classList = "resizer userImageClass nw " + handleNum;
            resizerNw.id = "resizerNw" + handleNum;

            var resizerSw = document.createElement('span');
            resizerSw.classList = "resizer userImageClass sw " + handleNum;
            resizerSw.id = "resizerSw" + handleNum;

            var resizerSe = document.createElement('span');
            resizerSe.classList = "resizer userImageClass se " + handleNum;
            resizerSe.id = "resizerSe" + handleNum;


            stickerDiv.appendChild(resizerNe);
            stickerDiv.appendChild(resizerNw);
            stickerDiv.appendChild(resizerSw);
            stickerDiv.appendChild(resizerSe);

            $(".resizerHandels").css("position", "absolute");

            //TouchdragElement(document.getElementById("resizerHandelsDiv" + handleNum));
            const resizers = document.querySelectorAll(".resizer");
            for (let resizer of resizers) {
                console.log("ONE");
                resizer.addEventListener("click", ResizeFunc);
            }
            document.getElementById("container").addEventListener("click", removeResizer);
            handleNum++
            imageNum++
        };
    });

    $("#sticker4").click(function () {
        var addSticker = document.createElement("img");
        addSticker.src = document.getElementById("sticker4").src;
        addSticker.id = "userImage" + imageNum;
        //  addSticker.classList = "resize-drag draggable imageClass userImageClass" + imageNum;
        addSticker.classList = "userImageClass " + imageNum

        var stickerDiv = document.createElement("div");
        stickerDiv.id = "imageSDiv" + imageNum;
        stickerDiv.classList = "resize-drag draggable imageClass imageSDivClass userImageClass " + imageNum;
        cardContainer.appendChild(stickerDiv);


        addSticker.onload = function () {

            stickerDiv.addEventListener("mouseover", Drag)
            $("#deleteSticker").show();


            var resizeDiv = document.createElement('div');
            resizeDiv.classList = "resizerHandels " + handleNum;
            resizeDiv.id = "resizerHandelsDiv" + handleNum;

            cardContainer.appendChild(resizeDiv);
            stickerDiv.appendChild(addSticker);

            $("#userImage" + imageNum).height(50 + 'px');
            $("#imageSDiv" + imageNum).height($('#userImage' + imageNum).height());


            var resizerNe = document.createElement('span');
            resizerNe.classList = "resizer userImageClass ne " + handleNum;
            resizerNe.id = "resizerne" + handleNum;
            var resizerNw = document.createElement('span');
            resizerNw.classList = "resizer userImageClass nw " + handleNum;
            resizerNw.id = "resizerNw" + handleNum;

            var resizerSw = document.createElement('span');
            resizerSw.classList = "resizer userImageClass sw " + handleNum;
            resizerSw.id = "resizerSw" + handleNum;

            var resizerSe = document.createElement('span');
            resizerSe.classList = "resizer userImageClass se " + handleNum;
            resizerSe.id = "resizerSe" + handleNum;


            stickerDiv.appendChild(resizerNe);
            stickerDiv.appendChild(resizerNw);
            stickerDiv.appendChild(resizerSw);
            stickerDiv.appendChild(resizerSe);

            $(".resizerHandels").css("position", "absolute");

            //TouchdragElement(document.getElementById("resizerHandelsDiv" + handleNum));
            const resizers = document.querySelectorAll(".resizer");
            for (let resizer of resizers) {
                console.log("ONE");
                resizer.addEventListener("click", ResizeFunc);
            }
            document.getElementById("container").addEventListener("click", removeResizer);
            handleNum++
            imageNum++
        };
    });

    $("#sticker5").click(function () {
        var addSticker = document.createElement("img");
        addSticker.src = document.getElementById("sticker5").src;
        addSticker.id = "userImage" + imageNum;
        //  addSticker.classList = "resize-drag draggable imageClass userImageClass" + imageNum;
        addSticker.classList = "userImageClass " + imageNum

        var stickerDiv = document.createElement("div");
        stickerDiv.id = "imageSDiv" + imageNum;
        stickerDiv.classList = "resize-drag draggable imageClass imageSDivClass userImageClass " + imageNum;
        cardContainer.appendChild(stickerDiv);


        addSticker.onload = function () {

            stickerDiv.addEventListener("mouseover", Drag)
            $("#deleteSticker").show();


            var resizeDiv = document.createElement('div');
            resizeDiv.classList = "resizerHandels " + handleNum;
            resizeDiv.id = "resizerHandelsDiv" + handleNum;

            cardContainer.appendChild(resizeDiv);
            stickerDiv.appendChild(addSticker);

            $("#userImage" + imageNum).height(50 + 'px');
            $("#imageSDiv" + imageNum).height($('#userImage' + imageNum).height());


            var resizerNe = document.createElement('span');
            resizerNe.classList = "resizer userImageClass ne " + handleNum;
            resizerNe.id = "resizerne" + handleNum;
            var resizerNw = document.createElement('span');
            resizerNw.classList = "resizer userImageClass nw " + handleNum;
            resizerNw.id = "resizerNw" + handleNum;

            var resizerSw = document.createElement('span');
            resizerSw.classList = "resizer userImageClass sw " + handleNum;
            resizerSw.id = "resizerSw" + handleNum;

            var resizerSe = document.createElement('span');
            resizerSe.classList = "resizer userImageClass se " + handleNum;
            resizerSe.id = "resizerSe" + handleNum;


            stickerDiv.appendChild(resizerNe);
            stickerDiv.appendChild(resizerNw);
            stickerDiv.appendChild(resizerSw);
            stickerDiv.appendChild(resizerSe);

            $(".resizerHandels").css("position", "absolute");

            //TouchdragElement(document.getElementById("resizerHandelsDiv" + handleNum));
            const resizers = document.querySelectorAll(".resizer");
            for (let resizer of resizers) {
                console.log("ONE");
                resizer.addEventListener("click", ResizeFunc);
            }
            document.getElementById("container").addEventListener("click", removeResizer);
            handleNum++
            imageNum++
        };
    });

    $("#sticker6").click(function () {
        var addSticker = document.createElement("img");
        addSticker.src = document.getElementById("sticker6").src;
        addSticker.id = "userImage" + imageNum;
        //  addSticker.classList = "resize-drag draggable imageClass userImageClass" + imageNum;
        addSticker.classList = "userImageClass " + imageNum

        var stickerDiv = document.createElement("div");
        stickerDiv.id = "imageSDiv" + imageNum;
        stickerDiv.classList = "resize-drag draggable imageClass imageSDivClass userImageClass " + imageNum;
        cardContainer.appendChild(stickerDiv);


        addSticker.onload = function () {

            stickerDiv.addEventListener("mouseover", Drag)
            $("#deleteSticker").show();


            var resizeDiv = document.createElement('div');
            resizeDiv.classList = "resizerHandels " + handleNum;
            resizeDiv.id = "resizerHandelsDiv" + handleNum;

            cardContainer.appendChild(resizeDiv);
            stickerDiv.appendChild(addSticker);

            $("#userImage" + imageNum).height(50 + 'px');
            $("#imageSDiv" + imageNum).height($('#userImage' + imageNum).height());


            var resizerNe = document.createElement('span');
            resizerNe.classList = "resizer userImageClass ne " + handleNum;
            resizerNe.id = "resizerne" + handleNum;
            var resizerNw = document.createElement('span');
            resizerNw.classList = "resizer userImageClass nw " + handleNum;
            resizerNw.id = "resizerNw" + handleNum;

            var resizerSw = document.createElement('span');
            resizerSw.classList = "resizer userImageClass sw " + handleNum;
            resizerSw.id = "resizerSw" + handleNum;

            var resizerSe = document.createElement('span');
            resizerSe.classList = "resizer userImageClass se " + handleNum;
            resizerSe.id = "resizerSe" + handleNum;


            stickerDiv.appendChild(resizerNe);
            stickerDiv.appendChild(resizerNw);
            stickerDiv.appendChild(resizerSw);
            stickerDiv.appendChild(resizerSe);

            $(".resizerHandels").css("position", "absolute");

            //TouchdragElement(document.getElementById("resizerHandelsDiv" + handleNum));
            const resizers = document.querySelectorAll(".resizer");
            for (let resizer of resizers) {
                console.log("ONE");
                resizer.addEventListener("click", ResizeFunc);
            }
            document.getElementById("container").addEventListener("click", removeResizer);
            handleNum++
            imageNum++
        };
    });

    $("#sticker7").click(function () {
        var addSticker = document.createElement("img");
        addSticker.src = document.getElementById("sticker7").src;
        addSticker.id = "userImage" + imageNum;
        //  addSticker.classList = "resize-drag draggable imageClass userImageClass" + imageNum;
        addSticker.classList = "userImageClass " + imageNum

        var stickerDiv = document.createElement("div");
        stickerDiv.id = "imageSDiv" + imageNum;
        stickerDiv.classList = "resize-drag draggable imageClass imageSDivClass userImageClass " + imageNum;
        cardContainer.appendChild(stickerDiv);


        addSticker.onload = function () {

            stickerDiv.addEventListener("mouseover", Drag)
            $("#deleteSticker").show();


            var resizeDiv = document.createElement('div');
            resizeDiv.classList = "resizerHandels " + handleNum;
            resizeDiv.id = "resizerHandelsDiv" + handleNum;

            cardContainer.appendChild(resizeDiv);
            stickerDiv.appendChild(addSticker);


            $("#userImage" + imageNum).height(50 + 'px');
            $("#imageSDiv" + imageNum).height($('#userImage' + imageNum).height());
           

            var resizerNe = document.createElement('span');
            resizerNe.classList = "resizer userImageClass ne " + handleNum;
            resizerNe.id = "resizerne" + handleNum;
            var resizerNw = document.createElement('span');
            resizerNw.classList = "resizer userImageClass nw " + handleNum;
            resizerNw.id = "resizerNw" + handleNum;

            var resizerSw = document.createElement('span');
            resizerSw.classList = "resizer userImageClass sw " + handleNum;
            resizerSw.id = "resizerSw" + handleNum;

            var resizerSe = document.createElement('span');
            resizerSe.classList = "resizer userImageClass se " + handleNum;
            resizerSe.id = "resizerSe" + handleNum;


            stickerDiv.appendChild(resizerNe);
            stickerDiv.appendChild(resizerNw);
            stickerDiv.appendChild(resizerSw);
            stickerDiv.appendChild(resizerSe);

            $(".resizerHandels").css("position", "absolute");

            //TouchdragElement(document.getElementById("resizerHandelsDiv" + handleNum));
            const resizers = document.querySelectorAll(".resizer");
            for (let resizer of resizers) {
                console.log("ONE");
                resizer.addEventListener("click", ResizeFunc);
            }
            document.getElementById("container").addEventListener("click", removeResizer);
            handleNum++
            imageNum++
        };
    });

    $("#sticker8").click(function () {
        var addSticker = document.createElement("img");
        addSticker.src = document.getElementById("sticker8").src;
        addSticker.id = "userImage" + imageNum;
        //  addSticker.classList = "resize-drag draggable imageClass userImageClass" + imageNum;
        addSticker.classList = "userImageClass " + imageNum

        var stickerDiv = document.createElement("div");
        stickerDiv.id = "imageSDiv" + imageNum;
        stickerDiv.classList = "resize-drag draggable imageClass imageSDivClass userImageClass " + imageNum;
        cardContainer.appendChild(stickerDiv);


        addSticker.onload = function () {

            stickerDiv.addEventListener("mouseover", Drag)
            $("#deleteSticker").show();


            var resizeDiv = document.createElement('div');
            resizeDiv.classList = "resizerHandels " + handleNum;
            resizeDiv.id = "resizerHandelsDiv" + handleNum;

            cardContainer.appendChild(resizeDiv);
            stickerDiv.appendChild(addSticker);

            $("#userImage" + imageNum).height(50 + 'px');
            $("#imageSDiv" + imageNum).height($('#userImage' + imageNum).height());


            var resizerNe = document.createElement('span');
            resizerNe.classList = "resizer userImageClass ne " + handleNum;
            resizerNe.id = "resizerne" + handleNum;
            var resizerNw = document.createElement('span');
            resizerNw.classList = "resizer userImageClass nw " + handleNum;
            resizerNw.id = "resizerNw" + handleNum;

            var resizerSw = document.createElement('span');
            resizerSw.classList = "resizer userImageClass sw " + handleNum;
            resizerSw.id = "resizerSw" + handleNum;

            var resizerSe = document.createElement('span');
            resizerSe.classList = "resizer userImageClass se " + handleNum;
            resizerSe.id = "resizerSe" + handleNum;


            stickerDiv.appendChild(resizerNe);
            stickerDiv.appendChild(resizerNw);
            stickerDiv.appendChild(resizerSw);
            stickerDiv.appendChild(resizerSe);

            $(".resizerHandels").css("position", "absolute");

            //TouchdragElement(document.getElementById("resizerHandelsDiv" + handleNum));
            const resizers = document.querySelectorAll(".resizer");
            for (let resizer of resizers) {
                console.log("ONE");
                resizer.addEventListener("click", ResizeFunc);
            }
            document.getElementById("container").addEventListener("click", removeResizer);
            handleNum++
            imageNum++
        };
    });
    //--------------start----------remove resize handels from images-------------start------------------//
    $("#container").mousedown(function (e) {
        currentT = e.target
        downTarget = $(currentT);
        console.log(downTarget)
    });

    function removeResizer(e) {
        //$(document).mousedown(function (e) {
        //    currentT = e.target
        //    downTarget = $(currentT);
        //    console.log(downTarget)
        //});
        //console.log(downTarget)

        console.log("YAY")
        //$(".resizer").hide();
        //$(".TXTresizer").hide();
        //$("#deleteImage").hide();
        //$("#deleteSticker").hide();
        //$("#deleteTXT").hide();
        //$(".textAreaClass").css("border", "none");
        //$("#addTxtBtn").css("border", "solid 3px #3F4C9B");

        // borderText();
        console.log((e.target));

        //console.log((e.target).classList);
        if (downTarget.hasClass("textAreaClass")) {

            if ($(e.target).hasClass("textAreaClass")) {

                console.log("downTarget txt");

                for (var i = 0; i < TXTnum; i++) {
                    // console.log("FORTXT");
                    console.log(((e.target).id));


                    if (i == ((e.target).id).slice(9)) {
                        console.log("TXTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTt");
                        console.log(((e.target).id).slice(9));
                        var elementClassTXT = document.getElementsByClassName("TXTresizer ")
                        console.log(elementClassTXT)
                        for (var allTXT = 0; allTXT < elementClassTXT.length; allTXT++) {
                            console.log(elementClassTXT[allTXT])
                            var selectedTXT = elementClassTXT[allTXT].classList.contains(((e.target).id).slice(9))
                            console.log(selectedTXT)
                            console.log(elementClassTXT[allTXT])
                            if (selectedTXT == false) {
                                console.log($(selectedTXT[allTXT]))
                                $(elementClassTXT[allTXT]).hide();
                            }
                            else {
                                $(elementClassTXT[allTXT]).show();
                                $("#deleteTXT").show();
                                currentItem = $(e.target.parentElement);

                            }
                        }

                        //container = document.getElementsByClassName("textAreaClass " + i)
                        //container = $(container);
                        //// console.log(e.target);


                        ////  console.log("if");
                        ////console.log(e.target.id);
                        //if (container.is(e.target)) {
                        //    console.log("MOUSE");

                        //    //console.log(($(e.target.parentElement).find(".TXTresizer")));
                        //    currentItem = $(e.target.parentElement);
                        //    //$(".TXTresizer").show();
                        //    $("#deleteTXT").show();
                        //    container.css("border", "none");
                        //    $("#addTxtBtn").css("border", "solid 3px #3F4C9B");
                        //    ($(e.target.parentElement).find(".TXTresizer")).show();


                        //    break;


                        //if (e.target.is('span')) {
                        //    //  console.log("resizer clicked")

                        //}


                        //} else {
                        //    $("#deleteTXT").hide();
                        //    container.css("border", "solid black");
                        //    ($(e.target.parentElement).find(".TXTresizer")).hide();
                        //    $("#addTxtBtn").css("border", "solid 3px #3F4C9B");

                        //}

                        //}
                    }
                }
            }
        }
        else {
            console.log("else TXT")
            //$(".resizer").hide();
            $(".TXTresizer").hide();
            // $("#deleteImage").hide();
            // $("#deleteSticker").hide();
            $("#deleteTXT").hide();
            $(".textAreaClass").css("border", "none");
            $("#addTxtBtn").css("border", "solid 3px #3F4C9B");
            $("#selectFont").css("border", "solid 1px black");
            $("#SelectFontSize").css("border", "solid 1px black");
        }

        /////////////////////////////////////////////////////////////////////////////////////
        //console.log(downTarget);
        //|| downTarget.parentElement.hasClass("userImageClass")
        if (downTarget.hasClass("userImageClass")) {
            console.log("downTarget img")

            if ($(e.target).hasClass("userImageClass")) {
                console.log("userImageClass")
                //if ($(e.target).hasClass("userImageClass")) {
                console.log(e.target);

                for (var i = 0; i < imageNum; i++) {


                    if (i == ((e.target).id).slice(9)) {

                        var elementClass = document.getElementsByClassName("resizer ")
                        console.log(elementClass)
                        // container = $(container);

                        for (var z = 0; z < elementClass.length; z++) {
                            var selectedE = elementClass[z].classList.contains(((e.target).id).slice(9))
                            console.log(selectedE)
                            if (selectedE == false) {
                                $(elementClass[z]).hide()
                                // console.log( $(elementClass[z]).hide())
                            } else {
                                $(elementClass[z]).show()
                                $("#deleteImage").show();
                                $("#deleteSticker").show();
                                currentItem = $(e.target.parentElement);

                            }
                        }
                        // if (((e.target).id).slice(9) == container)
                        //        console.log(e.target)
                        //        console.log("i "+i)
                        //        console.log("(i == ((e.target).id).slice(9))");

                        //        container = document.getElementsByClassName("userImageClass ")
                        //        console.log(container)
                        //        container = $(container);

                        //        if (container.is(e.target)) {
                        //             console.log("MOUSE");


                        //            //$(".resizer").hide();

                        //            $("#deleteImage").show();
                        //            $("#deleteSticker").show();

                        //            //console.log(($(e.target)));
                        //            //console.log(($(e.target.parentElement)));
                        //            //$(".resizer").hide();
                        //            ($(e.target.parentElement).find(".resizer")).show();


                        //            break;
                        //        }

                        //    }
                        //    else {
                        //        console.log("else")
                        //        //$(this).data('clicked', false);
                        //        //$(".resizer").attr("clicked", false);
                        //        $("#deleteImage").hide();
                        //        $("#deleteSticker").hide();
                        //        ($(e.target.parentElement).find(".resizer")).hide();
                        //    }
                        //}
                        //if ($('.resizer').attr('clicked') == "true") {
                        //    console.log("resizer clicked");
                        //    $("#deleteImage").show();
                        //    $("#deleteSticker").show();
                        //    console.log(($(e.target)));
                        //    ($(e.target).find(".resizer")).show();

                        //}
                        //else {
                        //    console.log("resizer false");
                        //    $("#deleteImage").hide();
                        //    $("#deleteSticker").hide();


                    }
                }
            }
        }
        else {
            console.log("else img")
            $(".resizer").hide();
            // $(".TXTresizer").hide();
            $("#deleteImage").hide();
            $("#deleteSticker").hide();
            // $("#deleteTXT").hide();
            // $(".textAreaClass").css("border", "none");
            $("#addTxtBtn").css("border", "solid 3px #3F4C9B");
        }
        //if ($(e.target).hasClass("userImageClass")) {

        //} else {
        //  //  $(this).data('clicked', false);
        //   // $(".resizer").attr("clicked", false);
        //}

        //if ($('.resizer').attr('clicked')) {
        //    console.log("resizer false");
        //    $("#deleteImage").hide();
        //    $("#deleteSticker").hide();

        //}

        //if ($('.resizer').attr('clicked') == "true") {
        //    console.log("resizer clicked");
        //    $("#deleteImage").show();
        //    $("#deleteSticker").show();
        //    console.log(($(e.target)));
        //    ($(e.target).find(".resizer")).show();

        //}
        //else {
        //    console.log("resizer false");
        //    $("#deleteImage").hide();
        //    $("#deleteSticker").hide();

        //}

        //if ($(e.target).hasClass("resizer")) {
        //    ($(e.target).find(".resizer")).show();
        //}
        //if (($(e.target.parentElement).hasClass("userImageClass"))){
        //    (($(e.target.parentElement).find(".resizer"))).show();

        //}

    };

    //$(document).mousedown(function (e) {
    //    downTarget = e.target;
    //    console.log(downTarget)

    //    if (downTarget.classList.contains("userImageClass")) {
    //        downTarget.find(".resizer").show();
    //        console.log("downTarget")

    //    }

    //    if (downTarget.parentElement.classList.contains("userImageClass")) {
    //        downTarget.parentElement.find(".resizer").show();
    //        console.log("downTarget.parentElement")
    //    }
    //})

    function borderText(e) {

        $(".textAreaClass ").mousemove(function (e) {
            //  console.log("HOVER");
            currentTnum = ((e.target).id).slice(8, 9)
            //  console.log(currentTnum)
            $("#textArea" + currentTnum).css("border", "solid black");
        });
        $(".textAreaClass ").mouseout(function (e) {
            //  console.log("OUT");
            // console.log(currentTnum)
            $("#textArea" + currentTnum).css("border", "none");
        });
    }
    //--------------END----------remove resize handels from images-------------END------------------//

    /*-------------START-----------------DOWNLOAD CARD FUNC------------------START--------------*/
    $("#downloadBTN").click(function () {
        console.log("לחצתי על הורדה")
        $(".resizer").hide();
        $(".TXTresizer").hide();
        $("#cardCanvas").css("border", "none");

        //var BGnone = false;
        //if ($("#cardCanvas").css("background-image", "url(../images/pngBG.png)")) {
        //    $("#cardCanvas").css("background-image", "none");
        //}

        html2canvas(document.querySelector("#cardCanvas")).then(canvas => {

            document.body.appendChild(canvas)
            $("canvas").hide();

            var canvasImg = canvas.toDataURL("image/jpg");
            var linkToDownload = document.createElement("a");
            linkToDownload.id = "linkToDownload";
            var imageDownload = document.querySelector('#buttonDiv');
            imageDownload.appendChild(linkToDownload);
            document.getElementById("linkToDownload").href = canvasImg;
            linkToDownload.download = "image.png";


            setTimeout(function () {
                linkToDownload.click();
                $("#linkToDownload").remove();

                $("#cardCanvas").css("border", "solid black");


              //  $("#cardCanvas").css("background-image", "url(./images/pngBG.png)");

            }, 100);

        });
    });

    /*-------------END-----------------DOWNLOAD CARD FUNC------------------END--------------*/
});

function Drag(event) {
    var documentBody = document.getElementById("container");


    interact('.resize-drag')
    //.resizable({
    //    // resize from all edges and corners
    //    edges: { left: true, right: true, bottom: true, top: true },

    //    listeners: {
    //        move(event) {
    //            var target = event.target
    //            var x = (parseFloat(target.getAttribute('data-x')))
    //            var y = (parseFloat(target.getAttribute('data-y')))

    //            //אם מחזירים את האפסים זה משתגע שמרחיבים לצדדים
    //            //var x = (parseFloat(target.getAttribute('data-x')) || 0)
    //            //var y = (parseFloat(target.getAttribute('data-y')) || 0)

    //            // update the element's style
    //            target.style.width = event.rect.width + 'px'
    //            target.style.height = event.rect.height + 'px'

    //            // translate when resizing from top or left edges
    //            x += event.deltaRect.left
    //            y += event.deltaRect.top

    //            target.style.transform = 'translate(' + x + 'px,' + y + 'px)'

    //            target.setAttribute('data-x', x)
    //            target.setAttribute('data-y', y)
    //            //   target.textContent = Math.round(event.rect.width) + '\u00D7' + Math.round(event.rect.height)
    //        }
    //    },
    //    modifiers: [
    //        // keep the edges inside the parent
    //        interact.modifiers.restrictEdges({
    //            outer: 'parent'
    //        }),

    //        // minimum size
    //        interact.modifiers.restrictSize({
    //            min: { width: 100, height: 50 }
    //        })
    //    ],

    //    inertia: true
    //})


    //.draggable({
    //    listeners: { move: window.dragMoveListener },
    //    inertia: true,
    //    modifiers: [
    //        interact.modifiers.restrictRect({
    //            restriction: 'parent',
    //            endOnly: true
    //        })
    //    ]
    //})

    // target elements with the "draggable" class
    interact('.draggable')
        .draggable({
            // enable inertial throwing
            inertia: true,
            // keep the element within the area of it's parent
            modifiers: [
                interact.modifiers.restrictRect({
                    restriction: 'parent',
                    endOnly: true
                })
            ],
            // enable autoScroll
            autoScroll: true,

            listeners: {
                // call this function on every dragmove event
                move: dragMoveListener,

                // call this function on every dragend event
                end(event) {
                    var textEl = event.target.querySelector('p')

                    textEl && (textEl.textContent =
                        'moved a distance of ' +
                        (Math.sqrt(Math.pow(event.pageX - event.x0, 2) +
                            Math.pow(event.pageY - event.y0, 2) | 0))
                            .toFixed(2) + 'px')
                }
            }
        })

    function dragMoveListener(event) {
        var target = event.target
        // keep the dragged position in the data-x/data-y attributes
        var x = (parseFloat(target.getAttribute('data-x')) || 0) + event.dx
        var y = (parseFloat(target.getAttribute('data-y')) || 0) + event.dy


        // translate the element
        target.style.transform = 'translate(' + x + 'px, ' + y + 'px)'

        // update the posiion attributes
        target.setAttribute('data-x', x)
        target.setAttribute('data-y', y)
    }

    // this function is used later in the resizing and gesture demos
    window.dragMoveListener = dragMoveListener


    var container;
    // console.log($(event.target))

    if ($(event.target).hasClass("textAreaClicked")) {
        // console.log("hasClass(textAreaClicked)")
        for (var i = 0; i < TXTnum; i++) {
            // console.log("FOR");

            // console.log((event.target).id)
            if (i == ((event.target).id).slice(8, 9)) {
                console.log(i);
                // container = (event.target).id
                container = document.getElementsByClassName("textAreaClass " + i)
                // console.log(container);
                container = $(container);
                //console.log(container);
                //  console.log(event.target);

                currentItem = $(event.target);
                //currentItem.toggleClass("imgClicked");
                //console.log(currentItem)

                //console.log("if");
                // console.log(event.target.id);

                $("#deleteTXT").show();
                container.css("border", "none");

                break;

                if (container.is(event.target)) {
                    // console.log("MOUSE");

                    // console.log(($(event.target.parentElement).find(".TXTresizer")));
                    //currentItem = $(event.target.parentElement);
                    //currentItem = $(event.target);
                    //console.log(currentItem)

                    // $(".TXTresizer").hide();
                    //$("#deleteTXT").show();
                    //container.css("border", "none");
                    //   ($(e.target.parentElement).find(".TXTresizer")).show();
                    //break;

                } else {
                    $("#deleteTXT").hide();
                    container.css("border", "solid black");
                    // ($(event.target.parentElement).find(".TXTresizer")).hide();
                }

            }
        }
    }

    if ($(event.target).hasClass("imageClass")) {

        for (var i = 0; i < imageNum; i++) {
            console.log("FOR");
            if (i == ((event.target).id).slice(9, 10)) {
                //console.log(i);
                container = (event.target).id
                container = $(container);
                // console.log(event.target);

                currentItem = $(event.target);
                currentItem.addClass("imgClicked");
                // $(".resizer").hide();
                $("#deleteImage").show();
                $("#deleteSticker").show();
                break;

                console.log("if");
                if (container.is(event.target)) {
                    //  console.log("MOUSE");

                    //  console.log(($(event.target.parentElement).find(".resizer")));
                    //currentItem = $(event.target.parentElement);
                    //  currentItem = $(event.target);

                    // $(".resizer").hide();
                    // $("#deleteImage").show();
                    //  $("#deleteSticker").show();

                    //($(event.target.parentElement).find(".resizer")).show();
                    // break;
                } else {
                    //$("#deleteImage").hide();
                    //  $("#deleteSticker").hide();
                    //($(event.target.parentElement).find(".resizer")).hide();
                }

            }
        }

        documentBody.click(function () {
            currentItem.classList.remove("imgClicked");

        });

    }



}