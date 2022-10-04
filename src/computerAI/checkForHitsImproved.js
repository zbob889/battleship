import { converter } from "../convertLettersAndNumbers";
import { players } from "../players";
import randomMove from "./randomMove";
import adjacentMove from './adjacentMove';
import inARowMove from './inARowMove';
import bundlingMove from './bundlingMove';
import { moveTests } from "./moveTests";

export default function checkForHitsImproved(){

    if(moveTests.randomTest() == true){
        randomMove();
    }else if(moveTests.adjacentTest() == true){
        adjacentMove();
    }else if(moveTests.inARowTest() == true){
        inARowMove();
    }else if(moveTests.bundlingTest() == true){
        bundlingMove();
    };
};