




$(document).ready(function () {
    window.onscroll = function () {
        growShrinkLogo();
    };
    function growShrinkLogo() {
        var Logo = document.getElementById("logo")
        if (document.body.scrollTop > 5 || document.documentElement.scrollTop > 5) {
            $(Logo).css("width", '130px');
            $(Logo).css("transition", "width 0.5s ease")
            $("nav").css("background-color", "white");
        } else {
            Logo.style.width = '165px';
            $("nav").css("background-color", "transparent");
        }
    }
    /********************** */
    var tipsDivNum;
    var tipsDivcontect;
    var tipsData
    var IDTipToEdit;

    if (window.location.href.indexOf("addTipEditorSection.aspx") > -1) {
        addTipEditor();
    }


    $.ajax({
        method: "GET",
        async: false,
        url: "Handlers/Handler.ashx",
        data: { Action: "getTipContect" } //שליחת שם הפעולה שתתבצע בהנדלר
    })
        .done(function (data) { //ברגע שהפעולה הסתיימה   
            tipsDivcontect = JSON.parse(data)
            tipsDivNum = JSON.parse(data).Table.length
            //  console.log(tipsDivNum);

            //  console.log(tipsDivcontect)


            if (window.location.href.indexOf("EditorContent.aspx") > -1) {
                editTipsByGender();


            } if (window.location.href.indexOf("TipsEditor.aspx") > -1) {
                myTips();
            }
        })
        .fail(function (error) { //במצב של שגיאה  
            console.log("error");
            console.log(error.statusText);
        })


    //אם אנחנו בעמוד טבלת הטיפים
    function myTips() {
        if ( screen.width <= 765) {

            console.log(" העורך אינו מותאם למובייל, על מנת לערוך בצורה מיטבית ביותר ניתן לעבור למסך המחשב. שים לב - רצוי לעבור לערוך את הטיפים במחשב");
            $("#momileERORRpopup").removeClass("popupClose");
            $("#momileERORRpopup").addClass("overlay");

            $("#backToHomeScreen").click(function () {

                var LinkHome = document.createElement("a");
                LinkHome.href = "index.html";
                LinkHome.id = "LinkHome"
                $("#backToHomeScreen").append(Link)
                LinkHome.click();
            });

        } else {
            console.log("מחשב");
            for (var i = 0; i < tipsDivNum; i++) {



                var emptyRowtipTxtBoy = tipsDivcontect.Table[i].tipTxtBoy;
                var emptyRowtipTxtGirl = tipsDivcontect.Table[i].tipTxtGirl;
                var emptyRowtipHeadlineBoy = tipsDivcontect.Table[i].tipHeadlineBoy;
                var emptyRowtipHeadlineGirl = tipsDivcontect.Table[i].tipHeadlineGirl;
                var emptyRowtipHeadline = tipsDivcontect.Table[i].tipHeadline;

                for (var n = 0; n < $(".publishCb").length; n++) {

                    // "form-check-input"
                    $($(".publishCb")[n]).children().addClass("form-check-input");
                }
                console.log(emptyRowtipHeadline)
                if (emptyRowtipHeadline == null || emptyRowtipHeadline == "" || emptyRowtipTxtBoy == null || emptyRowtipTxtBoy == "" || emptyRowtipTxtGirl == null || emptyRowtipTxtGirl == "" || emptyRowtipHeadlineBoy == null || emptyRowtipHeadlineBoy == "" || emptyRowtipHeadlineGirl == null || emptyRowtipHeadlineGirl == "") {
                    console.log(tipsDivcontect.Table[i].ID);

                    console.log($(".publishCb"))
                    for (var n = 0; n < $(".publishCb").length; n++) {

                        var itemID = $($(".publishCb")[n]).attr('theitemid');

                        if (tipsDivcontect.Table[i].ID == itemID) {
                            $($(".publishCb")[n]).children().attr("disabled", true);

                            $($(".publishCb")[n]).parent().attr("data-title", "על מנת לפרסם את הטיפ יש למלא את מלוא תוכן הטיפ");
                            $($(".publishCb")[n]).parent().attr("data-placement", "top");
                            $($(".publishCb")[n]).parent().attr("data-toggle", "tooltip");

                            // $($(".publishCb")[n]).tooltip();
                        }
                    }
                }



            }

            $('[data-toggle="tooltip"]').tooltip();


            //$(".form-check-input:disabled").mouseover(function () {
            //    console.log("Tooltip")
            //    $('.form-check').tooltip({ position: "top" });
            //});


            /*הוספת טיפ מהעורך*/
            $("#addTipBTN").click(function () {
                var Link = document.createElement("a");
                Link.href = "addTipEditorSection.aspx";
                Link.id = "Link"
                $("#addTipBTN").append(Link)
                Link.click();
            });


            $('#addTipFromEditor').click(function () {


                if (($("#HokaraTip").is(':checked') || $("#LivoiTip").is(':checked')) && $('#userTipHeadline').val() != '' && $('#userTipContect').val() != '' && $('#userHashTags').val() != '') {
                    var tipContect = 'img';
                    var serialContectInner;
                    var serialContect;
                    var serialContect_Jpg;

                    var tags;
                    var author;
                    var likesCount = '0';
                    var tipHeadline = $('#userTipHeadline').val();
                    var tipHeadlineGirl = '';
                    var tipHeadlineBoy = '';
                    var tipTxt = $('#userTipContect').val();
                    var tipTxtGirl = '';
                    var tipTxtBoy = '';
                    var publishTip = "false";
                    var IDTip;
                    var tipLink;
                    var BtnName;
                    var Fname = sessionStorage.getItem("userFName");

                    if ($("#HokaraTip").is(':checked')) {
                        console.log('hokara')
                        serialContectInner = 'TipFromUserHokara_part1.gif';
                        serialContect = 'TipFromUserHokara_part1.gif';
                        serialContect_Jpg = 'TipFromUserHokara.png';
                        tags = '#מוקירים_מתנדבים';
                    }
                    if ($("#LivoiTip").is(':checked')) {
                        console.log('livoi')
                        serialContectInner = 'TipFromUserLivoi_part1.gif';
                        serialContect = 'TipFromUserLivoi_part1.gif';
                        serialContect_Jpg = 'TipFromUserLivoi.png';
                        tags = '#מלווים_מתנדבים'
                    }

                    var tipHashTag = ' ' + tags + ' ' + $('#userHashTags').val() + ' ';


                    if ($("#anonimus").is(':checked')) {
                        author = 'אנונימי/ת';
                    }
                    if ($("#indentifyUser").is(':checked')) {
                        var myFisrtName = sessionStorage.getItem("userFName");
                        var myLastName = sessionStorage.getItem("userLName");
                        author = myFisrtName + ' ' + myLastName + ',' + sessionStorage.getItem("userlogedEmail");

                    }


                    if ($('#addLink').val() != "") {
                        tipLink = $('#addLink').val();
                        BtnName = "קישור";
                    } else {
                        tipLink = "";
                        BtnName = "";
                    }



                    $.ajax({
                        method: "GET",
                        async: false,
                        url: "Handlers/Handler.ashx",
                        data: { Action: "getTipNum" } //שליחת שם הפעולה שתתבצע בהנדלר
                    })
                        .done(function (data) { //ברגע שהפעולה הסתיימה   
                            var tipsDivNum = JSON.parse(data)

                            console.log(tipsDivNum);
                            //var num = tipsDivNum
                            IDTip = ('tip' + (parseInt(tipsDivNum) + 1)).toString();
                            console.log(IDTip);
                        })
                        .fail(function (error) { //במצב של שגיאה  
                            console.log("error");
                            console.log(error.statusText);
                        })

                    // console.log(IDTip, tipContect, serialContectInner, serialContect, serialContect_Jpg, likesCount, tipHeadline, tipHeadlineGirl, tipHeadlineBoy, tipTxt, tipTxtGirl, tipTxtBoy, tipHashTag)
                    $.ajax({
                        method: "POST",
                        url: "Handlers/Handler.ashx",
                        data: { Action: "userAddTip", IDTip: IDTip, tipContect: tipContect, serialContectInner: serialContectInner, serialContect: serialContect, serialContect_Jpg: serialContect_Jpg, likesCount: likesCount, tipHeadline: tipHeadline, tipHeadlineGirl: tipHeadlineGirl, tipHeadlineBoy: tipHeadlineBoy, tipTxt: tipTxt, tipTxtGirl: tipTxtGirl, tipTxtBoy: tipTxtBoy, tipHashTag: tipHashTag, publishTip: publishTip, tipLink: tipLink, author: author, BtnName: BtnName } //שליחת שם הפעולה שתתבצע בהנדלר
                    })
                        .done(function (data) { //ברגע שהפעולה הסתיימה   
                            // var info = JSON.parse(data)
                            console.log(data);
                            //console.log(userIdNum)
                            //$('#containTips').empty();


                        })
                        .fail(function (error) { //במצב של שגיאה  
                            console.log("error");
                            //  console.log(userIdNum);
                            console.log(error.statusText);
                        })

                    $('#addTipPopup').addClass('popupClose')
                    $('#addTipPopup').removeClass('is-open')
                    $('#addTipPopup').removeClass('overlay')
                } else {

                    $('#addTipError').css('display', 'block');
                    $('#addTipError').css('color', 'rgb(230, 43, 96)');
                    $('#addTipError').css('opacity', '1');
                    $('#addTipError').css('transition', 'opacity 2s linear');
                    $('#addTipError').css('font-size', '20px');

                    setTimeout(function () {
                        $('#addTipError').css('display', 'none');
                        $('#addTipError').css('opacity', '0');
                        $('#addTipError').css('visibility 0s 2s, opacity 2s linear');
                    }, 10000);
                    // $('#addTipError').css('display', 'block');
                }
            });

            ////////////*************************/
            function startOfWeek(date) {
                var diff = date.getDate() - date.getDay() + (date.getDay() === 0 ? -6 : 0);

                return new Date(date.setDate(diff));
            }

            let dt = new Date();

            //startOfWeek(dt);
            /*****************************************/

            function endOfWeek(date) {
                var lastday = date.getDate() - date.getDay() + 6;
                return new Date(date.setDate(lastday));
            }

            //  dt = new Date();

            //endOfWeek(dt);

            function join(t, a, s) {
                function format(m) {
                    let f = new Intl.DateTimeFormat("he", m);
                    return f.format(t);
                }
                return a.map(format).join(s);
            }

            let format = [{ day: "2-digit" }, { month: "2-digit" }, { year: "numeric" }];
            let tipDateendOfWeek = join(endOfWeek(dt), format, ".");
            let tipDatestartOfWeek = join(startOfWeek(dt), format, ".");
            console.log(tipDateendOfWeek);
            console.log(tipDatestartOfWeek);
            /////////***************************/


            //סימון מה הטיפ האחרון שהעורך ראה
            for (var i = 0; i < tipsDivNum; i++) {
                console.log($(".bookMarkClass"))
                for (var x = 0; x < $(".bookMarkClass").length; x++) {
                    var itemSeen = $($(".bookMarkClass")[x]).attr('lastSeen');
                    console.log(itemSeen)
                    if (itemSeen == 'False') { itemSeen = false }
                    if (itemSeen == 'True') { itemSeen = true }
                    var itemSeenID = $($(".bookMarkClass")[x]).attr('theitemid');
                    console.log((tipsDivcontect.Table[i].lastSeen))
                    console.log((itemSeen))
                    if (tipsDivcontect.Table[i].lastSeen == (itemSeen)) {
                        console.log('here')
                        $($(".bookMarkClass")[x]).css("display", 'none');
                    } if (itemSeen == true) {
                        $($(".bookMarkClass")[x]).css("display", 'block');

                    }
                }
                /************************************************************/



            }



            /******************************/
            for (var g = 0; g < tipsDivNum; g++) {
                var dateFrom = tipDatestartOfWeek.toString();
                var dateTo = tipDateendOfWeek.toString();

                console.log(dateFrom + " " + dateTo);
                for (var x = 0; x < $(".newTipClass").length; x++) {
                    var dateCheck = $($(".newTipClass")[x]).attr("uploadeDate").toString();
                    console.log(dateCheck)
                    var d1 = dateFrom.split(".");
                    var d2 = dateTo.split(".");
                    var c = dateCheck.split(".");

                    var from = new Date(d1[2], parseInt(d1[1]) - 1, d1[0]); // -1 because months are from 0 to 11
                    var to = new Date(d2[2], parseInt(d2[1]) - 1, d2[0]);
                    var check = new Date(c[2], parseInt(c[1]) - 1, c[0]);

                    //if (console.log(check > from && check < to)) {
                    //    console.log("true date between this week");
                    //};
              

                    if ((check > from && check <= to)) {
                      //  console.log("true date between this week");
                        $($(".newTipClass")[x]).css("display", 'block');
                    } else {
                     //   console.log("false date between this week");
                        $($(".newTipClass")[x]).css("display", 'none');
                    };

                }
            }
            /*************************************************************/
            //אם העורך ראה את הטיפ
            for (var y = 0; y < $(".editicons").length; y++) {
                var sawItem = $($(".editicons")[y]).attr('sawtip');
                if (sawItem == 'False') { sawItem = false }
                if (sawItem == 'True') { sawItem = true }
                if (sawItem == true) {
                    $($(".editicons")[y]).parent().parent().css('background-color', '#eaeaea');
                }
               // console.log(sawItem)
            }

            $(".editicons").click(function (e) {
             //   console.log($(e.target));
               // console.log($(e.target).attr('theItemId'));
                IDTipToEdit = $(e.target).attr('theItemId');
                sessionStorage.setItem('TipId', IDTipToEdit.toString());

                $.ajax({
                    method: "GET",
                    async: false,
                    url: "Handlers/Handler.ashx",
                    data: { Action: "updatelastSeenAllToFalse" } //שליחת שם הפעולה שתתבצע בהנדלר
                })
                    .done(function (data) { //ברגע שהפעולה הסתיימה   

                    })
                    .fail(function (error) { //במצב של שגיאה  
                       // console.log("error");
                       // console.log(error.statusText);
                    })


                var TipIDlastSeen = IDTipToEdit;

                $.ajax({
                    method: "GET",
                    async: false,
                    url: "Handlers/Handler.ashx",
                    data: { Action: "updatelastSeenCurrentToTrue", TipIDlastSeen: TipIDlastSeen } //שליחת שם הפעולה שתתבצע בהנדלר
                })
                    .done(function (data) { //ברגע שהפעולה הסתיימה   

                    })
                    .fail(function (error) { //במצב של שגיאה  
                        //console.log("error");
                        //console.log(error.statusText);
                    })

                var TipIDSeen = sessionStorage.getItem('TipId');
               // console.log(TipIDSeen)
                $.ajax({
                    method: "GET",
                    async: false,
                    url: "Handlers/Handler.ashx",
                    data: { Action: "updateSeen", TipIDSeen: TipIDSeen } //שליחת שם הפעולה שתתבצע בהנדלר
                })
                    .done(function (data) { //ברגע שהפעולה הסתיימה   
                       // console.log(data)
                    })
                    .fail(function (error) { //במצב של שגיאה  
                        //console.log("error");
                        //console.log(error.statusText);
                    })

            });


            $(".editicons").mouseover(function (e) {

                $(e.target).css('transform', 'rotate(15deg)');
            }).mouseout(function (e) {
                $(e.target).css('transform', 'rotate(0deg)');
            });

            $(".deleteicons").mouseover(function (e) {
                $(e.target).attr('src', './img/trashHover.png');
            }).mouseout(function (e) {
                $(e.target).attr('src', './img/trash.png');
            });

            $(".deleteicons").click(function (e) {

                //console.log('delete-NoneEvents');
                //console.log($(e.target).attr('theItemId'));
                var IDTipToDelete = $(e.target).attr('theItemId');

                sessionStorage.setItem('TipId', IDTipToDelete.toString())
                //console.log(IDTipToDelete);


                $.ajax({
                    method: "GET",
                    async: false,
                    url: "Handlers/Handler.ashx",
                    data: { Action: "getTipContectById", IDTipContent: IDTipToDelete } //שליחת שם הפעולה שתתבצע בהנדלר
                })
                    .done(function (data) { //ברגע שהפעולה הסתיימה   
                        var tipsDivcontect = JSON.parse(data)
                        var tipsDivNum = JSON.parse(data).Table.length
                      //  console.log(tipsDivcontect);

                        $("#deleteTipPop").removeClass('popupClose');
                        $("#deleteTipPop").addClass('overlay');
                      //  console.log($("#deleteQ"));
                        $("#deleteQ").text(" האם למחוק את הטיפ " + "'" + (tipsDivcontect.Table[0].tipHeadline) + "'" + "?");
                        //(tipsDivcontect.Table[0].tipHeadline);
                    })
                    .fail(function (error) { //במצב של שגיאה  
                        //console.log("error");
                        //console.log(error.statusText);
                    })
            });



            $("#yesDeleteBtn").click(function (e) {
               // console.log(" yes");
               // console.log($(e.target).attr('theItemId'));
                var IDTipToDelete = sessionStorage.getItem('TipId');


             //   console.log(IDTipToDelete);

                $.ajax({
                    method: "GET",
                    async: false,
                    url: "Handlers/Handler.ashx",
                    data: { Action: "deleteTip", IDTipToDelete: IDTipToDelete } //שליחת שם הפעולה שתתבצע בהנדלר
                })
                    .done(function (data) { //ברגע שהפעולה הסתיימה   
                        tipsDivcontect = JSON.parse(data)
                        tipsDivNum = JSON.parse(data).Table.length
                        console.log(tipsDivNum);




                    })
                    .fail(function (error) { //במצב של שגיאה  
                       // console.log("error");
                       // console.log(error.statusText);
                    })

            });

            $(".publishCb").change(function (e) {
                var idTipPublish = $(e.target).parent().attr('theItemId');
             //   console.log(idTipPublish)
                sessionStorage.setItem('TipIdPublish', idTipPublish.toString())
                var TipID = sessionStorage.getItem('TipIdPublish');
                var publishTipEditor;

                if ($(e.target).prop("checked")) {
                    publishTipEditor = 'true';
                   // console.log(true);
                } else {
                    publishTipEditor = 'false';
                    //console.log(false);
                }
                $.ajax({
                    method: "GET",
                    async: false,
                    url: "Handlers/Handler.ashx",
                    data: { Action: "updateTipPublish", TipID: TipID, publishTipEditor: publishTipEditor } //שליחת שם הפעולה שתתבצע בהנדלר
                })
                    .done(function (data) { //ברגע שהפעולה הסתיימה   
                        //tipsDivcontect = JSON.parse(data)
                        //tipsDivNum = JSON.parse(data).Table.length
                        // console.log(tipsDivNum);




                    })
                    .fail(function (error) { //במצב של שגיאה  
                        //console.log("error");
                       // console.log(error.statusText);
                    })
            });

            //$(".form-check-input").hover(function (e) {
            //    var idTipPublish = $(e.target).parent().attr('theItemId');
            //    console.log(idTipPublish);
            //   // console.log($(".form-check-input").attr("disabled","disabled"))
            //    console.log($(e.target))
            //    console.log($(e.target).hasClass(":disabled"))
            //    if ($(".form-check-input").hasClass(":disabled")) {

            //        console.log("bla  bla")



            //    } else {
            //        console.log("yes yes")
            //    }
            //    /************************************************************************!!!!!!!!!!!*/
            //    // לבדוק מה חסר ושיופיע טולטיפ מתאים


            //});

        }

    }


    // אם אנחנו בדף עריכה של טיפ קיים

    function editTipsByGender() {



        $('.msgLimit').css('opacity', '0');

        var TipToeditId = sessionStorage.getItem('TipId');
        //console.log(TipToeditId);

        $.ajax({
            method: "GET",
            async: false,
            url: "Handlers/Handler.ashx",
            data: { Action: "getTipContectById", IDTipContent: TipToeditId } //שליחת שם הפעולה שתתבצע בהנדלר
        })
            .done(function (data) { //ברגע שהפעולה הסתיימה   
                var tipsDivcontect = JSON.parse(data)
                var tipsDivNum = JSON.parse(data).Table.length
                //console.log(tipsDivcontect);


                $("#tipHeadLineTXT").val(tipsDivcontect.Table[0].tipHeadline);
                $("#tipHeadLineTXTF").val(tipsDivcontect.Table[0].tipHeadlineGirl);
                $("#tipHeadLineTXTM").val(tipsDivcontect.Table[0].tipHeadlineBoy);

                var tipContentTXTSTR = tipsDivcontect.Table[0].tipTxt;

                $("#tipContentTXT").val(tipContentTXTSTR.replaceAll("<br>", " "));


                var tipContentTXTFSTR = tipsDivcontect.Table[0].tipTxtGirl;

                $("#tipContentTXTF").val(tipContentTXTFSTR.replaceAll("<br>", " "));

                var tipContentTXTMSTR = tipsDivcontect.Table[0].tipTxtBoy;
               // console.log(tipContentTXTMSTR.replaceAll("<br>", "n"))
                $("#tipContentTXTM").val(tipContentTXTMSTR.replaceAll("<br>", " "));

                $("#tagLineTXT").val(tipsDivcontect.Table[0].tipHashTag);
                $("#tipImg").attr("src", './img/Tips/' + tipsDivcontect.Table[0].serialContect_Jpg);

                //console.log(tipsDivcontect.Table[0].author);
                if (tipsDivcontect.Table[0].author != "") {
                  //  console.log("user writeTip")
                    $("#tipHeadLineTXT").attr("ReadOnly", "true");
                    $("#tipContentTXT").attr("ReadOnly", "true");
                    $("#tagLineTXT").attr("ReadOnly", "true");

                    $("#tipHeadLineTXT").addClass("noChangeTXT");
                    $("#tipContentTXT").addClass("noChangeTXT");
                    $("#tagLineTXT").addClass("noChangeTXT");

                    $("#headlineCounterdiv").css("display", "none");
                    $("#tipContentCounterDIV").css("display", "none");
                    /*להוסיף את הדיב קאונטר של התיוגים*/
                }
                if (tipsDivcontect.Table[0].author == "") {
                   // console.log("editor writeTip")
                    $("#tipHeadLineTXT").removeAttr(("ReadOnly"));
                    $("#tipContentTXT").removeAttr(("ReadOnly"));
                    $("#tagLineTXT").removeAttr(("ReadOnly"));
                    $('.noteCantChangeP').css('display', 'none');

                    $("#tipHeadLineTXT").removeClass("noChangeTXT");
                    $("#tipContentTXT").removeClass("noChangeTXT");
                    $("#tagLineTXT").removeClass("noChangeTXT");

                    $("#tipHeadLineTXT").addClass("TXT");
                    $("#tipContentTXT").addClass("TXT");
                    $("#tagLineTXT").addClass("TXT");

                    $("#headlineCounterdiv").css("display", "block");
                    $("#tipContentCounterDIV").css("display", "block");
                    /*להוסיף את הדיב קאונטר של התיוגים*/
                }
                //console.log(tipsDivcontect.Table[0].tipHeadline)

            })
            .fail(function (error) { //במצב של שגיאה  
               // console.log("error");
               // console.log(error.statusText);
            })

        //לרשום את מספר התווים העדכני
        $("#headlineCounterH").text($("#tipHeadLineTXT").val().length)
        $("#headlineCounterF").text($("#tipHeadLineTXTF").val().length)
        $("#headlineCounterM").text($("#tipHeadLineTXTM").val().length)


        $("#tipContentCounter").text($("#tipContentTXT").val().length)
        $("#tipContentCounterF").text($("#tipContentTXTF").val().length)
        $("#tipContentCounterM").text($("#tipContentTXTM").val().length)
        $("#tipTagsCounter").text($("#tagLineTXT").val().length)


        if ($("#headlineCounterdiv").text().split("/")[0] == $("#headlineCounterdiv").text().split("/")[1]) {
            $("#headlineCounterdiv").css("color", 'rgb(230, 43, 96)')
        }
        if ($("#headlineCounterFdiv").text().split("/")[0] == $("#headlineCounterFdiv").text().split("/")[1]) {
            $("#headlineCounterFdiv").css("color", 'rgb(230, 43, 96)')
        }


        if ($("#tipContentCounterDIV").text().split("/")[0] == $("#tipContentCounterDIV").text().split("/")[1]) {
            $("#tipContentCounterDIV").css("color", "red")
        }
        if ($("#tipContentCounterFDIV").text().split("/")[0] == $("#tipContentCounterFDIV").text().split("/")[1]) {
            $("#tipContentCounterFDIV").css("color", 'rgb(230, 43, 96)')
        }
        if ($("#tipContentCounterMDIV").text().split("/")[0] == $("#tipContentCounterMDIV").text().split("/")[1]) {
            $("#tipContentCounterMDIV").css("color", 'rgb(230, 43, 96)')
        }

        if ($("#tipTagsCounterDIV").text().split("/")[0] == $("#tipTagsCounterDIV").text().split("/")[1]) {
            $("#tipTagsCounterDIV").css("color", 'rgb(230, 43, 96)')
        }



        $("#BackToTipTableBTN").click(function (e) {
            if (sessionStorage.getItem("savedChangesEdit") == "true") {
                $("#linkToTipTable").attr("href", "TipsEditor.aspx");
                sessionStorage.setItem("savedChangesEdit", "false");
            } else {
                $("#saveChangesPopup").removeClass("popupClose");
                $("#saveChangesPopup").addClass("overlay");
            }
        });


        $("#SaveChange").click(function (e) {
            $("#saveChangesBtn").click();
        });

        //$("#SaveChange").click(function (e) {
        //    $("#saveChangesBtn").click();
        //});


        if ($("#successAddTipPopup").hasClass("overlay")) {
           // console.log("hasClass")

            /********************/


            $('#successAddTipPopup').addClass('is-open')
            $('#successAddTipPopup').addClass('overlay')

            let countDiv = document.querySelector("#count")
            let spanCount = document.querySelector("#countSpan");

            let count = 5;




            var gobackA = document.createElement("a");
            gobackA.href = "TipsEditor.aspx";
            countable = setInterval(function () {

                spanCount.innerText =  " נעבור לטבלת הטיפים בעוד " + count

                if (count > 0) {
                    count -= 1;
                } else if (count <= 0) {
                    clearInterval(countable);
                    // spanCount.innerText = "Wait..."

                  
                    gobackA.click();
                }

            }, 500);



            setTimeout(function () {
                $('#successAddTipPopup').removeClass('is-open')
                $('#successAddTipPopup').removeClass('overlay')

                $('body').css('height', 'auto');

                $('#successAddTipPopup').addClass('popupClose');

            }, 10000);
            if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) || screen.width <= 765) { $('body').css('height', '100vh'); }
            else { $('body').css('height', '100%'); }
           // conffeti(document.querySelector('#containerIndex'));
            //let body = document.getElementById("form1")
            //party.confetti(body, {
            //    count: party.variation.range(350, 550),
            //});

            /********************/

        }



        //כפתןר שמירת העריכה
        $("#saveChangesBtn").click(function (e) {



            sessionStorage.setItem("savedChangesEdit", "true");

            //console.log('saveChangesBtn');
            var TCurrentID = sessionStorage.getItem('TipId');



            var tipHeadLineTXT = $("#tipHeadLineTXT").val();
            var tipHeadLineTXTF = $("#tipHeadLineTXTF").val();
            var tipHeadLineTXTM = $("#tipHeadLineTXTM").val();

            var tipContentTXT = $("#tipContentTXT").val();
            var tipContentTXTF = $("#tipContentTXTF").val();
            var tipContentTXTM = $("#tipContentTXTM").val();

            var tagLineTXT = $("#tagLineTXT").val();

            //console.log(tipHeadLineTXT)
           /// console.log(tagLineTXT);
           // console.log(tipContentTXT);

            $.ajax({
                method: "post",
                async: false,
                url: "Handlers/Handler.ashx",
                data: { Action: "updateTipTXT", TCurrentID: TCurrentID, tipHeadLineTXTF: tipHeadLineTXTF, tipHeadLineTXTM: tipHeadLineTXTM, tipContentTXTF: tipContentTXTF, tipContentTXTM: tipContentTXTM, tagLineTXT: tagLineTXT, tipHeadLineTXT: tipHeadLineTXT, tipContentTXT: tipContentTXT } //שליחת שם הפעולה שתתבצע בהנדלר
            })
                .done(function (data) { //ברגע שהפעולה הסתיימה   


                })
                .fail(function (error) { //במצב של שגיאה  
                  //  console.log("error");
                 //   console.log(error.statusText);
                })
        });




        $("#tipHeadLineTXT").keyup(function (e) {
          //  console.log(this)
            countChar(this);
        });
        $("#tipHeadLineTXTF").keyup(function (e) {
            //console.log(this)
            countChar(this);
        });
        $("#tipHeadLineTXTM").keyup(function (e) {
            countChar(this);
        });
        $("#tipContentTXT").keyup(function (e) {
            countChar(this);
        });
        $("#tipContentTXTF").keyup(function (e) {
            countChar(this);
        });
        $("#tipContentTXTM").keyup(function (e) {
            countChar(this);
        });
        $("#tagLineTXT").keyup(function (e) {
            countChar(this);
        });


        function countChar(val) {
           // console.log((val))
            var len = val.value.length;

            var currentMAX = $(val).attr('MaxLengthChar');
           // console.log(currentMAX)
            var labelName = $(val).attr('labelName');
            var DivName = $(val).attr('DivName');
            var LimitMsg = $(val).attr('Msg');
            //console.log(DivName)

            if (len >= parseInt(currentMAX) + 1) {
                val.value = val.value.substring(0, currentMAX);

            } else {
                $(labelName).text(parseInt(len).toString());
                $(LimitMsg).css('opacity', '0');
            }
            if (len == parseInt(currentMAX)) {
                //  $(labelName).css("color", "#E62B60");
                $(DivName).css("color", "#E62B60");

                $(LimitMsg).css('visibility', 'visible');
                $(LimitMsg).css('color', 'rgb(230, 43, 96)');
                $(LimitMsg).css('opacity', '1');
                $(LimitMsg).css('transition', 'opacity 2s linear');
                setTimeout(function () {
                    $(LimitMsg).css('visibility', 'hidden');
                    $(LimitMsg).css('opacity', '0');
                    $(LimitMsg).css('visibility 0s 2s, opacity 2s linear');
                }, 10000);
            }
        };

       

    };

    $("#aboutLink").click(function () {
        // $(".overlay-about").addClass("is-open-about");
        $("#about").addClass("is-open-about");
        $("#about").addClass("overlay-about");
        $("#about").removeClass("popupClose");

    })

    $(".close-about").click(function () {
        // $(".overlay-about").removeClass("is-open-about");
        $("#about").removeClass("is-open-about");
        $("#about").removeClass("overlay-about");
        $("#about").addClass("popupClose");

    })

    /***********************************דף שהעורך מוסיף טיפ ***************************/
    function addTipEditor() {

        $("#BackToTipTableBTN").click(function (e) {
            if (sessionStorage.getItem("savedChangesEdit") == "true") {
             //   $("#linkToTipTable").attr("href", "TipsEditor.aspx");
                $("#saveEditorTip").click();
                sessionStorage.setItem("savedChangesEdit", "false");
            } else {

                if (($("#HokaraTip").is(':checked') || $("#LivoiTip").is(':checked')) || $('#userTipHeadline').val() != '' || $('#userTipContect').val() != '' || $('#userHashTags').val() != '' || $('#tipContentTXTM').val() != '' || $('#tipContentTXTF').val() != '' || $('#tipHeadLineTXTM').val() != '' || $('#tipHeadLineTXTF').val() != '') {
                    $("#saveChangesPopup").removeClass("popupClose");
                    $("#saveChangesPopup").addClass("overlay");

                } 

              
            }
        });

        if ($("#HokaraTip").is(":checked")) {
            $(".subjectRBLBL").addClass("subjectRBLBLChecked");
            //$(".subjectRBLBL").addClass("subjectRBLBL");
            $(".subjectRBLBLLivoiTip").removeClass("subjectRBLBLChecked");
            $("#RBtagHokara").css("font-weight", "bold");
            $("#RBtagLivoi").css("font-weight", "inherit");
            $(".subjectRBLBLChecked").css("opacity", "1")
        }

        if ($("#LivoiTip").is(":checked")) {
            $(".subjectRBLBLLivoiTip").addClass("subjectRBLBLChecked");
            $("#RBtagHokara").css("font-weight", "inherit");
            $("#RBtagLivoi").css("font-weight", "bold");
            //$(".subjectRBLBL").addClass("subjectRBLBL");
            $(".subjectRBLBL").removeClass("subjectRBLBLChecked");
            $(".subjectRBLBLChecked").css("opacity", "1")
        }

        $("#HokaraTip").change(function () {
         //   console.log("here hokara changed")
            if ($("#HokaraTip").is(":checked")) {
                $(".subjectRBLBL").addClass("subjectRBLBLChecked");
                //$(".subjectRBLBL").addClass("subjectRBLBL");
                $(".subjectRBLBLLivoiTip").removeClass("subjectRBLBLChecked");
                $("#RBtagHokara").css("font-weight", "bold");
                $("#RBtagLivoi").css("font-weight", "inherit");
                $(".subjectRBLBLChecked").css("opacity", "1")
            }
        });
        $("#LivoiTip").change(function () {
           // console.log("here livoi changed")
            if ($("#LivoiTip").is(":checked")) {
                $(".subjectRBLBLLivoiTip").addClass("subjectRBLBLChecked");
                $("#RBtagHokara").css("font-weight", "inherit");
                $("#RBtagLivoi").css("font-weight", "bold");
                //$(".subjectRBLBL").addClass("subjectRBLBL");
                $(".subjectRBLBL").removeClass("subjectRBLBLChecked");
                $(".subjectRBLBLChecked").css("opacity", "1")
            }
        });


        //לרשום את מספר התווים העדכני
        $("#headlineCounterH").text($("#tipHeadLineTXT").val().length)
        $("#headlineCounterF").text($("#tipHeadLineTXTF").val().length)
        $("#headlineCounterM").text($("#tipHeadLineTXTM").val().length)


        $("#tipContentCounter").text($("#tipContentTXT").val().length)
        $("#tipContentCounterF").text($("#tipContentTXTF").val().length)
        $("#tipContentCounterM").text($("#tipContentTXTM").val().length)
        $("#tipTagsCounter").text($("#tagLineTXT").val().length)

        // כשמגיעים למספר התווים המקסימלי התווית תצבע באדום
        if ($("#headlineCounterdiv").text().split("/")[0] == $("#headlineCounterdiv").text().split("/")[1]) {
            $("#headlineCounterdiv").css("color", 'rgb(230, 43, 96)')
        }
        if ($("#headlineCounterFdiv").text().split("/")[0] == $("#headlineCounterFdiv").text().split("/")[1]) {
            $("#headlineCounterFdiv").css("color", 'rgb(230, 43, 96)')
        }


        if ($("#tipContentCounterDIV").text().split("/")[0] == $("#tipContentCounterDIV").text().split("/")[1]) {
            $("#tipContentCounterDIV").css("color", "red")
        }
        if ($("#tipContentCounterFDIV").text().split("/")[0] == $("#tipContentCounterFDIV").text().split("/")[1]) {
            $("#tipContentCounterFDIV").css("color", 'rgb(230, 43, 96)')
        }
        if ($("#tipContentCounterMDIV").text().split("/")[0] == $("#tipContentCounterMDIV").text().split("/")[1]) {
            $("#tipContentCounterMDIV").css("color", 'rgb(230, 43, 96)')
        }

        if ($("#tipTagsCounterDIV").text().split("/")[0] == $("#tipTagsCounterDIV").text().split("/")[1]) {
            $("#tipTagsCounterDIV").css("color", 'rgb(230, 43, 96)')
        }

        // check char length
        $("#tipHeadLineTXT").keyup(function (e) {
            countChar(this);
        });
        $("#tipHeadLineTXTF").keyup(function (e) {
            countChar(this);
        });
        $("#tipHeadLineTXTM").keyup(function (e) {
            countChar(this);
        });
        $("#tipContentTXT").keyup(function (e) {
            countChar(this);
        });
        $("#tipContentTXTF").keyup(function (e) {
            countChar(this);
        });
        $("#tipContentTXTM").keyup(function (e) {
            countChar(this);
        });
        $("#tagLineTXT").keyup(function (e) {
            countChar(this);
        });
        $(".msgLimit").css('visibility', 'hidden');

        function countChar(val) {
            var len = val.value.length;
         //   console.log((val))
            var currentMAX = $(val).attr('MaxLengthChar');
           // console.log(currentMAX)
            var labelName = $(val).attr('labelName');
            var DivName = $(val).attr('DivName');
            var LimitMsg = $(val).attr('Msg');
          //  console.log(DivName)

            if (len >= parseInt(currentMAX) + 1) {
                val.value = val.value.substring(0, currentMAX);

            } else {
                $(labelName).text(parseInt(len).toString());
                $(LimitMsg).css('opacity', '0');
            }
            if (len == parseInt(currentMAX)) {
                //  $(labelName).css("color", "#E62B60");
                $(DivName).css("color", "#E62B60");

                $(LimitMsg).css('visibility', 'visible');
                $(LimitMsg).css('color', 'rgb(230, 43, 96)');
                $(LimitMsg).css('opacity', '1');
                $(LimitMsg).css('transition', 'opacity 2s linear');
                setTimeout(function () {
                    $(LimitMsg).css('visibility', 'hidden');
                    $(LimitMsg).css('opacity', '0');
                    $(LimitMsg).css('visibility 0s 2s, opacity 2s linear');
                }, 10000);
            }
        };

        //when clicking add more tip the input cleared
        
        $("#AddMoreTipBTN").click(function () {
            $("#tipHeadLineTXT").val("");
            $("#tipHeadLineTXTF").val("");
            $("#tipHeadLineTXTM").val("");
            $("#tipContentTXT").val("");
            $("#tipContentTXTF").val("");
            $("#tipContentTXTM").val("");
            $("#tagLineTXT").val("");
            $("#addLink").val("");
            
            $("#HokaraTip").removeAttr("checked");
            $("#LivoiTip").removeAttr("checked");

        })

        // save tip
       // console.log("add Tip Editor")
        $("#saveEditorTip").click(function () {
           

            if (($("#LivoiTip").is(":checked") || $("#HokaraTip").is(":checked"))) {
                if ($("#tipHeadLineTXT").val().length > 0) {
                    $('#successAddTipPopup').removeClass('popupClose')
                    $('#successAddTipPopup').addClass('is-open')
                    $('#successAddTipPopup').addClass('overlay')
                   // console.log("saveBtn")


                    var tipContect = 'img';
                    var serialContectInner;
                    var serialContect;
                    var serialContect_Jpg;

                    var tags;
                    var author;
                    var likesCount = '0';
                    var tipHeadline = $('#tipHeadLineTXT').val();
                    var tipHeadlineGirl = $('#tipHeadLineTXTF').val();;
                    var tipHeadlineBoy = $('#tipHeadLineTXTM').val();;
                    var tipTxt = $('#tipContentTXT').val();
                    var tipTxtGirl = $('#tipContentTXTF').val();;
                    var tipTxtBoy = $('#tipContentTXTM').val();;
                    var publishTip = "false";
                    var IDTip;
                    var tipLink;
                    var BtnName;
                    var tipDate;

                    //תאריך של היום
                    function join(t, a, s) {
                        function format(m) {
                            let f = new Intl.DateTimeFormat('he', m);
                            return f.format(t);
                        }
                        return a.map(format).join(s);
                    }

                    let format = [{ day: '2-digit' }, { month: '2-digit' }, { year: 'numeric' }];
                    tipDate = join(new Date, format, '.');
                    //console.log(tipDate);


                    //var Fname = sessionStorage.getItem("userFName");

                    if ($("#HokaraTip").is(':checked')) {
                     //   console.log('hokara')
                        serialContectInner = 'TipFromUserHokara_part1.gif';
                        serialContect = 'TipFromUserHokara_part1.gif';
                        serialContect_Jpg = 'TipFromUserHokara.png';
                        tags = '#מוקירים_מתנדבים';
                    }
                    if ($("#LivoiTip").is(':checked')) {
                       // console.log('livoi')
                        serialContectInner = 'TipFromUserLivoi_part1.gif';
                        serialContect = 'TipFromUserLivoi_part1.gif';
                        serialContect_Jpg = 'TipFromUserLivoi.png';
                        tags = '#מלווים_מתנדבים'
                    }

                    var tipHashTag = ' ' + tags + ' ' + $('#tagLineTXT').val() + ' ';


                    if ($('#addLink').val() != "") {
                        tipLink = $('#addLink').val();
                        BtnName = "קישור";
                    } else {
                        tipLink = "";
                        BtnName = "";
                    }



                    $.ajax({
                        method: "GET",
                        async: false,
                        url: "Handlers/Handler.ashx",
                        data: { Action: "getTipNum" } //שליחת שם הפעולה שתתבצע בהנדלר
                    })
                        .done(function (data) { //ברגע שהפעולה הסתיימה   
                            var tipsDivNum = JSON.parse(data)

                         //   console.log(tipsDivNum);
                            //var num = tipsDivNum
                            IDTip = ('tip' + (parseInt(tipsDivNum) + 1)).toString();
                        //    console.log(IDTip);
                        })
                        .fail(function (error) { //במצב של שגיאה  
                         //   console.log("error");
                         //   console.log(error.statusText);
                        })

                    // console.log(IDTip, tipContect, serialContectInner, serialContect, serialContect_Jpg, likesCount, tipHeadline, tipHeadlineGirl, tipHeadlineBoy, tipTxt, tipTxtGirl, tipTxtBoy, tipHashTag)
                    $.ajax({
                        method: "POST",
                        url: "Handlers/Handler.ashx",
                        data: { Action: "userAddTip", IDTip: IDTip, tipContect: tipContect, serialContectInner: serialContectInner, serialContect: serialContect, serialContect_Jpg: serialContect_Jpg, likesCount: likesCount, tipHeadline: tipHeadline, tipHeadlineGirl: tipHeadlineGirl, tipHeadlineBoy: tipHeadlineBoy, tipTxt: tipTxt, tipTxtGirl: tipTxtGirl, tipTxtBoy: tipTxtBoy, tipHashTag: tipHashTag, publishTip: publishTip, tipLink: tipLink, author: author, BtnName: BtnName, tipDate: tipDate } //שליחת שם הפעולה שתתבצע בהנדלר
                    })
                        .done(function (data) { //ברגע שהפעולה הסתיימה   
                            // var info = JSON.parse(data)
                        //    console.log(data);
                            //console.log(userIdNum)
                            //$('#containTips').empty();
                            sessionStorage.setItem("savedChangesEdit", "true");


                        })
                        .fail(function (error) { //במצב של שגיאה  
                        //    console.log("error");
                            //  console.log(userIdNum);
                        //    console.log(error.statusText);
                        })




                } else {
                    $("#fillallFildsPopup").removeClass("popupClose");
                    $("#fillallFildsPopup").addClass("overlay");

                    //let body = document.getElementById("form1")
                    //party.confetti(body, {
                    //    count: party.variation.range(350, 550),
                    //});
                }
            } else {
              //  console.log("popup");

                $("#fillallFildsPopup").removeClass("popupClose");
                $("#fillallFildsPopup").addClass("overlay");

            }
        });

        
    }

});
