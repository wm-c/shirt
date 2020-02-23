async function submit(){
    postToGoogle();
    
    await new Promise(r => setTimeout(r, 250));
    document.getElementById("sign_here").remove();
    init();
}