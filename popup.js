document.addEventListener("DOMContentLoaded", function () {
    const note = document.getElementById("note");
    const saveBtn = document.getElementById("save");
    const centerTextBtn = document.getElementById("center-text");
    const leftTextBtn = document.getElementById("left-text");
    const rightTextBtn = document.getElementById("right-text");

    function applyStyle(command) {
        document.execCommand(command, false, null);
    }
    

    leftTextBtn.addEventListener("click", function () {
        applyStyle("justifyLeft");
    });

    centerTextBtn.addEventListener("click", function () {
        applyStyle("justifyCenter");
    });

    rightTextBtn.addEventListener("click", function () {
        applyStyle("justifyRight");
    });

    saveBtn.addEventListener("click", function () {
        const text = note.innerText;
        const blob = new Blob([text], { type: "text/plain" });
        const url = URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = "quick_note.txt";
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
    });
});
