pubKey = new solanaWeb3.PublicKey('GxmVrjJCHvoC3fJfoq6jAckxhauhzs7x25fuXZAUd8Hu');
connection = new solanaWeb3.Connection(solanaWeb3.clusterApiUrl('mainnet-beta'));

async function refresh() {
    let balance = await connection.getBalance(pubKey);
    balance *= 1e-9;
    balance -= 0.064995;
    balance += 0.035;

    let volume = 20 * balance / 0.27;
    
    document.getElementById('volume-div').innerText=`Volume: ${volume} SOL`
    document.getElementById('royalties-div').innerText=`Royalties: ${volume / 20 * 0.9} SOL`
}

window.addEventListener('load', refresh());
setInterval(refresh, 5000);