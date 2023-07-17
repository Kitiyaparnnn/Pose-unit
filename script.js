


$(function () {
  const next_btn = $("<i>").addClass("fas fa-arrow-right");
  $("#next-btn").click(openTap2);

  $("#btnClick1").click(openTap1);

  function openTap1() {
    $("#textHeadChange").text("1 ครั้งต่อเดือน");
    $("#btn_textHeadChange").text(" 1 ครั้งต่อเดือน ").append(next_btn);
    $("#back-btn").addClass("disabled");
    $("#next-btn").click(openTap2);

    $("#footer4").attr("hidden", true);
    $("#aboveSum").addClass("invisible");
    $("#text1").text("รวม");
    $("#value1").text(
      getSum(cost).toLocaleString(undefined, { minimumFractionDigits: 2 })
    );
    // ===============================================

    $("#table_main1").attr("hidden", false);
    $("#table_main2").attr("hidden", true);
    $("#table_main3").attr("hidden", true);
    $("#table_main4").attr("hidden", true);

    // ===============================================
    $("#btnClick1").removeClass("btnClick_No_Fixed-cost");
    $("#btnClick1").addClass("btnClick_Fixed-cost");

    $("#btnClick2").removeClass("btnClick_Fixed-cost");
    $("#btnClick3").removeClass("btnClick_Fixed-cost");
    $("#btnClick4").removeClass("btnClick_Fixed-cost");

    $("#btnClick2").addClass("btnClick_No_Fixed-cost");
    $("#btnClick3").addClass("btnClick_No_Fixed-cost");
    $("#btnClick4").addClass("btnClick_No_Fixed-cost");
    // ===============================================

    // ===============================================
    $("#spanClick1_text1").addClass("btnClick_Span1_Fixed-cost");
    $("#spanClick1_text1").removeClass("btnClick_Span1_No_Fixed-cost");

    $("#spanClick2_text1").removeClass("btnClick_Span1_Fixed-cost");
    $("#spanClick3_text1").removeClass("btnClick_Span1_Fixed-cost");
    $("#spanClick4_text1").removeClass("btnClick_Span1_Fixed-cost");

    $("#spanClick2_text1").addClass("btnClick_Span1_No_Fixed-cost");
    $("#spanClick3_text1").addClass("btnClick_Span1_No_Fixed-cost");
    $("#spanClick4_text1").addClass("btnClick_Span1_No_Fixed-cost");
    // ===============================================

    // ===============================================
    $("#spanClick1_text2").addClass("btnClick_Span2_Fixed-cost");
    $("#spanClick1_text2").removeClass("btnClick_Span2_No_Fixed-cost");

    $("#spanClick2_text2").removeClass("btnClick_Span2_Fixed-cost");
    $("#spanClick3_text2").removeClass("btnClick_Span2_Fixed-cost");
    $("#spanClick4_text2").removeClass("btnClick_Span2_Fixed-cost");

    $("#spanClick2_text2").addClass("btnClick_Span2_No_Fixed-cost");
    $("#spanClick3_text2").addClass("btnClick_Span2_No_Fixed-cost");
    $("#spanClick4_text2").addClass("btnClick_Span2_No_Fixed-cost");
    // ===============================================
  }

  $("#btnClick2").click(openTap2);

  function openTap2() {
    $("#textHeadChange").text("1 ครั้งต่อสัปดาห์");
    $("#btn_textHeadChange").text(" 1 ครั้งต่อสัปดาห์ ").append(next_btn);
    $("#back-btn").removeClass("disabled").click(openTap1);
    $("#next-btn").click(openTap3);

    $("#footer4").attr("hidden", true);
    $("#aboveSum").removeClass("invisible");
    $("#text1").text("จำนวนเฉลี่ยต่อรอบ");
    $("#value2").text(
      getSum(cost).toLocaleString(undefined, { minimumFractionDigits: 2 })
    );
    $("#value1").text("20");
    // ===============================================
    $("#table_main1").attr("hidden", true);
    $("#table_main2").attr("hidden", false);
    $("#table_main3").attr("hidden", true);
    $("#table_main4").attr("hidden", true);
    // ===============================================
    $("#btnClick2").removeClass("btnClick_No_Fixed-cost");
    $("#btnClick2").addClass("btnClick_Fixed-cost");

    $("#btnClick1").removeClass("btnClick_Fixed-cost");
    $("#btnClick3").removeClass("btnClick_Fixed-cost");
    $("#btnClick4").removeClass("btnClick_Fixed-cost");

    $("#btnClick1").addClass("btnClick_No_Fixed-cost");
    $("#btnClick3").addClass("btnClick_No_Fixed-cost");
    $("#btnClick4").addClass("btnClick_No_Fixed-cost");
    // ===============================================

    // ===============================================
    $("#spanClick2_text1").addClass("btnClick_Span1_Fixed-cost");
    $("#spanClick2_text1").removeClass("btnClick_Span1_No_Fixed-cost");

    $("#spanClick1_text1").removeClass("btnClick_Span1_Fixed-cost");
    $("#spanClick3_text1").removeClass("btnClick_Span1_Fixed-cost");
    $("#spanClick4_text1").removeClass("btnClick_Span1_Fixed-cost");

    $("#spanClick1_text1").addClass("btnClick_Span1_No_Fixed-cost");
    $("#spanClick3_text1").addClass("btnClick_Span1_No_Fixed-cost");
    $("#spanClick4_text1").addClass("btnClick_Span1_No_Fixed-cost");
    // ===============================================

    // ===============================================
    $("#spanClick2_text2").addClass("btnClick_Span2_Fixed-cost");
    $("#spanClick2_text2").removeClass("btnClick_Span2_No_Fixed-cost");

    $("#spanClick1_text2").removeClass("btnClick_Span2_Fixed-cost");
    $("#spanClick3_text2").removeClass("btnClick_Span2_Fixed-cost");
    $("#spanClick4_text2").removeClass("btnClick_Span2_Fixed-cost");

    $("#spanClick1_text2").addClass("btnClick_Span2_No_Fixed-cost");
    $("#spanClick3_text2").addClass("btnClick_Span2_No_Fixed-cost");
    $("#spanClick4_text2").addClass("btnClick_Span2_No_Fixed-cost");
    // ===============================================
  }

  $("#btnClick3").click(openTap3);

  function openTap3() {
    $("#textHeadChange").text("1 ครั้งต่อวัน");
    $("#btn_textHeadChange").text(" 1 ครั้งต่อวัน ").append(next_btn);
    $("#back-btn").removeClass("disabled").click(openTap2);
    $("#next-btn").click(openTap4);

    $("#footer4").attr("hidden", true);
    $("#aboveSum").removeClass("invisible");
    $("#text1").text("จำนวนเฉลี่ยต่อรอบ");
    $("#value2").text(
      getSum(cost).toLocaleString(undefined, { minimumFractionDigits: 2 })
    );
    $("#value1").text("20");
    // ===============================================
    $("#table_main1").attr("hidden", true);
    $("#table_main2").attr("hidden", true);
    $("#table_main3").attr("hidden", false);
    $("#table_main4").attr("hidden", true);
    // ===============================================
    $("#btnClick3").removeClass("btnClick_No_Fixed-cost");
    $("#btnClick3").addClass("btnClick_Fixed-cost");

    $("#btnClick2").removeClass("btnClick_Fixed-cost");
    $("#btnClick1").removeClass("btnClick_Fixed-cost");
    $("#btnClick4").removeClass("btnClick_Fixed-cost");

    $("#btnClick2").addClass("btnClick_No_Fixed-cost");
    $("#btnClick1").addClass("btnClick_No_Fixed-cost");
    $("#btnClick4").addClass("btnClick_No_Fixed-cost");
    // ===============================================

    // ===============================================
    $("#spanClick3_text1").addClass("btnClick_Span1_Fixed-cost");
    $("#spanClick3_text1").removeClass("btnClick_Span1_No_Fixed-cost");

    $("#spanClick2_text1").removeClass("btnClick_Span1_Fixed-cost");
    $("#spanClick1_text1").removeClass("btnClick_Span1_Fixed-cost");
    $("#spanClick4_text1").removeClass("btnClick_Span1_Fixed-cost");

    $("#spanClick2_text1").addClass("btnClick_Span1_No_Fixed-cost");
    $("#spanClick1_text1").addClass("btnClick_Span1_No_Fixed-cost");
    $("#spanClick4_text1").addClass("btnClick_Span1_No_Fixed-cost");
    // ===============================================

    // ===============================================
    $("#spanClick3_text2").addClass("btnClick_Span2_Fixed-cost");
    $("#spanClick3_text2").removeClass("btnClick_Span2_No_Fixed-cost");

    $("#spanClick2_text2").removeClass("btnClick_Span2_Fixed-cost");
    $("#spanClick1_text2").removeClass("btnClick_Span2_Fixed-cost");
    $("#spanClick4_text2").removeClass("btnClick_Span2_Fixed-cost");

    $("#spanClick2_text2").addClass("btnClick_Span2_No_Fixed-cost");
    $("#spanClick1_text2").addClass("btnClick_Span2_No_Fixed-cost");
    $("#spanClick4_text2").addClass("btnClick_Span2_No_Fixed-cost");
    // ===============================================
  }

  $("#btnClick4").click(openTap4);

  function openTap4() {
    $("#textHeadChange").text("ต้นทุนต่อรอบ");
    $("#btn_textHeadChange").text(" บันทึกต้นทุน");
    $("#back-btn").removeClass("disabled").click(openTap3);

    $("#footer").addClass("d-none");
    $("#footer4").attr("hidden", false);
    $("#aboveSum").addClass("invisible");
    // $("#values").text(
    //   getSum(cost).toLocaleString(undefined, { minimumFractionDigits: 2 })
    // );
    // ===============================================
    $("#table_main1").attr("hidden", true);
    $("#table_main2").attr("hidden", true);
    $("#table_main3").attr("hidden", true);
    $("#table_main4").attr("hidden", false);
    // ===============================================
    $("#btnClick4").removeClass("btnClick_No_Fixed-cost");
    $("#btnClick4").addClass("btnClick_Fixed-cost");

    $("#btnClick2").removeClass("btnClick_Fixed-cost");
    $("#btnClick1").removeClass("btnClick_Fixed-cost");
    $("#btnClick3").removeClass("btnClick_Fixed-cost");

    $("#btnClick2").addClass("btnClick_No_Fixed-cost");
    $("#btnClick1").addClass("btnClick_No_Fixed-cost");
    $("#btnClick3").addClass("btnClick_No_Fixed-cost");
    // ===============================================

    // ===============================================
    $("#spanClick4_text1").addClass("btnClick_Span1_Fixed-cost");
    $("#spanClick4_text1").removeClass("btnClick_Span1_No_Fixed-cost");

    $("#spanClick2_text1").removeClass("btnClick_Span1_Fixed-cost");
    $("#spanClick1_text1").removeClass("btnClick_Span1_Fixed-cost");
    $("#spanClick3_text1").removeClass("btnClick_Span1_Fixed-cost");

    $("#spanClick2_text1").addClass("btnClick_Span1_No_Fixed-cost");
    $("#spanClick1_text1").addClass("btnClick_Span1_No_Fixed-cost");
    $("#spanClick3_text1").addClass("btnClick_Span1_No_Fixed-cost");
    // ===============================================

    // ===============================================
    $("#spanClick4_text2").addClass("btnClick_Span2_Fixed-cost");
    $("#spanClick4_text2").removeClass("btnClick_Span2_No_Fixed-cost");

    $("#spanClick2_text2").removeClass("btnClick_Span2_Fixed-cost");
    $("#spanClick1_text2").removeClass("btnClick_Span2_Fixed-cost");
    $("#spanClick3_text2").removeClass("btnClick_Span2_Fixed-cost");

    $("#spanClick2_text2").addClass("btnClick_Span2_No_Fixed-cost");
    $("#spanClick1_text2").addClass("btnClick_Span2_No_Fixed-cost");
    $("#spanClick3_text2").addClass("btnClick_Span2_No_Fixed-cost");
    // ===============================================
  }

  //searh equipment
  const searchInput = $("#searchInput");
  const resultsContainer = $("#results");
  const data = [
    "WD #1",
    "WD #2",
    "WD #3",
    "WD #4",
    "WD #5",
    "WD #6",
    "WD #1",
    "WD #2",
    "WD #3",
    "WD #4",
    "WD #5",
    "WD #6",
    "WD #1",
    "WD #2",
    "WD #3",
    "WD #4",
    "WD #5",
    "WD #6",
    "WD #1",
    "WD #2",
    "WD #3",
    "WD #4",
    "WD #5",
    "WD #6",
  ];

  displayResults(data);

  searchInput.on("input", function (event) {
    const searchTerm = event.target.value.toLowerCase();
    const filteredData = data.filter((item) =>
      item.toLowerCase().includes(searchTerm)
    );
    displayResults(filteredData);
  });

  function displayResults(filteredData) {
    resultsContainer.empty();

    if (filteredData.length === 0) {
      resultsContainer.append("<p>No results found.</p>");
    } else {
      filteredData.forEach(function (item, index) {
        const card = $("<li>").addClass("border border-left-0 border-right-0");
        const cardBody = $("<button>")
          .addClass("btn btn-block border-0 position-relative list-btn")
          .css({
            height: "60px",
            "font-weight": "bold",
            "text-align": "left",
          })
          .text(item)
          .attr("value", item)
          .attr("id", "button-" + index);
        // .on("focus", function() {
        //   $(this).addClass("btn-focus");
        // })
        // .on("blur", function() {
        //   $(this).removeClass("btn-focus");
        // });

        const icon = $("<i>").addClass("fas fa-angle-right").css({
          position: "absolute",
          right: "20px",
          top: "50%",
          transform: "translateY(-50%)",
        });
        cardBody.append(icon);
        card.append(cardBody);
        resultsContainer.append(card);

        $("#button-" + index).click(function () {
          let text = $(this).val();
          $("#title").text(text);
        });
      });
    }
  }

  //dropdown
  $("#month").change(function () {
    const selectedValue = $(this).val();
    console.log(selectedValue);
  });
  $("#year").change(function () {
    const selectedValue = $(this).val();
    console.log(selectedValue);
  });
  $("#process").change(function () {
    const selectedValue = $(this).val();
    console.log(selectedValue);
  });

  //display the data table
  const cost = [
    { cell1: "1", cell2: "ค่าเสื่อมราคา", cell3: "25000.25" },
    { cell1: "2", cell2: "ค่าเสื่อมราคา", cell3: "25000.00" },
    { cell1: "3", cell2: "ค่าเสื่อมราคา", cell3: "25000.00" },
    { cell1: "4", cell2: "ค่าเสื่อมราคา", cell3: "25000.00" },
    { cell1: "5", cell2: "ค่าเสื่อมราคา", cell3: "25000.30" },
    { cell1: "1", cell2: "ค่าเสื่อมราคา", cell3: "25000.75" },
    { cell1: "2", cell2: "ค่าเสื่อมราคา", cell3: "25000.00" },
    { cell1: "3", cell2: "ค่าเสื่อมราคา", cell3: "25000.00" },
    { cell1: "4", cell2: "ค่าเสื่อมราคา", cell3: "25000.00" },
    { cell1: "5", cell2: "ค่าเสื่อมราคา", cell3: "25000.00" },
  ];

  const cost2 = [
    {
      cell1: "1",
      cell2: "ค่าเสื่อมราคา",
      cell3: "25000.25",
      cell4: "25000.25",
      cell5: "25000.25",
    },
    {
      cell1: "2",
      cell2: "ค่าเสื่อมราคา",
      cell3: "25000.00",
      cell4: "25000.25",
      cell5: "25000.25",
    },
    {
      cell1: "3",
      cell2: "ค่าเสื่อมราคา",
      cell3: "25000.00",
      cell4: "25000.25",
      cell5: "25000.25",
    },
  ];

  const programs = ["โปรแกรม1", "โปรแกรม2", "โปรแกรม3"];

  $("#value1").text(
    getSum(cost).toLocaleString(undefined, { minimumFractionDigits: 2 })
  );
  const table1 = $("#table_main1");
  generateTable(cost, table1);

  const table2 = $("#table_main2");
  generateTable(cost, table2);

  const table3 = $("#table_main3");
  generateTable(cost, table3);

  const table4 = $("#table_main4");
  generateTable4(cost2, table4, programs);

  function getSum(data) {
    let sum = 0;
    data.forEach(function (item) {
      const price = parseFloat(item.cell3);
      sum = sum + price;
    });
    // console.log("sum:", sum);
    return sum;
  }

  function getSumTable4(data, program) {
    for (i = 0; i < program.length; i++) {
      const container = $("<div>").addClass("container d-flex flex-row");
      let sum = 0;
      const index = "cell" + (3 + i);
      data.forEach(function (item) {
        const price = parseFloat(item[index]);
        sum = sum + price;
      });
      const value1 = $("<p>")
        .css({
          "text-align": "center",
          "font-weight": "bold",
        })
        .text(sum);
      container.append(value1, $("<p>").text("บาท/วัน"));
      values.append(container);
    }
  }

  function generateTable(data, table) {
    //tbody
    const tbody = $("<tbody>");

    data.forEach(function (item) {
      const row = $("<tr>");

      const cell1 = $("<td>").css("text-align", "center").text(item.cell1);
      const cell2 = $("<td>").text(item.cell2);
      const cell3 = $("<td>")
        .css("text-align", "right")
        .text(
          parseFloat(item.cell3).toLocaleString(undefined, {
            minimumFractionDigits: 2,
          })
        );
      const cell4 = $("<td>").css("text-align", "center");

      const editIcon = $("<i>").addClass("far fa-edit pr-sm-2");
      const deleteIcon = $("<i>")
        .addClass("fas fa-trash-alt")
        .css("color", "red");
      cell4.append(editIcon, deleteIcon);

      row.append(cell1, cell2, cell3, cell4);
      tbody.append(row);
    });

    table.append(tbody);

    //footer
    const tfooter = $("<tfoot>").addClass("bg-light");
    const row = $("<tr>");

    const cell1 = $("<td>")
      .css("text-align", "center")
      .text(data.length + 1);
    const cell2 = $("<td>").append(
      $("<input>")
        .attr("type", "text")
        .addClass("form-control")
        .attr("placeholder", "กรอกข้อมูล")
    );
    const cell3 = $("<td>").append(
      $("<input>")
        .attr("type", "text")
        .addClass("form-control")
        .css("text-align", "right")
        .attr("placeholder", "0.00")
    );
    const cell4 = $("<td>").css("text-align", "center");

    const clearButton = $("<button>")
      .attr("type", "button")
      .addClass("btn btn-outline-secondary")
      .text("ล้าง");
    const addButton = $("<button>")
      .attr("type", "button")
      .addClass("btn btn-primary")
      .text("เพิ่มต้นทุน")
      .attr("data-target","#exampleModal").click(createAlertCard);
    cell4.append(clearButton, " ", addButton);

    row.append(cell1, cell2, cell3, cell4);
    tfooter.append(row);

    table.append(tfooter);
  }

  function createAlertCard() {

    var modal = $('<div>').addClass('modal fade').attr('id', 'exampleModal').attr('tabindex', '-1').attr('role', 'dialog').attr('aria-labelledby', 'exampleModalLabel').attr('aria-hidden', 'true');
    var modalDialog = $('<div>').addClass('modal-dialog').attr('role', 'document');
    var modalContent = $('<div>').addClass('modal-content');
    var modalHeader = $('<div>').addClass('modal-header');
    var modalTitle = $('<h5>').addClass('modal-title').attr('id', 'exampleModalLabel').text('Modal title');
    var closeButton = $('<button>').attr('type', 'button').addClass('close').attr('data-dismiss', 'modal').attr('aria-label', 'Close');
    var closeIcon = $('<span>').attr('aria-hidden', 'true').html('&times;');
    closeButton.append(closeIcon);
    modalHeader.append(modalTitle, closeButton);
    
    var modalBody = $('<div>').addClass('modal-body');
    // Add your modal body content here
    
    var modalFooter = $('<div>').addClass('modal-footer');
    var closeButtonFooter = $('<button>').attr('type', 'button').addClass('btn btn-secondary').attr('data-dismiss', 'modal').text('Close');
    var saveButton = $('<button>').attr('type', 'button').addClass('btn btn-primary').text('Save changes');
    modalFooter.append(closeButtonFooter, saveButton);
    
    modalContent.append(modalHeader, modalBody, modalFooter);
    modalDialog.append(modalContent);
    modal.append(modalDialog);
    
    $('body').append(modal);    
    console.log("created alert");
  }

  function generateTable4(data, table, programs) {
    //thead
    const thead = $("<thead>").addClass("thead-light");
    const trow = $("<tr>");
    const h1 = $("<th>").css("text-align", "center").text("ต้นทุน");
    const h2 = $("<th>").css("text-align", "center").text("ชื่อต้นทุน");
    trow.append(h1, h2);
    programs.forEach(function (p) {
      const program = $("<th>").css("text-align", "center").text(p);
      trow.append(program);
    });
    const hl = $("<th>").css("text-align", "center").text("Action");
    trow.append(hl);
    thead.append(trow);
    table.append(thead);

    //tbody
    const tbody = $("<tbody>");

    data.forEach(function (item) {
      const row = $("<tr>");

      const cell1 = $("<td>").css("text-align", "center").text(item.cell1);
      const cell2 = $("<td>").text(item.cell2);
      row.append(cell1, cell2);
      for (i = 0; i < programs.length; i++) {
        const index = "cell" + (3 + i);
        // console.log(index);
        const cell = $("<td>")
          .css("text-align", "right")
          .text(
            parseFloat(item[index]).toLocaleString(undefined, {
              minimumFractionDigits: 2,
            })
          );
        row.append(cell);
      }

      const cell4 = $("<td>").css("text-align", "center");

      const editIcon = $("<i>").addClass("far fa-edit pr-sm-2");
      const deleteIcon = $("<i>")
        .addClass("fas fa-trash-alt")
        .css("color", "red");
      cell4.append(editIcon, deleteIcon);

      row.append(cell4);
      tbody.append(row);
    });

    table.append(tbody);

    //footer
    const tfooter = $("<tfoot>").addClass("bg-light");
    const row = $("<tr>").addClass("border-buttom-0");
    const row2 = $("<tr>")
      .addClass("border-top-0")

      .append(
        $("<td>")
          .attr("colspan", "100%")
          .addClass("border-top-0")
          .append(
            $("<button>")
              .attr("type", "button")
              .addClass("btn bg-white border")
              .text(" + เพิ่มคอลัมน์")
          )
      );

    const cell1 = $("<td>")
      .css("text-align", "center")
      .text(data.length + 1);
    const cell2 = $("<td>").append(
      $("<input>")
        .attr("type", "text")
        .addClass("form-control")
        .attr("placeholder", "กรอกข้อมูล")
    );
    row.append(cell1, cell2);
    for (i = 0; i < data.length; i++) {
      const cell3 = $("<td>").append(
        $("<input>")
          .attr("type", "text")
          .addClass("form-control")
          .css("text-align", "right")
          .attr("placeholder", "0.00")
      );
      row.append(cell3);
    }

    const cell4 = $("<td>").css("text-align", "center");

    const clearButton = $("<button>")
      .attr("type", "button")
      .addClass("btn btn-outline-secondary")
      .text("ล้าง");
    const addButton = $("<button>")
      .attr("type", "button")
      .addClass("btn btn-primary")
      .text("เพิ่มต้นทุน");
    cell4.append(clearButton, " ", addButton);

    row.append(cell4);
    tfooter.append(row, row2);

    table.append(tfooter);
  }
});


// });
