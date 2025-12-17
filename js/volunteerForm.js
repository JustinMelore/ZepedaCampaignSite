const scriptURL = "https://script.google.com/macros/s/AKfycbyyCkxgA2lxbpFvDD18vGlCvDeNVJ1aHi2Bk-rw_ZA-AD41gNAJXRKBkDC4InAvCmaw/exec";
const form = document.forms[0]
const submissionStatus = document.getElementById("submitStatus")

form.addEventListener("submit", (e) => {
    e.preventDefault();
    submissionStatus.textContent = "Submitting Info..."
    submissionStatus.className = "submitting";

    var formData = new FormData(form);
    fetch(scriptURL, { method: "POST", body: formData })
        .then((response) => {
            console.log("Info submitted successfully");
            submissionStatus.textContent = "Submitted Successfully!"
            submissionStatus.className = "succeeded"
        })
        .catch((error) => {
            console.error(`Info failed to submit: ${error}`)
            submissionStatus.textContent = "Submission failed. Please try again"
            submissionStatus.className = "failed"
        }
    );
});

/**
 * Triggers when the user selects one of the volunteer type options and will either show or hide the "other" text field in the form
 * @param {*} selected The volunteer type that was selected
 */
function onVolunteerTypeChange(selected) {
    if(selected.value == "Other") {
        document.getElementById("otherField").className = ""
    }
    else {
        document.getElementById("otherField").className = "hidden"
        document.getElementById("otherVolunteering").value = ""
    }
}