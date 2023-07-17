// alert.js
export function createAlertCard() {
  const alertCard = $("<div>")
    .addClass("alert alert-dismissible bg-light-danger d-flex flex-center flex-column py-10 px-10 px-lg-20 mb-10");

  const closeButton = $("<button>")
    .attr("type", "button")
    .addClass("position-absolute top-0 end-0 m-2 btn btn-icon btn-icon-danger")
    .attr("data-bs-dismiss", "alert")
    .append(
      $("<i>")
        .addClass("ki-duotone ki-cross fs-1")
        .append($("<span>").addClass("path1"))
        .append($("<span>").addClass("path2"))
    );

  const infoIcon = $("<i>")
    .addClass("ki-duotone ki-information-5 fs-5tx text-danger mb-5")
    .append($("<span>").addClass("path1"))
    .append($("<span>").addClass("path2"))
    .append($("<span>").addClass("path3"));

  const contentWrapper = $("<div>").addClass("text-center");

  const title = $("<h1>").addClass("fw-bold mb-5").text("This is an alert");

  const separator = $("<div>")
    .addClass("separator separator-dashed border-danger opacity-25 mb-5");

  const description = $("<div>")
    .addClass("mb-9 text-dark")
    .html(
      'The alert component can be used to highlight certain parts of your page for <strong>higher content visibility</strong>.<br />Please read our <a href="#" class="fw-bold me-1">Terms and Conditions</a> for more info.'
    );

  const buttonWrapper = $("<div>").addClass("d-flex flex-center flex-wrap");

  const cancelButton = $("<a>")
    .attr("href", "#")
    .addClass("btn btn-outline btn-outline-danger btn-active-danger m-2")
    .text("Cancel");

  const okButton = $("<a>")
    .attr("href", "#")
    .addClass("btn btn-danger m-2")
    .text("Ok, I got it");

  buttonWrapper.append(cancelButton, okButton);
  contentWrapper.append(title, separator, description, buttonWrapper);
  alertCard.append(closeButton, infoIcon, contentWrapper);

  $("#alertContainer").append(alertCard);
}

