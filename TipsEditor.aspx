<%@ Page Language="C#" AutoEventWireup="true" CodeFile="TipsEditor.aspx.cs" Inherits="_Default" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title>Tips - עורך</title>
    <link href="img/heart.png" rel="icon" />

    <meta name="description" content="אתר טיפס (Tips), אתר המכיל טיפים עבור רכזי התנדבות בנושאי ליווי והוקרת מתנדבים באופן פרונטלי ווירטואלי. האת מכיל טיפים, וכלים. האתר מדמה רשת חברתית עבור הרכזים" />
    <meta name="keywords" content="tips,Editor, manager, volenteer, escort, thanks, recognition,עורך, הוספת טיפים, הוקרה, תודה, ליווי, פרופיל, מתנדבים, מנהלים, רכזים, ניהול, קורונה, וירטואלי, פרונטלי, טיפים" />
    <meta name="author" content="final project - Hit Holon - Ori Allon and May Elazar" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=yes">

    <script src="jScripts/jquery-1.12.0.min.js"></script>
    <script src="jScripts/editor.js"></script>
      
    <%-- <script src="jScripts/uploadeTipPic.js"></script>--%>
    <%--    <script src="jScripts/JavaScript.js"></script>--%>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ho+j7jyWK8fNQe+A12Hb8AhRq26LrZ/JpcUGGOn+Y7RsweNrtN/tE3MoK7ZeZDyx" crossorigin="anonymous"></script>

    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-KyZXEAg3QhqLMpG8r+8fhAXLRk2vvoC2f3B09zVXn8CA5QIVfZOJ3BCsw2P0p/We" crossorigin="anonymous" />
    <link href="styles/myStyle_tipTable.css" rel="stylesheet" />
</head>
<body dir="rtl">

    <article>

        <section>
            <div id="containerTableEditor">
                <!--  nav -->


                <header id="header">
                    <nav>
                        <ul>

                            <li id="TipsLI">
                                <h1><a href="index.html">
                                    <img src="./img/TIPS_Logo.png" id="logo" /></a></h1>
                            </li>
                            <li>
                                <a href="index.html">
                                    <div id="backToHomeBtn">
                                        <span style="position: relative; margin: 0 auto; top: 5px; right: 23px;">חזרה לדף הבית</span>
                                    </div>
                                </a>
                            </li>

                        </ul>
                    </nav>
                </header>


            </div>
        </section>
    </article>
    <form runat="server" id="mainForm">

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


        <div id="WellcomeEditorP">
            <h2 class="welcomeEditorP"><b>היוש, עורך/ת!</b></h2>
            <p class="welcomeEditorP">כאן מופיעים כל הטיפים שבמערכת. כעת ניתן לערוך את הטיפ ולפרסם טיפים חדשים.</p>
            <p class="welcomeEditorP">כך הרכזים והרכזות שלנו ישארו מעודכנים!</p>
            <div id="BtnAddTipCon">
                 <a href="addTipEditorSection.aspx" style="text-decoration: none; color: white">
                <div id="addTipBTN">
                   <span>אני רוצה להוסיף טיפ</span>
                </div>
                     </a>

            </div>
        </div>
        <%--**********************************--%>
        <asp:Panel runat="server" ID="momileERORRpopup" CssClass="popupClose">
            <asp:Panel runat="server" CssClass="modal-mobileErorr">
                <asp:Panel runat="server" Style="direction: rtl">
                    <asp:Panel runat="server" CssClass="close-icon">
                        <%--  <asp:ImageButton runat="server" class="close" src="img/shareExit.png" />--%>
                    </asp:Panel>
                    <asp:Panel runat="server" CssClass="text-box">
                        <section>
                            <h2 id="momileERORRh">אופס, לתשומת לבך</h2>
                            <p id="momileERORRq">העורך אינו מותאם למובייל, על מנת לערוך בצורה המיטבית ביותר ניתן לעבור למסך המחשב.</p>

                        </section>
                        <asp:Panel runat="server">
                            <%--<button  id="backToHomeScreen" class="deleteBtnPOPup">חזרה לדף הבית</button>--%>
                            <asp:Button ID="backToHomeScreen" CssClass="deleteBtnPOPup" runat="server" Text="חזרה לדף הבית" OnClick="backToHomeScreen_Click" />
                            <%--                            <asp:Button ID="Button2" CssClass="deleteBtnPOPup" runat="server" Text="מחק" OnClick="yesDeleteBtn_Click" />--%>
                        </asp:Panel>

                    </asp:Panel>
                </asp:Panel>
            </asp:Panel>
        </asp:Panel>
        <%-- ***************************************--%>
        <%--**********************************--%>
        <asp:Panel runat="server" ID="deleteTipPop" CssClass="popupClose">
            <asp:Panel runat="server" CssClass="modal-DeletePOP">
                <asp:Panel runat="server" Style="direction: rtl">
                    <asp:Panel runat="server" CssClass="close-icon">
                        <asp:ImageButton runat="server" class="close" src="img/shareExit.png" OnClick="noDeleteBtn_Click" />
                    </asp:Panel>
                    <asp:Panel runat="server" CssClass="text-box">


                        <p id="deleteQ">האם למחוק את הטיפ?</p>
                        <asp:Panel runat="server">
                            <asp:Button ID="yesDeleteBtn" CssClass="deleteBtnPOPup" runat="server" Text="מחק" OnClick="yesDeleteBtn_Click" />

                            <asp:Button ID="noDeleteBtn" CssClass="deleteBtnPOPup" runat="server" Text="לא, תודה" Enabled="true" OnClick="noDeleteBtn_Click" />


                        </asp:Panel>

                    </asp:Panel>
                </asp:Panel>
            </asp:Panel>
        </asp:Panel>
        <%-- ***************************************--%>
        <div id="genderSelectionDiv">

            <asp:Panel runat="server" CssClass="tooltip">
                <img class="InfoIcon" src="img/InfoIcon.png" />
                <span class="tooltiptext">לחצו על האייקונים והציגו את הטבלה על הפי המגדר הנבחר</span>
            </asp:Panel>
            <asp:Label runat="server" Text="הצגת התוכן לפי מגדר:"> </asp:Label>
            <asp:Panel runat="server" CssClass="tooltip">

                <asp:RadioButton ID="RadioButton1" CssClass="genderRb" runat="server" GroupName="gender" OnCheckedChanged="RadioButton1_CheckedChanged" Text='' AutoPostBack="true" />
                <span class="tooltiptext">הצגת התוכן ללשון נקבה</span>
                <%--            <asp:ImageButton runat="server" Text="click" ID="ImageButton1" ImageUrl="~/img/genderF.png" GropName="gender"/>--%>
            </asp:Panel>
            <asp:Panel runat="server" CssClass="tooltip">
                <asp:RadioButton ID="RadioButton2" CssClass="genderRb" runat="server" GroupName="gender" OnCheckedChanged="RadioButton2_CheckedChanged" Text='' AutoPostBack="true" />
                <span class="tooltiptext">הצגת התוכן ללשון זכר</span>
            </asp:Panel>
            <asp:Panel runat="server" CssClass="tooltip">
                <asp:RadioButton ID="RadioButton3" CssClass="genderRb" runat="server" GroupName="gender" Text='' AutoPostBack="true" OnCheckedChanged="RadioButton3_CheckedChanged" Checked="true" />
                <span class="tooltiptext">הצגת התוכן ללא פניה מגדרית</span>
            </asp:Panel>

            <%-- <asp:Button runat="server" Text="ללא מגדר" ID="noGenderBtn" OnClick="noGenderBtn_Click" />--%>
        </div>
        <!--הגריד -->
        <asp:ScriptManager ID="ScriptManager1" runat="server" EnablePageMethods="true" />
        <asp:UpdatePanel ID="UpdatePanel1" UpdateMode="Conditional" runat="server">


            <ContentTemplate>
                <asp:GridView ID="GridViewTipContent" CssClass="table table-responsive-sm" runat="server" AutoGenerateColumns="False" DataSourceID="SqlDataSource1" CellPadding="4" ForeColor="#333333" GridLines="None" DataKeyNames="ID" OnRowCommand="GridViewTipContent_RowCommand" OnRowDataBound="GridViewTipContent_RowDataBound">
                    <Columns>

                        <asp:BoundField DataField="ID" HeaderText="ID" InsertVisible="False" ReadOnly="True" SortExpression="ID" Visible="false" />



                        <asp:TemplateField HeaderText="תאריך העלאת הטיפ">
                            <ItemTemplate>
                                <asp:Panel runat="server" CssClass="newTipCon">
                                    <asp:Image runat="server" ID="newTipMark" CssClass="newTipClass" ImageUrl="~/img/newTipCreatedThisWeek.png" theItemId='<%#DataBinder.Eval(Container.DataItem, "ID").ToString()%>' uploadeDate='<%#DataBinder.Eval(Container.DataItem, "Tipdate").ToString()%>' />
                                </asp:Panel>
                                <asp:Panel runat="server" CssClass="bookMarkContainer">
                                    <asp:Panel runat="server" CssClass="tooltipBookMark">
                                        <asp:Image runat="server" ID="bookMark" CssClass="bookMarkClass" ImageUrl="~/img/BookMark.png" theItemId='<%#DataBinder.Eval(Container.DataItem, "ID").ToString()%>' lastSeen='<%#DataBinder.Eval(Container.DataItem, "lastSeen").ToString()%>' />

                                        <span class="tooltiptextBookMark">הטיפ שנראה לאחרונה</span>
                                    </asp:Panel>
                                </asp:Panel>
                                <asp:Label ID="Tipdate" CssClass="Tipdate" runat="server" Text='<%# Server.UrlDecode( DataBinder.Eval(Container.DataItem,"Tipdate").ToString()) %>'></asp:Label>
                            </ItemTemplate>
                        </asp:TemplateField>


                        <asp:TemplateField HeaderText="עריכת הטיפ">
                            <ItemTemplate>
                                <asp:ImageButton ID="editBTN" CssClass="editicons" runat="server" ImageUrl="~/img/editTip.png" theItemId='<%#DataBinder.Eval(Container.DataItem, "ID").ToString()%>' CommandName="editRow" sawTip='<%#DataBinder.Eval(Container.DataItem, "seen").ToString()%>' />
                                <span data-on="פורסם" data-off="פרסם" data-dis=""></span>
                            </ItemTemplate>
                        </asp:TemplateField>


                        <asp:TemplateField HeaderText="כותרת הטיפ">
                            <ItemTemplate>
                                <%--  <asp:DropDownList ID="DropDownListHeadLine" runat="server"  DataTextField="headLine">
                        
                        </asp:DropDownList>--%>
                                <asp:Label ID="tipHeadLineMen" CssClass="headLine" runat="server" Text='<%# Server.UrlDecode( DataBinder.Eval(Container.DataItem,"tipHeadlineBoy").ToString()) %>'></asp:Label>
                                <asp:Label ID="tipHeadLineWomen" CssClass="headLine" runat="server" Text='<%# Server.UrlDecode( DataBinder.Eval(Container.DataItem,"tipHeadlineGirl").ToString()) %>'></asp:Label>

                                <asp:Label ID="tipHeadLine" CssClass="headLine" runat="server" Text='<%# Server.UrlDecode( DataBinder.Eval(Container.DataItem,"tipHeadline").ToString()) %>'></asp:Label>
                            </ItemTemplate>
                        </asp:TemplateField>

                        <asp:TemplateField HeaderText="תוכן הטיפ">
                            <ItemTemplate>
                                <asp:Label ID="tipContectM" runat="server" Text='<%# Server.UrlDecode( DataBinder.Eval(Container.DataItem,"tipTxtBoy").ToString()) %>'></asp:Label>
                                <asp:Label ID="tipContectF" runat="server" Text='<%# Server.UrlDecode( DataBinder.Eval(Container.DataItem,"tipTxtGirl").ToString()) %>'></asp:Label>

                                <asp:Label ID="tipContect" runat="server" Text='<%# Server.UrlDecode( DataBinder.Eval(Container.DataItem,"tipTxt").ToString()) %>'></asp:Label>
                            </ItemTemplate>
                        </asp:TemplateField>

                        <asp:TemplateField HeaderText="תמונת הטיפ">
                            <ItemTemplate>
                                <%--<asp:Image ID="Image1" runat="server" ImageUrl="~/img/backArrow.png" />--%>

                                <asp:Image ID="Image1" CssClass="tipImageTable img-fluid img-thumbnail" runat="server" ImageUrl='<%#Server.UrlDecode(DataBinder.Eval(Container.DataItem, "serialContect_Jpg", "~/img/Tips/{0}").ToString()) %>' />
                                <%-- <asp:Label ID="tipImg" runat="server" Text='<%# Bind("tipTxt") %>'></asp:Label>--%>
                            </ItemTemplate>
                        </asp:TemplateField>

                        <asp:TemplateField HeaderText="תיוגי הטיפ">
                            <ItemTemplate>
                                <asp:Label ID="tipHashTag" runat="server" Text='<%# Server.UrlDecode( DataBinder.Eval(Container.DataItem,"tipHashTag").ToString()) %>'></asp:Label>
                            </ItemTemplate>
                        </asp:TemplateField>


                        <asp:TemplateField HeaderText="מחיקת טיפ">
                            <ItemTemplate>
                                <asp:ImageButton ID="deleteBTN" CssClass="deleteicons" runat="server" ImageUrl="~/img/trash.png" theItemId='<%#DataBinder.Eval(Container.DataItem, "ID").ToString()%>' CommandName="deleteRow" />
                            </ItemTemplate>
                        </asp:TemplateField>


                        <asp:TemplateField HeaderText="פרסום הטיפ">
                            <ItemTemplate>
                                <asp:Panel runat="server" CssClass="form-check form-switch">

                                    <asp:CheckBox ID="IspublishTip" CssClass="publishCb" runat="server" Checked='<%#Convert.ToBoolean(DataBinder.Eval(Container.DataItem,"publish"))%>' theItemId='<%#DataBinder.Eval(Container.DataItem,"ID")%>' AutoPostBack="false" OnCheckedChanged="IspublishTip_CheckedChanged" />
                                    <%--                                    <asp:CheckBox ID="flexSwitchCheckDefault" CssClass="form-check-input" runat="server" Checked='<%#Convert.ToBoolean(DataBinder.Eval(Container.DataItem,"publish"))%>' theItemId='<%#DataBinder.Eval(Container.DataItem,"ID")%>' AutoPostBack="false" OnCheckedChanged="IspublishTip_CheckedChanged" />--%>
                                </asp:Panel>
                            </ItemTemplate>
                        </asp:TemplateField>


                    </Columns>


                    <FooterStyle BackColor="#99CCCC" ForeColor="#003399" />
                    <HeaderStyle BackColor="#475fa9" Font-Bold="True" ForeColor="#FFFFFF" />
                    <PagerStyle BackColor="#D6DCE5" ForeColor="#000000" HorizontalAlign="right" />
                    <RowStyle BackColor="#FFFFFF" ForeColor="#000000" />
                    <SelectedRowStyle BackColor="#009999" Font-Bold="True" ForeColor="#CCFF99" />
                    <SortedAscendingCellStyle BackColor="#EDF6F6" />
                    <SortedAscendingHeaderStyle BackColor="#0D4AC4" />
                    <SortedDescendingCellStyle BackColor="#D6DFDF" />
                    <SortedDescendingHeaderStyle BackColor="#002876" />
                </asp:GridView>

            </ContentTemplate>
        </asp:UpdatePanel>

    </form>

    <%-- <div id="deleteTipPop" class="popupClose">
        <div class="modal-DeletePOP">
            <div style="direction: rtl">
                <div class="close-icon">
                    <img class="close" src="img/shareExit.png" />
                </div>
                <div class="text-box">

                    <section id="comebackSection">
                        <p>האם למחוק את הטיפ?</p>
                        <div>
                            <button>לא, תודה</button>
                            <button>מחק</button>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    </div>--%>
    <%--               <asp:XmlDataSource ID="XmlDataSource1" runat="server" DataFile="~/tree/XMLFile.xml" XPath="//game"></asp:XmlDataSource>--%>
    <%--    <asp:SqlDataSource ID="SqlDataSource1" runat="server" ></asp:SqlDataSource>--%>
    <asp:AccessDataSource ID="SqlDataSource1" runat="server" DataFile="~/App_Data/myData.accdb" SelectCommand="SELECT * FROM tipsInfo WHERE deletedTip=false ORDER BY ID DESC"></asp:AccessDataSource>

    <footer>
        <a id="aboutLink" href="#">מי אנחנו?</a>

        <p id="Pfooter">תוצר זה פותח במסגרת פרוייקט גמר לתואר ראשון<a target="”_blank”" href="https://www.hit.ac.il/telem/overview"> בפקולטה לטכנולוגיות למידה </a>,HIT ובשיתוף הרשת להתנדבות ישראלית.</p>
    </footer>
</body>
</html>
