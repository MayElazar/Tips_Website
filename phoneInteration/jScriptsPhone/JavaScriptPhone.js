$(document).ready(function () {


    $("#endBTN").hide();
    $("#grayBG").hide();
    $("#feedback").hide();
    $("#finalQ").hide();
    $(".replayDiv").hide();


    var thirdMsgDiv;
    var voLthirdMsgDiv;
    var voLsecondMsgDiv;
    var secondMsgDiv;
    var voLFirstMsgDiv;
    var firstMsgDiv;
    var firstBTNclicled = 0;
    var secondBTNclicled = 0;
    var thiredBTNclicled = 0;
    var totalClicks = 0;
    var idNum = 0;

    //----------------משתנים לשמירת ציון לסיכום---------//
    let tooBad = 0;
    let tooGood = 0;
    let rightAns = 0;

    var yesTooBad = "אנחנו חושבות קצת אחרת. השפה שהרכזת השתמשה לא הובילה למציאת פתרון והשתמשה במילים וביטויים שחסמו את התקשורת. אפשר להשתמש במילים וביטויים יותר נעימים כמו ''מה הרעיונות שלך לפתרון? '' ובמילים חיוביות.";
    var yesTooGood = "אנחנו חושבות קצת אחרת. השיחה אולי היתה חיובית אבל פתרה את המתנדבת מאחריות שלה ופגעה באיכות הפעילות. חשוב להיות קשובים למתנדבים ועדיין לזכור את אחריותנו כרכזים ולדאוג לפעילות שותפת של ההתנדבות. ";
    var yesRightAns = "נכון, השיחה היתה חיובית אך עדיין הרכזת דאגה לאיכות פעילות ההתנדבות.  הרכזת היתה קשובה לשרון ושמה לב שהיא בבעיה ודאגה להבהיר שהיא שם בשבילה. ";

    var noTooBad = "נכון, השפה שהרכזת השתמשה לא הובילה למציאת פתרון והשתמשה במילים וביטויים שחסמו את התקשורת. אפשר להשתמש במילים וביטויים יותר נעימים כמו ''מה הרעיונות שלך לפתרון? '' ובמילים חיוביות.";
    var noTooGood = "נכון, השיחה אולי היתה חיובית אבל פתרה את המתנדבת מאחריות שלה ופגעה באיכות הפעילות. חשוב להיות קשובים למתנדבים ועדיין לזכור את אחריותנו כרכזים ולדאוג לפעילות שותפת של ההתנדבות. ";
    var noRightAns = "אנחנו חושבות קצת אחרת. השיחה היתה חיובית אך עדיין הרכזת שמרה דאגה לאיכות פעילות ההתנדבות.  הרכזת היתה קשובה לשרון ושמה לב שהיא בבעיה ודאגה להבהיר שהיא שם בשבילה.";

    //----------------משתנים לשמירת ההודעות מנהלת------------//
    //---------הודעה ראשונה--------//
    var MngOp1M1 = "הודעה מאוחרת? המשמרת שלך מתחילה עוד רבע שעה! למה את מודיעה רק עכשיו? את לא יכולה פשוט לא להגיע.";
    var MngOp2M1 = "אין בעיה, הכל טוב. אל תגיעי. ";
    var MngOp3M1 = "אני מבינה שיש בלת''מים אבל זה ממש יפגע בפעילות אם לא תגיעי";

    //---------הודעה שנייה--------//
    var MngOp1M2 = "זה לא נכון. אני דווקא זוכרת שהיו כמה פעמים החודש שביקשת לצאת מוקדם ולהגיע מאוחר.";
    var MngOp2M2 = "בכיף! מה שאת צריכה!";
    var MngOp3M2 = "שמתי לב שזה קורה הרבה בזמן האחרון. הכל בסדר?";

    //---------הודעה שלישית--------//
    var MngOp1M3 = "אני יודעת שהחיים הם דינמיים אבל בזמן האחרון אני לא רואה את המחויבות שלך כמו פעם. את בכלל רוצה להמשיך להתנדב?";
    var MngOp2M3 = "=)";
    var MngOp3M3 = "אני פה בשבילך אם את רוצה לדבר על זה אבל חשוב שתמשיכי להגיע למשמרות כי את חשובה לפעילות שלנו.";

    //----------------משתנים לשמירת ההודעות מתנדבת------------//
    //---------הודעה ראשונה--------//
    var volop1M1 = "מה? אני מצטערת אבל אני לא יכולה להגיע. אני מבינה שזה הרגע האחרון אבל זה לא בשליטתי. אני מגיעה לשאר המשמרות בזמן ולא מבריזה.";
    var volop2M1 = " וואי ממש תודה! ";
    var volop3M1 = "אני יודעת ואני ממש מצטערת אבל יש לי משהו ממש חשוב שאני לא יכולה לבטל";

    //---------הודעה שנייה--------//
    var volop1M2 = "עינב, זה הגיוני שתוכניות משתנות, החיים זה דבר דינמי את יודעת. אני לא עושה את זה בכוונה! ";
    var volop2M2 = "ואי את הרכזת הכי טובה בעולם! ";
    var volop3M2 = "אם להיות לגמרי כנה, החיים שלי דיי בבלגן בזמן האחרון. ";

    //---------הודעה שלישית--------//
    var volop1M3 = "וואו עינב, אני ציפיתי לקצת יותר הבנה ממך. אני עושה הרבה בשבילכם  ובשביל ההתנדבות אבל אני גם בן אדם ויש לי את הצרכים ואת החיים שלי לדאוג להם. ";
    var volop2M3 = "שוב תודה!";
    var volop3M3 = "תודה עינב, אשמח לשתף אותך. אגיע היום ונדבר אחריה =)";

    //----------------משתנים לשמירת הטקסט לכפתורים-------------///
    //---------הודעה ראשונה--------//
    var msg1 = "הודעה מאוחרת??";
    var msg2 = "הכל טוב";
    var msg3 = "אני מבינה אבל זה יפגע בפעילות";
    //---------הודעה שנייה--------//
    var msg4 = "זה לא נכון";
    var msg5 = "מה שאת צריכה";
    var msg6 = "הכל בסדר?";
    //---------הודעה שלישית--------//
    var msg7 = "אני מבינה שהחיים הם דינמיים";
    var msg8 = "=)";
    var msg9 = "חשוב שתגיעי למשמרות";


    //-------------עיצוב כפתורים-----------------//
    //$("#op1BTN").mouseover(function () {

    //    $("#number1").css({ "background-color": "white", "color": "black" });

    //});

    //$("#op1BTN").mouseout(function () {

    //    $("#number1").css({ "background-color": "#965b93", "color": "white" });

    //});

    //$("#op2BTN").mouseover(function () {

    //    $("#number2").css({ "background-color": "white", "color": "black" });

    //});

    //$("#op2BTN").mouseout(function () {

    //    $("#number2").css({ "background-color": "#965b93", "color": "white" });

    //});

    //$("#op3BTN").mouseover(function () {

    //    $("#number3").css({ "background-color": "white", "color": "black" });

    //});

    //$("#op3BTN").mouseout(function () {

    //    $("#number3").css({ "background-color": "#965b93", "color": "white" });

    //});

    //----------------פונקציות להצגת הודעות-------------///

    $("#optionTxt1").html(msg1);
    $("#optionTxt2").html(msg2);
    $("#optionTxt3").html(msg3);


    //----------------הכפתור הראשון-------------///

    $("#op1BTN").click(function () {
        firstBTNclicled++;
        totalClicks++;

        $(".opBTN").prop('disabled', true);


        //------------------ההודעות של המנהלת---------------//

        //-------------הדיב הגדול--------------//
        firstMsgDiv = document.createElement('div');
        firstMsgDiv.classList = "firstMsgDiv remove";
        //  $(firstMsgDiv).toggle().css("animation", "slide-top 0.7s ease-in-out both");

        //-------------הדיב של האייקון--------------//
        var mngIcon = document.createElement('div');
        mngIcon.classList = "managerIcon";
        //-------------הדיב עם הטקסט--------------//
        var firstMsg = document.createElement('div');
        firstMsg.classList = "InnerMsgDiv";
        firstMsg.id = "firstMsg" + idNum;

        //-------------הדיב של הצ'ופצי'ק--------------//

        var spanDiv = document.createElement('div');
        spanDiv.classList = "spanDiv";

        //-------------הצ'ופצ'יק--------------//

        var spanSecond = document.createElement('span');
        spanSecond.classList = "spanMsg";

        //-------------הוספה של האייקון--------------//
        $(firstMsgDiv).append(mngIcon);

        //-------------הוספה של הדיב של הצ'ופצ'יק--------------//

        $(firstMsgDiv).append(spanDiv);
        //-------------הוספה של הצ'ופצ'יק--------------//

        $(spanDiv).append(spanSecond);
        //-------------הוספה של ההודעה לדיב הגדול--------------//
        $(firstMsgDiv).append(firstMsg);


        $(firstMsgDiv).appendTo("#msg");

        if (firstBTNclicled == 1) {
            $("#firstMsg" + idNum).text(MngOp1M1);

            tooBad++;
        }
        if (firstBTNclicled == 2) {
            $("#firstMsg" + idNum).text(MngOp1M2);
            tooBad++;
            console.log("tooBad click " + tooBad);
        }
        if (firstBTNclicled == 3) {
            $("#firstMsg" + idNum).text(MngOp1M3);
            tooBad++;
            console.log("tooBad click " + tooBad);

        }
        updateScroll();


        //-------------הודעות של המתנדבת--------------------------------------------------------//


        setTimeout(function () {

            //-------------הדיב הגדול--------------//
            voLFirstMsgDiv = document.createElement('div');
            voLFirstMsgDiv.classList = "voLFirstMsgDiv remove";
            //-------------הדיב של האייקון--------------//
            var volIcon = document.createElement('div');
            volIcon.classList = "volIcon";

            //-------------הדיב עם הטקסט--------------//

            var voLFirstMsg = document.createElement('div');
            voLFirstMsg.classList = "VolInnerDiv";
            voLFirstMsg.id = "voLFirstMsg" + idNum;


            //-------------הדיב של הצ'ופצי'ק--------------//
            var volSpanSecondDiv = document.createElement('div');
            volSpanSecondDiv.classList = "VolspanDiv";

            //-------------הצ'ופצ'יק--------------//

            var volSpanSecond = document.createElement('span');
            volSpanSecond.classList = "VolspanSecond";

            //-------------הוספה של ההודעה לדיב הגדול--------------//
            $(voLFirstMsgDiv).append(voLFirstMsg);
            //-------------הוספה של הצ'ופצ'יק--------------//
            $(volSpanSecondDiv).append(volSpanSecond);
            //-------------הוספה של הדיב של הצ'ופצ'יק--------------//
            $(voLFirstMsgDiv).append(volSpanSecondDiv);
            //-------------הוספה של האייקון--------------//
            $(voLFirstMsgDiv).append(volIcon);


            $(voLFirstMsgDiv).appendTo("#msg");


            if (firstBTNclicled == 1) {
                //      $("#firstMsg" + idNum).text(MngOp1M1);
                $("#voLFirstMsg" + idNum).text(volop1M1);

                tooBad++;
                console.log("tooBad click " + tooBad);
            }
            if (firstBTNclicled == 2) {
                //      $("#firstMsg" + idNum).text(MngOp1M2);
                $("#voLFirstMsg" + idNum).text(volop1M2);
                tooBad++;
                console.log("tooBad click " + tooBad);
            }
            if (firstBTNclicled == 3) {
                //      $("#firstMsg" + idNum).text(MngOp1M3);
                $("#voLFirstMsg" + idNum).text(volop1M3);
                tooBad++;
                console.log("tooBad click " + tooBad);

            }
            updateScroll();
            $(".opBTN").prop('disabled', false);
        }, 1000);

        setTimeout(function () {
            // $(".opBTN").prop('disabled', true);
            if (totalClicks == 1) {
                $("#optionTxt1").html(msg4);
                $("#optionTxt2").html(msg5);
                $("#optionTxt3").html(msg6);
            }

            if (totalClicks == 2) {
                $("#optionTxt1").html(msg7);
                $("#optionTxt2").html(msg8);
                $("#optionTxt3").html(msg9);
            }

            if (totalClicks == 3) {
                $("#op1BTN").hide();
                $("#op2BTN").hide();
                $("#op3BTN").hide();
                setTimeout(function () {
                    $("#endBTN").show();
                }, 1400);
            }
        }, 1300);
        idNum++;

    });

    //----------------הכפתור השני-------------///

    $("#op2BTN").click(function () {
        $(".opBTN").prop('disabled', true);

        totalClicks++;
        secondBTNclicled++;
        //-------------הודעות של המנהלת------------------------------------//
        //-------------הדיב הגדול--------------//

        secondMsgDiv = document.createElement('div');
        secondMsgDiv.classList = "firstMsgDiv remove";

        //-------------הדיב של האייקון--------------//

        var mngIcon = document.createElement('div');
        mngIcon.classList = "managerIcon";

        //-------------הדיב עם הטקסט--------------//

        var secondInnerMsgDiv = document.createElement('div');
        secondInnerMsgDiv.classList = "InnerMsgDiv";
        secondInnerMsgDiv.id = "secondtMsg" + idNum;

        //-------------הדיב של הצ'ופצי'ק--------------//

        var spanDiv = document.createElement('div');
        spanDiv.classList = "spanDiv";

        //-------------הצ'ופצ'יק--------------//

        var spanSecond = document.createElement('span');
        spanSecond.classList = "spanMsg";


        //-------------הוספה של האייקון--------------//

        $(secondMsgDiv).append(mngIcon);
        //-------------הוספה של הדיב של הצ'ופצ'יק--------------//

        $(secondMsgDiv).append(spanDiv);
        //-------------הוספה של הצ'ופצ'יק--------------//

        $(spanDiv).append(spanSecond);
        //$(secondInnerMsgDiv).append(secondtMsg);
        //-------------הוספה של ההודעה לדיה הגדול--------------//

        $(secondMsgDiv).append(secondInnerMsgDiv);
        $(secondMsgDiv).appendTo("#msg");

        if (secondBTNclicled == 1) {
            $("#secondtMsg" + idNum).text(MngOp2M1);
            tooGood++;

        }
        if (secondBTNclicled == 2) {
            $("#secondtMsg" + idNum).text(MngOp2M2);
            tooGood++;
            console.log("tooGood click " + tooGood);
        }
        if (secondBTNclicled == 3) {
            $("#secondtMsg" + idNum).text(MngOp2M3);
            tooGood++;
            console.log("tooGood click " + tooGood);
        }
        updateScroll();

        //-------------הודעות של המתנדבת-----------------------------------------------//

        //-------------הדיב הגדול--------------//
        setTimeout(function () {

            voLsecondMsgDiv = document.createElement('div');
            voLsecondMsgDiv.classList = "voLFirstMsgDiv remove";
            //-------------הדיב של האייקון--------------//

            var volIcon = document.createElement('div');
            volIcon.classList = "volIcon";

            //-------------הדיב עם הטקסט--------------//

            var voLsecondMsg = document.createElement('div');
            voLsecondMsg.classList = "VolInnerDiv";
            voLsecondMsg.id = "voLsecondMsg" + idNum;


            //-------------הדיב של הצ'ופצי'ק--------------//
            var volSpanSecondDiv = document.createElement('div');
            volSpanSecondDiv.classList = "VolspanDiv";

            //-------------הצ'ופצ'יק--------------//

            var volSpanSecond = document.createElement('span');
            volSpanSecond.classList = "VolspanSecond";

            //-------------הוספה של ההודעה לדיה הגדול--------------//
            $(voLsecondMsgDiv).append(voLsecondMsg);
            //-------------הוספה של הצ'ופצ'יק--------------//
            $(volSpanSecondDiv).append(volSpanSecond);
            //-------------הוספה של הדיב של הצ'ופצ'יק--------------//
            $(voLsecondMsgDiv).append(volSpanSecondDiv);
            //-------------הוספה של האייקון--------------//
            $(voLsecondMsgDiv).append(volIcon);

            $(voLsecondMsgDiv).appendTo("#msg");



            if (secondBTNclicled == 1) {
                $("#voLsecondMsg" + idNum).text(volop2M1);
                tooGood++;

            }
            if (secondBTNclicled == 2) {
                $("#voLsecondMsg" + idNum).text(volop2M2);
                tooGood++;
                console.log("tooGood click " + tooGood);
            }
            if (secondBTNclicled == 3) {
                $("#voLsecondMsg" + idNum).text(volop3M3);
                tooGood++;
                console.log("tooGood click " + tooGood);
            }

            updateScroll();
            $(".opBTN").prop('disabled', false);

        }, 1000);

        setTimeout(function () {
            if (totalClicks == 1) {
                $("#optionTxt1").html(msg4);
                $("#optionTxt2").html(msg5);
                $("#optionTxt3").html(msg6);
            }

            if (totalClicks == 2) {
                $("#optionTxt1").html(msg7);
                $("#optionTxt2").html(msg8);
                $("#optionTxt3").html(msg9);
            }

            if (totalClicks == 3) {
                $("#op1BTN").hide();
                $("#op2BTN").hide();
                $("#op3BTN").hide();
                setTimeout(function () {
                    $("#endBTN").show();
                }, 1400);
            }
        }, 1300);
        idNum++;
    });

    //----------------הכפתור השלישי-------------///

    $("#op3BTN").click(function () {
        $(".opBTN").prop('disabled', true);

        totalClicks++;
        thiredBTNclicled++;

        //-------------הודעות של המנהלת---------------------------------------------//
        //-------------הדיב הגדול--------------//
        thirdMsgDiv = document.createElement('div');
        thirdMsgDiv.classList = "firstMsgDiv remove";

        //-------------הדיב של האייקון--------------//
        var mngIcon = document.createElement('div');
        mngIcon.classList = "managerIcon";

        //-------------הדיב עם הטקסט--------------//
        var thirdtMsg = document.createElement('div');
        thirdtMsg.classList = "InnerMsgDiv";
        thirdtMsg.id = "thirdtMsg" + idNum;

        //-------------הדיב של הצ'ופצי'ק--------------//
        var spanDiv = document.createElement('div');
        spanDiv.classList = "spanDiv";

        //-------------הצ'ופצ'יק--------------//
        var spanSecond = document.createElement('span');
        spanSecond.classList = "spanMsg";

        //-------------הוספה של האייקון--------------//
        $(thirdMsgDiv).append(mngIcon);

        //-------------הוספה של הדיב של הצ'ופצ'יק--------------//
        $(thirdMsgDiv).append(spanDiv);

        //-------------הוספה של הצ'ופצ'יק--------------//
        $(spanDiv).append(spanSecond);

        //-------------הוספה של ההודעה לדיה הגדול--------------//
        $(thirdMsgDiv).append(thirdtMsg);

        $(thirdMsgDiv).appendTo("#msg");

        if (thiredBTNclicled == 1) {
            $("#thirdtMsg" + idNum).text(MngOp3M1);
            rightAns++;
        }
        if (thiredBTNclicled == 2) {
            $("#thirdtMsg" + idNum).text(MngOp3M2);
            rightAns++;
        }
        if (thiredBTNclicled == 3) {
            $("#thirdtMsg" + idNum).text(MngOp3M3);
            rightAns++;
        }

        updateScroll();


        //-------------הודעות של המתנדבת-----------------------------------------------------//

        setTimeout(function () {

            //-------------הדיב הגדול--------------//
            voLthirdMsgDiv = document.createElement('div');
            voLthirdMsgDiv.classList = "voLFirstMsgDiv remove";

            //-------------הדיב של האייקון--------------//
            var volIcon = document.createElement('div');
            volIcon.classList = "volIcon";

            //-------------הדיב עם הטקסט--------------//
            var voLthirdMsg = document.createElement('div');
            voLthirdMsg.classList = "VolInnerDiv";
            voLthirdMsg.id = "voLthirdMsg" + idNum;

            //-------------הדיב של הצ'ופצי'ק--------------//
            var volSpanSecondDiv = document.createElement('div');
            volSpanSecondDiv.classList = "VolspanDiv";

            //-------------הצ'ופצ'יק--------------//

            var volSpanSecond = document.createElement('span');
            volSpanSecond.classList = "VolspanSecond";


            //-------------הוספה של ההודעה לדיב הגדול--------------//
            $(voLthirdMsgDiv).append(voLthirdMsg);
            //-------------הוספה של הצ'ופצ'יק--------------//
            $(volSpanSecondDiv).append(volSpanSecond);
            //-------------הוספה של הדיב של הצ'ופצ'יק--------------//
            $(voLthirdMsgDiv).append(volSpanSecondDiv);
            //-------------הוספה של האייקון--------------//
            $(voLthirdMsgDiv).append(volIcon);

            $(voLthirdMsgDiv).appendTo("#msg");


            if (thiredBTNclicled == 1) {
                $("#voLthirdMsg" + idNum).text(volop3M1);
                rightAns++;
            }
            if (thiredBTNclicled == 2) {
                $("#voLthirdMsg" + idNum).text(volop2M3);
                rightAns++;
            }
            if (thiredBTNclicled == 3) {
                $("#voLthirdMsg" + idNum).text(volop3M2);
                rightAns++;
            }

            updateScroll();
            $(".opBTN").prop('disabled', false);

        }, 1000);


        console.log("totalClicks " + totalClicks);
        setTimeout(function () {
            if (totalClicks == 1) {
                $("#optionTxt1").html(msg4);
                $("#optionTxt2").html(msg5);
                $("#optionTxt3").html(msg6);
            }

            if (totalClicks == 2) {
                $("#optionTxt1").html(msg7);
                $("#optionTxt2").html(msg8);
                $("#optionTxt3").html(msg9);
            }

            if (totalClicks == 3) {
                $("#op1BTN").hide();
                $("#op2BTN").hide();
                $("#op3BTN").hide();
                setTimeout(function () {
                    $("#endBTN").show();
                }, 1400);
            }
        }, 1300);
        idNum++;
    });

    //----------------הצגת סיכום-------------///

    $("#endBTN").click(function () {
        $("#grayBG").show();
        $("#finalQ").show();
        //$("p").hide();
        $("#endBTN").hide();
        //  $(".managerIcon").hide();
        // $(".volIcon").hide();

    });

    $("#yesAns").click(function () {
        $("#feedback").show();
        $("#finalQ").hide();
        $("#endBTN").hide();

        console.log("tooBad " + tooBad);

        if (tooBad > tooGood) {
            console.log("tooBad > tooGood");
            console.log("tooGood " + tooGood);
            console.log("rightAns " + rightAns);
            console.log("tooBad " + tooBad);


            $("#endMsg").text(yesTooBad);
        }
        if (tooBad > rightAns) {
            console.log("tooBad > rightAns")
            console.log("tooGood " + tooGood);
            console.log("rightAns " + rightAns);
            console.log("tooBad " + tooBad);
            $("#endMsg").text(yesTooBad);

        }

        if (tooGood > tooBad) {
            console.log("tooGood > tooBad")
            console.log("tooGood " + tooGood);
            console.log("rightAns " + rightAns);
            console.log("tooBad " + tooBad);

            $("#endMsg").text(yesTooGood);
        }
        if (tooGood > rightAns) {

            console.log("tooGood > rightAns")
            console.log("tooGood " + tooGood);
            console.log("rightAns " + rightAns);
            console.log("tooBad " + tooBad);
            $("#endMsg").text(yesTooGood);
        }

        if (rightAns > tooGood) {

            console.log("rightAns > tooGood")
            console.log("tooGood " + tooGood);
            console.log("rightAns " + rightAns);
            console.log("tooBad " + tooBad);
            $("#endMsg").text(yesRightAns);

        }
        if (rightAns > tooBad) {

            console.log("rightAns > tooBad")
            console.log("tooGood " + tooGood);
            console.log("rightAns " + rightAns);
            console.log("tooBad " + tooBad);
            $("#endMsg").text(yesRightAns);

        }

        if (rightAns == tooBad && rightAns == tooGood && tooGood == tooBad) {

            console.log("rightAns == tooBad == tooGood")
            console.log("tooGood " + tooGood);
            console.log("rightAns " + rightAns);
            console.log("tooBad " + tooBad);

            $("#endMsg").text("אנחנו חושבות שהשיחה היתה יכוהל להתנהל קצת יותר טוב");
        }

        setTimeout(function () {

            $(".replayDiv").show();
        }, 3000);

    });

    $("#noAns").click(function () {
        $("#feedback").show();
        $("#finalQ").hide();
        $("#endBTN").hide();

        console.log("tooBad " + tooBad);

        if (tooBad > tooGood) {
            console.log("tooBad > tooGood");
            console.log("tooGood " + tooGood);
            console.log("rightAns " + rightAns);
            console.log("tooBad " + tooBad);


            $("#endMsg").text(noTooBad);
        }
        if (tooBad > rightAns) {
            console.log("tooBad > rightAns")
            console.log("tooGood " + tooGood);
            console.log("rightAns " + rightAns);
            console.log("tooBad " + tooBad);
            $("#endMsg").text(noTooBad);

        }

        if (tooGood > tooBad) {
            console.log("tooGood > tooBad")
            console.log("tooGood " + tooGood);
            console.log("rightAns " + rightAns);
            console.log("tooBad " + tooBad);

            $("#endMsg").text(noTooGood);
        }
        if (tooGood > rightAns) {

            console.log("tooGood > rightAns")
            console.log("tooGood " + tooGood);
            console.log("rightAns " + rightAns);
            console.log("tooBad " + tooBad);
            $("#endMsg").text(noTooGood);
        }

        if (rightAns > tooGood) {

            console.log("rightAns > tooGood")
            console.log("tooGood " + tooGood);
            console.log("rightAns " + rightAns);
            console.log("tooBad " + tooBad);
            $("#endMsg").text(noRightAns);

        }
        if (rightAns > tooBad) {

            console.log("rightAns > tooBad")
            console.log("tooGood " + tooGood);
            console.log("rightAns " + rightAns);
            console.log("tooBad " + tooBad);
            $("#endMsg").text(noRightAns);

        }

        if (rightAns == tooBad && rightAns == tooGood && tooGood == tooBad) {

            console.log("rightAns == tooBad == tooGood")
            console.log("tooGood " + tooGood);
            console.log("rightAns " + rightAns);
            console.log("tooBad " + tooBad);

            $("#endMsg").text("נכון, השיחה היתה יכולה להתנהל קצת יותר טוב.");
        }

        setTimeout(function () {

            $(".replayDiv").show();
        }, 3000);

    });

    $(".replay").click(function () {

        $(voLthirdMsgDiv).hide();
        $(voLthirdMsgDiv).hide();
        //$("#endMsg").hide();
        $("#feedback").hide();
        $("#grayBG").hide();
        //   $(".remove").hide();
        $(".replayDiv").hide();

        $("div").remove(".remove");

        tooBad = 0;
        tooGood = 0;
        rightAns = 0;
        firstBTNclicled = 0;
        secondBTNclicled = 0;
        thiredBTNclicled = 0;
        totalClicks = 0;
        idNum = 0;


        $("#op1BTN").show();
        $("#op2BTN").show();
        $("#op3BTN").show();
        $("#optionTxt1").html(msg1);
        $("#optionTxt2").html(msg2);
        $("#optionTxt3").html(msg3);


    });

});

function updateScroll() {
    var msgDiv = document.getElementById("msg");
    msgDiv.scrollTop = msgDiv.scrollHeight;
}

