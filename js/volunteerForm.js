const scriptURL = "https://script.google.com/macros/s/AKfycbyyCkxgA2lxbpFvDD18vGlCvDeNVJ1aHi2Bk-rw_ZA-AD41gNAJXRKBkDC4InAvCmaw/exec";
const form = document.forms[0]
const submissionStatus = document.getElementById("submitStatus")

form.addEventListener("submit", (e) => {
    e.preventDefault();
    submissionStatus.textContent = "Submitting Info..."
    submissionStatus.className = "submitting";

    let selections = document.getElementsByClassName("daySelection")
    for(let i = 0; i < selections.length; i++) {
        let availability = selections[i].getElementsByTagName("input")[1]
        if(selections[i].getElementsByTagName("input")[0].checked == true && availability.value == "") availability.value = "Available"
    }

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

/**
 * Triggers when the user selects one of the checkboxes for the days of the week. Doing so will either show or hide the corresponding text field input
 * @param {*} day 
 */
function onAvailabilitySelected(day) {
    let textInput = document.getElementById(day.value)
    if(day.checked) {
        textInput.className = ""
    } else {
        textInput.className = "hidden"
        textInput.value = ""
    }
}