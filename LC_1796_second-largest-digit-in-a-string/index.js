var secondHighest = function(s) {
    let digits = s.match(/[0-9]/g);
    if(!digits) return -1
    let first = -1, second = -1;
    for(let num of digits){
        num = Number(num);
        first = Number(first);
        if(num > first){
            second = first;
            first = num
        }else if(num > second  && num < first){
            second = num
        }
    }
    
    return second
    
};