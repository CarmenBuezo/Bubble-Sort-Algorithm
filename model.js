randomNum = [2, 44, 6, 3, 1, 8]

// State function name
function bubbleSort(randomNum) {
    var len = randomNum.length;
    var swapped;
    //To find the length of the array
    for (var i = 0; i < len - 1; i++) {
        swapped = false;
        //Another loop to go through array and compare
        for (var j = 0; j < len - 1; j++) {
            // compare if position 0 greater than position 1
            //swap will equal true
            if (randomNum[j] > randomNum[j + 1]) {
                swapped = true;
                //need hold to store position 0
                var hold = randomNum[j];
                //position 0 in array will no be equal to value in position 1
                randomNum[j] = randomNum[j + 1];
                //now we have the value of position 1 repeated so..
                //we turn the orginal position 1 into the value of position 0
                randomNum[j + 1] = hold;

            }
        }
    }
    return randomNum;
}