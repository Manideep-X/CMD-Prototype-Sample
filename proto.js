async function main() {

    let str = ["Initialising Prototype.exe", "Reading your Files", "Password files Detected", "Sending all passwords and personal files to server", "Cleaning up", "Done"]

    for (const i of str) {
        let strText = document.getElementById("space").lastElementChild

        setInterval(() => {
            strText.innerHTML += "."
            if (strText.textContent.substring(strText.textContent.length - 4) === '....') {
                strText.textContent = strText.textContent.substring(0, strText.textContent.length - 3)
            }
        }, 300)
        await display(i);
    }
}

async function display(text) {
    await justWait();
    html = `<span class="span">${text}</span>`
    document.getElementById('space').innerHTML += html;
}

function justWait() {
    return new Promise((resolve, reject) => {
        let timer = Math.random() * 6000 + 1000;
        setTimeout(() => {
            resolve();
        }, timer)
        console.log(timer);
    })
}