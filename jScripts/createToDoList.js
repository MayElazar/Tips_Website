
$(document).ready(function () {
    $("#TextList").css('display', 'none');
    $("#addToList").css('display', 'none');
    $("#deleteAddItem").css('display', 'none');


    //יצירת פריט לדוגמא
    itemNum++;
    //יצירת פריט לרשימה
    var item = document.createElement('li');
    item.id = 'item' + itemNum;
    item.classList = 'items'

    var iteminput = document.createElement('input');
    iteminput.type = 'checkbox';
    iteminput.id = 'cb' + itemNum;

    var itemLBL = document.createElement('label');
    itemLBL.id = 'itemLBL' + itemNum;



    var itemspan = document.createElement('span');
    itemspan.classList = 'checkbox';
    itemspan.id = 'itemspan' + itemNum;

    var itemspanTXT = document.createElement('span');
    itemspanTXT.innerHTML = 'פריט לדוגמא';

    var deleteItem = document.createElement('button');
    deleteItem.id = 'deleteItem' + itemNum;
    deleteItem.classList = 'deleteItem';

    var deleteItemIMG = document.createElement('img');
    deleteItemIMG.classList = 'deleteItemIMG';
    deleteItemIMG.id = 'deleteItemIMG' + itemNum;
    deleteItemIMG.src = './img/edit.png';


    $('#toDoListConteiner').append(item);
    $('#item' + itemNum).append(iteminput);


    $('#item' + itemNum).append(itemLBL);
    $('#itemLBL' + itemNum).append(itemspan);
    $('#itemLBL' + itemNum).append(itemspanTXT);
    $('#item' + itemNum).append(deleteItem);
    $('#deleteItem' + itemNum).append(deleteItemIMG);


    document.getElementById('item' + itemNum).addEventListener('click', checkMARK);
    document.getElementById('deleteItem' + itemNum).addEventListener('click', deleteIteminList);


    $('#itemLBL' + itemNum).attr('for', 'cb' + itemNum);



    // $('#itemLBL' + itemNum).css('display', 'grid');
    $("#TextList").val("");
    $("#TextList").css('display', 'none');
    $("#addToList").css('display', 'none');
    $("#deleteAddItem").css('display', 'none');


    $(document).click(function () {
        if ($('#toDoListConteiner').children().length == 0) {
            $('#downloadPdf').css('display', 'none');
        } else {
            $('#downloadPdf').css('display', 'block');
        }
    });


    $('#TextList').keyup(function () {
        console.log($('#TextList').val().length)
        if ($('#TextList').val().length > 0) {
            $("#addToList").css('display', 'grid');
            $("#deleteAddItem").css('display', 'grid');
        }
        if ($('#TextList').val().length == 0) {
            $("#addToList").css('display', 'none');
            $("#deleteAddItem").css('display', 'none');
        }

    });

    var itemNum = 0;
    $('#addItemBtn').click(function () {
        $("#TextList").css('display', 'block');

    });

    $('#addToList').click(function () {
        console.log($("#TextList").val() )
        if ($("#TextList").val() != "") {
            itemNum++;
            //יצירת פריט לרשימה
            var item = document.createElement('li');
            item.id = 'item' + itemNum;
            item.classList ='items'

            var iteminput = document.createElement('input');
            iteminput.type = 'checkbox';
            iteminput.id = 'cb' + itemNum;

            var itemLBL = document.createElement('label');
            itemLBL.id = 'itemLBL' + itemNum;



            var itemspan = document.createElement('span');
            itemspan.classList = 'checkbox';
            itemspan.id = 'itemspan' + itemNum;

            var itemspanTXT = document.createElement('span');
            itemspanTXT.innerHTML = $("#TextList").val();

            var deleteItem = document.createElement('button');
            deleteItem.id = 'deleteItem' + itemNum;
            deleteItem.classList = 'deleteItem';

            var deleteItemIMG = document.createElement('img');
            deleteItemIMG.classList = 'deleteItemIMG' ;
            deleteItemIMG.id = 'deleteItemIMG' + itemNum;
            deleteItemIMG.src = './img/edit.png';


            $('#toDoListConteiner').append(item);
            $('#item' + itemNum).append(iteminput);
            

            $('#item' + itemNum).append(itemLBL);
            $('#itemLBL' + itemNum).append(itemspan);
            $('#itemLBL' + itemNum).append(itemspanTXT);
            $('#item' + itemNum).append(deleteItem);
            $('#deleteItem' + itemNum).append(deleteItemIMG);


            document.getElementById('item' + itemNum).addEventListener('click', checkMARK);
            document.getElementById('deleteItem' + itemNum).addEventListener('click', deleteIteminList);


            $('#itemLBL' + itemNum).attr('for', 'cb' + itemNum);
            
      

           // $('#itemLBL' + itemNum).css('display', 'grid');
            $("#TextList").val("");
            $("#TextList").css('display', 'none');
            $("#addToList").css('display', 'none');
            $("#deleteAddItem").css('display', 'none');
        

            //$("#addItemCon").css('display', 'none');
        } else {

        }

    });

    function checkMARK(e) {
      //  .attr("checked", false)
      //  console.log(console.log($(e.target).parent().attr('id')));
       // console.log($(e.target).is(":checked"))
        //console.log($('.items').find('input'));

        //console.log($(e.target).parent().attr('for'));

        if ($(e.target).is(':checked')) {
            console.log($(e.target).parent().attr('id'));
            var num = $(e.target).parent().attr('id').slice(4);
            console.log(num)
            $('#itemspan' + num).addClass('active')
        } if ($(e.target).is(':checked') == false) {
            var num = $(e.target).parent().attr('id').slice(4);
            console.log(num)
            $('#itemspan' + num).removeClass('active')
        }
        //$(e.target).id
    }
    //$('.checkbox').click(function (e) {
      

    //});

    $('#deleteAddItem').click(function () {
        console.log('hdeleteAddItem');
        $("#TextList").val("");
        $("#TextList").css('display', 'none');
        $("#addToList").css('display', 'none');
        $("#deleteAddItem").css('display', 'none');

    });

    function deleteIteminList(e) {
        console.log(e.target);
        var delItmNum = $(e.target).attr('id').slice(13);
        console.log('item' + delItmNum)
        $('#item' + delItmNum).remove();
     
    }


    $('#downloadPdf').click(function () {
        var element = document.getElementById('toDoListConteiner');
        html2pdf(element, {
            margin: 10,
            filename: 'To DoList.pdf',
            html2pdf: { scale: 4, logging: true, dpi: 300, letterRendering: true }
         
        });

    });

    
});
