const TKNS = []

function mintNFT (name, eyeColor, shirtType, accessories) {
    const NFT = { 
        "name":  name,
        "eyecolor": eyeColor,
        "shirtType": shirtType,
        "accessories": accessories
    }
    TKNS.push (NFT);
    console.log ("Minted: " + name);
}


function listTKNS() {
    for (let i = 0; i < TKNS.length; i++) {
        console.log("\nID \t\t\t\t" + (i + i));
        console.log("\nName: \t\t\t" + TKNS[i].name);
        console.log("Eye Color: \t\t" + TKNS[i].eyecolor);
        console.log("Shirt Type: \t" + TKNS[i].shirtType);
        console.log("Accessories: \t" + TKNS[i].accessories);
    }

}


function getTotalSupply () {
    console.log("\nTotal Number Of NFTs Minted: " + TKNS.length)

}

mintNFT ("Sheng", "Blue", "Tank Top", "Gold Chains");
mintNFT ("Lark", "Black", "Shirt", "Wrist Watch");
mintNFT ("Flor", "Gray", "Suit", "Bracelet");
mintNFT ("mika", "White", "Sweatshirt", "Ring");
mintNFT ("Gabriel", "Red", "Polo", "Necklace");
listTKNS ();
getTotalSupply