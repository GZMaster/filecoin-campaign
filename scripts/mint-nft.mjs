const CONTRACT_ADDRESS = "0x023Ad7B72eE4d39e853ec5296c1e48C2C775252F";
const META_DATA_URL =
	"ipfs://bafyreihuksvk7dekgyyazwng5sqyxaiveovugy7mzpmnkh77ks2tta356u/metadata.json";

// paste function here
// Function to mint NFT
async function mintNFT(contractAddress, metaDataURL) {
	const ExampleNFT = await ethers.getContractFactory("ExampleNFT");
	const [owner] = await ethers.getSigners();
	await ExampleNFT.attach(contractAddress).mintNFT(owner.address, metaDataURL);
	console.log("NFT minted to: ", owner.address);
}

mintNFT(CONTRACT_ADDRESS, META_DATA_URL)
	.then(() => process.exit(0))
	.catch((error) => {
		console.error(error);
		process.exit(1);
	});
