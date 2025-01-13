    function saveMessage() {
        // Ambil data dari formulir
        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const phone = document.getElementById("phone").value;
        const message = document.getElementById("message").value;

        // Validasi input
        if (!name || !email || !phone || !message) {
            alert("All fields are required!");
            return;
        }

        // Format data untuk file
        const data = `
You have received a new message:
Name: ${name}
Email: ${email}
Phone: ${phone}
Message:
${message}
-----------------------------
`;

        // Encode data ke Base64
        const encodedData = btoa(data); // Menggunakan btoa untuk mengencode data

        // Konfigurasi GitHub
        const GITHUB_USERNAME = 'faridk84'; // Ganti dengan GitHub Username
        const REPO_NAME = 'message'; // Ganti dengan Repository Name
        const GITHUB_TOKEN = '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'; // Ganti dengan GitHub Token
        const BRANCH = 'main'; // Nama branch GitHub, misal 'main'

        // Nama file di GitHub
        const filename = `messages/message-${Date.now()}.txt`;

        // API GitHub URL
        const url = `https://api.github.com/repos/${GITHUB_USERNAME}/${REPO_NAME}/contents/${filename}`;

        // Payload untuk API GitHub
        const payload = {
            message: 'Add new message file',
            content: encodedData, // Menggunakan data yang telah di-encode
            branch: BRANCH
        };

        // Kirim permintaan menggunakan Fetch API
        fetch(url, {
            method: 'PUT',
            headers: {
                'Authorization': `token ${GITHUB_TOKEN}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(payload)
        })
        .then(response => response.json())
        .then(data => {
            if (data.content) {
                alert('Your message has been sent!');
            } else {
                alert('Failed to upload message.');
            }
        })
        .catch(error => {
            console.error('Error:', error);
            alert('There was an error uploading your message.');
        });
    }
