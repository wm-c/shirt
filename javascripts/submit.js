async function submit(){
    postToGoogle();
    
    await new Promise(r => setTimeout(r, 500));
    document.getElementById("sign_here").remove();
    init();
}