"use strict";
var nodes = function() {};
nodes.customNode = require("./nodeHelpers/customNode");
nodes.infuraNode = require("./nodeHelpers/infura");
nodes.metamaskNode = require("./nodeHelpers/metamask");
nodes.nodeTypes = {
	ETR: "ETR",
	ETH: "ETH",
	ETC: "ETC",
	Ropsten: "ROPSTEN ETH",
	Kovan: "KOVAN ETH",
	Rinkeby: "RINKEBY ETH",
	EXP: "EXP",
	UBQ: "UBQ",
	POA: "POA",
	TOMO: "TOMO",
	ELLA: "ELLA",
	ETSC: "ETSC",
	EGEM: "EGEM",
	CLO: "CLO",
	MUSIC: "MUSIC",
	GO: "GO",
	EOSC: "EOSC",
	AKROMA: "AKROMA",
	ESN: "ESN",
	PIRL: "PIRL",
	ETHO: "ETHO",
	ATH: "ATH",
	Custom: "CUSTOM ETH"
};
nodes.ensNodeTypes = [nodes.nodeTypes.ETH, nodes.nodeTypes.Ropsten];
nodes.ensSubNodeTypes = [nodes.nodeTypes.ETH];
nodes.domainsaleNodeTypes = [nodes.nodeTypes.ETH, nodes.nodeTypes.Ropsten];
nodes.customNodeObj = {
	name: "CUS",
	blockExplorerTX: "",
	blockExplorerAddr: "",
	type: nodes.nodeTypes.Custom,
	eip155: false,
	chainId: "",
	tokenList: [],
	abiList: [],
	service: "Custom",
	lib: null
};
nodes.nodeList = {
	etr_mainnet: {
		name: "ETR",
		blockExplorerTX: "https://explorer.etherus.org/#/tx/[[txHash]]",
		blockExplorerAddr: "https://explorer.etherus.org/#/address/[[address]]",
		type: nodes.nodeTypes.ETR,
		eip155: true,
		chainId: 32019,
		tokenList: require("./tokens/etrTokens.json"),
		abiList: require("./abiDefinitions/etrAbi.json"),
		service: "etherus.org",
		lib: new nodes.customNode("https://rpc.etherus.org", "")
	},
};

nodes.ethPrice = require("./nodeHelpers/ethPrice");
module.exports = nodes;
