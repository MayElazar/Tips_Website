using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using System.Drawing.Imaging;
using System.Drawing.Drawing2D;
using System.IO;
using System.Drawing;


//שימו לב שקיימים לכם כל ה using System

public partial class _Default : System.Web.UI.Page
{
    AccessDataSource myData = new AccessDataSource();


    protected void Page_Load(object sender, EventArgs e)
    {


        RadioButton1.Text = "<img class='genderBtn' src='./img/genderF.png' alt='femaleIcon' />";
        RadioButton2.Text = "<img class='genderBtn' src='./img/genderM.png' alt='maleIcon' />";
        RadioButton3.Text = "<img class='genderBtn' src='./img/noGender.png' alt='maleIcon' />";
        if (RadioButton3.Checked == true)
        {
            RadioButton3.CssClass = "NoOpacity";
            RadioButton2.CssClass = "Opacity";
            RadioButton1.CssClass = "Opacity";
        }
        if (RadioButton2.Checked == true)
        {
            RadioButton2.CssClass = "NoOpacity";
            RadioButton3.CssClass = "Opacity";
            RadioButton1.CssClass = "Opacity";
        }
        if (RadioButton1.Checked == true)
        {
            RadioButton1.CssClass = "NoOpacity";
            RadioButton2.CssClass = "Opacity";
            RadioButton3.CssClass = "Opacity";
        }



        foreach (GridViewRow everyRow in GridViewTipContent.Rows)
        {

            //ScriptManager.GetCurrent(this).RegisterPostBackControl(((CheckBox)everyRow.FindControl("IspublishTip")));
            //כותרת הטיפ
            ((Label)(everyRow.FindControl("tipHeadLineMen"))).Visible = false;
            ((Label)(everyRow.FindControl("tipHeadLine"))).Visible = true;
            ((Label)(everyRow.FindControl("tipHeadLineWomen"))).Visible = false;

            //תוכן הטיפ

            ((Label)(everyRow.FindControl("tipContectM"))).Visible = false;
            ((Label)(everyRow.FindControl("tipContect"))).Visible = true;
            ((Label)(everyRow.FindControl("tipContectF"))).Visible = false;




        }

        //popup deleteTip

    }








    protected void GridViewTipContent_RowCommand(object sender, GridViewCommandEventArgs e)
    {
        // תחילה אנו מבררים מהו ה -אי די- של הפריט בעץ ה אקס אם אל
        ImageButton i = (ImageButton)e.CommandSource;
        // אנו מושכים את האי די של הפריט באמצעות מאפיין לא שמור במערכת שהוספנו באופן ידני לכפתור-תמונה
        string theId = i.Attributes["theItemId"];
        Session["TipIDSession"] = i.Attributes["theItemId"];



        string TipIDSession = Session["TipIDSession"].ToString();

        // עלינו לברר איזו פקודה צריכה להתבצע - הפקודה רשומה בכל כפתור             
        switch (e.CommandName)
        {
            //אם נלחץ על כפתור מחיקה יקרא לפונקציה של מחיקה                    
            case "deleteRow":
                deleteRow();
                break;

            //אם נלחץ על כפתור עריכה (העפרון) נעבור לדף עריכה                    
            case "editRow":
                Response.Redirect("EditorContent.aspx");
                break;
        }
    }

    protected void deleteRow()
    {
        // GridViewTipContent.DataBind();
        //  ((Panel)FindControl("deleteTipPop")).Visible = true;
        ((Panel)FindControl("deleteTipPop")).CssClass = "overlay";



    }






    protected void noDeleteBtn_Click(object sender, EventArgs e)
    {
        ((Panel)FindControl("deleteTipPop")).CssClass = "popupClose";
        //  ((Panel)FindControl("deleteTipPop")).Visible = false;
    }

    protected void yesDeleteBtn_Click(object sender, EventArgs e)
    {

        ((Panel)FindControl("deleteTipPop")).CssClass = "popupClose";
        GridViewTipContent.DataBind();
    }

    protected void IspublishTip_CheckedChanged(object sender, EventArgs e)
    {
        GridViewTipContent.DataBind();
    }

    protected void RadioButton1_CheckedChanged(object sender, EventArgs e)

    {
        if (RadioButton1.Checked == true)
        { 

            RadioButton1.Text = "<img class='genderBtn' src='./img/genderFChoosen.png' alt='female Icon Chossen' />";
        foreach (GridViewRow everyRow in GridViewTipContent.Rows)
        {
            //כותרת הטיפ
            ((Label)(everyRow.FindControl("tipHeadLineWomen"))).Visible = true;
            ((Label)(everyRow.FindControl("tipHeadLineMen"))).Visible = false;
            ((Label)(everyRow.FindControl("tipHeadLine"))).Visible = false;

            //תוכן הטיפ

            ((Label)(everyRow.FindControl("tipContectM"))).Visible = false;
            ((Label)(everyRow.FindControl("tipContect"))).Visible = false;
            ((Label)(everyRow.FindControl("tipContectF"))).Visible = true;
        }}
    }

    protected void RadioButton2_CheckedChanged(object sender, EventArgs e)
    {
        //RadioButton2.CssClass = "NoOpacity";
        //RadioButton3.CssClass = "Opacity";
        //RadioButton1.CssClass = "Opacity";


        if (RadioButton2.Checked == true)
        { 
            RadioButton2.Text = "<img class='genderBtn' src='./img/genderMChoosen.png' alt='male Icon Choosen' />";

        foreach (GridViewRow everyRow in GridViewTipContent.Rows)
        {
            //כותרת הטיפ
            ((Label)(everyRow.FindControl("tipHeadLineMen"))).Visible = true;
            ((Label)(everyRow.FindControl("tipHeadLine"))).Visible = false;
            ((Label)(everyRow.FindControl("tipHeadLineWomen"))).Visible = false;

            //תוכן הטיפ

            ((Label)(everyRow.FindControl("tipContectM"))).Visible = true;
            ((Label)(everyRow.FindControl("tipContect"))).Visible = false;
            ((Label)(everyRow.FindControl("tipContectF"))).Visible = false;
        }}
    }

    protected void RadioButton3_CheckedChanged(object sender, EventArgs e)
    {
        //RadioButton3.CssClass = "NoOpacity";
        //RadioButton2.CssClass = "Opacity";
        //RadioButton1.CssClass = "Opacity";

        if (RadioButton3.Checked == true)
        {
            RadioButton3.Text = "<img class='genderBtn' src='./img/noGenderChoosen.png' alt='maleIcon' />";

            foreach (GridViewRow everyRow in GridViewTipContent.Rows)
            {
                //כותרת הטיפ
                ((Label)(everyRow.FindControl("tipHeadLineWomen"))).Visible = false;
                ((Label)(everyRow.FindControl("tipHeadLineMen"))).Visible = false;
                ((Label)(everyRow.FindControl("tipHeadLine"))).Visible = true;


                //תוכן הטיפ
                ((Label)(everyRow.FindControl("tipContectM"))).Visible = false;
                ((Label)(everyRow.FindControl("tipContect"))).Visible = true;
                ((Label)(everyRow.FindControl("tipContectF"))).Visible = false;
            }
        }
    }

    protected void GridViewTipContent_RowDataBound(object sender, GridViewRowEventArgs e)
    {
        if (e.Row.RowState.HasFlag(DataControlRowState.Alternate))
        {
            // you can also set column css in databound event
            //GridViewTipContent.Columns.ItemStyle.CssClass = "align";
            GridViewTipContent.Columns[3].ItemStyle.CssClass = "colWidthHeadLine";

            GridViewTipContent.Columns[5].ItemStyle.CssClass = "widthHashCol";
            GridViewTipContent.Columns[2].ItemStyle.CssClass = "align";
            GridViewTipContent.Columns[1].ItemStyle.CssClass = "align";
            GridViewTipContent.Columns[5].ItemStyle.CssClass = "widthHashCol";
            GridViewTipContent.Columns[6].ItemStyle.CssClass = "align";
            GridViewTipContent.Columns[7].ItemStyle.CssClass = "align";
            GridViewTipContent.Columns[3].ItemStyle.CssClass = "colWidth";
         
        }
     


    }

    protected void backToHomeScreen_Click(object sender, EventArgs e)
    {
        Response.Redirect("index.html");
    }
}