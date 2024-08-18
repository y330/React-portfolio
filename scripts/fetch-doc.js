const fetch = require("node-fetch");
const config = require("../google.config.js");
console.log(config.id);
const fetchGoogle = async ({ id }) => {
    console.log(`fetching...${id}`);

    const base = "https://docs.google.com";
    const post = `document/d/${id}/export?format=txt`;
    const url = `${base}/${post}`;

    try {
        const response = await fetch(url);
        const text = await response.text();
        console.log(text);
        const parsed = require("archieml").load(text);
        const str = JSON.stringify(parsed);
        return str;
    } catch (err) {
        throw new Error(err);
    }
};

// eslint-disable-next-line unicorn/prefer-top-level-await
(async () => {
    try {
        const str = await fetchGoogle(config.id);

        const file = `${config.filepath}`;
        require("fs").writeFileSync(file, str);
    } catch (err) {
        console.log(err);
    }
})();
