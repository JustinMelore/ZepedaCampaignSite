const scriptURL = "https://script.google.com/macros/s/AKfycbyyCkxgA2lxbpFvDD18vGlCvDeNVJ1aHi2Bk-rw_ZA-AD41gNAJXRKBkDC4InAvCmaw/exec";
const form = document.forms[0]
form.addEventListener("submit", (e) => {
    e.preventDefault();
    var formData = new FormData(form);
    fetch(scriptURL, { method: "POST", body: formData })
        .then((response) => {
            console.log("Info submitted successfully");
        })
        .catch((error) => {
            console.error(`Info failed to submit: ${error}`)
        }
    );
});