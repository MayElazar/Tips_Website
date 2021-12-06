




$(document).ready(function () {





    //$("#indentifyUser").text(tipsDivcontect.Table[0].tipHashTag);













    var serialContectInner;
    // פונרציה לביקת סוג הקובץ שנבחר אם לא נבחר סוג קובץ מתאים מוצגת הודעה לבחירת תמונה אחרת
    var file = document.getElementById('FileUpload1');
    var endFileName

    file.onchange = function (e) {
        var ext = this.value.match(/\.([^\.]+)$/)[1];
      //  document.getElementById("wrongFBK").classList.add("hidden");

        console.log('in aspx')
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
         


                if (this.files && this.files[0]) {

                    var reader = new FileReader();

                    reader.onload = function (e) {

                       // document.getElementById("panelPic").classList.remove("hidden");
                        $('#showMeTheImg').attr('src', e.target.result);
                    }
                    reader.readAsDataURL(this.files[0]);

                    //var fullDate = new Date();
                    //var day = String(fullDate.getDate()).padStart(2, '0');
                    //var Month = String(fullDate.getMonth() + 1).padStart(2, '0');
                    //var year = fullDate.getFullYear();
                    //var hours = String(fullDate.getHours()).padStart(2, '0');
                    //var min = String(fullDate.getMinutes()).padStart(2, '0');
                    //var sec = String(fullDate.getSeconds()).padStart(2, '0');
                    //const milsec = String(fullDate.getMilliseconds()).padStart(2, '0');

                    var oldfileName = this.files[0].name;
                    console.log(oldfileName)
                    endFileName = oldfileName.substring((oldfileName).lastIndexOf("."));


                   //file.files[0].name = day + '_' + Month + '_' + year + '_' + hours + '_' + min + '_' + sec;
                  //  serialContectInner = this.files[0].name;
                  //  console.log(typeof serialContectInner)

                   
                }

                break;
            default:
             //   document.getElementById("wrongFBK").classList.remove("hidden");
                this.value = '';

        }
    };


    var IDTip;
    /********************************************************************/
    $('#AddPhotoToLibBtn').click(function () { 

        $.ajax({
            method: "GET",
            async: false,
            url: "Handlers/Handler.ashx",
            data: { Action: "getTipNum" } //שליחת שם הפעולה שתתבצע בהנדלר
        })
            .done(function (data) { //ברגע שהפעולה הסתיימה   
                var tipsDivNum = JSON.parse(data)

                console.log(tipsDivNum + 1);
                //var num = tipsDivNum
                IDTip = ('tip' + (parseInt(tipsDivNum) + 1)).toString();
            })
            .fail(function (error) { //במצב של שגיאה  
                console.log("error");
                console.log(error.statusText);
            })


        // IDTip = 'tip21';
        var tipContect = 'img';
        //var oldfileName = file.files[0].name;
      // endFileName = oldfileName.Substring(oldfileName.LastIndexOf("."));
        console.log(endFileName)
        var fullDate = new Date();
        const day = String(fullDate.getDate()).padStart(2, '0');
        const Month = String(fullDate.getMonth() + 1).padStart(2, '0');
        const year = fullDate.getFullYear().toString().substr(-2);
        const hours = String(fullDate.getHours()).padStart(2, '0');
        const min = String(fullDate.getMinutes()).padStart(2, '0');
        const sec = String(fullDate.getSeconds()).padStart(2, '0');
       // const milsec = String(fullDate.getMilliseconds()).padStart(2, '0');

        var fileName = day + '_' + Month + '_' + year + '_' + hours + '_' + min + '_' + sec + endFileName;
       


        var serialContectInner = String(fileName);
        var serialContect = serialContectInner;
        var serialContect_Jpg = serialContectInner;
        var likesCount = '0';
        var tipHeadline = $('#userTipHeadline').val();
        var tipHeadlineGirl = $('#userTipHeadline').val();
        var tipHeadlineBoy = $('#userTipHeadline').val();
        var tipTxt = $('#userTipContect').val();
        var tipTxtGirl = $('#userTipContect').val();
        var tipTxtBoy = $('#userTipContect').val();
        var tipHashTag = $('#userHashTags').val();
        var publishTip = "false";

        console.log( IDTip,  tipContect,  serialContectInner,  serialContect,  serialContect_Jpg,  likesCount,  tipHeadline,  tipHeadlineGirl,  tipHeadlineBoy,  tipTxt,  tipTxtGirl,  tipTxtBoy,  tipHashTag)
    $.ajax({
        method: "POST",
        url: "Handlers/Handler.ashx",
        data: { Action: "userAddTip", IDTip: IDTip, tipContect: tipContect, serialContectInner: serialContectInner, serialContect: serialContect, serialContect_Jpg: serialContect_Jpg, likesCount: likesCount, tipHeadline: tipHeadline, tipHeadlineGirl: tipHeadlineGirl, tipHeadlineBoy: tipHeadlineBoy, tipTxt: tipTxt, tipTxtGirl: tipTxtGirl, tipTxtBoy: tipTxtBoy, tipHashTag: tipHashTag, publishTip: publishTip} //שליחת שם הפעולה שתתבצע בהנדלר
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
    });



    //var coll = document.getElementsByClassName("collapsible");
    //this.classList.toggle("active");



    //for (i = 0; i < coll.length; i++) {

    //    coll[i].addEventListener("click", function () {
    //        this.classList.toggle("active");
    //        var content = this.nextElementSibling;
    //        if (content.style.display === "block") {
    //            content.style.display = "none";
    //        } else {
    //            content.style.display = "block";
               
    //        }
    //    });
    //}
});
