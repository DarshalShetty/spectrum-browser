"use strict";
const pages = ["page_main", "page_accounts", "page_settings", "page_payment_code"];

let showPage = (page_id) => {
    pages.forEach(page => document.getElementById(page).style.display = "none");
    document.getElementById(page_id).style.display = "block";
};

showPage("page_main");

document.getElementById("accounts_btn").addEventListener("click",
    async () => showPage("page_accounts"));
document.getElementById("settings_btn").addEventListener("click",
    async () => showPage("page_settings"));
document.querySelectorAll(".to_dummy_payment_code")
    .forEach(accountButton => accountButton.addEventListener("click",
        async () => showPage("page_payment_code")));
