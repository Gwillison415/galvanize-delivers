//2nd way make var and set to tbody
// const tbody = $('tbody');
//const itemData = require('./itemData');


var itemData = [
  {
    id: 1001,
    item: 'Royale With Cheese',
    price: 8.99,
  },
  {
    id: 1001,
    item: 'Smoked Swine',
    price: 14.99,
  },
  {
    id: 1001,
    item: 'Arugula Pie',
    price: 11.99,
  },
  {
    id: 1001,
    item: 'Ice Cream Biscuit',
    price: 7.99,
  }


];
(function () {
 var subtotal =0;
 var tax = subtotal * 0.0875;
 var total = tax + subtotal;
 // $("tfoot tr.subtotal").append($('<td>').text('Subtotal'));
 // $('tfoot tr:first').append($('<td>'));

$('#burger').click(function () {

  // for final will need to create
  // $('<tbody>').append($('<tr>')).append($('<td>')).text("Royal With Cheese");
  //for test, just append
  $('tbody').append($('<tr>').append($('<td>').text("Royale With Cheese")));
  $("tbody tr:last").append($("<td>").text("$8.99"));
  subtotal += itemData[0].price;
  tax = subtotal * 0.0875;
  total = tax + subtotal;
  $('#subPrice').text(subtotal);
  $('#tax').text(tax.toFixed(2));
  $('#total').text(total.toFixed(2));
  // $('#subtotalField:last').text(subtotalVal);
  // var subtotalVal= subtotal.text;
  // console.log(subtotalVal);
});
$('#ice_cream').click(function () {
  // for final will need to create
  // $('<tbody>').append($('<tr>')).append($('<td>')).text("Royal With Cheese");
  //for test, just append
  $('tbody').append($('<tr>').append($('<td>').text("Ice Cream Biscuit")));
  $("tbody tr:last").append($("<td>").text("7.99"));
  subtotal += itemData[3].price;
  tax = subtotal * 0.0875;
  total = tax + subtotal;
  $('#subPrice').text(subtotal);
  $('#tax').text(tax.toFixed(2));
  $('#total').text(total.toFixed(2));

});

$('#pizza').click(function () {
  // for final will need to create
  // $('<tbody>').append($('<tr>')).append($('<td>')).text("Royal With Cheese");
  //for test, just append
  $('tbody').append($('<tr>').append($('<td>').text("Arugula Pie")));
  $("tbody tr:last").append($("<td>").text("$11.99"));

  subtotal += itemData[2].price;
  tax = subtotal * 0.0875;
  total = tax + subtotal;
  $('#subPrice').text(subtotal);
  $('#tax').text(tax.toFixed(2));
  $('#total').text(total.toFixed(2));
});
$('#rib').click(function () {
  // for final will need to create
  // $('<tbody>').append($('<tr>')).append($('<td>')).text("Royal With Cheese");
  //for test, just append
  $('tbody').append($('<tr>').append($('<td>').text("Smoked Swine")));
  $("tbody tr:last").append($("<td>").text("$14.99"));
  subtotal += itemData[1].price;
  tax = subtotal * 0.0875;
  total = tax + subtotal;
  $('#subPrice').text(subtotal);
  $('#tax').text(tax.toFixed(2));
  $('#total').text(total.toFixed(2));
//add object w values for each item
});
})()

// Define a function named hasClass that takes in two arguments.
//   element   (Any DOM element)
//   className (String)
//
// The function will return true if the element has the specified className CSS
// class applied.
function hasClass(element, className) {
  return $(element).hasClass(className);
}


// Define a function named toggleVisible that takes in one argument.
//   div (<div> DOM element)
//
// The function will add the 'visible' class to the div if it does not currently
// have it. It removes the class if it already exists.

function toggleVisible(div) {
    return $(div).toggleClass("visible");

}


function createTable(data) {
   let tableData = data.slice();
   let header = tableData.shift();
   let footer = tableData.pop();

   var table = $('<table>');
   var thead = $('<thead>');
   $(table).append(thead);


   //$(thead).append(tr);



   let trHead = $('<tr>')

  //  console.log(header, tableData, footer);
  //  thead.append(tr);

   trHead.appendTo($(thead));
   //set up table head

   for (var i = 0; i < header.length; i++) {
     var tr = $('<tr>');
    //  $(trHead).append($(th));
    //  th.text(header[i]);
    //  $(tr).appendTo(th);

     let th = $('<th>')
     th.appendTo(trHead);
     th.text(header[i]);
   }
   let tbody = $('<tbody>');
   $(table).append(tbody);
   //set up table body
   for (var i = 0; i < tableData.length; i++) {
     let tr = $('<tr>');

     $(tbody).append($(tr));

     console.log(tableData[i]);
     for (var j = 0; j < tableData[i].length; j++) {
       var td = $('<td>');
       td.text(tableData[i][j]);
       $(td).appendTo(tr);
       //console.log(tableData[i][ii], "happens");

     }
   }

  //  $.each(tableData, (idx, elem) => {
  //     tr.append(td);
  //     td.text(elem);
  //  })

   //set up footer
   let tfoot = $('<tfoot>')
   table.append(tfoot);
   let trFoot = $('<tr>')
   trFoot.appendTo($(tfoot));
   console.log('footer', footer);
   for (var i = 0; i < footer.length; i++) {
     let td = $('<td>')
     td.appendTo(trFoot);
     td.text(footer[i]);

   }


   console.log(table[0]);
   return table[0];
}

// function createTable(data) {
//    let tableData = data.slice();
//    let header = tableData.shift();
//    let footer = tableData.pop();
//
//    var table = $('<table>');
//    var thead = $('<thead>');
//    $(table).append(thead);
//
//
//    $(thead).append(tr);
//
//
//    let th = $('<th>');
//
//
//   //  console.log(header, tableData, footer);
//   //  thead.append(tr);
//
//   th.appendTo($(thead));
//    //set up table head
//    for (var i = 0; i < header.length; i++) {
//      var tr = $('<tr>');
//
//      tr.text(header[i]);
//      $(tr).appendTo(th);
//
//    }
//
//
//    let tbody = $('<tbody>');
//    $(table).append(tbody);
//
//    //set up table body
//    for (var i = 0; i < tableData.length; i++) {
//      var tr = $('<tr>');
//
//      $(tbody).append($(tr));
//
//      console.log(tableData[i]);
//      for (var j = 0; j < tableData[i].length; j++) {
//        var td = $('<td>');
//        td.text(tableData[i][j]);
//        $(td).appendTo(tr);
//        //console.log(tableData[i][ii], "happens");
//      }
//    }
//    tr.appendTo($(tbody));
//   //  $.each(tableData, (idx, elem) => {
//   //     tr.append(td);
//   //     td.text(elem);
//   //  })
//
//    //set up footer
//    let tfoot = $('<tfoot>')
//    table.append(tfoot);
//    let trfoot = $('<tr>')
//    tr.appendTo($(tfoot));
//    console.log('footer', footer);
//    for (var i = 0; i < footer.length; i++) {
//      let td = $('<td>')
//      td.appendTo(trfoot);
//      td.text(footer[i]);
//
//    }
//
//
//    console.log(table[0]);
//    return table[0];
// }
