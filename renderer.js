const information = document.getElementById('info')
information.innerText = `This app is using Chrome (v${globalThis.versions.chrome()}), Node.js (v${globalThis.versions.node()}), and Electron (v${globalThis.versions.electron()})`

const func = async () => {
    const response = await globalThis.versions.ping()
    console.log(response) // prints out 'pong'
}

func()
