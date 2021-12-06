



/*page Loader*/
$(window).on('load', function () {
    // Animate loader off screen
    //if (window.location.href.indexOf("index") > -1) {
    if (document.getElementsByTagName('body')[0] !== undefined) {
        window.requestAnimationFrame(loadPage);
        loadPage.call(this);
    }
    //}
});

function loadPage() {

    //if (window.location.href.indexOf("index") > -1) {
    setTimeout(() => {
        $(".se-pre-con").fadeOut("slow");


      
    }, 2000)

};








window.onscroll = function () {
    growShrinkLogo();
};


function growShrinkLogo() {
    var Logo = document.getElementById("logo")
    var logoSize = "165px";
    var logoSHRINKSize = "130px";
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) || screen.width <= 765) {
        logoSize = "150px"
    } else {
        logoSize = "165px"
    }
    if (document.body.scrollTop > 5 || document.documentElement.scrollTop > 5) {
        $(Logo).css("width", '130px');
        $(Logo).css("transition", "width 0.5s ease")
        $("nav").css("background-color", "white");
    } else {
        Logo.style.width = logoSize;
        $("nav").css("background-color", "transparent");
    }
}
/********************** */

/*End Page Loder*/
$(document).ready(function () {



    //משתנים גלובלים
    var tipsDivNum;
    var tipsDivcontect;
    var TipsContentDIV;
    var headlineTagsDIV;
    var login;
    var userFName;
    var userLName;
    var userLogedinEmail;
    var hashTagArr;
    var filterHashTagArr;
    var nextTipArrowRClicked = false;
    var moreTipsClicked = false;

    var mngUserName = "TipsManager";
    var mngPassword = "TipsEdit123";

    var stopGif = sessionStorage.getItem("stopGif");

    if (stopGif == 'true') {
        $('#playGif').css('display', 'flex');
        $('#stopGif').css('display', 'none');
    } else {

        $('#playGif').css('display', 'none');
        $('#stopGif').css('display', 'flex');
    }

    /*Profile Pic Hover*/
    $(".ProfilePicImg").hover(

        function () {

            if ($(".ProfilePicImg").attr("src") == "img/profilePic_Anonimous.png") {
                $(".ProfilePicImg").attr('src', 'img/profilePic_Anonimous_hover.gif');
            }

            if ($(".ProfilePicImg").attr("src") == "img/ProfilePic4.png") {
                $(".ProfilePicImg").attr('src', 'img/profilePic_hover4.gif');
            }
            if ($(".ProfilePicImg").attr("src") == "img/ProfilePic3.png") {
                $(".ProfilePicImg").attr('src', 'img/profilePic_hover3.gif');
            }
            if ($(".ProfilePicImg").attr("src") == "img/ProfilePic2.png") {
                $(".ProfilePicImg").attr('src', 'img/profilePic_hover2.gif');
            }
            if ($(".ProfilePicImg").attr("src") == "img/ProfilePic1.png") {
                $(".ProfilePicImg").attr('src', 'img/profilePic_hover1.gif');
            }





            $("#myTipsLink").css("color", "grey");
            $("#myTipsLink").css("pointer-events", "none");
            $("#myTipsLink").css("cursor", "default");
            $("#myTipsLink").removeAttr("href")

            login = sessionStorage.getItem("doesLogin");

            if (login == "true") {
                //$("#logInLink").css("color", "grey");
                //$("#logInLink").css("pointer-events", "none");
                //$("#logInLink").css("cursor", "default");

                //$("#regLink").css("color", "grey");
                //$("#regLink").css("pointer-events", "none");
                //$("#regLink").css("cursor", "default");
                //$("#logInLink").css("display", "none");

                //$("#regLink").css("display", "none");

                $("#myTipsLink").css("color", "black");
                $("#myTipsLink").css("pointer-events", "auto");
                $("#myTipsLink").css("cursor", "pointer");
                $("#myTipsLink").attr("href", "profile.html")
            }



        }, function () {

            if ($(".ProfilePicImg").attr("src") == "img/profilePic_Anonimous_hover.gif") {
                $(".ProfilePicImg").attr('src', 'img/profilePic_Anonimous.png');
            }
            if ($(".ProfilePicImg").attr("src") == "img/profilePic_hover4.gif") {
                $(".ProfilePicImg").attr('src', 'img/ProfilePic4.png');
            }
            if ($(".ProfilePicImg").attr("src") == "img/profilePic_hover3.gif") {
                $(".ProfilePicImg").attr('src', 'img/ProfilePic3.png');
            }
            if ($(".ProfilePicImg").attr("src") == "img/profilePic_hover2.gif") {
                $(".ProfilePicImg").attr('src', 'img/ProfilePic2.png');
            }
            if ($(".ProfilePicImg").attr("src") == "img/profilePic_hover1.gif") {
                $(".ProfilePicImg").attr('src', 'img/ProfilePic1.png');
            }



        }
    );

    /*EndProfile Pic Hover*/
    $(".profileA").click(function () {

        login = sessionStorage.getItem("doesLogin");


        if (login == "true") {
            $(".profileA").attr("href", "profile.html")
        }
        if (login != "true") {
            $(".profileA").removeAttr("href")

            //open register popup
            $('#registerPopup').addClass('is-open-register');
            $('#registerPopup').addClass('overlay-register');
            $('body').css('height', '100%');

            $('#registerPopup').removeClass('popupClose');


            $('#olduserBTN').addClass('olduserQ');
            $("#newUserBTN").removeClass("newuserQ");
            $("#thanksForComingSection").css("display", "block")
            $("#comebackSection").css("display", "none")
        }
    });

    /*mobile menu*/
    $(".MobileMenuLI").click(function () {
        $("#toggleMenuCB").click();
    });

    /**/

    $(".ProfilePicImg").hover(function () {

        login = sessionStorage.getItem("doesLogin");


        if (login == "true") {
            $(".profileA").attr("href", "profile.html")
        }
        if (login != "true") {
            $(".profileA").removeAttr("href")
        }

    })

    $(".logInLink").click(function () {
        login = sessionStorage.getItem("doesLogin");
        if (login != "true") {


            $('#registerPopup').addClass('is-open-register');
            $('#registerPopup').addClass('overlay-register');

            $('body').css('height', '100%');

            $('#registerPopup').removeClass('popupClose');

            $('#olduserBTN').removeClass('olduserQ');
            $("#newUserBTN").addClass("newuserQ");
            $("#thanksForComingSection").css("display", "none")
            $("#comebackSection").css("display", "block")




        }


    });





    // if user login the profilr image will linked to the profile page
    $(".regLink").click(function () {
        //if (!$('#toggleMenuCB').is('checked')) {
        //    $('#toggleMenuCB').attr('checked', true);
        //}


        login = sessionStorage.getItem("doesLogin");
        if (login != "true") {

            $('#registerPopup').addClass('is-open-register');
            $('#registerPopup').addClass('overlay-register');
            $('body').css('height', '100%');

            $('#registerPopup').removeClass('popupClose');


            $('#olduserBTN').addClass('olduserQ');
            $("#newUserBTN").removeClass("newuserQ");
            $("#thanksForComingSection").css("display", "block")
            $("#comebackSection").css("display", "none")

        }


    });


    //login as manager

    $("#MngLogin").click(function () {
        //  $(".MngForm").show();
        $(".MngForm").css("display", "flex");
        //   $(".MngForm").css("display", "inline-grid");
        $(".userForm").hide();
        $(".userFormRacaz").hide();


    });
    //login as racaz
    $("#racazLogin").click(function () {
        $(".MngForm").css("display", "none");;
        // $(".MngForm").addClass("MngForm");
        $(".userForm").css("display", "inline-grid");
        $(".userFormRacaz").css("display", "block");
    });


    //css for profile menu
    $("#TipsLogoProfile").click(function () {
        login = sessionStorage.getItem("doesLogin");

        var myFisrtName = sessionStorage.getItem("userFName");
        var myLastName = sessionStorage.getItem("userLName");
        sessionStorage.setItem("userfullName", myFisrtName + " " + myLastName);

        document.getElementById("userNameP").innerHTML = sessionStorage.getItem("userfullName");
    });


    /************************************ */


    var containTips = document.createElement("div");
    containTips.id = "containTips";
    $("#containerIndex").append(containTips)




    tipNum();

    function tipNum() {

        $.ajax({
            method: "GET",
            async: false,
            url: "Handlers/Handler.ashx",
            data: { Action: "getTipContect" } //שליחת שם הפעולה שתתבצע בהנדלר
        })
            .done(function (data) { //ברגע שהפעולה הסתיימה   
                tipsDivcontect = JSON.parse(data)
                tipsDivNum = JSON.parse(data).Table.length


                divTipCreation();



            })
            .fail(function (error) { //במצב של שגיאה  

                //console.log(error.statusText);
            })

    }
    /*change items in filterARR */
    function moveInArray(arr, from, to) {


        if (Object.prototype.toString.call(arr) !== '[object Array]') {
            throw new Error('Please provide a valid array');
        }

        // Delete the item from it's current position
        var item = arr.splice(from, 1);


        if (!item.length) {
            throw new Error('There is no item in the array at index ' + from);
        }

        // Move the item to its new position
        arr.splice(to, 0, item[0]);

    };

    //create elements
    function divTipCreation() {
        //create elements on profilr page
        var divNum;
        if (window.location.href.indexOf("profile") > -1) {

            sessionStorage.setItem("doesLogin", "true");
            login = sessionStorage.getItem("doesLogin");

            var myFisrtName = sessionStorage.getItem("userFName");
            var myLastName = sessionStorage.getItem("userLName");
            sessionStorage.setItem("userfullName", myFisrtName + " " + myLastName);

            document.getElementById("userNameP").innerHTML = myFisrtName + " " + myLastName;



            document.getElementById("userNameP").innerHTML = myFisrtName + " " + myLastName;


            $(".UserExit").css("display", "block");
            $(".logInLink").css("display", "none");
            $(".regLink").css("display", "none");
            $('.loginToSystem').css('display', 'none');
            $(".loginToSystem").attr("style", "display:none");

            document.getElementById("ProfileTag").innerHTML = "הפרופיל של:";
            $("#ProfileTag").css("font-size", "16px");
            document.getElementById("userNamePm").innerHTML = myFisrtName + " " + myLastName;
            document.getElementById("ProfileTagm").innerHTML = "הפרופיל של:";
            $("#ProfileTagm").css("font-size", "16px");


            if (myFisrtName == 'עורך/ת') {
                $('.editorLink').css('display', 'block');
                document.getElementById("userNamePm").innerHTML = 'עורך/ת';
            } else {
                $('.editorLink').css('display', 'none');
            }


            var EMAIL = sessionStorage.getItem("userlogedEmail")
            $.ajax({
                method: "GET",
                async: false,
                url: "Handlers/Handler.ashx",
                data: { Action: "getTipsInfo", userEmailTXT: EMAIL } //שליחת שם הפעולה שתתבצע בהנדלר
            })
                .done(function (data) { //ברגע שהפעולה הסתיימה   

                   // console.log(data)

                    if (data == "אופס, עדיין לא אהבת אף טיפ") {
                        var NoTipsLiked = document.createElement("p");
                        NoTipsLiked.innerText = data;
                        $("#containTips").append(NoTipsLiked)


                        var NoTipsLikedLink = document.createElement("a");
                        NoTipsLikedLink.setAttribute("href", "index.html");
                        NoTipsLikedLink.id = "NoTipsLikedLink"
                        $("#containTips").append(NoTipsLikedLink)

                        var NoTipsLikedBTN = document.createElement("button");
                        NoTipsLikedBTN.id = "NoTipsLikedBTNN";
                        NoTipsLikedBTN.innerText = " חזרה לדף הבית";
                        $("#NoTipsLikedLink").append(NoTipsLikedBTN)


                    } else {

                        var info = JSON.parse(data)
                        userLikesDiv = info.Table.length;
                      //  console.log(userLikesDiv)
                        /*------------------------------------------------------*/
                        for (var i = 0; i < userLikesDiv; i++) {
                            //for (var z = 0; z < info.Table.length; z++) {
                          //  console.log(info.Table[i].publish)
                            if (info.Table[i].publish && info.Table[i].deletedTip == false) {
                          

                                var tipSection = document.createElement("section");
                                tipSection.id = "tipSection" + info.Table[i].tipID;
                                tipSection.classList = "tipSection";
                                $("#containTips").append(tipSection);

                                $(document.getElementById(tipSection.id)).attr("likes", info.Table[i].likesCount);


                             


                                var Tipsdiv = document.createElement("div");
                                Tipsdiv.id = 'tip' + info.Table[i].IDTip;
                                Tipsdiv.classList = "TipDivS main";

                                $(document.getElementById(tipSection.id)).append(Tipsdiv);

                                TipsContentDIV = document.createElement("div");
                                TipsContentDIV.id = "TipsContentDIV" + info.Table[i].tipID;
                                TipsContentDIV.classList = "TipsContentDIV"
                                $(document.getElementById(Tipsdiv.id)).append(TipsContentDIV);

                                TipsContentDIV.addEventListener("click", openPopupTip)



                                var TipsInnerImage = document.createElement("img");
                                TipsInnerImage.id = 'TipImage' + info.Table[i].tipID;
                                TipsInnerImage.classList = "TipImage"
                                $(document.getElementById(TipsContentDIV.id)).append(TipsInnerImage);


                                var stopGif = sessionStorage.getItem("stopGif");

                                if (stopGif == 'true') {
                                    $(document.getElementById(TipsInnerImage.id)).attr("src", './img/Tips/' + info.Table[i].serialContect_Jpg);

                                } else {
                                    $(document.getElementById(TipsInnerImage.id)).attr("src", './img/Tips/' + info.Table[i].serialContect);
                                }

                                headlineTagsDIV = document.createElement("div");
                                headlineTagsDIV.id = "headlineTagsDIV" + info.Table[i].tipID;
                                headlineTagsDIV.classList = "headlineTagsDIV";
                                $(document.getElementById(Tipsdiv.id)).append(headlineTagsDIV);



                                //create Headline to each tip
                                var tipheadline = document.createElement("h3");
                                tipheadline.id = "tipheadline" + info.Table[i].tipID;
                                tipheadline.classList = "tipheadline";

                                $(document.getElementById(headlineTagsDIV.id)).append(tipheadline);
                                var userGender = sessionStorage.getItem("userGender");

                                if (userGender == 'f') {
                                    document.getElementById("tipheadline" + info.Table[i].tipID).innerHTML = info.Table[i].tipHeadlineGirl;


                                    var profileImgArr = ["ProfilePic2", "ProfilePic3"]

                                    var profileNum = Math.floor((Math.random() * profileImgArr.length));

                                    $(".ProfilePicImg").attr("src", "img/" + profileImgArr[profileNum] + ".png");


                                }
                                else if (userGender == 'm') {
                                    document.getElementById("tipheadline" + info.Table[i].tipID).innerHTML = info.Table[i].tipHeadlineBoy;

                                    var profileImgArr = ["ProfilePic1", "ProfilePic4"]

                                    var profileNum = Math.floor((Math.random() * profileImgArr.length));

                                    $(".ProfilePicImg").attr("src", "img/" + profileImgArr[profileNum] + ".png");

                                } else {
                                    tipheadline.innerText = info.Table[i].tipHeadline;
                                    $(".ProfilePicImg").attr("src", "img/profilePic_Anonimous.png");

                                }



                                var tipP = document.createElement("p");
                                tipP.id = "tipHashTag" + info.Table[i].tipID;
                                tipP.classList = "tipHashTag";
                                tipP.innerText = info.Table[i].tipHashTag;

                                $(document.getElementById(headlineTagsDIV.id)).append(tipP);


                                //create like and share btn to each tip
                                var TipsLikeDivWarp = document.createElement("div");
                                TipsLikeDivWarp.classList = "TipsLikeDivWarp";
                                TipsLikeDivWarp.id = "TipsLikeDivWarp" + info.Table[i].tipID;
                                $(document.getElementById(headlineTagsDIV.id)).append(TipsLikeDivWarp);


                                var countLikes = document.createElement("span");
                                countLikes.id = "TipsLikeCounter" + info.Table[i].tipID;
                                countLikes.classList = "TipsLikeCounter"
                                countLikes.innerText = info.Table[i].likesCount;
                                $(document.getElementById(TipsLikeDivWarp.id)).append(countLikes);

                                var TipsLikeBtn = document.createElement("button");
                                TipsLikeBtn.classList = "TipsLikeBtn";
                                TipsLikeBtn.id = "TipsLikeBtn" + info.Table[i].tipID;
                                $(document.getElementById(TipsLikeDivWarp.id)).append(TipsLikeBtn);
                                TipsLikeBtn.addEventListener("click", toggleLike);

                                didUserLikesTips();



                                //craete shareBTN
                                var TipsShareWarp = document.createElement("div");
                                TipsShareWarp.id = "TipsShareWarp" + info.Table[i].tipID;
                                TipsShareWarp.classList = "TipsShareWarp"

                                $(document.getElementById(headlineTagsDIV.id)).append(TipsShareWarp);



                                var TipsShareBtn = document.createElement("button");
                                TipsShareBtn.classList = "TipsShareBtn";
                                TipsShareBtn.id = "TipsShareBtn" + info.Table[i].tipID;

                                $(document.getElementById(TipsShareWarp.id)).append(TipsShareBtn);
                                TipsShareBtn.addEventListener("click", SocialShare);

                                var TipsShareWA = document.createElement("div");
                                TipsShareWA.id = "TipsShareWA" + info.Table[i].tipID;
                                TipsShareWA.classList = "shareB TipsShareWA close"

                                $(document.getElementById(TipsShareWarp.id)).append(TipsShareWA);

                                $(document.getElementById(TipsShareWA.id)).jsSocials({
                                    shareIn: "popup",
                                    showLabel: false,
                                    shares: [{
                                        share: "whatsapp",
                                        logo: "whatsappLogo"
                                    }]
                                });

                                var TipsShareFB = document.createElement("div");
                                TipsShareFB.id = "TipsShareFB" + info.Table[i].tipID;
                                TipsShareFB.classList = "shareB TipsShareFB close"

                                $(document.getElementById(TipsShareWarp.id)).append(TipsShareFB);

                                var TipsShareFBimg = document.createElement("img");
                                TipsShareFBimg.id = "TipsShareFBimg" + info.Table[i].tipID;
                                TipsShareFBimg.src = "./img/facebookLogo.png"
                                //TipsShareFB.classList = "shareB TipsShareFB close"
                                $(document.getElementById(TipsShareFB.id)).append(TipsShareFBimg);


                                var TipsShareFB = document.createElement("div");
                                TipsShareFB.id = "TipsShareFB" + info.Table[i].tipID;
                                TipsShareFB.classList = "shareB TipsShareFB close"
                                TipsShareFB.setAttribute("data-href", "https://developers.facebook.com/docs/plugins/")
                                $(document.getElementById(TipsShareWarp.id)).append(TipsShareFB);


                                var TipsShareFBA = document.createElement("a");
                                TipsShareFBA.id = "TipsShareFBA" + info.Table[i].tipID;
                                TipsShareFBA.target = "popup"
                                $(document.getElementById(TipsShareFB.id)).append(TipsShareFBA);

                                document.getElementById(TipsShareFBA.id).addEventListener("click", popupshareFB);

                                var TipsShareFBimg = document.createElement("img");
                                TipsShareFBimg.id = "TipsShareFBimg" + info.Table[i].tipID;
                                TipsShareFBimg.classList = "TipsShareFBimg"
                                TipsShareFBimg.src = "./img/shareFacebook.png";
                                $(document.getElementById(TipsShareFBA.id)).append(TipsShareFBimg);

                                //$(document.getElementById(TipsShareFB.id)).jsSocials({

                                //    shareIn: "popup",
                                //    url:"https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fprojects.telem-hit.net%2F2021%2FTips_OriMay%2F",
                                //    showLabel: false,
                                //    shares: [{
                                //        share: "facebook",
                                //        logo: "facebookLogo"

                                //    }]
                                //});

                                var TipsShareEM = document.createElement("div");
                                TipsShareEM.id = "TipsShareEM" + info.Table[i].tipID;
                                TipsShareEM.classList = "shareB TipsShareEM close"
                                // TipsShareWarp.innerText = tipsDivcontect.Table[i].likesCount;
                                $(document.getElementById(TipsShareWarp.id)).append(TipsShareEM);

                                $(document.getElementById(TipsShareEM.id)).jsSocials({
                                    shareIn: "popup",
                                    showLabel: false,
                                    shares: [{
                                        share: "email",
                                        logo: "emailLogo"
                                    }]
                                });

                                $(document.getElementById(Tipsdiv.id)).attr("likes", info.Table[i].likesCount);


                                var list = $('#containTips');
                                var listItems = list.find('.tipSection').sort(function (a, b) { return $(b).attr('likes') - $(a).attr('likes'); });
                                list.find('.tipSection').remove();
                                list.append(listItems);
                                // }

                                if ($(".tipSection").length < 20) {
                                    $(".tipSection").removeClass("aos-init aos-animate");
                                } else {
                                    $(".tipSection:gt(7)").attr("data-aos", "fade-down");

                                }
                            }
                            //  }
                        }
                        /*------------------------------------------------------*/
                    }
                    var userGender = sessionStorage.getItem("userGender");

                    if (userGender == 'f') {


                        var profileImgArr = ["ProfilePic2", "ProfilePic3"]

                        var profileNum = Math.floor((Math.random() * profileImgArr.length));

                        $(".ProfilePicImg").attr("src", "img/" + profileImgArr[profileNum] + ".png");

                    }
                    else if (userGender == 'm') {


                        var profileImgArr = ["ProfilePic1", "ProfilePic4"]

                        var profileNum = Math.floor((Math.random() * profileImgArr.length));

                        $(".ProfilePicImg").attr("src", "img/" + profileImgArr[profileNum] + ".png");

                    } else {

                        $(".ProfilePicImg").attr("src", "img/profilePic_Anonimous.png");
                    }


                })
                .fail(function (error) { //במצב של שגיאה  
                    // console.log("error");
                    //  console.log(error.statusText);
                })


        } else {

            //create elements on home page
            // console.log("HOME")


            for (var i = 0; i < tipsDivNum; i++) {
                //console.log(tipsDivcontect.Table[i])
                //console.log(tipsDivcontect.Table[i])
                //console.log(tipsDivcontect.Table[i].ID);



                if (tipsDivcontect.Table[i].publish && tipsDivcontect.Table[i].deletedTip == false) {

                    //console.log(tipsDivcontect.Table[i].IDTip)

                    var tipSection = document.createElement("section");
                    tipSection.id = "tipSection" + tipsDivcontect.Table[i].ID;
                    tipSection.classList = "tipSection";

                    $("#containTips").append(tipSection);

                    $(document.getElementById(tipSection.id)).attr("likes", tipsDivcontect.Table[i].likesCount);
                    $(document.getElementById(tipSection.id)).attr("data-filter", (tipsDivcontect.Table[i].tipHashTag).toString())



                    var Tipsdiv = document.createElement("div");
                    Tipsdiv.id = 'tip' + tipsDivcontect.Table[i].ID;
                    Tipsdiv.classList = "TipDivS main";

                    $(document.getElementById(tipSection.id)).append(Tipsdiv);

                    TipsContentDIV = document.createElement("div");
                    TipsContentDIV.id = "TipsContentDIV" + tipsDivcontect.Table[i].ID;
                    TipsContentDIV.classList = "TipsContentDIV"
                    $(document.getElementById(Tipsdiv.id)).append(TipsContentDIV);

                    TipsContentDIV.addEventListener("click", openPopupTip)



                    var TipsInnerImage = document.createElement("img");
                    TipsInnerImage.id = 'TipImage' + tipsDivcontect.Table[i].ID
                    //TipsInnerImage.id = tipsDivcontect.Table[i].serialContect;
                    $(document.getElementById(TipsContentDIV.id)).append(TipsInnerImage);


                    var stopGif = sessionStorage.getItem("stopGif");

                    if (stopGif == 'true') {
                        $(document.getElementById(TipsInnerImage.id)).attr("src", './img/Tips/' + tipsDivcontect.Table[i].serialContect_Jpg);

                    } else {

                        $(document.getElementById(TipsInnerImage.id)).attr("src", './img/Tips/' + tipsDivcontect.Table[i].serialContect);
                    }


                    headlineTagsDIV = document.createElement("div");
                    headlineTagsDIV.id = "headlineTagsDIV" + tipsDivcontect.Table[i].ID;
                    headlineTagsDIV.classList = "headlineTagsDIV";
                    $(document.getElementById(Tipsdiv.id)).append(headlineTagsDIV);


                    //create Headline to each tip
                    var tipheadline = document.createElement("h3");
                    tipheadline.id = "tipheadline" + tipsDivcontect.Table[i].ID;
                    tipheadline.classList = "tipheadline";

                    $(document.getElementById(headlineTagsDIV.id)).append(tipheadline);

                    var userGender = sessionStorage.getItem("userGender");

                    if (userGender == 'f') {
                        document.getElementById("tipheadline" + tipsDivcontect.Table[i].ID).innerHTML = tipsDivcontect.Table[i].tipHeadlineGirl;


                        var profileImgArr = ["ProfilePic2", "ProfilePic3"]

                        var profileNum = Math.floor((Math.random() * profileImgArr.length));

                        $(".ProfilePicImg").attr("src", "img/" + profileImgArr[profileNum] + ".png");
                        document.getElementById("ExInfo").innerHTML = "לחצי על הטיפים וגלי";

                    }
                    else if (userGender == 'm') {
                        document.getElementById("tipheadline" + tipsDivcontect.Table[i].ID).innerHTML = tipsDivcontect.Table[i].tipHeadlineBoy;

                        document.getElementById("ExInfo").innerHTML = "לחץ על הטיפים וגלה";

                        var profileImgArr = ["ProfilePic1", "ProfilePic4"]

                        var profileNum = Math.floor((Math.random() * profileImgArr.length));

                        $(".ProfilePicImg").attr("src", "img/" + profileImgArr[profileNum] + ".png");

                    } else {
                        tipheadline.innerText = tipsDivcontect.Table[i].tipHeadline;


                        $(".ProfilePicImg").attr("src", "img/profilePic_Anonimous.png");

                        document.getElementById("ExInfo").innerHTML = "לחצו על הטיפים וגלו";
                    }



                    var tipP = document.createElement("p");
                    tipP.id = "tipHashTag" + tipsDivcontect.Table[i].ID;
                    tipP.classList = "tipHashTag";

                    var tipPLinkHashTagS = document.createElement("a");
                    tipPLinkHashTagS.id = "tipPLinkHashTagS" + tipsDivcontect.Table[i].ID;
                    tipPLinkHashTagS.classList = "tipPLinkHashTagS tipHashTag";

                    var tipPLinkHashTag = document.createElement("a");
                    tipPLinkHashTag.id = "tipPLinkHashTag" + tipsDivcontect.Table[i].ID;
                    tipPLinkHashTag.classList = "tipPLinkHashTag tipHashTag";

                    filterHashTagArr += (tipsDivcontect.Table[i].tipHashTag);


                    hashTagArr = (tipsDivcontect.Table[i].tipHashTag).split(' ')

                    for (var y = 0; y < hashTagArr.length; y++) {
                        if (hashTagArr[y] == "" || hashTagArr[y] == "undefined") {
                            hashTagArr.splice((y), 1)
                        }
                    }

                    if (hashTagArr.length > 1) {



                        tipPLinkHashTagS.innerHTML = hashTagArr[0] + '..' /*+ ' ' + hashTagArr[1] + '..' */;
                        tipPLinkHashTag.innerHTML = hashTagArr[1] + ' ';

                        //tipP.innerText = hashTagArr[0] + ' ' + hashTagArr[1] + '..';
                    } else {


                        tipPLinkHashTag.innerHTML = hashTagArr[0] + '..';
                    }
                    $(document.getElementById(headlineTagsDIV.id)).append(tipP);
                    $("#tipHashTag" + tipsDivcontect.Table[i].ID).append(tipPLinkHashTag);
                    $("#tipHashTag" + tipsDivcontect.Table[i].ID).append(tipPLinkHashTagS);
                    tipPLinkHashTagS.addEventListener("click", hashTagsFilter);
                    tipPLinkHashTag.addEventListener("click", hashTagsFilter);

                    //create like and share btn to each tip
                    var TipsLikeDivWarp = document.createElement("div");
                    TipsLikeDivWarp.classList = "TipsLikeDivWarp";
                    TipsLikeDivWarp.id = "TipsLikeDivWarp" + tipsDivcontect.Table[i].ID;
                    $(document.getElementById(headlineTagsDIV.id)).append(TipsLikeDivWarp);


                    var countLikes = document.createElement("span");
                    countLikes.id = "TipsLikeCounter" + tipsDivcontect.Table[i].ID;
                    countLikes.classList = "TipsLikeCounter";
                   // console.log(tipsDivcontect.Table[i].likesCount)
                    countLikes.innerText = tipsDivcontect.Table[i].likesCount;
                    $(document.getElementById(TipsLikeDivWarp.id)).append(countLikes);

                    var TipsLikeBtn = document.createElement("button");
                    TipsLikeBtn.classList = "TipsLikeBtn";
                    TipsLikeBtn.id = "TipsLikeBtn" + tipsDivcontect.Table[i].ID;
                    $(document.getElementById(TipsLikeDivWarp.id)).append(TipsLikeBtn);
                    TipsLikeBtn.addEventListener("click", toggleLike);


                    //create shareBTN
                    var TipsShareWarp = document.createElement("div");
                    TipsShareWarp.id = "TipsShareWarp" + tipsDivcontect.Table[i].ID;
                    TipsShareWarp.classList = "TipsShareWarp"

                    $(document.getElementById(headlineTagsDIV.id)).append(TipsShareWarp);



                    var TipsShareBtn = document.createElement("button");
                    TipsShareBtn.classList = "TipsShareBtn";
                    TipsShareBtn.id = "TipsShareBtn" + tipsDivcontect.Table[i].ID;

                    $(document.getElementById(TipsShareWarp.id)).append(TipsShareBtn);
                    TipsShareBtn.addEventListener("click", SocialShare);

                    var TipsShareWA = document.createElement("div");
                    TipsShareWA.id = "TipsShareWA" + tipsDivcontect.Table[i].ID;
                    TipsShareWA.classList = "shareB TipsShareWA close"

                    $(document.getElementById(TipsShareWarp.id)).append(TipsShareWA);

                    $(document.getElementById(TipsShareWA.id)).jsSocials({
                        shareIn: "popup",
                        showLabel: false,
                        shares: [{
                            share: "whatsapp",
                            logo: "whatsappLogo"
                        }]
                    });

                    var TipsShareFB = document.createElement("div");
                    TipsShareFB.id = "TipsShareFB" + tipsDivcontect.Table[i].ID;
                    TipsShareFB.classList = "shareB TipsShareFB close"
                    TipsShareFB.setAttribute("data-href", "https://developers.facebook.com/docs/plugins/")
                    $(document.getElementById(TipsShareWarp.id)).append(TipsShareFB);

                    var TipsShareFBA = document.createElement("a");
                    TipsShareFBA.id = "TipsShareFBA" + tipsDivcontect.Table[i].ID;
                    TipsShareFBA.target = "popup"
                    $(document.getElementById(TipsShareFB.id)).append(TipsShareFBA);

                    document.getElementById(TipsShareFBA.id).addEventListener("click", popupshareFB);

                    var TipsShareFBimg = document.createElement("img");
                    TipsShareFBimg.id = "TipsShareFBimg" + tipsDivcontect.Table[i].ID;
                    TipsShareFBimg.classList = "TipsShareFBimg";
                    TipsShareFBimg.src = "./img/shareFacebook.png";
                    $(document.getElementById(TipsShareFBA.id)).append(TipsShareFBimg);



                    //$(document.getElementById(TipsShareFB.id)).jsSocials({
                    //    url: "https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fprojects.telem-hit.net%2F2021%2FTips_OriMay%2F",
                    //    shareIn: "popup",
                    //    showLabel: false,

                    //    shares: [{
                    //        share: "facebook",
                    //        logo: "facebookLogo"
                    //    }]
                    //});

                    var TipsShareEM = document.createElement("div");
                    TipsShareEM.id = "TipsShareEM" + tipsDivcontect.Table[i].ID;
                    TipsShareEM.classList = "shareB TipsShareEM close"

                    $(document.getElementById(TipsShareWarp.id)).append(TipsShareEM);

                    $(document.getElementById(TipsShareEM.id)).jsSocials({
                        shareIn: "popup",
                        showLabel: false,
                        shares: [{
                            share: "email",
                            logo: "emailLogo"
                        }]
                    });

                    $(document.getElementById(Tipsdiv.id)).attr("likes", tipsDivcontect.Table[i].likesCount);



                    var list = $('#containTips');
                    var listItems = list.find('.tipSection').sort(function (a, b) { return $(b).attr('likes') - $(a).attr('likes'); });
                    list.find('.tipSection').remove();
                    list.append(listItems);

                    $(".tipSection:gt(7)").attr("data-aos", "fade-down");


                }


                $('.editorLink').css('display', 'none');

                login = sessionStorage.getItem("doesLogin");

                //console.log(login)
                /*did user rgister and come back to home page*/
                if (login == "true") {
                    didUserLikesTips();
                    // var logedEmail = sessionStorage.getItem("userlogedEmail");
                    var userFName = sessionStorage.getItem("userFName");
                    // sessionStorage.setItem("userFName", myFisrtName);
                    var userLName = sessionStorage.getItem("userLName");

                    sessionStorage.setItem("userfullName", userFName + " " + userLName);
                    var fullName = sessionStorage.getItem("userfullName")
                    //var userFName = sessionStorage.getItem("userFName");
                    document.getElementById("userNameP").innerHTML = userFName;



                    if (userFName == 'עורך/ת') {

                        document.getElementById("Heyush").innerHTML = "היוש" + " " + userFName + ",";
                        document.getElementById("HeyushMobile").innerHTML = "היוש" + " " + userFName + ",";
                        document.getElementById("userNameP").innerHTML = userFName;
                        document.getElementById("ProfileTag").innerHTML = "הפרופיל של:";
                        $("#ProfileTag").css("font-size", "16px");
                        document.getElementById("userNamePm").innerHTML = userFName;
                        document.getElementById("ProfileTagm").innerHTML = "הפרופיל של:";
                        $("#ProfileTagm").css("font-size", "16px");
                        $('.editorLink').css('display', 'block');

                    } else {
                        // console.log(userLName);
                        document.getElementById("Heyush").innerHTML = "היוש" + " " + userFName + ",";
                        document.getElementById("HeyushMobile").innerHTML = "היוש" + " " + userFName + ",";
                        document.getElementById("userNameP").innerHTML = fullName;
                        document.getElementById("ProfileTag").innerHTML = "הפרופיל של:";
                        $("#ProfileTag").css("font-size", "16px");
                        document.getElementById("userNamePm").innerHTML = fullName;
                        document.getElementById("ProfileTagm").innerHTML = "הפרופיל של:";
                        $("#ProfileTagm").css("font-size", "16px");
                        $('.editorLink').css('display', 'none');

                    }
                    $(".UserExit").css("display", "block");
                    $(".logInLink").css("display", "none");
                    $(".regLink").css("display", "none");
                    $('.loginToSystem').css('display', 'none');
                    $(".loginToSystem").attr("style", "display:none");

                } else {
                    $(".UserExit").css("display", "none");
                    $(".logInLink").css("display", "block");
                    $(".regLink").css("display", "block");
                    $('.loginToSystem').css('display', 'block');
                    $(".loginToSystem").removeAttr("style", "display:none");
                }
            }

            /********fILTER***********/

            const unique = [...new Set(filterHashTagArr)];
            Array.prototype.unique = function () {
                return Array.from(new Set(this));
            }

            filterHashTagArr = filterHashTagArr.split(' ').unique()



            for (var i = 0; i < filterHashTagArr.length; i++) {
                if (filterHashTagArr[i] == "" || filterHashTagArr[i] == "undefined") {
                    filterHashTagArr.splice(i, 1);

                }
                var newLocation = filterHashTagArr.indexOf('#מוקירים_מתנדבים');

                var newLocationLivoi = filterHashTagArr.indexOf('#מלווים_מתנדבים');
                var newLocationTools = filterHashTagArr.indexOf('#כלים');




                moveInArray(filterHashTagArr, newLocation, 0);
                moveInArray(filterHashTagArr, newLocationLivoi, 1);
                moveInArray(filterHashTagArr, newLocationTools, 2);


                var filtersOptions = document.createElement("input");
                filtersOptions.type = "checkbox";
                filtersOptions.id = "filtersOptions" + i
                filtersOptions.classList = "filtersOptions";

                $("#filtersOptions" + i).attr("checked", "");

                var filtersOptionsSpan = document.createElement("span");
                filtersOptionsSpan.id = "filtersOptionsName" + i;
                filtersOptionsSpan.classList = "filtersOptionsName"
                filtersOptionsSpan.innerText = filterHashTagArr[i];

                var filtersOptionsLBL = document.createElement("label");
                filtersOptionsLBL.id = "filtersOptionsLBL" + i;
                filtersOptionsLBL.classList = "filtersOptionsLBL";

                var filtersOptionsLi = document.createElement("li");
                filtersOptionsLi.id = "filtersOptionsLi" + i;

                var filtersCheckbox = document.createElement("span");
                filtersCheckbox.id = "filtersCheckbox" + i;
                filtersCheckbox.classList = 'checkboxFilter';

                $("#filterList").append(filtersOptionsLi);
                $("#filtersOptionsLi" + i).append(filtersOptionsLBL);
                $("#filtersOptionsLBL" + i).append(filtersOptions);
                $("#filtersOptionsLBL" + i).append(filtersCheckbox);
                $("#filtersOptionsLBL" + i).append(filtersOptionsSpan);


                document.getElementById("filtersOptions" + i).addEventListener("change", filterOption)
            }
        };


        //}
        /********************/

    }

    /*share facebook in a popup */
    function popupshareFB() {
        window.open('https://www.facebook.com/sharer/sharer.php?u=https://projects.telem-hit.net/2021/Tips_OriMay/', 'MyWindow', 'width=600,height=600');

    }

    /*filter BTN */
    var userClickedFilterOnce;
    $("#filterBTN").click(function () {
        // $('#filterBG').removeClass('hideList');

        if ($("#filterContainer").hasClass('showList')) {

            $("#filterContainer").removeClass('showList');
            // $('body').css('overflow', 'auto')

            $("#filterContainer").addClass('hideList');
        } else if ($("#filterContainer").hasClass('hideList')) {
            $("#filterContainer").addClass('showList');
            // $('body').css('overflow', 'hidden');

            $("#filterContainer").removeClass('hideList');
        }

        // console.log(filterHashTagArr);

    });



    $(".filterExit").click(function () {
        $("#filterContainer").addClass("hideList");
        $('body').css('overflow', 'auto')
        $("#filterContainer").removeClass("showList");

        $('#filterBG').addClass('hideList');
    });

    var filterTagCurrent = [];

    // filter when clicking hashtag
    function hashTagsFilter(e) {
        var filterSectionCategory = $('#filterSectionCategory').children();
        //console.log(filterSectionCategory);
        var hashTagFilters = [];
        hashTagFilters.push((e.target).innerText);
        var tagName = ((e.target).innerText)
        tagName = tagName.replace(" ", "");
        tagName = tagName.replace("..", "");

        // filterTagCurrent = [];

        var filtersOptionsNameSpanArr = $('.filtersOptionsLBL').children(".filtersOptionsName");

        if (userFiltered == true) {
            for (var i = 0; i < filterSectionCategory.length; i++) {
              //  console.log(i)

                var currentFilters = $('#' + ($('.CategoryDivTEXT')[i].id)).text();
                //console.log($('#' + ($('.CategoryDivTEXT')[i].id)).text())
                //console.log(currentFilters);
                //console.log(filterTagCurrent.includes(currentFilters));

                if (filterTagCurrent.includes(currentFilters) == false) {
                    //filterTagCurrent = [];
                    filterTagCurrent.push(tagName);
                   // console.log(filterTagCurrent);
                }

               // console.log(filterTagCurrent.includes(tagName))
                if (filterTagCurrent.includes(tagName) == false) {


                    for (var z = 0; z < filtersOptionsNameSpanArr.length; z++) {

                        if (filtersOptionsNameSpanArr[z].innerHTML == tagName) {
                            //console.log('change');
                            //console.log($("#filtersOptions" + z))

                            //filterTagCurrent.push(tagName);
                            //console.log(filterTagCurrent);
                            $("#filtersOptions" + z).attr("checked", true);
                            //filterOption();
                            $("#filtersOptions" + z).click();



                            //console.log(filterTagCurrent)

                        }
                    }
                } else {
                   // console.log('הפילטר כבר קיים');

                }
            }
        } else {
            for (var i = 0; i < filtersOptionsNameSpanArr.length; i++) {

                if (filtersOptionsNameSpanArr[i].innerHTML == tagName) {

                    $("#filtersOptions" + z).attr("checked", true);
                    $("#filtersOptions" + i).click();
                }
            }

        }

    }

    $(document).mouseup(function (e) {
        //if we are not in the profile page
        if (window.location.href.indexOf("profile") == -1) {
            var container = document.getElementById('filterContainer');

            if (container !== e.target && !container.contains(e.target) && $('#filterBTN') !== e.target) {

                $("#filterContainer").addClass("hideList");
                $('body').css('overflow', 'auto')
                $("#filterContainer").removeClass("showList");

                $('#filterBG').addClass('hideList');
            }
        }
    });


    //click on tools button - filter only tools
    $("#toolsBtn").click(function () {
      //  console.log(toolsBtn);
        $('#filtersOptions2').click();
    });

    /*create filter catagory based on tips hashtags*/
    var userFiltered;
    //var filteringARR = [];

    function filterOption(e) {


        $(".CategoryDiv").remove();

        var TipsArr = [];
        var filteringARR = [];
        filterTagCurrent = [];
        var myFilter = document.getElementsByClassName("filtersOptionsLBL");
        var filtersOptions = $(".filtersOptions");

        var $myTips = $(".tipSection")


        for (var y = 0; y < myFilter.length; y++) {

         //   console.log($(myFilter[y]).children().is(":checked"))
            if ($(myFilter[y]).children().is(":checked")) {
                $('#filtersCheckbox' + y).addClass('checked')




                //filteringARR.push((myFilter[y]).innerText)
                filteringARR.push(document.getElementById('filtersOptionsName' + y).innerHTML);
                filterTagCurrent.push(document.getElementById('filtersOptionsName' + y).innerHTML)
                //console.log(filterTagCurrent)
                userFiltered = true;


                var CategoryDiv = document.createElement("li");
                CategoryDiv.classList = "CategoryDiv";
                CategoryDiv.id = "CategoryDiv" + y;



                var CategoryDivTEXT = document.createElement("span");
                CategoryDivTEXT.id = 'CategoryDivTEXT' + y;
                CategoryDivTEXT.classList = 'CategoryDivTEXT'
                CategoryDivTEXT.innerText = document.getElementById('filtersOptionsName' + y).innerHTML;


                var CategoryDivExit = document.createElement("button");
                CategoryDivExit.classList = "CategoryDivExit"
                CategoryDivExit.id = "CategoryDivExit" + y

                $("#filterSectionCategory").append(CategoryDiv);
                $("#CategoryDiv" + y).append(CategoryDivExit);
                $("#CategoryDiv" + y).append(CategoryDivTEXT);
                $("#filterSectionCategory").css('display', 'inline-flex')

                document.getElementById("CategoryDivExit" + y).addEventListener("click", CategoryDivExitFunc)


            } else {
                $('#filtersCheckbox' + y).removeClass('checked')

            }

        }

        for (var i = 0; i < $myTips.length; i++) {

            for (var r = 0; r < filteringARR.length; r++) {
                var filterName = filteringARR[r]

                var $catagoryARR = $($myTips[i]).data('filter').split(" ")


                if ($catagoryARR.indexOf(filterName) != -1) {

                    TipsArr.push($myTips[i].id);

                }

            }

            $('#' + $myTips[i].id).hide();


            if (filtersOptions.filter(':checked').length == 0) {
                $('#' + $myTips[i].id).show();
                $("#filterSectionCategory").hide();
                $("#resetFilter").hide();
                if ($(".tipSection").length < 20) {
                    $(".tipSection").removeClass("aos-init aos-animate");
                } else {
                    $(".tipSection:gt(7)").attr("data-aos", "fade-down");

                }
                userFiltered = false;

            } else {
                $("#filterSectionCategory").show();
                $("#resetFilter").show();
                $("#resetFilter").css('display', 'flex')


            }

        }

        for (var z = 0; z < TipsArr.length; z++) {

            var tipNumFilter = TipsArr[z].slice(10)
            $("#tipSection" + tipNumFilter).show()
            $("#tipSection" + tipNumFilter).removeAttr("data-aos")
        }




    };

    /*filter BTN */

    /*reset Filter BTN */
    $("#resetFilter").click(function () {
        userFiltered = false;
        $(".CategoryDiv").remove();
        filterTagCurrent = [];

        var myFilter = document.getElementsByClassName("filtersOptionsLBL");
        for (var y = 0; y < myFilter.length; y++) {

            if ($(myFilter[y]).children().is(":checked")) {
                $(myFilter[y]).children().attr("checked", false);
                $('.checkboxFilter').removeClass('checked');
                $(".tipSection").show()

                $(".tipSection:gt(7)").attr("data-aos", "fade-down");
                $("#resetFilter").hide();
                $("#filterSectionCategory").hide();
            }



        }
    });

    /*reset Filter BTN */
    /*reset specific category */
    function CategoryDivExitFunc(e) {
        //   filterTagCurrent = []
        $(e.target).parent().remove();

        var filtersOptions = $(".filtersOptions");
        var filtersCheckbox = $(".checkboxFilter");


        for (var i = 0; i < filtersOptions.length; i++) {
           // console.log($(filtersOptions[i]).parent().children("span").text());
           // console.log($(e.target).parent().children("span").text());
            if ($(filtersOptions[i]).parent().children("span").text() == $(e.target).parent().children("span").text()) {
                var tag = $(filtersOptions[i]).parent().children("span").text();
                const index = filterTagCurrent.indexOf(tag);
                if (index > -1) {
                    filterTagCurrent.splice(index, 1);
                  //  console.log(index)
                }
                //filterTagCurrent.splice(0,1,$(filtersOptions[i]).parent().children("span").text());
              //  console.log($(filtersOptions[i]))
                $(filtersOptions[i]).attr("checked", false);
                //$(filtersOptions[i]).prop("checked", false);
                $(filtersCheckbox[i]).removeClass('checked');
                //console.log($(filtersOptions[i]).is(":checked"));
                filterOption();

            }
        }
    };


    var lastTipViewed;

    /* open pop up tip*/

    function openPopupTip(e) {

        $("#WelcomeInfo").css("display", 'none');
        $('#popupTips').addClass('overlay');
        $('#popupTips').removeClass('popupClose');



        var tipsArray = [];



        window.scrollTo(0, 0);



        $('.overlay').addClass('is-open');


        var idNum = $(e.target).parent().attr('id').slice(14)
        lastTipViewed = $(e.target).parent().attr('id');
       // console.log(idNum)

        if (nextTipArrowRClicked == true || moreTipsClicked == true) {
            idNum = $(e.target).attr('id').slice(14)

            lastTipViewed = $(e.target).attr('id');
        }
        /*בדיקה על מה לחצתי ומתי כדי להתאים את החצים*/
        if (userFiltered == true) {
            var currentTipsFiltered = []
            var tipSection = $('.tipSection');
            for (var i = 0; i < tipSection.length; i++) {
                if ($(tipSection[i]).is(":hidden") == false) {
                    currentTipsFiltered.push(tipSection[i]);

                }
            }
            if (currentTipsFiltered[0].id == ('tipSection' + lastTipViewed.slice(14))) {

                $(".nextTipArrowR").css("opacity", "0.2")
                $(".nextTipArrowR").css("pointer-events", "none")

            }

            if ($(currentTipsFiltered).last().attr('id') == ('tipSection' + lastTipViewed.slice(14))) {


                $(".nextTipArrowL").css("opacity", "0.2")
                $(".nextTipArrowL").css("pointer-events", "none")
            }

        } else {
            if ($("#containTips").children()[0].id == ('tipSection' + lastTipViewed.slice(14))) {

                $(".nextTipArrowR").css("opacity", "0.2")
                $(".nextTipArrowR").css("pointer-events", "none")

            }

            if ($("#containTips").children().last().attr('id') == ('tipSection' + lastTipViewed.slice(14))) {


                $(".nextTipArrowL").css("opacity", "0.2")
                $(".nextTipArrowL").css("pointer-events", "none")
            }

        }
        $('body').css('overflow', 'hidden')

        $('#SecPopupWarp').css('height', '80vh');
        //$('#SecPopupWarp').css('height', window.innerHeight - 200);

        $(".headlinePopup").html($(document.getElementById("tipheadline" + idNum)).html());


        $("#TipsLikeDivWarp" + (idNum)).clone().prop('id', 'clone' + (idNum)).appendTo("#socialAndLike");
        $("#TipsShareWarp" + (idNum)).clone().prop('id', 'cloneShare' + (idNum)).appendTo("#socialAndLike");
        document.getElementById('clone' + (idNum)).addEventListener("click", toggleLike);
        document.getElementById('cloneShare' + (idNum)).addEventListener("click", SocialShare);
        //לקיחת תוכן הטיפ עצמו מבסיס הנתונים.
        $.ajax({
            method: "GET",
            url: "Handlers/Handler.ashx",
            data: { Action: "getTipContect" } //שליחת שם הפעולה שתתבצע בהנדלר
        })
            .done(function (data) { //ברגע שהפעולה הסתיימה   
                tipsDivcontect = JSON.parse(data)


                var gender = sessionStorage.getItem("userGender");
                if (gender == 'f') {
                    document.getElementById("taglineTipID").innerHTML = (tipsDivcontect.Table[idNum - 1].tipTxtGirl);

                }
                else if (gender == 'm') {
                    document.getElementById("taglineTipID").innerHTML = (tipsDivcontect.Table[idNum - 1].tipTxtBoy);

                }
                else {
                    document.getElementById("taglineTipID").innerHTML = (tipsDivcontect.Table[idNum - 1].tipTxt);
                    //console.log(tipsDivcontect)
                }

                // console.log(tipsDivcontect.Table[idNum - 1].tipLink);
                if (tipsDivcontect.Table[idNum - 1].tipLink == null || tipsDivcontect.Table[idNum - 1].tipLink == "") {
                    $("#BtnLinkTipPop").css('display', 'none')

                } else {

                    $("#BtnLinkTipPop").css('display', 'block')
                    $("#BtnOuterLink").attr('href', tipsDivcontect.Table[idNum - 1].tipLink);
                    $("#BtnText").text(tipsDivcontect.Table[idNum - 1].linkBtnName);

                }


                $("#HashTagPopup").html(tipsDivcontect.Table[idNum - 1].tipHashTag); // תיוגים
                if (tipsDivcontect.Table[idNum - 1].author == '' || tipsDivcontect.Table[idNum - 1].author == null) {
                   // console.log(tipsDivcontect.Table[idNum - 1].author);
                    $(".authorP").css('display', 'none');

                } else {

                    $(".authorP").css('display', 'inline-block');
                    $("#authorName").html(tipsDivcontect.Table[idNum - 1].author); //שם המחבר
                }
                if ((tipsDivcontect.Table[idNum - 1].tipContect).toString() == "listEscort" || (tipsDivcontect.Table[idNum - 1].tipContect).toString() == "listHokara") {

                    if ((tipsDivcontect.Table[idNum - 1].tipContect).toString() == "listHokara") {
                        var toDoList = ['שלחתי ברכות לאירועים המיוחדים של המתנדבים שלי בקבוצות החברתיות שלנו.', 'הזכרתי לגורמי המפתח בארגון לשלוח את מסרי התודה שלהם.', 'הזמנתי את התקשורת לתעד את הפעילות של הארגון ואת המתנדבים שלי.', 'ווידאתי שהמתנות עבור המתנדבים שלי הוזמנו.', 'שלחתי הודעת תודה למתנדבים לאחר סיום הפעילות.'];
                    } else {
                        var toDoList = ['הקמתי קבוצה סגורה להיכרות בין המתנדבים.', 'עדכנתי את המתנדבים בחדשות על העמותה.', 'ארגנתי הכשרות והדרכות בזום למתנדבים.', 'ווידאתי שמערכת דיווחי ההתנדבות עובדת.', 'ארגנתי את ערב הצוות הבא שלנו.'];

                    }
                    var TipsPOPInnerListEscort = document.createElement("ul");
                    TipsPOPInnerListEscort.id = "TipsPOPInnerListEscort"
                    $("#TipsPOPInnerImageDIV").append(TipsPOPInnerListEscort);

                    for (var i = 0; i < toDoList.length; i++) {


                        var TipsPOPInnerListEscortLI = document.createElement("li");
                        TipsPOPInnerListEscortLI.id = "TipsPOPInnerListEscortLI" + i
                        TipsPOPInnerListEscortLI.classList = "";
                        $("#TipsPOPInnerListEscort").append(TipsPOPInnerListEscortLI);

                        var TipsPOPInnerListEscortInput = document.createElement("input");
                        TipsPOPInnerListEscortInput.type = "checkbox";
                        TipsPOPInnerListEscortInput.id = 'checkboxInput' + i;

                        $("#TipsPOPInnerListEscortLI" + i).append(TipsPOPInnerListEscortInput);

                        var TipsPOPInnerListEscortLabel = document.createElement("label");
                        TipsPOPInnerListEscortLabel.id = "TipsPOPInnerListEscortLabel" + i


                        $("#TipsPOPInnerListEscortLI" + i).append(TipsPOPInnerListEscortLabel);
                        $("#TipsPOPInnerListEscortLabel" + i).attr('for', 'checkboxInput' + i)
                        document.getElementById("TipsPOPInnerListEscortLI" + i).addEventListener('click', crossListItem)


                        var TipsPOPInnerListEscortSpanIMG = document.createElement("span");
                        TipsPOPInnerListEscortSpanIMG.classList = 'checkbox'
                        TipsPOPInnerListEscortSpanIMG.id = 'checkbox' + i;
                        $("#TipsPOPInnerListEscortLabel" + i).append(TipsPOPInnerListEscortSpanIMG);



                        var TipsPOPInnerListEscortSpan = document.createElement("span");
                        TipsPOPInnerListEscortSpan.innerHTML = toDoList[i]
                        TipsPOPInnerListEscortSpan.classList = 'TipsPOPInnerListEscortSpan'

                        $("#TipsPOPInnerListEscortLabel" + i).append(TipsPOPInnerListEscortSpan);
                        $('.TipsPOPInnerListEscortSpan').css('font-size', 'larger')


                        $('#TipsPOPInnerImageDIV').css("padding", "36px");
                    }

                }

                else if ((tipsDivcontect.Table[idNum - 1].tipContect).toString() == "phoneInteraction") {
                    var TipsPOPInnerIfarme = document.createElement("iframe");
                    TipsPOPInnerIfarme.src = "phoneInteration/PhoneInerationIndex.htm"
                    TipsPOPInnerIfarme.id = "tipIframe";
                    $("#TipsPOPInnerImageDIV").append(TipsPOPInnerIfarme);
                    $('#tipIframe').css('padding', '0');

                    if ($('#tipIframe').length) {
                        loadPhone();
                    }
                    function loadPhone() {
                        $('#tipIframe').load('phoneInteration/PhoneInerationIndex.htm', "#phone")
                    }

                }
                else if ((tipsDivcontect.Table[idNum - 1].tipContect).toString() == "managerGame") {
                    var TipsPOPInnerIfarme = document.createElement("iframe");
                    TipsPOPInnerIfarme.src = "managerSession/story.html"
                    TipsPOPInnerIfarme.id = "tipIframeManager";
                    $("#TipsPOPInnerImageDIV").append(TipsPOPInnerIfarme);

                    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) || screen.width <= 765) {
                        var TXT = (tipsDivcontect.Table[idNum - 1].tipTxt)
                        var newTXT = TXT.replaceAll("עברו", "לחצו");
                        document.getElementById("taglineTipID").innerHTML = newTXT;



                    }



                    $("#tipPopup").css("flex-direction", "column")
                    TipsPOPInnerIfarme.height = "500px";
                    TipsPOPInnerIfarme.width = 100 + "%";


                    $("#HashTagPopup").css("position", "unset")
                    $("#socialAndLike").css("position", "unset")


                }
                else if ((tipsDivcontect.Table[idNum - 1].tipContect).toString() == "lettersTip") {
                    var TipsPOPInnerIfarmeletters = document.createElement("iframe");
                    TipsPOPInnerIfarmeletters.src = "lettersInteration/letters.htm"
                    TipsPOPInnerIfarmeletters.id = "tipIframeLetter";

                    $("#tipPopup").css("flex-direction", "column")
                    $("#HashTagPopup").css("position", "unset")
                    $("#socialAndLike").css("position", "unset")
                    TipsPOPInnerIfarmeletters.width = 100 + '%'




                    $("#TipsPOPInnerImageDIV").append(TipsPOPInnerIfarmeletters);





                }
                else if ((tipsDivcontect.Table[idNum - 1].tipContect).toString() == "cardsTip") {
                    var TipsPOPInnerIfarmeCARDS = document.createElement("iframe");
                    TipsPOPInnerIfarmeCARDS.src = "cardEditor/cardEditorIndex.html"
                    TipsPOPInnerIfarmeCARDS.id = "TipsPOPInnerIfarmeCARDS";


                    $("#tipPopup").css("flex-direction", "column")
                    $("#HashTagPopup").css("position", "unset")
                    $("#socialAndLike").css("position", "unset")
                    TipsPOPInnerIfarmeCARDS.width = 100 + "%";
                    TipsPOPInnerIfarmeCARDS.height = "550px";
                    $("#TipsPOPInnerImageDIV").append(TipsPOPInnerIfarmeCARDS);
                }

                else if ((tipsDivcontect.Table[idNum - 1].tipContect).toString() == "img") {

                    var TipsPOPInnerImage = document.createElement("img");
                    TipsPOPInnerImage.id = "tipImg";
                    $("#TipsPOPInnerImageDIV").append(TipsPOPInnerImage);

                    var stopGif = sessionStorage.getItem("stopGif");
                    if (stopGif == 'true') {
                        $("#tipImg").attr("src", './img/Tips/' + tipsDivcontect.Table[idNum - 1].serialContect_Jpg);

                    } else {



                        $("#tipImg").attr("src", './img/Tips/' + tipsDivcontect.Table[idNum - 1].serialContectInner);
                    }
                }


                /*ASIDE*/

              //  console.log(lastTipViewed.slice(14))
                var subjectLivoi;
                for (var i = 1; i < tipsDivNum + 1; i++) {
                    if (i != lastTipViewed.slice(14)) {
                       // console.log($("#tipSection" + idNum))
                       // console.log(nextTipArrowRClicked)
                        if (($("#tipSection" + idNum)).find(".tipHashTag").text().indexOf("#מלווים_מתנדבים") > -1) {
                            subjectLivoi = true;
                        } else {
                            subjectLivoi = false;
                        }
                        if (subjectLivoi == true) {
                            if ($($("#TipsContentDIV" + i).parent().parent()[0]).find(".tipHashTag").text().indexOf("#מלווים_מתנדבים") > -1 && i != $(e.target).parent().attr('id').slice(14)) {

                                tipsArray.push(i)

                            }
                        } else {

                            if ($($("#TipsContentDIV" + i).parent().parent()[0]).find(".tipHashTag").text().indexOf("#מוקירים_מתנדבים") > -1 && i != $(e.target).parent().attr('id').slice(14)) {


                                tipsArray.push(i)

                            }
                        }


                    }
                }
                if (window.location.href.indexOf("profile") == -1) {
                   // console.log(tipsArray)
                    var numberOfTips;
                    if (tipsArray.length <= 3) {
                        numberOfTips = tipsArray.length;
                    }
                    if (tipsArray.length >= 4) {
                        numberOfTips = 4;
                    }

                    //console.log(numberOfTips)
                    for (var i = 0; i < numberOfTips; i++) {
                       // console.log(i + " number of loop")
                        let numbersArray = tipsArray;

                        function getRandomNumber(min, max) {
                            let totalEle = max - min + 1;
                            let result = Math.floor(Math.random() * totalEle) + min;
                            return result;
                        }

                        if (numbersArray.length === 0) {
                          //  console.log('No more random number');
                            return;
                        }
                        let randomIndex = getRandomNumber(0, numbersArray.length - 1);
                        let randomNumber = numbersArray[randomIndex];
                        numbersArray.splice(randomIndex, 1);
                       // console.log(randomNumber);



                        $("#tip" + randomNumber).clone().addClass("moreTips").removeClass("main").appendTo("#moreTips");
                        document.getElementsByClassName("moreTips")[i].addEventListener("click", clickedMoreTip);


                        $("#moreTips").find('.TipsLikeDivWarp').remove();
                        $("#moreTips").find('.TipsShareWarp').remove();

                    }
                }
                nextTipArrowRClicked = false;
                moreTipsClicked = false;

            })
            .fail(function (error) { //במצב של שגיאה  
                // console.log("error");
                // console.log(error.statusText);
            })



        // $('.text-box').css('height', $('.modal').height()+30);
    };

    //$("#BtnLinkTipPop").click(function () {
    //    $("#BtnOuterLink").click();

    //})

    //exit Popup
    $('.ExitTip').click(function () {
        $('body').css('overflow', 'auto');


        nextTipArrowRClicked = false;

        $(".nextTipArrowR").css("opacity", 1);
        $(".nextTipArrowL").css("opacity", 1);
        $(".nextTipArrowR").css("pointer-events", "auto");
        $(".nextTipArrowL").css("pointer-events", "auto");


        $("#WelcomeInfo").css("display", 'block');
        $('#popupTips').removeClass('is-open');
        $('#popupTips').removeClass('overlay');
        $('#popupTips').addClass('popupClose');

        window.location.href = '#' + lastTipViewed;

        resetPOPUP();
        login = sessionStorage.getItem("doesLogin");
        if (login) {
            didUserLikesTips();
        }
    });

    //reset popup 
    function resetPOPUP() {

        if ($('#tipIframe').length) {
            $('#tipIframe').remove();
        }

        if ($('#tipImg').length) {
            $('#tipImg').remove();
        }
        if ($('#TipsPOPInnerListEscort').length) {
            $('#TipsPOPInnerListEscort').remove();
        }
        if ($('#tipIframeLetter').length || $('#tipIframeManager').length || $("#TipsPOPInnerIfarmeCARDS").length) {
            if ($('#tipIframeManager').length) {
                $('#tipIframeManager').remove();
            } else if ($("#TipsPOPInnerIfarmeCARDS").length) {
                $('#TipsPOPInnerIfarmeCARDS').remove();
            } else {
                $('#tipIframeLetter').remove();
            }


            $("#tipPopup").css("flex-direction", "row");
            $('tipIframe').css('padding', '20px');


        }


        if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) || screen.width <= 765) {
            // true for mobile device
            $('#TipsPOPInnerImageDIV').css("padding", "0px");

            //   console.log("mobile device");
        } else {
            //console.log("desktop")

            if (window.innerWidth > 764 && window.innerWidth < 1200) {
                $("#HashTagPopup").css("position", "unset")
                $("#socialAndLike").css("position", "unset")
            }
            else {

                //$("#HashTagPopup").css("position", "absolute")
                //$("#socialAndLike").css("position", "absolute")
            }




            $('#TipsPOPInnerImageDIV').css("padding", "10px");

        }
        $("#socialAndLike").empty();
        $("#moreTips").empty();
    }




    //delete an item from the filter list
    function crossListItem(e) {
        //  e.target.id
        var ListItemNUM = $(e.target).parent().attr('id').slice(24);



        if ($(e.target).is(':checked')) {
            $('#TipsPOPInnerListEscortLI' + ListItemNUM).addClass("crossListItem");
            $('#checkbox' + ListItemNUM).addClass('active');

        }
        if ($(e.target).is(':checked') == false) {
            $('#TipsPOPInnerListEscortLI' + ListItemNUM).removeClass("crossListItem");
            $('#checkbox' + ListItemNUM).removeClass('active');

        }
    }





    var updateCurrentLikes;






    /*changing the like btn to red if the user logedin alse the login popup appear*/
    function toggleLike(e) {


        login = sessionStorage.getItem("doesLogin");
        if (window.location.href.indexOf("profile") > -1) {


            sessionStorage.setItem("doesLogin", "true");
            login = sessionStorage.getItem("doesLogin");


            $("#tipSection" + (e.target).id.slice(11)).css("display", "none");


            if ($('.tipSection:visible').length == 0) {


                var NoTipsLiked = document.createElement("p");
                NoTipsLiked.innerText = "אופס, עוד לא אהבת אף טיפ.";
                $("#containTips").append(NoTipsLiked)


                var NoTipsLikedLink = document.createElement("a");
                NoTipsLikedLink.setAttribute("href", "index.html");
                NoTipsLikedLink.id = "NoTipsLikedLink"
                $("#containTips").append(NoTipsLikedLink)

                var NoTipsLikedBTN = document.createElement("button");
                NoTipsLikedBTN.id = "NoTipsLikedBTNN";
                NoTipsLikedBTN.innerText = " חזרה לדף הבית";
                $("#NoTipsLikedLink").append(NoTipsLikedBTN)
            }


        }
        if (login != "true") {

            $('#registerPopup').addClass('is-open-register');
            $('#registerPopup').addClass('overlay-register');
            $('body').css('height', '100%');

            $('#registerPopup').removeClass('popupClose');

            $('#newUserBTN').removeClass('newuserQ');
            $('#olduserBTN').addClass('olduserQ');
            $("#comebackSection").css('display', 'none')
            $("#thanksForComingSection").css('display', 'block')

        } else {
            var tipId = $(e.target).attr('id').slice(11);

            var logedEmail = sessionStorage.getItem("userlogedEmail");
            var userIdNum = sessionStorage.getItem("userIdNum");

            /*insert info to like table - select the current tip that the user liked and rise/lower is likes*/

            $.ajax({
                method: "GET",
                url: "Handlers/Handler.ashx",
                data: { Action: "LikeTip", login: login, tipId: tipId, userEmail: logedEmail, userId: userIdNum } //שליחת שם הפעולה שתתבצע בהנדלר
            })
                .done(function (data) { //ברגע שהפעולה הסתיימה   

                  //  console.log(data)


                })
                .fail(function (error) { //במצב של שגיאה  

                    //   console.log(error.statusText);
                })


            $(document.getElementById((e.target).id)).toggleClass("liked")

          //  console.log(tipId)


            var BTNID = document.querySelector(".TipsLikeBtn")



            $.ajax({
                method: "GET",
                url: "Handlers/Handler.ashx",
                data: { Action: "currentLikesNum", tipIdNum: tipId } //שליחת שם הפעולה שתתבצע בהנדלר
            })
                .done(function (data) { //ברגע שהפעולה הסתיימה   
                    var info = JSON.parse(data)

                    if ($(document.getElementById((e.target).id)).parent().find('button:first').hasClass("liked")) {
                       // console.log(info.Table[0].likesCount)

                        updateCurrentLikes = info.Table[0].likesCount + 1

                        const runButton = document.getElementById((e.target).id);

                        heartsaffect(runButton);

                    } else {


                        updateCurrentLikes = info.Table[0].likesCount - 1;

                        //delete user like from the likesTip table.

                        // deleteTipLike
                        $.ajax({
                            method: "GET",
                            url: "Handlers/Handler.ashx",
                            data: { Action: "deleteTipLike", email: logedEmail, currentTipID: tipId/*, gotcurrent: "true"*/ } //שליחת שם הפעולה שתתבצע בהנדלר
                        })
                            .done(function (data) { //ברגע שהפעולה הסתיימה   



                            })
                            .fail(function (error) { //במצב של שגיאה  

                                // console.log(error.statusText);
                            })

                    }
                    gotcurrent = "true";


                    $.ajax({
                        method: "GET",
                        url: "Handlers/Handler.ashx",
                        data: { Action: "updateTipNumOfLikes", updateCurrentLikes: updateCurrentLikes.toString(), currentTipID: tipId/*, gotcurrent: "true"*/ } //שליחת שם הפעולה שתתבצע בהנדלר
                    })
                        .done(function (data) { //ברגע שהפעולה הסתיימה   


                            $(document.getElementById((e.target).id)).parent().find('span:first').text(updateCurrentLikes.toString());


                        })
                        .fail(function (error) { //במצב של שגיאה  


                            //  console.log(error.statusText);
                        })

                })
                .fail(function (error) { //במצב של שגיאה  


                    // console.log(error.statusText);
                })



        };
    }

    /*when the user liked a tip - will appear hearts affect*/
    function heartsaffect(runButton) {






        const heartPath = document.createElementNS(
            "http://www.w3.org/2000/svg",
            "path"
        );
        heartPath.setAttribute(
            "d",
            "M316.722,29.761c66.852,0,121.053,54.202,121.053,121.041c0,110.478-218.893,257.212-218.893,257.212S0,266.569,0,150.801 C0,67.584,54.202,29.761,121.041,29.761c40.262,0,75.827,19.745,97.841,49.976C240.899,49.506,276.47,29.761,316.722,29.761z"
        );


        const heartShape = document.createElementNS(
            "http://www.w3.org/2000/svg",
            "svg"
        );
        heartShape.setAttribute("viewBox", "0 0 512 512");
        heartShape.setAttribute("height", "20");
        heartShape.setAttribute("width", "20");
        heartShape.setAttribute("id", "heartShape");
        heartShape.appendChild(heartPath);



        party.scene.current.createEmitter({
            emitterOptions: {
                loops: 1,
                useGravity: false,
                modules: [
                    new party.ModuleBuilder()
                        .drive("size")
                        .by((t) => 0.5 + 0.3 * (Math.cos(t * 10) + 1))
                        .build(),
                    new party.ModuleBuilder()
                        .drive("rotation")
                        .by((t) => new party.Vector(0, 0, 100).scale(t))
                        .relative()
                        .build(),
                ],
            },
            emissionOptions: {
                rate: 0,
                bursts: [{ time: 0, count: party.variation.skew(20, 10) }],
                sourceSampler: party.sources.dynamicSource(runButton),
                angle: party.variation.range(0, 360),
                initialSpeed: 400,
                initialColor: party.variation.gradientSample(
                    party.Gradient.simple(
                        party.Color.fromHex("#ffa68d"),
                        party.Color.fromHex("#fd3a84")
                    )
                ),
            },
            rendererOptions: {
                shapeFactory: heartShape,
                applyLighting: undefined,
            },
            //});
        });
        /******************************************/
    

    }
    /*when the user register or login to the system and all is details currect - when clicking the Btn will be conffeti*/


    function conffeti(e) {



        party.confetti(e);

    }



    function SocialShare(e) {




        var shareNum = $(e.target).attr('id').slice(12);

        $("#TipsShareBtn" + shareNum).toggleClass("shareClicked");

        $("#TipsShareWA" + shareNum).toggleClass("close");
        $("#TipsShareWA" + shareNum).toggleClass("open");
        $("#TipsShareWA" + shareNum).toggleClass("wa")

        $("#TipsShareFB" + shareNum).toggleClass("close");
        $("#TipsShareFB" + shareNum).toggleClass("open")
        $("#TipsShareFB" + shareNum).toggleClass("fb")

        $("#TipsShareEM" + shareNum).toggleClass("close");
        $("#TipsShareEM" + shareNum).toggleClass("open")
        $("#TipsShareEM" + shareNum).toggleClass("em")
    };



    function getuserIDlogin() {
        /*get userId Info from the user Table*/

        var logedEmail = sessionStorage.getItem("userlogedEmail")

        $.ajax({
            method: "GET",
            url: "Handlers/Handler.ashx",
            data: { Action: "getUserInfo", userEmailTXT: logedEmail } //שליחת שם הפעולה שתתבצע בהנדלר
        })
            .done(function (data) { //ברגע שהפעולה הסתיימה   
                var info = JSON.parse(data)

                sessionStorage.setItem("userIdNum", (info.Table[0].ID).toString());

                sessionStorage.getItem("userIdNum");

            })
            .fail(function (error) { //במצב של שגיאה  

                //console.log(error.statusText);
            })

    }


    //רישום יוזר חדש
    $(".genderIMG").click(function (e) {


        if ($(e.target).attr('id') == 'genderIMGfemale') {


            $('#genderIMGmale').attr('src', 'img/genderM.png');
            $('#genderIMGfemale').attr('src', 'img/genderFChoosen.png');
         
        }
        if ($(e.target).attr('id') == 'genderIMGmale') {
          
            $('#genderIMGfemale').attr('src', 'img/genderF.png');
            $('#genderIMGmale').attr('src', 'img/genderMChoosen.png');
        }



    });

    $("#registerBTN").click(function () {
        //שמירת כל הפרטים ליצירת יוזר חדש  

        var myFisrtName = $("#userFirstNameTXT").val();
        var myLastName = $("#userLastNameTXT").val();
        var myuserEmail = $("#userEmailTXTreg").val();
        var userGender;
        if ($('#femaleRB').is(':checked') || $('#genderIMGfemale').src == 'img/genderFChoosen') {
            userGender = 'f';
        }
        else if ($('#maleRB').is(':checked') || $('#genderIMGmale').src == 'img/genderMChoosen') {
            userGender = 'm';

        } else {
            userGender = 'null';
        }


        var EmailValidate;

        const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        EmailValidate = re.test(myuserEmail);




        $.ajax({
            method: "POST",
            url: "Handlers/Handler.ashx",
            data: { Action: "registerNewUser", userEmail: myuserEmail, fisrtName: myFisrtName, lastName: myLastName, EmailValidate: EmailValidate, userGender: userGender }
        })
            .done(function (data) { //ברגע שהפעולה הסתיימה   
                if (data == "actionSucceed") {
                    sessionStorage.setItem("doesLogin", "true");
                    sessionStorage.setItem("userFName", myFisrtName);
                    sessionStorage.setItem("userLName", myLastName);
                    sessionStorage.setItem("userlogedEmail", myuserEmail)
                    sessionStorage.setItem("userGender", userGender)

                    sessionStorage.setItem("userfullName", myFisrtName + " " + myLastName);

                    document.getElementById("userNameP").innerHTML = sessionStorage.getItem("userfullName");
                    document.getElementById("ProfileTag").innerHTML = "הפרופיל של:";
                    $("#ProfileTag").css("font-size", "16px");

                    document.getElementById("userNamePm").innerHTML = sessionStorage.getItem("userfullName");
                    document.getElementById("ProfileTagm").innerHTML = "הפרופיל של:";
                    $("#ProfileTagm").css("font-size", "16px");


                    document.getElementById("Heyush").innerHTML = "היוש" + " " + myFisrtName + ",";
                    document.getElementById("HeyushMobile").innerHTML = "היוש" + " " + myFisrtName + ",";

                    $(".UserExit").css("display", "block");
                    $(".logInLink").css("display", "none");
                    $(".regLink").css("display", "none");
                    $(".loginToSystem").attr("style", "display:none");

                    changeTipByGender();

                    getuserIDlogin();

                    setTimeout(function () {
                        $('#registerPopup').removeClass('is-open-register');
                        $('#registerPopup').removeClass('overlay-register');
                        $('body').css('height', 'auto');

                        $('#registerPopup').addClass('popupClose');




                    }, 2000);
                    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) || screen.width <= 765) { $('body').css('height', '100vh'); }
                    else { $('body').css('height', 'auto'); }
                    conffeti(document.querySelector('#registerBTN'));

                }
                if (data == "emailNotcurrect") {
                    setTimeout(function () { document.getElementById("validateInput").innerHTML = "" }, 3000);
                    document.getElementById("validateInput").innerHTML = "אופס, נראה שהמייל לא הוזן כמו שצריך"

                }

                else if (data == "noData") {
                    setTimeout(function () { document.getElementById("validateInput").innerHTML = "" }, 3000);
                    document.getElementById("validateInput").innerHTML = "אופס, נראה ששכחת להזין אחד מהפריטים"

                }

            })
            .fail(function (error) { //במצב של שגיאה  

                // console.log(error.statusText);
                sessionStorage.setItem("doesLogin", "false");
            })


    });



    $(".notNowBTN").click(function () {

        //$('.overlay-register').removeClass('is-open-register');

        $('#registerPopup').removeClass('is-open-register');
        $('#registerPopup').removeClass('overlay-register');
        $('body').css('height', 'auto');
        $('#registerPopup').addClass('popupClose');


        sessionStorage.setItem("doesLogin", "false");
    });


    $("#olduserBTN").click(function () {
        $('#olduserBTN').removeClass('olduserQ');
        $('#newUserBTN').addClass('newuserQ');
        $("#comebackSection").css('display', 'block')
        $("#thanksForComingSection").css('display', 'none')
    });

    $("#newUserBTN").click(function () {
        $('#olduserBTN').addClass('olduserQ');
        $('#newUserBTN').removeClass('newuserQ');
        $("#comebackSection").css('display', 'none')
        $("#thanksForComingSection").css('display', 'block')
    });


    $("#menuBG").hide();
    //תפריט נייד
    $("#toggleMenuCB").change(function () {
        $("#menuBG").toggle();
        $("#logo").toggle();
        $(".TipDivS").toggleClass("preventEvents");
        $("#addTipBTN").toggleClass("preventEvents");
        $(".menuBTN").toggleClass("preventEvents");


    });



    //כניסה של יוזר למערכת ושליפת המידע שלו מבסיס הנתונים
    var userEmail;

    $("#loginBTN").click(function () {
        if ($(".MngForm").is(":visible")) {
          
            if ($("#MNGuserName").val() == mngUserName && $("#MNGPassword").val() == mngPassword) {
                $('.editorLink').css('display', 'block');
                $('.loginToSystem').css('display', 'none');
                $(".loginToSystem").attr("style", "display:none");


                $(".UserExit").css("display", "block");
                $(".logInLink").css("display", "none");
                $(".regLink").css("display", "none");

                sessionStorage.setItem("userFName", "עורך/ת");
                sessionStorage.setItem("userLName", "");

                userFName = sessionStorage.getItem("userFName");
                document.getElementById("userNameP").innerHTML = userFName;
                document.getElementById("ProfileTag").innerHTML = "הפרופיל של:";
                $("#ProfileTag").css("font-size", "16px");

                document.getElementById("userNamePm").innerHTML = userFName;
                document.getElementById("ProfileTagm").innerHTML = "הפרופיל של:";
                $("#ProfileTagm").css("font-size", "16px");


                document.getElementById("Heyush").innerHTML = "היוש" + " " + userFName + ",";
                document.getElementById("HeyushMobile").innerHTML = "היוש" + " " + userFName + ",";

                sessionStorage.setItem("doesLogin", "true");


                setTimeout(function () {
                    $('#registerPopup').removeClass('is-open-register');
                    $('#registerPopup').removeClass('overlay-register');
                    $('body').css('height', 'auto');
                    $('#registerPopup').addClass('popupClose');

                }, 2000);

                conffeti(document.querySelector('.registerBTN'));
            } if ($("#MNGuserName").val() != mngUserName || $("#MNGPassword").val() != mngPassword) {


                setTimeout(function () { document.getElementById("NoEmailFoundAtSystem").innerHTML = "" }, 3000);
                document.getElementById("NoEmailFoundAtSystem").innerHTML = "אופס, שם המשתמש או הסיסמא אינם נכונים. נסה שוב."


            }



        } else {


            userEmail = $("#userEmailTXT").val();
            var EmailValidate;

            const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            EmailValidate = re.test(userEmail);


            $.ajax({
                method: "GET",
                url: "Handlers/Handler.ashx",
                data: { Action: "getUserInfo", userEmailTXT: userEmail } //שליחת שם הפעולה שתתבצע בהנדלר
            })
                .done(function (data) { //ברגע שהפעולה הסתיימה   

                    if (data == "nouserInfoFound") {

                        document.getElementById("NoEmailFoundAtSystem").innerHTML = "חדשים פה? המייל לא נמצא במערכת, נסה שנית."

                    } else {
                        var info = JSON.parse(data)

                        sessionStorage.setItem("userFName", info.Table[0].userFirstname);
                        sessionStorage.setItem("userLName", info.Table[0].userLastName);
                        sessionStorage.setItem("userlogedEmail", userEmail);
                        sessionStorage.setItem("userGender", info.Table[0].gender);
                        getuserIDlogin();


                        sessionStorage.setItem("doesLogin", "true");

                        userFName = sessionStorage.getItem("userFName");
                        userLName = sessionStorage.getItem("userLName");
                        userLogedinEmail = sessionStorage.getItem("userlogedEmail");
                        login = sessionStorage.getItem("doesLogin");

                        $(".UserExit").css("display", "block");
                        $(".logInLink").css("display", "none");
                        $(".regLink").css("display", "none");
                        $(".loginToSystem").attr("style", "display:none");

                        didUserLikesTips();

                       
                        document.getElementById("userNameP").innerHTML = userFName + " " + userLName;
                        document.getElementById("ProfileTag").innerHTML = "הפרופיל של:";
                        $("#ProfileTag").css("font-size", "16px");

                        document.getElementById("userNamePm").innerHTML = userFName + " " + userLName;
                        document.getElementById("ProfileTagm").innerHTML = "הפרופיל של:";
                        $("#ProfileTagm").css("font-size", "16px");


                        document.getElementById("Heyush").innerHTML = "היוש" + " " + userFName + ",";
                        document.getElementById("HeyushMobile").innerHTML = "היוש" + " " + userFName + ",";
                        //}

                        changeTipByGender();



                        setTimeout(function () {
                            $('#registerPopup').removeClass('is-open-register');
                            $('#registerPopup').removeClass('overlay-register');
                            $('body').css('height', 'auto');
                            $('#registerPopup').addClass('popupClose');

                        }, 2000);

                        conffeti(document.querySelector('.registerBTN'));


                    }


                })
                .fail(function (error) { //במצב של שגיאה  

                    // console.log(error.statusText);
                })
        }
    });



    //בדיקה האפ היוזר עשה לייק לטיפים ובעת כניסה למערכת לשנות את הלב לאדום לטיפים שהוא עשה לייק
    function didUserLikesTips() {
    //    var TIps = $(".TipDivS");



        $.ajax({
            method: "GET",
            async: false,
            url: "Handlers/Handler.ashx",
            data: { Action: "getTipContect" } //שליחת שם הפעולה שתתבצע בהנדלר
        })
            .done(function (data) { //ברגע שהפעולה הסתיימה   
                tipsDivcontect = JSON.parse(data)
                tipsDivNum = JSON.parse(data).Table.length


               // divTipCreation();

                for (var i = 0; i < tipsDivNum; i++) {
                    $(".TipsLikeBtn").removeClass("liked");
                    $("#TipsLikeCounter" + tipsDivcontect.Table[i].ID).text((tipsDivcontect.Table[i].likesCount).toString());
                }

            })
            .fail(function (error) { //במצב של שגיאה  

                //console.log(error.statusText);
            })

        var userEmail = sessionStorage.getItem("userlogedEmail");
        $.ajax({
            method: "GET",
            url: "Handlers/Handler.ashx",
            data: { Action: "getTipsInfo", userEmailTXT: userEmail } //שליחת שם הפעולה שתתבצע בהנדלר
        })
            .done(function (data) { //ברגע שהפעולה הסתיימה   
                //console.log(data)

               
                if (data != 'אופס, עדיין לא אהבת אף טיפ') {
                    var info = JSON.parse(data)
                   // console.log(info);

                    userLikesDiv = info.Table.length;

                    for (var i = 0; i < info.Table.length; i++) {
                      //  console.log(info.Table[i].likesCount)
                        $("#TipsLikeBtn" + info.Table[i].tipID).addClass("liked");
                        $("#TipsLikeCounter" + info.Table[i].tipID).text((info.Table[i].likesCount).toString());
                    }
                    //console.log(info.Table[0].userEmail)
                }
               

            })
            .fail(function (error) { //במצב של שגיאה  

                // console.log(error.statusText);
            })
    };

    AOS.init({
        duration: 1200,
    })

    function changeTipByGender() {

        $.ajax({
            method: "GET",
            async: false,
            url: "Handlers/Handler.ashx",
            data: { Action: "getTipContect" } //שליחת שם הפעולה שתתבצע בהנדלר
        })
            .done(function (data) { //ברגע שהפעולה הסתיימה   
                tipsDivcontect = JSON.parse(data)


                var userGender = sessionStorage.getItem("userGender");
                var myTipsSection = $('.tipheadline');

                for (var i = 0; i < tipsDivNum; i++) {

                    if (tipsDivcontect.Table[i].publish && tipsDivcontect.Table[i].deletedTip == false) {

                        if (userGender == 'f') {
                            document.getElementById("tipheadline" + (i + 1)).innerHTML = tipsDivcontect.Table[i].tipHeadlineGirl;

                            document.getElementById("ExInfo").innerHTML = "לחצי על הטיפים וגלי";

                            var profileImgArr = ["ProfilePic2", "ProfilePic3"]

                            var profileNum = Math.floor((Math.random() * profileImgArr.length));

                            $(".ProfilePicImg").attr("src", "img/" + profileImgArr[profileNum] + ".png");

                        }
                        else if (userGender == 'm') {
                            document.getElementById("tipheadline" + (i + 1)).innerHTML = tipsDivcontect.Table[i].tipHeadlineBoy;

                            document.getElementById("ExInfo").innerHTML = "לחץ על הטיפים וגלה";

                            var profileImgArr = ["ProfilePic1", "ProfilePic4"]

                            var profileNum = Math.floor((Math.random() * profileImgArr.length));

                            $(".ProfilePicImg").attr("src", "img/" + profileImgArr[profileNum] + ".png");


                        } else {
                            $(".ProfilePicImg").attr('src', 'img/profilePic_Anonimous.png');
                        }
                    }
                }


            })
            .fail(function (error) { //במצב של שגיאה  
                //      console.log(error.statusText);
            })

    }


    $(".UserExit").click(function () {

        //איפוס משתני הסשן
        sessionStorage.setItem("userFName", "");
        sessionStorage.setItem("userLName", "");
        sessionStorage.setItem("userlogedEmail", "");
        sessionStorage.setItem("userGender", "");
        //getuserIDlogin();


        sessionStorage.setItem("doesLogin", "false");

        userFName = sessionStorage.getItem("");
        userLName = sessionStorage.getItem("");

        var reset = document.createElement("a");
        reset.href = "index.html";
        reset.click();
    });



    $("#stopGif").click(function () {

        sessionStorage.setItem("stopGif", "true");
        $("#stopGif").attr('style', 'display:none');
        $("#playGif").attr('style', 'display:flex')
        GifMovement();

    });


    $("#playGif").click(function () {

        sessionStorage.setItem("stopGif", "false");
        $("#playGif").attr('style', 'display:none');
        $("#stopGif").attr('style', 'display:flex')
        GifMovement()

    });


    function GifMovement() {
        $.ajax({
            method: "GET",
            async: false,
            url: "Handlers/Handler.ashx",
            data: { Action: "getTipContect" } //שליחת שם הפעולה שתתבצע בהנדלר
        })
            .done(function (data) { //ברגע שהפעולה הסתיימה   
                tipsDivcontect = JSON.parse(data)


                var userGender = sessionStorage.getItem("userGender");
                var myTipDivImg = $('.TipsContentDIV');

                for (var i = 0; i < myTipDivImg.length; i++) {

                    var tipID = (myTipDivImg[i].id).slice(14);


                    var stopGif = sessionStorage.getItem('stopGif');



                    if (stopGif === 'true') {
                        $('#TipsContentDIV' + tipID).children().attr('src', './img/Tips/' + tipsDivcontect.Table[tipID - 1].serialContect_Jpg);
                    } else {
                        $('#TipsContentDIV' + tipID).children().attr('src', './img/Tips/' + tipsDivcontect.Table[tipID - 1].serialContect);

                    }
                }


            })
            .fail(function (error) { //במצב של שגיאה  

                //  console.log(error.statusText);
            })
    }

    $("#Rnext").click(function (e) {

        nextTipArrowRClicked = true;
        //console.log(currentIndex)
        if (userFiltered == true) {


            var currentTipsFiltered = []
            var tipSection = $('.tipSection');
            for (var i = 0; i < tipSection.length; i++) {
                if ($(tipSection[i]).is(":hidden") == false) {
                    currentTipsFiltered.push(tipSection[i]);

                }
            }



            var current = ('"' + 'tipSection' + lastTipViewed.slice(14) + '"');

            var tipindex = $(currentTipsFiltered).index($('#tipSection' + lastTipViewed.slice(14)));
            //   var tipindex = $.inArray("tipSection16", currentTipsFiltered)

            tipindex--;
           // console.log(tipindex)
            /************************************************/

            if (tipindex == -1) {

            } else {
                resetPOPUP();
                $(currentTipsFiltered[tipindex]).find('.TipsContentDIV').click()

            }


            if (currentTipsFiltered[0].id == ('tipSection' + lastTipViewed.slice(14))) {

                $(".nextTipArrowR").css("opacity", "0.2")
                $(".nextTipArrowR").css("pointer-events", "none")

            }

            if ($(currentTipsFiltered).last().attr('id') != ('tipSection' + lastTipViewed.slice(14))) {


                $(".nextTipArrowL").css("opacity", "1")
                $(".nextTipArrowL").css("pointer-events", "auto")
            }
            /*************************************************/
        } else {


            var currentIndex = $("#containTips").children().index($('#tipSection' + lastTipViewed.slice(14)).click());

            currentIndex--;

            var filtersOptions = $(".filtersOptions");



            //console.log(currentIndex)


            if (currentIndex == -1) {

            } else {
                if ($($("#containTips").children()[currentIndex]).css("display") == "inline-table") {
                    // console.log("HERRRRRRRRRRRRRRRRRRRRRRRRRR")
                    resetPOPUP();

                    $($("#containTips").children()[currentIndex]).find('.TipsContentDIV').click()

                }

            }

            if ($("#containTips").children()[0].id == ('tipSection' + lastTipViewed.slice(14))) {

                $(".nextTipArrowR").css("opacity", "0.2")
                $(".nextTipArrowR").css("pointer-events", "none")

            }

            if ($("#containTips").children().last().attr('id') != ('tipSection' + lastTipViewed.slice(14))) {


                $(".nextTipArrowL").css("opacity", "1")
                $(".nextTipArrowL").css("pointer-events", "auto")
            }

        }

    })


    $("#Lnext").click(function () {

        nextTipArrowRClicked = true;

        if (userFiltered == true) {


            var currentTipsFiltered = []
            var tipSection = $('.tipSection');
            for (var i = 0; i < tipSection.length; i++) {
                if ($(tipSection[i]).is(":hidden") == false) {
                    currentTipsFiltered.push(tipSection[i]);

                }
            }




            var current = ('"' + 'tipSection' + lastTipViewed.slice(14) + '"');

            var tipindex = $(currentTipsFiltered).index($('#tipSection' + lastTipViewed.slice(14)));


            tipindex++;

            /************************************************/

            if (tipindex == -1) {

            } else {
                resetPOPUP();
                $(currentTipsFiltered[tipindex]).find('.TipsContentDIV').click()

            }


            if (currentTipsFiltered[0].id != ('tipSection' + lastTipViewed.slice(14))) {

                $(".nextTipArrowR").css("opacity", "1")
                $(".nextTipArrowR").css("pointer-events", "auto")

            }

            if ($(currentTipsFiltered).last().attr('id') == ('tipSection' + lastTipViewed.slice(14))) {


                $(".nextTipArrowL").css("opacity", "0.2")
                $(".nextTipArrowL").css("pointer-events", "none")
            }
            /*************************************************/
        } else {


            var currentIndex = $("#containTips").children().index($('#tipSection' + lastTipViewed.slice(14)).click());

            currentIndex++;

            var filtersOptions = $(".filtersOptions");


            if (currentIndex == -1) {

            } else {
                if ($($("#containTips").children()[currentIndex]).css("display") == "inline-table") {

                    resetPOPUP();

                    $($("#containTips").children()[currentIndex]).find('.TipsContentDIV').click()

                }

            }


            if ($("#containTips").children()[0].id != ('tipSection' + lastTipViewed.slice(14))) {

                $(".nextTipArrowR").css("opacity", "1")
                $(".nextTipArrowR").css("pointer-events", "auto")

            }

            if ($("#containTips").children().last().attr('id') == ('tipSection' + lastTipViewed.slice(14))) {


                $(".nextTipArrowL").css("opacity", "0.2")
                $(".nextTipArrowL").css("pointer-events", "none")
            }

        }

    })

    function clickedMoreTip(e) {
        moreTipsClicked = true;




        if ($($(e.target).parent()).hasClass("headlineTagsDIV")) {

            var num = $($(e.target).parent()).attr("id").slice(15);
            resetPOPUP();
            $($(".main").children("#TipsContentDIV" + num).click());
        }
        if ($($(e.target).parent()).hasClass("TipsContentDIV")) {

            var num = $($(e.target).parent()).attr("id").slice(14);

            resetPOPUP();
            $($(".main").children("#TipsContentDIV" + num).click());

        }

    }




    /***********************************/

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



    //add tip btn
    $('#addTipBTN').click(function () {
        var userLogedin = sessionStorage.getItem("doesLogin");

        if (userLogedin == "true") {
            var Fname = sessionStorage.getItem("userFName");
            var myFisrtName = sessionStorage.getItem("userFName");
            var myLastName = sessionStorage.getItem("userLName");
            var userGender = sessionStorage.getItem("userGender");

            if (Fname == 'עורך/ת') {
                /*ליצר לינק לעורך */
                var Link = document.createElement("a");
                Link.href = "addTipEditorSection.aspx";
                Link.id = "Link"
                $("#addTipBTN").append(Link)
                Link.click();


            } else {
                $('#addTipPopup').removeClass('popupClose')
                $('#addTipPopup').addClass('is-open')
                $('#addTipPopup').addClass('overlay')
                $('#indentifyUserLbl').text(myFisrtName + ' ' + myLastName + ', ' + sessionStorage.getItem("userlogedEmail"));
                if (userGender == 'm') {
                    $('.HaddTip').text('איזה רכז תותח!')
                    $('.DirAddTip1').text('תודה על השיתוף! אנחנו בטוחים שרכזים נוספים יאהבו וישתפו את הטיפ שלך.')
                    $('.DirAddTip2').text('כל מה שנותר הוא למלא את הפרטים.')
                    $('.DirAddTip3').text('**לתשומת לבך הטיפ יפורסם באתר לאחר אישורו של מנהל האתר')
                } if (userGender == 'f') {
                    $('.HaddTip').text('איזה רכזת תותחית!')
                    $('.DirAddTip1').text('תודה על השיתוף! אנחנו בטוחים שרכזים נוספים יאהבו וישתפו את הטיפ שלך.')
                    $('.DirAddTip2').text('כל מה שנותר הוא למלא את הפרטים.')
                    $('.DirAddTip3').text('**לתשומת לבך הטיפ יפורסם באתר לאחר אישורו של מנהל האתר')
                }
            }

        } else {
            $('#registerPopup').addClass('is-open-register');
            $('#registerPopup').addClass('overlay-register');

            // $('body').css('height', '100%');

            $('#registerPopup').removeClass('popupClose');
            $('#olduserBTN').addClass('olduserQ');

            $("#newUserBTN").removeClass("newuserQ");
            $("#comebackSection").css("display", "none")
            $("#thanksForComingSection").css("display", "block")


        }
    });

    $('.closeAddTipPop').click(function () {
        $('#addTipPopup').addClass('popupClose')
        $('#addTipPopup').removeClass('is-open')
        $('#addTipPopup').removeClass('overlay')
    });

    /**************add tip from user button******************/
    $('#addTipFromUser').click(function () {


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
                //console.log('hokara')
                serialContectInner = 'TipFromUserHokara_part1.gif';
                serialContect = 'TipFromUserHokara_part1.gif';
                serialContect_Jpg = 'TipFromUserHokara.png';
                tags = '#מוקירים_מתנדבים';
            }
            if ($("#LivoiTip").is(':checked')) {
                //console.log('livoi')
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
           // console.log(tipDate);

            $.ajax({
                method: "GET",
                async: false,
                url: "Handlers/Handler.ashx",
                data: { Action: "getTipNum" } //שליחת שם הפעולה שתתבצע בהנדלר
            })
                .done(function (data) { //ברגע שהפעולה הסתיימה   
                    var tipsDivNum = JSON.parse(data)

                  //  console.log(tipsDivNum);
                    //var num = tipsDivNum
                    IDTip = ('tip' + (parseInt(tipsDivNum) + 1)).toString();
                   // console.log(IDTip);
                })
                .fail(function (error) { //במצב של שגיאה  
                   // console.log("error");
                  //  console.log(error.statusText);
                })

            // console.log(IDTip, tipContect, serialContectInner, serialContect, serialContect_Jpg, likesCount, tipHeadline, tipHeadlineGirl, tipHeadlineBoy, tipTxt, tipTxtGirl, tipTxtBoy, tipHashTag)
            $.ajax({
                method: "POST",
                url: "Handlers/Handler.ashx",
                data: { Action: "userAddTip", IDTip: IDTip, tipContect: tipContect, serialContectInner: serialContectInner, serialContect: serialContect, serialContect_Jpg: serialContect_Jpg, likesCount: likesCount, tipHeadline: tipHeadline, tipHeadlineGirl: tipHeadlineGirl, tipHeadlineBoy: tipHeadlineBoy, tipTxt: tipTxt, tipTxtGirl: tipTxtGirl, tipTxtBoy: tipTxtBoy, tipHashTag: tipHashTag, publishTip: publishTip, tipLink: tipLink, author: author, BtnName: BtnName, tipDate: tipDate } //שליחת שם הפעולה שתתבצע בהנדלר
            })
                .done(function (data) { //ברגע שהפעולה הסתיימה   

                    $('#userTipContect').val("");
                    $('#userTipHeadline').val("");
                    $('#userHashTags').val("");
                    $('#addLink').val("");

                })
                .fail(function (error) { //במצב של שגיאה  
                   // console.log("error");
                    //  console.log(userIdNum);
                   // console.log(error.statusText);
                })

            $('#addTipPopup').addClass('popupClose')
            $('#addTipPopup').removeClass('is-open')
            $('#addTipPopup').removeClass('overlay')

            $('#successAddTipPopup').addClass('is-open')
            $('#successAddTipPopup').addClass('overlay')

            let countDiv = document.querySelector("#count")
            let spanCount = document.querySelector("#countSpan");

            let count =10;





            countable = setInterval(function () {

                spanCount.innerText =   " ההודעה תעלם בעוד "+ count

                if (count > 0) {
                    count -= 1;
                } else if (count <= 0) {
                    clearInterval(countable);
                    // spanCount.innerText = "Wait..."
                }

            }, 1000);



            setTimeout(function () {
                $('#successAddTipPopup').removeClass('is-open')
                $('#successAddTipPopup').removeClass('overlay')

                $('body').css('height', 'auto');

                $('#successAddTipPopup').addClass('popupClose');

            }, 10000);
            if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) || screen.width <= 765) { $('body').css('height', '100vh'); }
            else { $('body').css('height', 'auto'); }
            //conffeti(document.querySelector('#containerIndex'));
            let body = document.getElementById("containerIndex")
            party.confetti(body, {
                count: party.variation.range(350, 550),
            });


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






    /**בדיקה של מספר התווים בתיבות הטקסט בעת הוספת טיפ*/
    //לרשום את מספר התווים העדכני

    $("#headlineCounterH").text($("#userTipHeadline").val().length)
    $("#ContentCounterContent").text($("#userTipContect").val().length)
    $("#hashtagsCounter").text($("#userHashTags").val().length)

    //$(LimitMsg).css('opacity', '0');
    //$(LimitMsg).css('opacity', '0');
    //$(LimitMsg).css('opacity', '0');

    $("#userTipHeadline").keyup(function (e) {
        countChar(this);
    });
    $("#userTipContect").keyup(function (e) {
        countChar(this);
    });
    $("#userHashTags").keyup(function (e) {
        countChar(this);
    });

    function countChar(val) {
       // console.log((val))
        var len = val.value.length;

        var currentMAX = $(val).attr('maxlength');
       // console.log(currentMAX)
        var labelName = $(val).attr('labelName');
        var DivName = $(val).attr('DivName');
        var LimitMsg = $(val).attr('Msg');
       // console.log(DivName)

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
    // console.clear();



    const togglePassword = $('#togglePassword');
    const password = $('#MNGPassword');

    togglePassword.click(function () {
        // toggle the type attribute
        const type = password.attr('type') === 'password' ? 'text' : 'password';
        password.attr('type', type);
        // toggle the eye / eye slash icon
        this.classList.toggle('bi-eye');
    });
});


//$(document).bind("contextmenu", function (e) {
//    e.preventDefault();
//});

//$(document).keydown(function (e) {
//    if (e.which === 123) {
//        return false;
//    }
//});

//$("#Profilecontainer").ready(function () {

//    $("#Profilecontainer").load("index.html", "#containTips"); 
//   // $("#MAYcontainer").load("index.htm", "#btnSet");

//    console.log("MAYpage")

//});






