
<%@ Page Language="C#" AutoEventWireup="true" CodeFile="addTipEditorSection.aspx.cs" Inherits="_Default" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title>Tips - הוספת טיפ</title>
    <link href="img/heart.png" rel="icon" />

    <meta name="description" content="אתר טיפס (Tips), אתר המכיל טיפים עבור רכזי התנדבות בנושאי ליווי והוקרת מתנדבים באופן פרונטלי ווירטואלי. האת מכיל טיפים, וכלים. האתר מדמה רשת חברתית עבור הרכזים" />
    <meta name="keywords" content="tips,Editor, manager, volenteer, escort, thanks, recognition,עורך, הוספת טיפים, הוקרה, תודה, ליווי, פרופיל, מתנדבים, מנהלים, רכזים, ניהול, קורונה, וירטואלי, פרונטלי, טיפים" />
    <meta name="author" content="final project - Hit Holon - Ori Allon and May Elazar" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=yes">

    <script src="jScripts/jquery-1.12.0.min.js"></script>
    <script src="jScripts/editor.js"></script>
    <link href="styles/myStyle_Editor.css" rel="stylesheet" />
</head>
<body dir="rtl">
    <%--***************************--%>
    <article>

        <section>
            <div id="containerTableEditor">
                <!--  nav -->


                <header id="header">
                    <nav>
                        <ul>

                            <li id="TipsLI">
                                <h1><a href="index.html">
                                    <img src="./img/TIPS_Logo.png" id="logo" /></a>

                                </h1>
                            </li>
                            <li>  <a id="linkToTipTable" style="font-size: 15px;">
                                <div id="BackToTipTableBTN">
                                       <span> חזרה לטבלת הטיפים</span>
                                    </div>

                                  </a>
                            </li>


                        </ul>
                    </nav>
                </header>


            </div>
        </section>
    </article>
    <%--    ********************************--%>
    <form id="form1" runat="server">
                              <!--***************************************success MSG add Tip popup******************-->
            <asp:Panel runat="server" id="successAddTipPopup" CssClass="popupClose">
                <div class="modal-addTip">
                  
                    <div class="text-box" style="direction:rtl">
                        <section id="">

                          <h2>יאיי, הטיפ נשמר בהצלחה!</h2>
                             <p>לתשומת לבך ניתן לפרסם את הטיפ רק כשכל שדות החובה מלאים.</p>
                             <p>האם תרצו להוסיף טיפ נוסף?</p>
                            <button id="AddMoreTipBTN">כן, ברור</button>
                            
                            <asp:Button ID="BackBTN" runat="server" Text="לא, חזור לטבלת הטיפים" OnClick="BackToTipTable_Click"/>
                          <%--  <button>לא, חזור לטבלת הטיפים</button>--%>
                        </section>
                        <div id="count" style="background-color:grey; float:right; margin-top:10px; width:200px;border-radius:3px">
                            <span id="countSpan" style="font-family:Assistant;color:white; direction:rtl"></span>

                        </div>
                       
                    </div>
                </div>
            </asp:Panel>
            <!--/**************/-->
                <%--/**/--%>
        <div id="saveChangesPopup" class="popupClose">
            <div class="modal-Save">
                <div style="direction: rtl">
                    <asp:Panel runat="server" CssClass="close-icon">
                        <asp:ImageButton runat="server" class="close" src="img/shareExit.png" />
                    </asp:Panel>
                    <div class="text-box">

                        <section id="saveChangesPopupSection">
                            <%--                            <h2 style="margin-top: 36px; margin-bottom: 30px">לשמור את השינויים?</h2>--%>
                            <div class="">
                                <p style="margin-bottom: 20px;">האם לחזור לטבלת הטיפים, ללא שמירת השינויים?</p>
                                <div>
                                    <asp:Button ID="Button1" CssClass="deleteBtnPOPup" runat="server" Text="חזרה לטבלת הטיפים" Enabled="true" OnClick="BackToTipTable_Click" />
                                    <asp:Button ID="SaveChange" CssClass="deleteBtnPOPup" runat="server" Text="שמור וחזור לטבלת הטיפים" />
                                </div>
                            </div>
                        </section>


                    </div>
                </div>
            </div>
        </div>
        <%--  /*//--%>
        <%--  *****************אודות*************--%>
        <div id="about" class="popupClose">
            <div class="modal-about">
                <div style="direction: rtl">
                    <div class="close-about">
                        <img class="close-about" src="img/shareExit.png" />
                    </div>
                    <div class="text-box">

                        <section id="comebackSection">
                            <h2 style="margin-top: 36px; margin-bottom: 30px">מי אנחנו?</h2>
                            <div class="imgPlusTxtAbout">
                                <img src="img/TIPS_Logo.png" style="width: 112px;" />
                                <p>אתר המכיל טיפים עבור רכזים בנושאי הוקרה וליווי מתנדבים</p>
                            </div>
                            <div style="margin-bottom: 40px">
                                <p>פרוייקט גמר, תשפ"א</p>
                                <p>
                                    פרויקט זה נעשה במסגרת תואר ראשון<br />
                                    <a class="Aabout" target="”_blank”" href="https://www.hit.ac.il/telem/overview">בפקולטה לטכנולוגיות למידה</a> ובשיתוף פעולה עם<a class="Aabout" target="”_blank”" href="http://www.ivolunteer.org.il/"> הרשת להתנדבות ישראלית.</a>
                                </p>
                            </div>
                            <div class="imgPlusTxtAbout Hit">
                                <img src="img/logo-HIT.png" style="width: 117px;" />
                                <div>
                                    <div style="margin-bottom: 30px">
                                        <h3>צוות הפרוייקט:</h3>
                                        <p style="width: fit-content">אורי אלון ומאי אלעזר.</p>
                                    </div>

                                    <div>
                                        <h3>מנחות הפרוייקט:</h3>
                                        <p>גב' סיגל פרלמן וגב' רעות טייטלר</p>
                                    </div>
                                </div>
                            </div>
                            <div class="imgPlusTxtAbout Hit">
                                <img src="img/logo-reshet.png" style="width: 111px;" />
                                <div>
                                    <h3>צוות מטעם הארגון:</h3>
                                    <p>גב' תמר ברגר וגב' ליאורה ארנון.</p>
                                </div>
                            </div>
                        </section>


                    </div>
                </div>
            </div>
        </div>
        <%--        ***********************************--%>
        <%--************** delete Tip popup ********************--%>
        <asp:Panel runat="server" ID="fillallFildsPopup" CssClass="popupClose">
            <asp:Panel runat="server" CssClass="modal-fillSub">
                <asp:Panel runat="server" Style="direction: rtl">
                    <asp:Panel runat="server" CssClass="close-icon">
                        <asp:ImageButton runat="server" class="close" src="img/shareExit.png" />
                    </asp:Panel>
                    <asp:Panel runat="server" CssClass="text-box">


                        <p id="deleteQ">על מנת לשמור את הטיפ יש למלא לפחות את נושא הטיפ והכותרת</p>
                        <asp:Panel runat="server" ID="divBTN">

                           
                            <asp:Button ID="BackToTipTable" CssClass="deleteBtnPOPup" runat="server" Text="חזרה לטבלת הטיפים" Enabled="true" OnClick="BackToTipTable_Click" />
                             <asp:Button ID="continueBTN" CssClass="deleteBtnPOPup" runat="server" Text="חזור לעריכת הטיפ" />
                        </asp:Panel>

                    </asp:Panel>
                </asp:Panel>
            </asp:Panel>
        </asp:Panel>


        <%-- ***************************************--%>
        <div>
            <section id="">


                <div style="width: 40%; margin-right: 14px;">
                    <div id="headlineCon">
                        <h2 style="font-size: 32px">הוספת טיפ חדש</h2>

                        <p>כעת ניתן לערוך את הטיפ, על מנת לפרסם את הטיפ על כל השדות להיות מלאים</p>
                         <p style="font-size:16px;">שדה חובה<span class="mandetory">*</span></p>
                        <div>
                            <h3 style="font-size: 24px; margin-bottom: 0;">נושא הטיפ</h3>
                            <div class="border"></div>
                            <p>באיזה נושא הטיפ?<span class="mandetory">*</span></p>
                            <div class="RBconteiner">
                                <div class="RB">
                                    <asp:RadioButton ID="HokaraTip" CssClass="subjectRb" runat="server" GroupName="subject" Text='' AutoPostBack="false" />
                                    <label for="HokaraTip" class="rbConSubject">
                                        <span class="subjectRBLBL"></span>
                                        <span id="RBtagHokara">הוקרה</span>

                                    </label>




                                    <asp:RadioButton ID="LivoiTip" CssClass="subjectRb" runat="server" GroupName="subject" Text='' AutoPostBack="false" />
                                    <label for="LivoiTip" class="rbConSubject">
                                        <span class="subjectRBLBLLivoiTip"></span>
                                        <span id="RBtagLivoi">ליווי</span>

                                    </label>
                                </div>

                            </div>
                        </div>

                        <h3 style="font-size: 24px; margin-bottom: 0;">כותרת הטיפ</h3>
                        <div class="border"></div>
                        <p>כותרת:<span class="mandetory">*</span></p>
                        <asp:TextBox ID="tipHeadLineTXT" CssClass="TXT" TextMode="multiline" runat="server" MaxLengthChar="35" labelName="#headlineCounterH" DivName="#headlineCounterdiv" Msg="#LimitMsgH"></asp:TextBox>
                        <div id="headlineCounterdiv" class="countCar">35/<span id="headlineCounterH"></span></div>
                        <span id="LimitMsgH" class="msgLimit">הגעת למספר התווים המקסימלי</span>

                        <h3>כותרת לפי מגדר</h3>
                        <div class="iconANDp">
                            <div class="tooltip">
                                <img class="InfoIcon" src="img/InfoIcon.png" />
                                <span class="tooltiptext">כאן ניתן לכתוב כותרת בלשון נקבה</span>
                            </div>
                            <p>כותרות לרכזות<span class="mandetory">*</span>:</p>
                        </div>
                        <div class="txtWithCounter">
                            <asp:TextBox ID="tipHeadLineTXTF" CssClass="TXT" TextMode="multiline" runat="server" MaxLengthChar="35" labelName="#headlineCounterF" DivName="#headlineCounterFdiv" Msg="#LimitMsgFH"></asp:TextBox>
                            <div id="headlineCounterFdiv" class="countCar">35/<span id="headlineCounterF"></span></div>
                            <span id="LimitMsgFH" class="msgLimit">הגעת למספר התווים המקסימלי</span>
                        </div>
                        <div class="iconANDp">
                            <div class="tooltip">
                                <img class="InfoIcon" src="img/InfoIcon.png" />
                                <span class="tooltiptext">כאן ניתן לכתוב כותרת בלשון זכר</span>
                            </div>
                            <p>כותרת לרכזים:<span class="mandetory">*</span></p>
                        </div>
                        <div class="txtWithCounter">
                            <asp:TextBox ID="tipHeadLineTXTM" CssClass="TXT" TextMode="multiline" runat="server" MaxLengthChar="35" labelName="#headlineCounterM" DivName="#headlineCounterMdiv" Msg="#LimitMsgMH"></asp:TextBox>
                            <div id="headlineCounterMdiv" class="countCar">35/<span id="headlineCounterM"></span></div>
                            <span id="LimitMsgMH" class="msgLimit">הגעת למספר התווים המקסימלי</span>

                        </div>
                    </div>

                    <div>
                        <h3 style="font-size: 24px; margin-bottom: 0;">תוכן הטיפ</h3>
                        <div class="borderShort"></div>
                        <%--<p>תוכן גנרי</p>--%>

                        <p>תוכן:<span class="mandetory">*</span></p>
                        <asp:TextBox ID="tipContentTXT" CssClass="TXT" TextMode="multiline" runat="server" MaxLengthChar="230" labelName="#tipContentCounter" DivName="#tipContentCounterDIV" Msg="#LimitMsgC"></asp:TextBox>
                        <div id="tipContentCounterDIV" class="countCar">230/<span id="tipContentCounter"></span></div>
                        <span id="LimitMsgC" class="msgLimit">הגעת למספר התווים המקסימלי</span>



                        <h3>תוכן לפי מגדר</h3>

                        <div class="iconANDp">
                            <div class="tooltip">
                                <img class="InfoIcon" src="img/InfoIcon.png" />
                                <span class="tooltiptext">כאן ניתן לכתוב תוכן בלשון נקבה</span>
                            </div>
                            <p>תוכן לרכזות:<span class="mandetory">*</span></p>
                        </div>
                        <div class="txtWithCounter">
                            <asp:TextBox ID="tipContentTXTF" CssClass="TXT" TextMode="multiline" runat="server" MaxLengthChar="230" labelName="#tipContentCounterF" DivName="#tipContentCounterFDIV" Msg="#LimitMsgFC"></asp:TextBox>
                            <div id="tipContentCounterFDIV" class="countCar">230/<span id="tipContentCounterF"></span></div>
                            <span id="LimitMsgFC" class="msgLimit">הגעת למספר התווים המקסימלי</span>
                        </div>
                        <div class="iconANDp">
                            <div class="tooltip">
                                <img class="InfoIcon" src="img/InfoIcon.png" />
                                <span class="tooltiptext">כאן ניתן לכתוב תוכן בלשון זכר</span>
                            </div>
                            <p>תוכן לרכזים:<span class="mandetory">*</span></p>
                        </div>
                        <div class="txtWithCounter">
                            <asp:TextBox ID="tipContentTXTM" CssClass="TXT" TextMode="multiline" runat="server" MaxLengthChar="230" labelName="#tipContentCounterM" DivName="#tipContentCounterMDIV" Msg="#LimitMsgMC"></asp:TextBox>
                            <div id="tipContentCounterMDIV" class="countCar">230/<span id="tipContentCounterM"></span></div>
                            <span id="LimitMsgMC" class="msgLimit">הגעת למספר התווים המקסימלי</span>
                        </div>
                    </div>

                    <h3 style="font-size: 24px; margin-bottom: 0;">תיוגי הטיפ</h3>
                    <div class="borderShort"></div>
                    <div style="display: inline-flex; align-items: flex-end; flex-direction: row; gap: 10px;">
                        <p>תיוגים:<span class="mandetory">*</span></p>
                        <span>לדוגמא: #מתנדבים</span>
                    </div>
                    <asp:TextBox ID="tagLineTXT" CssClass="TXT" TextMode="multiline" runat="server" MaxLengthChar="40" labelName="#tipTagsCounter" DivName="#tipTagsCounterDIV" Msg="#LimitMsgTags"></asp:TextBox>
                    <div id="tipTagsCounterDIV" class="countCar">40/<span id="tipTagsCounter"></span></div>
                    <span id="LimitMsgTags" class="msgLimit">הגעת למספר התווים המקסימלי</span>


                    <h3 style="font-size: 24px; margin-bottom: 0;">קישור חיצוני</h3>
                    <div class="borderShort"></div>
                    <p>להוסיף קישור?</p>
                    <asp:TextBox ID="addLink" CssClass="TXT" TextMode="multiline" runat="server"></asp:TextBox>

                    <asp:Button runat="server" ID="saveEditorTip" Text="שמור וסיים עריכה" OnClientClick="return false" />
                    <%-- <button id="saveEditorTip">שמור ת'טיפ</button>--%>
                </div>

            </section>
        </div>
    </form>
      <footer>
        <a id="aboutLink" href="#">מי אנחנו?</a>

        <p id="Pfooter">תוצר זה פותח במסגרת פרוייקט גמר לתואר ראשון<a target="”_blank”" href="https://www.hit.ac.il/telem/overview"> בפקולטה לטכנולוגיות למידה </a>,HIT ובשיתוף הרשת להתנדבות ישראלית.</p>
    </footer>

</body>
</html>
