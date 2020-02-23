async function submit(){
    postToGoogle();
    console.log("here")
    await new Promise(r => setTimeout(r, 250));
    init();
}