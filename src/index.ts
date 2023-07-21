
document.getElementById("form")?.addEventListener("submit", (e) => {
    e.preventDefault();
    const userFile = (document.getElementById("file") as any).files[0];
    const userComents = (document.getElementById("comments") as any).value;
    const formData = new FormData();
    formData.append("user-file", userFile);
    formData.append("user-comments", userComents);

    const URL = "https://localhost:7123/api/Storage/Upload";
    fetch(URL, {
        mode: "cors",
        method: "POST",
        headers: { "Access-Control-Allow-Origin": "https://localhost:7123/api", "Content-Type": "multipart/form-data" },
        body: formData,
    })
        .then(res => res.json())
        .then(data => console.log(data))
        .catch(err => console.log(err))
})