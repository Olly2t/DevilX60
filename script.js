async function downloadTrack() {
    let url = document.getElementById("soundcloudUrl").value;
    document.getElementById("status").innerText = "Processing...";

    let response = await fetch("/download", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ url })
    });

    let data = await response.json();
    if (data.success) {
        window.location.href = data.downloadUrl;  // Redirect to file download
    } else {
        document.getElementById("status").innerText = "Failed to fetch track!";
    }
}
