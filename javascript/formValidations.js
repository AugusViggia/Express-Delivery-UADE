document
    .getElementById("contact-form")
    .addEventListener("submit", function (event) {
        event.preventDefault();

        var name = document.getElementById("name").value;
        var email = document.getElementById("email").value;
        var message = document.getElementById("message").value;
        if (name && email && message) {
            showModal();
            document.getElementById("contact-form").reset();
        } else {
            alert("Por favor, completa todos los campos.");
        }
    });

function showModal() {
    var modal = document.createElement("div");
    modal.innerHTML = `
                <div style="position:fixed; top:0; left:0; width:100%; height:100%; background:rgba(0,0,0,0.5); display:flex; justify-content:center; align-items:center;">
                    <div style="background:white; padding:20px; border-radius:5px; text-align:center;">
                        <p>Tu mensaje ha sido enviado.</p>
                        <button onclick="redirectHome()">OK</button>
                    </div>
                </div>
            `;
    document.body.appendChild(modal);
}

function redirectHome() {
    window.location.href = "/";
}
