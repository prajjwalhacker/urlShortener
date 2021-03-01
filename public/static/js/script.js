
document.getElementById('btn').addEventListener('click', () => {
    ///console.log("hello");
    if (document.getElementById("long-url").value != "") {
        const request = new Request("/api/longurl", {
            method : 'POST',
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
            body: JSON.stringify({
                longurl: document.getElementById("long-url").value
            })
        })
        fetch(request).then(res => res.json())
        .then(res => document.getElementById("short-url").value = `${document.location.origin}/u/${res.id}`);
    }
});

document.getElementById("cpy").onclick = function(){
    document.getElementById("short-url").select();
    document.execCommand('copy');
}



