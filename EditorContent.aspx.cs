using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using System.Xml;

public partial class Edit : System.Web.UI.Page
{
    protected void Page_Load(object sender, EventArgs e)
    {
      
    }

    protected void BackToTipTable_Click(object sender, EventArgs e)
    {
        Response.Redirect("TipsEditor.aspx");
    }

    protected void saveChangesBtn_Click(object sender, EventArgs e)
    {
        ((Panel)FindControl("successAddTipPopup")).CssClass = "overlay";


    }
}