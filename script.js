pubKey = new solanaWeb3.PublicKey('4PFAeWd5Fq1TkX2jQeohqjwr4cj3LBoLy64omRPBoUj9');
connection = new solanaWeb3.Connection(solanaWeb3.clusterApiUrl('mainnet-beta'));

async function refresh() {
    let balance = await connection.getBalance(pubKey);
    balance *= 1e-9;
    balance -= 0.14

    let tokensMinted = Math.round(42 + balance / 0.75);
    let percentMinted = 100 * tokensMinted / 4914;
    percentMinted = Math.round(percentMinted * 1000) / 1000
    
    let myDiv = document.getElementById('my-div')
    myDiv.innerText=`Tokens Minted: ${tokensMinted}/4914 [${percentMinted}%], remains: ${4914-tokensMinted}, balance: ${balance} SOL.`
}

window.addEventListener('load', refresh());
setInterval(refresh, 5000);