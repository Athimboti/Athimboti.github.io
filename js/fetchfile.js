document.getElementById("fileInput").addEventListener("change" , function(event){
    const file = event.target.files ;
    let logs = [];
    logs.push("<code>type of files</code><br />=> <code>");
    logs.push(typeof files + "<br /><br/>");
    logs.push("<code>files instanceof filesList</code><br />=> <code>");
    logs.push((files instanceof fileslist) + "</code><br />=> <code></code>");
    logs.push("<code>type of files[0]</code><br />=> <code>");
    logs.push(typeof files[0] + "<br /><br />");
    logs.push("<code> files[0] instanceof file</code><br />=> <code>");
    logs.push((file[0] instanceof file) + "</code><br />");

    document.getElementById("logs").innerHTML = logs.join("\n");

}, false
);