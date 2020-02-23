async function submit(){
    postToGoogle();
    
    await new Promise(r => setTimeout(r, 125));
    document.getElementById("sign_here").remove();
    init();
}