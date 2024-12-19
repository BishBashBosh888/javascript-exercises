const repeatString = function(word, number) {
    if(number < 0){
        return 'ERROR';
    }else{
        i = 0
        temp = "";
        while(i < number){
            temp = temp + word;
            i++;
        }
        return temp;
    }
};

// Do not edit below this line
module.exports = repeatString;
