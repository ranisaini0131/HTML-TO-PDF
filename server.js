import express from "express"
import pdf from "html-pdf"
import axios from "axios"
const app = express()

const port = 8080;


async function generatePDFfromURL(url, outputPath) {
    try {
        const response = await axios.get(url);
        const htmlContent = response.data;
        pdf.create(htmlContent).toFile(outputPath, (err, res) => {
            if (err) return console.log(err);
            console.log('PDF generated successfully:', res);
        });
    } catch (error) {
        console.error('Error fetching URL:', error);
    }
}

// Usage
generatePDFfromURL('https://google.com', 'google.pdf');


app.listen(port, (req, res) => {
    console.log(`Server is running on port ${port}`)
})