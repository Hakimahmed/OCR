document.getElementById("convertBtn").addEventListener("click", function() {
    const imageInput = document.getElementById("imageInput").files[0];
    
    if (imageInput) {
        Tesseract.recognize(
            imageInput,
            'eng', // You can change this to 'eng' for English or 'urd' for Urdu etc.
            {
                logger: (m) => console.log(m) // Logging progress (optional)
            }
        ).then(({ data: { text } }) => {
            document.getElementById("outputText").textContent = text;
        }).catch(err => {
            console.error(err);
            alert("Error occurred while processing the image.");
        });
    } else {
        alert("Please upload an image first.");
    }
});
