class base37 {
    private static alphabet: string = "0123456789abcdefghijklmnopqrstuvwxyz_";

    public static encode(inputString: string): string {
        var result: string = "";

        inputString.split('').forEach(char => {
            result += this.alphabet[char.charCodeAt(0) % this.alphabet.length];
        });

        return result;
    };
};

if (typeof module !== "undefined" && module.exports) {
    module.exports = base37;
}