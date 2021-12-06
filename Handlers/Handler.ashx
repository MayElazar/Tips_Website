<%@ WebHandler Language="C#" Class="Handler" %>

using System;
using System.Web;
using Newtonsoft.Json; //להוסיף את הNewtonsoft
using System.Data;
using System.Data.OleDb;
using System.Collections.Generic;


public class Handler : IHttpHandler
{
    SQLClass mySql = new SQLClass();

    public void ProcessRequest(HttpContext context)
    {
        context.Response.ContentType = "text/plain";

        //קבלת הפעולה שאותה אנחנו רוצים לעשות - ניתן כמובן להחליט על שמות הפעולות
        string Action = context.Request["Action"]; // חשוב לשים לב שזה אותו שם משתנה כמו בקובץ הJS

        switch (Action)
        {
            //בדיקה כמה טיפים קיימים
            case "getTipNum":

                //שאילתה לשליפת כל היוזרים
                string myQueryAllUsers = "SELECT MAX(ID) FROM tipsInfo";
                // string myQueryAllUsers = "SELECT* FROM tipsInfo ORDER BY ID DESC LIMIT 1";
                // string myQueryAllUsers = "SELECT @@IDENTITY  FROM tipsInfo";
                //שליפה באמצעות פנייה למחלקה
                DataSet myUsers = mySql.SQLSelect(myQueryAllUsers);

                //אם יש יוזרים
                if (myUsers.Tables[0].Rows.Count != 0)
                {
                    int myTotalSub = Convert.ToInt16(myUsers.Tables[0].Rows[0][0]);

                    context.Response.Write(myTotalSub);

                    //המרת הטבלה שחזרה מהשליפה לג'ייסון
                    // string jsonUsersText = JsonConvert.SerializeObject(myUsers);

                    //  context.Response.Write(jsonUsersText);
                }
                else
                {
                    context.Response.Write("noUsers");
                }
                break;


            //הצגת תוכן הטיפים
            case "getTipContect":

                //שאילתה לשליפת כל היוזרים
                string myQueryTipContect = "SELECT *  FROM tipsInfo ORDER BY ID";

                //שליפה באמצעות פנייה למחלקה
                DataSet myTipsCon = mySql.SQLSelect(myQueryTipContect);

                //אם יש יוזרים
                if (myTipsCon.Tables[0].Rows.Count != 0)
                {

                    //int countRows =Convert.ToInt16(myTipsCon.Tables[0].Rows.Count);
                    //המרת הטבלה שחזרה מהשליפה לג'ייסון
                    string jsonTipsText = JsonConvert.SerializeObject(myTipsCon);

                    //  context.Response.Write(countRows);
                    context.Response.Write(jsonTipsText);
                }
                else
                {
                    context.Response.Write("noUsers");
                }
                break;

            //רישום משתמש חדש
            case "registerNewUser":

                //קבלת כל הפרטים שנשלחו מהקריאה
                string userEmail = context.Request["userEmail"];
                string fisrtName = context.Request["fisrtName"];
                string lastName = context.Request["lastName"];
                string userGender = context.Request["userGender"];

                string EmailValidate = context.Request["EmailValidate"];

                //אם קיים תוכן בכל אחד מהפרטים
                if (userEmail != "" && fisrtName != "" && lastName != "")
                {
                    if (Convert.ToBoolean(EmailValidate))
                    {


                        // if () { }
                        //שאילתה להוספת היוזר החדש לטבלת היוזרים
                        string myQueryAddUser = "INSERT INTO usersInfo (userEmail, userFirstname, userLastName, gender) VALUES ('" + userEmail + "', '" + fisrtName + "', '" + lastName + "', '" + userGender + "')";

                        //הוספה לטבלה באמצעות המחלקה
                        mySql.SQLChange(myQueryAddUser);

                        context.Response.Write("actionSucceed");
                    }
                    else
                    {
                        context.Response.Write("emailNotcurrect");
                    }
                }
                else
                {
                    context.Response.Write("noData");
                }

                break;

            //הצגת כל אינפורמציה של יוזר מסוים
            case "getUserInfo":

                //קבלת שם המשתמש שנשלח מהקריאה
                string UserEmailTyped = context.Request["userEmailTXT"];

                //שאילתה לשליפת כל שמות המשחקים של יוזר ששם המשתמש שלו הוא מה שנשלח
                //   string myQueryUserInfo = "SELECT userFirstname FROM usersInfo WHERE userEmail = '" + UserEmailTyped + "'";
                string myQueryUserInfo = "SELECT userFirstname, userLastName, ID, gender  FROM usersInfo WHERE userEmail = '" + UserEmailTyped + "'";
                //שליפה באמצעות פנייה למחלקה
                DataSet userInfo = mySql.SQLSelect(myQueryUserInfo);

                //אם יש יוזר כזה
                if (userInfo.Tables[0].Rows.Count != 0)
                {

                    //המרת הטבלה שחזרה מהשליפה לג'ייסון
                    string jsonGamesText = JsonConvert.SerializeObject(userInfo);

                    //context.Response.Write(jsonGamesText);
                    context.Response.Write(jsonGamesText);

                }
                else
                {
                    context.Response.Write("nouserInfoFound");
                }
                break;



            //הוספת לייק לטיפ והוספת שם המשתמש שעשה לייק לטיפ


            case "LikeTip":

                //קבלת כל הפרטים שנשלחו מהקריאה

                string usrLogedIn = context.Request["login"];
                int tipId = Convert.ToInt16(context.Request["tipId"]);
                string loginuserEmail = context.Request["userEmail"];
                int userId = Convert.ToInt16(context.Request["userId"]);

                //אם קיים תוכן בכל אחד מהפרטים
                if (usrLogedIn == "true")
                {
                    //שאילתה להוספת היוזר החדש לטבלת היוזרים
                    string myQueryInsertLike = "INSERT INTO likesTip (tipID, userEmail, userID) VALUES ('" + tipId + "', '" + loginuserEmail + "', '" + userId + "')";
                    //string myQueryInsertLike = "INSERT INTO likesTip (tipID, userEmail, userID) VALUES ('" + tipId + "', '" + loginuserEmail + "', '" + 1 + "')";

                    //הוספה לטבלה באמצעות המחלקה
                    mySql.SQLChange(myQueryInsertLike);

                    context.Response.Write("insertLike");

                }
                else
                {
                    context.Response.Write("noData");
                }

                break;

            //select Spesific numberOfLikes

            case "currentLikesNum":
                // int tipIdNum =Convert.ToInt16(context.Request["tipIdSection"]);
                int tipIdNum = Convert.ToInt16(context.Request["tipIdNum"]);

                // string tipIdNum =context.Request["tipIdSection"];
                // context.Response.Write(tipIdNum);
                //קבלת שם המשתמש שנשלח מהקריאה
                //  string userID = context.Request["userId"];
                // int TipID = Convert.ToInt16(context.Request["tipId"]);
                //שאילתה לשליפת כל שמות המשחקים של יוזר ששם המשתמש שלו הוא מה שנשלח   
                // string myQueryUserInfo = "SELECT userFirstname FROM usersInfo WHERE userEmail = '" + UserEmailTyped + "'";

                // string myQueryUpdateLike = "SELECT likesCount FROM tipsInfo WHERE iDTip = '" + tipIdNum +"'";
                string myQueryCurrentLike = "SELECT likesCount FROM tipsInfo WHERE ID = " + tipIdNum + ";";
                //שליפה באמצעות פנייה למחלקה
                DataSet current = mySql.SQLSelect(myQueryCurrentLike);

                //אם יש יוזר כזה
                if (current.Tables[0].Rows.Count != 0)
                {
                    //המרת הטבלה שחזרה מהשליפה לג'ייסון
                    string jsonGamesText = JsonConvert.SerializeObject(current);

                    context.Response.Write(jsonGamesText);
                    //context.Response.Write(tipIdNum);
                }
                else
                {
                    //context.Response.Write(updateing.Tables[0].Rows.Count);
                    context.Response.Write("no likes");
                    //context.Response.Write(myQueryUpdateLike);
                }
                break;



            //update Tip number of likes

            case "updateTipNumOfLikes":

                //קבלת שם המשתמש שנשלח מהקריאה
                // string userID = context.Request["userId"];

                string gotcurrent = "true";
                string currentID = context.Request["currentTipID"];
                int currentTipID = Convert.ToInt16(currentID);
                context.Response.Write(currentTipID);
                int updateCurrentLikes = Convert.ToInt16(context.Request["updateCurrentLikes"]);

                string myQueryUpdateLike = "UPDATE tipsInfo SET likesCount = " + updateCurrentLikes + " WHERE ID = " + currentTipID + ";";


                //שליפה באמצעות פנייה למחלקה
                //אם יש יוזר כזה
                if (gotcurrent == "true")
                {
                    mySql.SQLChange(myQueryUpdateLike);
                    //המרת הטבלה שחזרה מהשליפה לג'ייסון
                    ////  string jsonGamesText = JsonConvert.SerializeObject(updateing);
                    context.Response.Write(myQueryUpdateLike);
                    context.Response.Write("change Like " + currentTipID);
                }
                else
                {
                    context.Response.Write("nouserInfoFound");
                }
                break;

            //get tips info
            case "getTipsInfo":

                //קבלת שם המשתמש שנשלח מהקריאה
                string UserEmailLoged = context.Request["userEmailTXT"];

                //שאילתה לשליפת כל שמות המשחקים של יוזר ששם המשתמש שלו הוא מה שנשלח
                //   string myQueryUserInfo = "SELECT userFirstname FROM usersInfo WHERE userEmail = '" + UserEmailTyped + "'";
                string myQueryTipsInfo = "SELECT tipID,*  FROM likesTip,tipsInfo WHERE likesTip.userEmail = '" + UserEmailLoged + "' AND tipsInfo.ID =likesTip.tipID";

                //  string myQueryTipsInfo = "SELECT tipID  FROM likesTip WHERE userEmail = '" + UserEmailLoged + "'";
                //שליפה באמצעות פנייה למחלקה
                DataSet TipsInfo = mySql.SQLSelect(myQueryTipsInfo);

                //אם יש יוזר כזה
                if (TipsInfo.Tables[0].Rows.Count != 0)
                {
                    //המרת הטבלה שחזרה מהשליפה לג'ייסון
                    string jsonGamesText = JsonConvert.SerializeObject(TipsInfo);

                    context.Response.Write(jsonGamesText);
                }
                else
                {
                    context.Response.Write("אופס, עדיין לא אהבת אף טיפ");
                }
                break;




            case "deleteTipLike":

                //קבלת שם המשתמש שנשלח מהקריאה


                int currentTip = Convert.ToInt16(context.Request["currentTipID"]);
                string email = context.Request["email"];
                context.Response.Write(currentTip);
                // int updateCurrentLikes = Convert.ToInt16(context.Request["updateCurrentLikes"]);

                string myQueryDeleteLike = "DELETE FROM likesTip WHERE tipID= " + currentTip + " AND userEmail= '" + email + "';";



                mySql.SQLChange(myQueryDeleteLike);
                //המרת הטבלה שחזרה מהשליפה לג'ייסון
                ////  string jsonGamesText = JsonConvert.SerializeObject(updateing);
                //  context.Response.Write(myQueryUpdateLike);
                context.Response.Write("delete Like");

                break;

            //יוזר מוסיף טיפ
            case "userAddTip":

                //קבלת כל הפרטים שנשלחו מהקריאה
                string IDTip = context.Request["IDTip"];
                string tipContect = context.Request["tipContect"];
                string serialContectInner = context.Request["serialContectInner"];
                string serialContect = context.Request["serialContect"];
                string serialContect_Jpg = context.Request["serialContect_Jpg"];
                int likesCount = Convert.ToInt16(context.Request["likesCount"]);
                string tipHeadline = context.Request["tipHeadline"];
                string tipHeadlineGirl = context.Request["tipHeadlineGirl"];
                string tipHeadlineBoy = context.Request["tipHeadlineBoy"];
                string tipTxt = context.Request["tipTxt"];
                string tipTxtGirl = context.Request["tipTxtGirl"];
                string tipTxtBoy = context.Request["tipTxtBoy"];
                string tipHashTag = context.Request["tipHashTag"];
                string author = context.Request["author"];
                string tipLink = context.Request["tipLink"];
                string BtnName = context.Request["BtnName"];
                string tipDate = context.Request["tipDate"];


                Boolean publishTip = Convert.ToBoolean(context.Request["publishTip"]);


                //אם קיים תוכן בכל אחד מהפרטים
                if (IDTip != "" /*&& tipContect != "" && serialContectInner != "" && serialContect != "" && serialContect_Jpg != "" && likesCount != "" && tipHeadline != "" && tipHeadline != ""*/)
                {

                    //שאילתה להוספת היוזר החדש לטבלת היוזרים
                    string myQueryAddUser = "INSERT INTO tipsInfo (IDTip, tipContect, serialContectInner, serialContect,serialContect_Jpg,likesCount,tipHeadline,tipHeadlineGirl,tipHeadlineBoy,tipTxt,tipTxtGirl,tipTxtBoy,tipHashTag,tipLink,author,linkBtnName,publish,tipDate ) VALUES ('" + IDTip + "', '" + tipContect + "', '" + serialContectInner + "', '" + serialContect + "', '" + serialContect_Jpg + "', '" + likesCount + "', '" + tipHeadline + "', '" + tipHeadlineGirl + "', '" + tipHeadlineBoy + "', '" + tipTxt + "', '" + tipTxtGirl + "', '" + tipTxtBoy + "', '" + tipHashTag + "', '" + tipLink + "', '" + author + "', '" + BtnName + "', " + publishTip + ", '" + tipDate + "');";

                    //הוספה לטבלה באמצעות המחלקה
                    mySql.SQLChange(myQueryAddUser);

                    context.Response.Write("actionSucceed");

                }
                else
                {
                    context.Response.Write("noData");
                }

                break;

            //מחיקת טיפ
            case "deleteTip":

                //קבלת כל הפרטים שנשלחו מהקריאה
                int IDTipToDelete = Convert.ToInt16(context.Request["IDTipToDelete"]);

                //אם קיים תוכן בכל אחד מהפרטים

                if (IDTipToDelete != 0 /*&& tipContect != "" && serialContectInner != "" && serialContect != "" && serialContect_Jpg != "" && likesCount != "" && tipHeadline != "" && tipHeadline != ""*/)
                {
                    // " tipsInfo SET likesCount = " + updateCurrentLikes + " WHERE ID = " + currentTipID + ";";
                    //שאילתה להוספת היוזר החדש לטבלת היוזרים
                    string myQueryAddUser = "UPDATE  tipsInfo SET  deletedTip = true WHERE ID = " + IDTipToDelete + ";";

                    //הוספה לטבלה באמצעות המחלקה
                    mySql.SQLChange(myQueryAddUser);

                    context.Response.Write("actionSucceed");
                    //  }
                    //else
                    //{
                    //    context.Response.Write("emailNotcurrect");
                    //}
                }
                else
                {
                    context.Response.Write("noData");
                }

                break;


            //שליפת התוכן לפי הID שנבחר
            case "getTipContectById":
                int IDTipContent = Convert.ToInt16(context.Request["IDTipContent"]);
                //string IDTipContent = context.Request["IDTipContent"];
                //שאילתה לשליפת כל היוזרים

                //string myQueryTipContectById = "SELECT * FROM tipsInfo WHERE IDTip = '" + IDTipContent + "';";
                string myQueryTipContectById = "SELECT * FROM tipsInfo WHERE ID = " + IDTipContent + ";";
                //string myQueryTipContectById = "SELECT * FROM tipsInfo WHERE ID = 1;";

                //שליפה באמצעות פנייה למחלקה
                DataSet myTipsContect = mySql.SQLSelect(myQueryTipContectById);

                //אם יש יוזרים
                if (myTipsContect.Tables[0].Rows.Count != 0)
                {

                    //int countRows =Convert.ToInt16(myTipsCon.Tables[0].Rows.Count);
                    //המרת הטבלה שחזרה מהשליפה לג'ייסון
                    string jsonTipsText = JsonConvert.SerializeObject(myTipsContect);

                    //  context.Response.Write(countRows);
                    context.Response.Write(jsonTipsText);
                }
                else
                {
                    //  string jsonTipsText = JsonConvert.SerializeObject(myTipsContect);

                    //  context.Response.Write(countRows);
                    //context.Response.Write(IDTipContent);
                    context.Response.Write("noTip");
                }
                break;


            //update Tip publish

            case "updateTipPublish":

                //קבלת שם המשתמש שנשלח מהקריאה
                int TipID = Convert.ToInt16(context.Request["TipID"]);
                Boolean publishTipEditor = Convert.ToBoolean(context.Request["publishTipEditor"]);

                string myQueryUpdatePublish = "UPDATE tipsInfo SET publish = " + publishTipEditor + " WHERE tipHeadlineBoy IS NOT NULL AND tipHeadlineGirl IS NOT NULL AND tipTxtBoy IS NOT NULL AND tipTxtGirl IS NOT NULL AND ID = " + TipID + ";";


                // string myQueryUpdatePublish = "UPDATE tipsInfo SET publish = " + publishTipEditor + " WHERE tipHeadlineBoy IS NOT NULL AND ID = " + TipID + ";";


                //שליפה באמצעות פנייה למחלקה
                //אם יש יוזר כזה
                if (TipID != 0)
                {
                    mySql.SQLChange(myQueryUpdatePublish);
                    //המרת הטבלה שחזרה מהשליפה לג'ייסון
                    ////  string jsonGamesText = JsonConvert.SerializeObject(updateing);
                    context.Response.Write(myQueryUpdatePublish);
                    context.Response.Write("publish " + TipID);
                }
                else
                {
                    context.Response.Write("change not seceed");
                }
                break;


            //update TipTXT

            case "updateTipTXT":

                //קבלת שם המשתמש שנשלח מהקריאה
                int TCurrentID = Convert.ToInt16(context.Request["TCurrentID"]);

                string tipHeadLineTXT = context.Request["tipHeadLineTXT"];
                string tipHeadLineTXTF = context.Request["tipHeadLineTXTF"];
                string tipHeadLineTXTM = context.Request["tipHeadLineTXTM"];

                string tipContentTXT = context.Request["tipContentTXT"];
                string tipContentTXTF = context.Request["tipContentTXTF"];
                string tipContentTXTM = context.Request["tipContentTXTM"];

                string tagLineTXT = context.Request["tagLineTXT"];

                string myQueryUpdateTXT = "UPDATE tipsInfo SET tipHashTag = '" + tagLineTXT + "',tipTxt = '" + tipContentTXT + "',tipHeadline = '" + tipHeadLineTXT + "',tipHeadlineGirl = '" + tipHeadLineTXTF + "',tipHeadlineBoy = '" + tipHeadLineTXTM + "',tipTxtBoy ='" + tipContentTXTM + "',tipTxtGirl= '" + tipContentTXTF + "'  WHERE ID = " + TCurrentID + ";";


                // string myQueryUpdatePublish = "UPDATE tipsInfo SET publish = " + publishTipEditor + " WHERE tipHeadlineBoy IS NOT NULL AND ID = " + TipID + ";";


                //שליפה באמצעות פנייה למחלקה
                //אם יש יוזר כזה
                if (TCurrentID != 0)
                {
                    mySql.SQLChange(myQueryUpdateTXT);
                    //המרת הטבלה שחזרה מהשליפה לג'ייסון
                    ////  string jsonGamesText = JsonConvert.SerializeObject(updateing);
                    context.Response.Write(myQueryUpdateTXT);
                    context.Response.Write("update " + TCurrentID);
                }
                else
                {
                    context.Response.Write("change not seceed");
                }
                break;


            //update last seen tip in editor To False

            case "updatelastSeenAllToFalse":

                //קבלת שם המשתמש שנשלח מהקריאה
                // string userID = context.Request["userId"];

                bool lastSeenF = Convert.ToBoolean("false");


                string myQueryUpdateLastSeenF = "UPDATE tipsInfo SET lastSeen = " + lastSeenF + ";";


                //שליפה באמצעות פנייה למחלקה
                //אם יש יוזר כזה
                if (lastSeenF == false)
                {
                    mySql.SQLChange(myQueryUpdateLastSeenF);
                    //המרת הטבלה שחזרה מהשליפה לג'ייסון
                    ////  string jsonGamesText = JsonConvert.SerializeObject(updateing);

                }
                else
                {
                    context.Response.Write("nouserInfoFound");
                }
                break;

            //update last seen tip in editor To true

            case "updatelastSeenCurrentToTrue":

                //קבלת שם המשתמש שנשלח מהקריאה

                int TipIDlastSeen = Convert.ToInt16(context.Request["TipIDlastSeen"]);
                bool lastSeenT = Convert.ToBoolean("true");


                string myQueryUpdateLastSeeT = "UPDATE tipsInfo SET lastSeen = " + lastSeenT + " WHERE ID = " + TipIDlastSeen + ";";


                //שליפה באמצעות פנייה למחלקה
                //אם יש יוזר כזה
                if (lastSeenT == true)
                {
                    mySql.SQLChange(myQueryUpdateLastSeeT);
                    //המרת הטבלה שחזרה מהשליפה לג'ייסון
                    ////  string jsonGamesText = JsonConvert.SerializeObject(updateing);
                    context.Response.Write(myQueryUpdateLastSeeT);
                }
                else
                {
                    context.Response.Write("nouserInfoFound");
                }
                break;

            //update  seen tip in editor To true

            case "updateSeen":

                //קבלת שם המשתמש שנשלח מהקריאה

                int TipIDSeen = Convert.ToInt16(context.Request["TipIDSeen"]);
                bool SeenT = Convert.ToBoolean("true");


                string myQueryUpdateSeeT = "UPDATE tipsInfo SET seen = " + SeenT + " WHERE ID = " + TipIDSeen + ";";


                //שליפה באמצעות פנייה למחלקה
                //אם יש יוזר כזה
                if (SeenT == true)
                {
                    mySql.SQLChange(myQueryUpdateSeeT);
                    //המרת הטבלה שחזרה מהשליפה לג'ייסון
                    ////  string jsonGamesText = JsonConvert.SerializeObject(updateing);
                    context.Response.Write(myQueryUpdateSeeT);
                }
                else
                {
                    context.Response.Write("nouserInfoFound");
                }
                break;
        }
    }




    public bool IsReusable
    {
        get
        {
            return true;
        }
    }
}
















