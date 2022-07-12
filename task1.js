const getLongestWord = (sentence) =>{
    const punctuationReg = /[.:;,?!"`~[\]{}()<>/@#$%^&*=+_-]/g;
    const word = sentence
	.replaceAll(/\s{2,}/g, ' ')
	.replaceAll(punctuationReg, '')
	.split(' ');

    let currentWord = ' '

    const getVowels = (word) => {
        let vowels = 0;
        for (let i = 0; i < word.length; i++){
            if(word[i] === 'a' || word[i] === 'e' || word[i] === 'i' || word[i] === 'o' || word[i] === 'u' ){
                vowels++;
            }
        }
        return vowels;
    }

    for( let i = 0; i < word.length; i++){
        if(word[i].length > currentWord.length){
            currentWord = word[i]
        }else if (word[i].length  === currentWord.length){
            if(getVowels(word[i]) > getVowels(currentWord)){
                currentWord = word[i]
            }
        }
    }
    return currentWord;
}

