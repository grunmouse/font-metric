
export class Font{
	constructor(font){
		var matches = font.match(/^(\d+)px(?:\/(\d+)px)?\s+([A-Z].*)$/i),
            family = matches[3].toLowerCase(),
                fontCls = this._fonts[family] || this;

        this.fontFamily = family;
        this.fontSize = +matches[1];
        this.lineHeight = +matches[2];
	}
	
    /**
     * Высота очка.
     */
    bodyHeight() {
        return this.fontSize() + 2;
    }

    /**
     * Минимальный рекомендуемый интерлиньяж
     */
    minLineHeight() {
        return this.fontSize() + 3;
    }

    /**
     * Сумма заплечиков.
     */
    shoulders() {
        return this.lineHeight() - this.bodyHeight();
    }

    /**
     * Семейство шрифтов.
     */
    fontFamily() {
        return this._fontFamily;
    }

    /**
     * Размер шрифта.
     */
    fontSize() {
        return this._fontSize;
    }

    /**
     * Высота линии текста.
     */
    lineHeight() {
        return this._lineHeight;
    }

    /**
     * Верхний заплечик.
     */
    shoulderTop() {
        var sum = this.shoulders(), delta = sum && ((sum & 1) || 2);
        return (sum - delta)/2;
    }

    /**
     * Нижний заплечик.
     */
    shoulderBottom() {
        var sum = this.shoulders(), delta = sum && ((sum & 1) || 2);
        return (sum + delta)/2;
    }

    /**
     * Высота прописных буков.
     */
    capHeight() {
        return this.fontSize() - 4;
    }

    /**
     * Верхний вынос над линией прописных
     */
    ascentOverCap() {
        return 3;
    }

    /**
     * Нижний вынос.
     */
    descent() {
        return 3;
    }	
};
