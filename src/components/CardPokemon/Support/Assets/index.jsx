import Bug from "./Bug.svg";
import Dark from "./Dark.svg";
import Dragon from "./Dragon.svg";
import Eletric from "./Eletric.svg";
import Fairy from "./Fairy.svg";
import Fighting from "./Fighting.svg";
import Flying from "./Flying.svg";
import Fire from "./Fire.svg";
import Ghost from "./Ghost.svg";
import Grass from "./Grass.svg";
import Ground from "./Ground.svg";
import Ice from "./Ice.svg";
import Normal from "./Normal.svg";
import Poison from "./Poison.svg";
import Psychic from "./Psychic.svg";
import Rock from "./Rock.svg";
import Steel from "./Steel.svg";
import Water from "./Water.svg";

export const typesImage = [
  Bug,
  Dark,
  Dragon,
  Eletric,
  Fairy,
  Fighting,
  Flying,
  Fire,
  Ghost,
  Grass,
  Ground,
  Ice,
  Normal,
  Poison,
  Psychic,
  Rock,
  Steel,
  Water,
];

export const defineImageType = (type) => {
  switch (type.toLowerCase()) {
    case "grass":
      return typesImage[9];

    case "poison":
      return typesImage[13];

    case "fire":
      return typesImage[7];

    case "flying":
      return typesImage[6];

    case "water":
      return typesImage[17];

    case "bug":
      return typesImage[0];

    case "normal":
      return typesImage[12];

    case "dark":
      return typesImage[1];

    case "dragon":
      return typesImage[2];

    case "electric":
      return typesImage[3];

    case "fairy":
      return typesImage[4];

    case "fighting":
      return typesImage[5];

    case "ghost":
      return typesImage[8];

    case "ground":
      return typesImage[10];

    case "ice":
      return typesImage[11];

    case "psychic":
      return typesImage[14];

    case "rock":
      return typesImage[15];

    case "steel":
      return typesImage[16];

    default:
      return typesImage[0];
  }
};