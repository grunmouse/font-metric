import {Font} from './font.js';


export class Arial extends Font {
    bodyHeight() {
        //Проверено для шрифтов 8-16
        var size = this.fontSize(),
                delta = size == 13 ? 3 : 2;
        return size + delta;
    },

    minLineHeight() {
        var size = this.fontSize(),
            delta = size == 14 ? 2 : 3;
        return size + delta;
    },

    capHeight(){
        //Проверено для шрифтов 8-16
        var size = this.fontSize(), delta;
        if(size < 10) {
            delta = -2;
        }
        else if(size < 14) {
            delta = -3;
        }
        else {
            delta = -4;
        }

        return size + delta;
    },

    descent(){
        //Проверено для шрифтов 8-16
        return this.fontSize() < 13 ? 2 : 3;
    },

    ascentOverCap(){
        //Проверено для шрифтов 8-16
        return this.fontSize() < 10 ? 2 : 3;
    }
	
};
