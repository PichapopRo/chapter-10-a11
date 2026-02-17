const express = require("express");
const path = require("path");

if (!process.env.PORT) {
    throw new Error("Please specify the port number for the HTTP server with the environment variable PORT.");
}

const PORT = process.env.PORT;

async function main() {
    const app = express();

    app.use("/images", express.static(path.join(__dirname, "..", "assets", "images")));

    app.get("/ads", async (req, res) => {
        res.json({
            ads: [
                {
                    name: "Shopee",
                    url: "https://shopee.co.th/",
                    image: "/images/Shopee_logo.png",
                },
                {
                    name: "Lazada",
                    url: "https://www.lazada.co.th/",
                    image: "/images/lazada_logo.png",
                },
                {
                    name: "Kaidee",
                    url: "https://www.kaidee.com/",
                    image: "/images/kaidee_com_logo.jpg",
                },
            ],
        });
    });

    app.listen(PORT, () => {
        console.log("Microservice online.");
    });
}

main()
    .catch(err => {
        console.error("Microservice failed to start.");
        console.error(err && err.stack || err);
    });
