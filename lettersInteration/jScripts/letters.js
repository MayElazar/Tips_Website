$(document).ready(function () {
    /*-------------Start-----------------collapse  FUNC------------------Start--------------*/
    var coll = document.getElementsByClassName("collapsible");
    var i;
    $("#Proporties").show();
    $("#Proporties").css('display', 'flex');
    $('.contectWarpper').hide();
    $('.lastStep').css('cursor', 'default');
    $('.lastStep').css('opacity', '0.5');
    $('.FinalStep').css('cursor', 'default');
    $('.FinalStep').css('opacity', '0.5');
    for (i = 0; i < coll.length; i++) {

        coll[i].addEventListener("click", function () {
            this.classList.toggle("active");
            var content = this.nextElementSibling;
            if (content.style.display === "block") {
                content.style.display = "none";
            } else {
                content.style.display = "block";
                $("#Proporties").css('display', 'flex');
            }
        });
    }
    /*-------------END-----------------collapse  FUNC------------------END--------------*/

    //*******************עיצוב דינאמי*********************//

    $(".hide").hide();
    $("#downloadLetter").hide();
    $("#letterArea").css("opacity", 0);
    $("#sideNote").hide();
    $("#errorNote").css("opacity", 0);
    //$('#displayDiv').hide();

   
    //$('#lastStep').css('width', $('.collapsible').width())
    //$('#contectWarpper').css('width', $('.collapsible').width());
    
    $("#lettetBoss").hover(function () {
        $("#lettetToVol").toggleClass("opacity", "notopacity");

        //  $("#lettetOrgBoss").toggleClass("opacity", "notopacity");
        $("#lettetHoliday").toggleClass("opacity", "notopacity");
        $("#lettetvolFam").toggleClass("opacity", "notopacity");
    });


    $("#lettetBoss").hover(
        function () {
            $("#lettetBossIMG").attr('src', 'pics/letterBossOpen.png');
            console.log("HOVER PROFILE")
        }, function () {
            $("#lettetBossIMG").attr('src', 'pics/letterBossClose.png');
            console.log("out")
        }
    );


    $("#lettetToVol").hover(function () {
        $("#lettetBoss").toggleClass("opacity", "notopacity");
        //  $("#lettetOrgBoss").toggleClass("opacity", "notopacity");
        $("#lettetHoliday").toggleClass("opacity", "notopacity");
        $("#lettetvolFam").toggleClass("opacity", "notopacity");
    });

    $("#lettetToVol").hover(
        function () {
            $("#lettetToVolIMG").attr('src', 'pics/letterThanksOpen.png');
            console.log("HOVER PROFILE")
        }
        , function () {
            $("#lettetToVolIMG").attr('src', 'pics/letterThanksClose.png');
            console.log("out")
        }
    );



    $("#lettetHoliday").hover(function () {
        $("#lettetToVol").toggleClass("opacity", "notopacity");

        $("#lettetBoss").toggleClass("opacity", "notopacity");
        $("#lettetvolFam").toggleClass("opacity", "notopacity");
    });


    $("#lettetHoliday").hover(
        function () {
            $("#lettetHolidayIMG").attr('src', 'pics/letterHolidayOpen.png');
            console.log("HOVER PROFILE")
        }, function () {
            $("#lettetHolidayIMG").attr('src', 'pics/letterHolidayClose.png');
            console.log("out")
        }
    );


    $("#lettetvolFam").hover(function () {
        $("#lettetToVol").toggleClass("opacity", "notopacity");
        $("#lettetHoliday").toggleClass("opacity", "notopacity");
        $("#lettetBoss").toggleClass("opacity", "notopacity");
    });


    $("#lettetvolFam").hover(
        function () {
            $("#lettetvolFamIMG").attr('src', 'pics/letterFamilyOpen.png');
            console.log("HOVER PROFILE")
        }, function () {
            $("#lettetvolFamIMG").attr('src', 'pics/letterFamilyClose.png');
            console.log("out")
        }
    );


    $("#lettetBoss").click(function () {
        $("#lettetvolFam").css("opacity", 0.5);
        $("#lettetToVol").css("opacity", 0.5);
        $("#lettetHoliday").css("opacity", 0.5);
        $("#lettetBoss").css("opacity", 1);
    });
    $("#lettetvolFam").click(function () {
        $("#lettetBoss").css("opacity", 0.5);
        $("#lettetToVol").css("opacity", 0.5);
        $("#lettetHoliday").css("opacity", 0.5);
        $("#lettetvolFam").css("opacity", 1);
    });
    $("#lettetToVol").click(function () {
        $("#lettetBoss").css("opacity", 0.5);
        $("#lettetvolFam").css("opacity", 0.5);
        $("#lettetHoliday").css("opacity", 0.5);
        $("#lettetToVol").css("opacity", 1);
    });

    $("#lettetHoliday").click(function (e) {
        $("#lettetvolFam").css("opacity", 0.5);
        $("#lettetToVol").css("opacity", 0.5);
        $("#lettetBoss").css("opacity", 0.5);
        $("#lettetHoliday").css("opacity", 1);
     
    });

    $(".letters").click(function (e) {
        console.log($(e.target).parent().find('span').text())
        $('#UserChoosen').text('בחרת לכתוב: ' + $(e.target).parent().find('span').text())
        //$('#displayDiv').show('slow');

        $('.lastStepWarpper').show();
        $('.FinalStepWarpper').hide();
        $('.FinalStep').css('cursor', 'default');
        $('.FinalStep').css('opacity', '0.5');
        
        $('.lastStep').css('cursor', 'pointer');
        $('.lastStep').css('opacity', '1');

        $('#errorNote').css('opacity', '0');
        

        setTimeout(function () {
            $('#chooseLetterAd').removeClass('active');
            $('#Proporties').fadeOut();

        }, 1000);
    });

    $("#girlIMG").hover(function () {
        $("#boyIMG").toggleClass("opacity", "notopacity");
    });

    $("#boyIMG").hover(function () {
        $("#girlIMG").toggleClass("opacity", "notopacity");
    });

    $("#girlIMG").click(function () {
        $("#boyIMG").css("opacity", 0.5);
        $("#girlIMG").css("opacity", 1);
    });

    $("#boyIMG").click(function () {
        $("#girlIMG").css("opacity", 0.5);
        $("#boyIMG").css("opacity", 1);
    });

    //*******************משתנים להחזקת המשתנים*********************//
    var voluName;
    var myName;
    var letterFor;
    var famName;
    var volGoal;
    var volDuration;
    var orgName;

    var selectedletter;
    var selectedGender;




    //*******************פונקציה להצגת השדות הדרושים*********************//
    $("#lettetBoss").click(function () {
        $(".hide").show();
        $("#familyNameLBL").hide();
        $("#familyName").hide();
        selectedletter = (this.id);
        console.log("selectedletter- boss" + selectedletter);
    });

    $("#lettetvolFam").click(function () {
        $(".hide").show();
        $("#familyNameLBL").show();
        selectedletter = (this.id);
        $("#toName").hide();
        $("#toNameLBL").hide()
        $("#volDurationLBL").hide();
        $("#volDuration").hide();


    });

    $("#lettetHoliday").click(function () {
        $(".hide").show();
        $("#toName").hide();
        $("#toNameLBL").hide();
        $("#volDurationLBL").hide();
        $("#volDuration").hide();
        $("#volGoalLBL").hide();
        $("#volGoal").hide();
        $("#myNameLBL").hide();
        $("#myName").hide();
        $("#familyNameLBL").hide();
        $("#familyName").hide();
        selectedletter = (this.id);
    });



    $("#lettetToVol").click(function () {
        $(".hide").show();
        $("#toName").hide();
        $("#toNameLBL").hide();
        $("#volDurationLBL").hide();
        $("#volDuration").hide();
        $("#volGoalLBL").hide();
        $("#volGoal").hide();
        $("#familyNameLBL").hide();
        $("#familyName").hide();
        selectedletter = (this.id);
    });

    //*******************הכנסת טקסט לפי בחירות המשתמש*********************//
    $("#girlIMG").click(function () {
        selectedGender = 1;


    });

    $("#boyIMG").click(function () {
        selectedGender = 2;


    });

    $("#createLetter").click(function () {



        $("#letterArea").html("");

        //*******************הזרקת התוכן מתיבות הטקסט למשתנים*********************//
        letterFor = $("#toName").val();
        voluName = $("#volName").val();
        myName = $("#myName").val();
        famName = $("#familyName").val();
        volGoal = $("#volGoal").val();
        volDuration = $("#volDuration").val();
        orgName = $("#orgName").val();

        //*******************משתנים להחזקת המכתבים*********************//

        var BletterToBoss = "שלום " + letterFor + ",\n \nרצינו לספר לך על " + voluName + ". אנחנו יודעים שאת/ה מכיר/ה אותו היטב אבל חשבנו שזו יכולה להיות הזדמנות נפלאה, להאיר אותו באור נוסף ולהדגיש צדדים נוספים שלו- דרך תרומתו בארגון שלנו. \n" + voluName + " הצטרף לפני " + volDuration + ", במסגרת השותפות בין הארגון שלנו לבין חברתכם. " + voluName + " מפגין מחויבות והתלהבות הולכת וגדלה  בתפקידו ותורמ באופן משמעותי להשגת מטרות הארגון.\n \n" + voluName + " מביא לארגון שלנו ידע ייחודי, נסיון יוצא דופן שבוודאי צבר בחברתכם, חמלה והקשבה, רצינות ומחויבות. \nהנתינה והאכפתיות שלו הן הרבה מעבר למצופה ויש לו תרומה אדירה להצלחתנו. \n \nאנו רוצים להודות לך על השותפות והנכונות לאפשר לו, כעובד, לתרום לקהילה, לקחת חלק בפעילות שלנו ולסייע לנו לקדם את " + volGoal + ". \nאנו מאמינים ומקווים שכשם שהוא תורמת לנו הוא גם נתרם מהפעילות ומחזיר את שלמד אל מסדרונות החברה- במוטיבציה, בהערכה ובתחושת השייכות. \n \nבברכה, \n" + myName + " \nרכז ההתנדבות \n" + orgName + "";
        var BletterToHoliday = "" + voluName + " היקר, \n \nחגים מספקים לנו הזדמנות נהדרת לנוח, לטעון מצברים, לעצור, להעריך את מה שיש- ולהודות. \n \nאז רצינו להגיד לך תודה, " + voluName + ", על התרומה המשמעותית שלך לפעילות הארגון. \nאתה מעורר בנו השראה, דוחף אותנו להצליח, מחייב אותנו להעמיק ולחשוב, מעודד אותנו לצחוק קצת יותר בקול ולחייך בכל הזדמנות שיש לנו. אתה נהדר ואיזה כיף שאתה איתנו \n \nאנו מקווים שיהיה לך חג שמח מאוד, מלא באושר, שמחה ושלום. \n \nמכולנו ב" + orgName + ", חג שמח!!";
        var BletterThanksToVol = "לכבוד " + voluName + ", \n \nהנדון: בהוקרה והערכה על התנדבותך \n \nשלום " + voluName + ", \n \nברצוני לנצל הזדמנות זו על מנת להביע את תודתי והערכתי העמוקה לפעילותך ההתנדבותית בארגון: על הזמן, המאמץ, העבודה הקשה ועוד- הערכתנו המלאה נתונה לך. \n \nנכונותך לתרום ליכולותיך, ניסיונך וכישוריך חיזקה משמעותית את הארגון שלנו. בתרומתך שימשת דוגמה לכל הסובבים אותך, אודות נתינה, מנהיגות ועשיית טוב. \n \nהחמלה שאתה מפגין כלפי האנשים להם אנחנו מסייעים מעוררת בכולנו השראה רבה. הבחנו כיצד במגוון מצבים אתה תמיד מצליח להתייחס לכולם בטוב לב וכבוד. \nאנחנו יודעים ומבינים שעבור אנשים להם אנחנו מסייעים, החיים רצופים באתגרים ומצבי דחק מילותייך ופעולתיך מסייעות רבות ליכולותם לשמור על כבודם וצמוח מהמשבר. \n \nחשוב לנו לעדכן אותך שהמאמצים שלך והתרומה שלך נראים היטב למרחקים ומייצרים אדוות רבות של השפעה. \n \n תודה רבה על כל מה שעשית ממשיך לעשות. \n \nשלך, \n" + myName + " \nרכזת המתנדבים\n" + orgName + "";
        var BletterToFam = "שלום משפחת " + famName + ", \n \nרצינו להגיד לכם תודה. \n \nתודה שחלקתם את הזמן של " + voluName + " איתנו, שאפשרתם לו להשקיע מאמצים רבים לטובת " + volGoal + ". \n \nאנו יודעים שגם אתם משלמים על כך מחיר וחשוב לנו לספר לכם שיש למחיר הזה משמעות רבה מאוד עבורנו. התרומה של " + voluName + " לארגוננו היא כה רבה. \nהניסיון, הידע והיכולות שהוא תורמת לארגון מאפשרים לנו לעשות כל כך הרבה יותר על מנת להשיג את מטרותינו. \n \nתודה על התמיכה מאחורי הקלעים, על העידוד מהיציע, על ההבנה ובעיקר תודה על " + voluName + " הנפלא. \n \nשלכם, \n" + myName + " \n" + orgName + ""



        var GletterToBoss = "שלום " + letterFor + ",\n \nרצינו לספר לך על " + voluName + ". אנחנו יודעים שאת/ה מכיר/ה אותה היטב אבל חשבנו שזו יכולה להיות הזדמנות נפלאה, להאיר אותה באור נוסף ולהדגיש צדדים נוספים שלה- דרך תרומתה בארגון שלנו. \n" + voluName + " הצטרפה לפני " + volDuration + ", במסגרת השותפות בין הארגון שלנו לבין חברתכם. " + voluName + " מפגינה מחויבות והתלהבות הולכת וגדלה  בתפקידה ותורמת באופן משמעותי להשגת מטרות הארגון.\n \n" + voluName + " מביאה לארגון שלנו ידע ייחודי, נסיון יוצא דופן שבוודאי צברה בחברתכם, חמלה והקשבה, רצינות ומחויבות. \nהנתינה והאכפתיות שלה הן הרבה מעבר למצופה ויש לה תרומה אדירה להצלחתנו. \n \nאנו רוצים להודות לך על השותפות והנכונות לאפשר לה, כעובדת, לתרום לקהילה, לקחת חלק בפעילות שלנו ולסייע לנו לקדם את " + volGoal + ". \nאנו מאמינים ומקווים שכשם שהיא תורמת לנו היא גם נתרמת מהפעילות ומחזירה את שלמדה אל מסדרונות החברה- במוטיבציה, בהערכה ובתחושת השייכות. \n \nבברכה, \n" + myName + " \nרכז ההתנדבות \n" + orgName + "";
        var GletterToHoliday = "" + voluName + " היקרה, \n \nחגים מספקים לנו הזדמנות נהדרת לנוח, לטעון מצברים, לעצור, להעריך את מה שיש- ולהודות. \n \nאז רצינו להגיד לך תודה, " + voluName + ", על התרומה המשמעותית שלך לפעילות הארגון. \nאת מעוררת בנו השראה, דוחפת אותנו להצליח, מחייבת אותנו להעמיק ולחשוב, מעודדת אותנו לצחוק קצת יותר בקול ולחייך בכל הזדמנות שיש לנו. את נהדרת ואיזה כיף שאת איתנו \n \nאנו מקווים שיהיה לך חג שמח מאוד, מלא באושר, שמחה ושלום. \n \nמכולנו ב" + orgName + ", חג שמח!!";

        var GletterThanksToVol = "לכבוד " + voluName + ", \n \nהנדון: בהוקרה והערכה על התנדבותך \n \nשלום " + voluName + ", \n \nברצוני לנצל הזדמנות זו על מנת להביע את תודתי והערכתי העמוקה לפעילותך ההתנדבותית בארגון: על הזמן, המאמץ, העבודה הקשה ועוד- הערכתנו המלאה נתונה לך. \n \nנכונותך לתרום ליכולותיך, ניסיונך וכישוריך חיזקה משמעותית את הארגון שלנו. בתרומתך שימשת דוגמה לכל הסובבים אותך, אודות נתינה, מנהיגות ועשיית טוב. \n \nהחמלה שאת מפגינה כלפי האנשים להם אנחנו מסייעים מעוררת בכולנו השראה רבה. הבחנו כיצד במגוון מצבים את תמיד מצליחה להתייחס לכולם בטוב לב וכבוד. \nאנחנו יודעים ומבינים שעבור אנשים להם אנחנו מסייעים, החיים רצופים באתגרים ומצבי דחק מילותייך ופעולתיך מסייעות רבות ליכולותם לשמור על כבודם וצמוח מהמשבר. \n \nחשוב לנו לעדכן אותך שהמאמצים שלך והתרומה שלך נראים היטב למרחקים ומייצרים אדוות רבות של השפעה. \n \n תודה רבה על כל מה שעשית וממשיכה לעשות. \n \nשלך, \n" + myName + " \nרכזת המתנדבים\n" + orgName + "";
        var GletterToFam = "שלום משפחת " + famName + ", \n \nרצינו להגיד לכם תודה. \n \nתודה שחלקתם את הזמן של " + voluName + " איתנו, שאפשרתם לה להשקיע מאמצים רבים לטובת " + volGoal + ". \n \nאנו יודעים שגם אתם משלמים על כך מחיר וחשוב לנו לספר לכם שיש למחיר הזה משמעות רבה מאוד עבורנו. התרומה של " + voluName + " לארגוננו היא כה רבה. \nהניסיון, הידע והיכולות שהיא תורמת לארגון מאפשרים לנו לעשות כל כך הרבה יותר על מנת להשיג את מטרותינו. \n \nתודה על התמיכה מאחורי הקלעים, על העידוד מהיציע, על ההבנה ובעיקר תודה על " + voluName + " הנפלאה. \n \nשלכם, \n" + myName + " \n" + orgName + ""






        if (selectedletter == "lettetBoss") {
            if (voluName != "" && myName != "" && letterFor != "" && volGoal != "" && volDuration != "" && orgName != "") {
                if (selectedGender == "1" || selectedGender == "2") {

                    if (selectedGender == "1") {

                        $("#letterArea").html(GletterToBoss);

                    }
                    if (selectedGender == "2") {

                        $("#letterArea").html(BletterToBoss);


                    }

                    $("#letterArea").css("opacity", 1);
                    $("#sideNote").show();
                    $("#downloadLetter").show();
                    $("#errorNote").css("opacity", 0);
                    $('.FinalStepWarpper').show();
                    $('.FinalStep').css('cursor', 'pointer');
                    $('.FinalStep').css('opacity', '1');
                }
                else {

                    $("#errorNote").css("opacity", 1);
                }
            }
            else {

                $("#errorNote").css("opacity", 1);
            }
        }

        if (selectedletter == "lettetToVol") {
            if (voluName != "" && myName != "" && orgName != "") {
                if (selectedGender == "1" || selectedGender == "2") {

                    if (selectedGender == "1") {
                        $("#letterArea").html(GletterThanksToVol);

                    }
                    if (selectedGender == "2") {
                        $("#letterArea").html(BletterThanksToVol);

                    }

                    $("#letterArea").css("opacity", 1);
                    $("#sideNote").show();
                    $("#downloadLetter").show();
                    $("#errorNote").css("opacity", 0);
                    $('.FinalStepWarpper').show();
                    $('.FinalStep').css('cursor', 'pointer');
                    $('.FinalStep').css('opacity', '1');
                }
                else {

                    $("#errorNote").css("opacity", 1);
                }
            }
            else {

                $("#errorNote").css("opacity", 1);
            }
        }


        if (selectedletter == "lettetHoliday") {
            if (voluName != "" && orgName != "") {
                if (selectedGender == "1" || selectedGender == "2") {

                    if (selectedGender == "1") {
                        $("#letterArea").html(GletterToHoliday);

                    }
                    if (selectedGender == "2") {
                        $("#letterArea").html(BletterToHoliday);


                    }

                    $("#letterArea").css("opacity", 1);
                    $("#sideNote").show();
                    $("#downloadLetter").show();
                    $("#errorNote").css("opacity", 0);
                    $('.FinalStepWarpper').show();
                    $('.FinalStep').css('cursor', 'pointer');
                    $('.FinalStep').css('opacity', '1');
                }
                else {

                    $("#errorNote").css("opacity", 1);
                }
            }
            else {
                $("#errorNote").css("opacity", 1);

            }

        }

        if (selectedletter == "lettetvolFam") {
            if (voluName != "" && myName != "" && famName != "" && volGoal != "" && orgName != "") {
                if (selectedGender == "1" || selectedGender == "2") {
                    if (selectedGender == "1") {
                        $("#letterArea").html(GletterToFam);


                        // console.log("בחורה מכתב למשפחה")
                    }
                    if (selectedGender == "2") {
                        $("#letterArea").html(BletterToFam);
                    }
                    $("#letterArea").css("opacity", 1);
                    $("#sideNote").show();
                    $("#downloadLetter").show();
                    $("#errorNote").css("opacity", 0);
                    $('.FinalStepWarpper').show();
                    $('.FinalStep').css('cursor', 'pointer');
                    $('.FinalStep').css('opacity', '1');
                }
                else {
                    console.log("empty")
                    $("#errorNote").css("opacity", 1);

                }
            }
            else {
                console.log("empty")
                $("#errorNote").css("opacity", 1);

            }
        }
    });
    //*******************פונקציה להורדת המכתב*********************//

    $("#downloadLetter").click(function (event) {
        $("#letterArea").wordExport("המכתב שלך");
    });



});





