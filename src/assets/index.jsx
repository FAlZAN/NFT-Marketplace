//DSGN Animal
import dsgnAvatar from "./dsgnAnimal/avatar.svg";
import dsgnSample from "./dsgnAnimal/sample.png";
import dsgnSample1 from "./dsgnAnimal/sample-1.png";
import dsgnSample2 from "./dsgnAnimal/sample-2.png";

//Top Creator Avatar
import TCAvatar from "./avatar/sample.png";
import TCAvatar1 from "./avatar/sample-1.png";
import TCAvatar2 from "./avatar/sample-2.png";
import TCAvatar3 from "./avatar/sample-3.png";
import TCAvatar4 from "./avatar/sample-4.png";
import TCAvatar5 from "./avatar/sample-5.png";
import TCAvatar6 from "./avatar/sample-6.png";
import TCAvatar7 from "./avatar/sample-7.png";

//Categories
import CatgIcon1 from "./categories/icon-1.svg";
import CatgIcon2 from "./categories/icon-2.svg";
import CatgIcon3 from "./categories/icon-3.svg";
import CatgIcon4 from "./categories/icon-4.svg";
import CatgIcon5 from "./categories/icon-5.svg";
import CatgIcon6 from "./categories/icon-6.svg";
import CatgIcon7 from "./categories/icon-7.svg";
import CatgIcon8 from "./categories/icon-8.svg";

import CatgSample1 from "./categories/sample-1.png";
import CatgSample2 from "./categories/sample-2.png";
import CatgSample3 from "./categories/sample-3.png";
import CatgSample4 from "./categories/sample-4.png";
import CatgSample5 from "./categories/sample-5.png";
import CatgSample6 from "./categories/sample-6.png";
import CatgSample7 from "./categories/sample-7.png";
import CatgSample8 from "./categories/sample-8.png";

//Community
import Discord from "./social/DiscordLogo.svg";
import Instgram from "./social/InstagramLogo.svg";
import Twiter from "./social/TwitterLogo.svg";
import Youtube from "./social/YoutubeLogo.svg";

//Nfts
import NFT1 from "./nfts/sample-1.png";
import NFT2 from "./nfts/sample-2.png";
import NFT3 from "./nfts/sample-3.png";

//How it works
import wallet from "./getStarted/wallet.png";
import collection from "./getStarted/collection.png";
import earning from "./getStarted/earning.png";

//Wallet Option
import metamask from "./wallet_option/metamask.svg";
import coinbase from "./wallet_option/coinbase.svg";
import walletConnect from "./wallet_option/wallet-connect.svg";

const DSGN_ANIMAL_NFT = {
  avatar: dsgnAvatar,
  nfts: [dsgnSample, dsgnSample1, dsgnSample2],
};

const TOP_CREATORS = [
  {
    avatar: TCAvatar,
    name: "Keepitreal",
    price: 34.53,
  },
  {
    avatar: TCAvatar1,
    name: "DigiLab",
    price: 34.53,
  },
  {
    avatar: TCAvatar2,
    name: "GravityOne",
    price: 34.53,
  },
  {
    avatar: TCAvatar3,
    name: "Juanie",
    price: 34.53,
  },
  {
    avatar: TCAvatar4,
    name: "BlueWhale",
    price: 34.53,
  },
  {
    avatar: TCAvatar5,
    name: "Mr Fox",
    price: 34.53,
  },
  {
    avatar: TCAvatar6,
    name: "Shroomie",
    price: 34.53,
  },
  {
    avatar: TCAvatar7,
    name: "Robotica",
    price: 34.53,
  },
];

const CATEGORIES = [
  {
    background: CatgSample1,
    icon: CatgIcon1,
    title: "Art",
  },
  {
    background: CatgSample2,
    icon: CatgIcon2,
    title: "Collectibles",
  },
  {
    background: CatgSample3,
    icon: CatgIcon3,
    title: "Music",
  },
  {
    background: CatgSample4,
    icon: CatgIcon4,
    title: "Photography",
  },
  {
    background: CatgSample5,
    icon: CatgIcon5,
    title: "Video",
  },
  {
    background: CatgSample6,
    icon: CatgIcon6,
    title: "Utility",
  },
  {
    background: CatgSample7,
    icon: CatgIcon7,
    title: "Sport",
  },
  {
    background: CatgSample8,
    icon: CatgIcon8,
    title: "Virtual World",
  },
];

const COMMUNITY_LOGO = [Discord, Instgram, Twiter, Youtube];

const NFTS = [
  {
    user: "MoonDancer",
    avatar: TCAvatar,
    nft: NFT1,
    title: "Distant Galaxy",
    price: 1.63,
    highestBid: 0.33,
  },
  {
    user: "NebulaKid",
    avatar: TCAvatar1,
    nft: NFT2,
    title: "Life On Edena",
    price: 1.63,
    highestBid: 0.33,
  },
  {
    user: "SpaceOne",
    avatar: TCAvatar2,
    nft: NFT3,
    title: "AstroFiction",
    price: 1.63,
    highestBid: 0.33,
  },
];

const GET_STARTED = [
  {
    image: wallet,
    title: "Setup Your Wallet",
    desc: "Set up your wallet of choice. Connect it to the NFT market by clicking the wallet icon in the top right corner.",
  },
  {
    image: collection,
    title: "Create Collection",
    desc: "Upload your work and setup your collection. Add a description, social links and floor price.",
  },
  {
    image: earning,
    title: "Start Earning",
    desc: "Choose between auctions and fixed-price listings. Start earning by selling your NFTs or trading others.",
  },
];

const WALLET_OPTION = [
  {
    icon: metamask,
    name: "Metamask",
  },
  {
    icon: walletConnect,
    name: "Wallet Connect",
  },
  {
    icon: coinbase,
    name: "Coin Base",
  },
];

export {
  DSGN_ANIMAL_NFT,
  TOP_CREATORS,
  CATEGORIES,
  COMMUNITY_LOGO,
  NFTS,
  GET_STARTED,
  WALLET_OPTION,
};
