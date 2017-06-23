const functions = {
    convertObjToArray : (obj) => {
        let returnArray = [];
        for (let key in obj){
            returnArray.push(obj[key]);
        }
        return returnArray;
    },
    convertArrayToObj : (arr, identifier) => {
        let returnObj = {};
        for (let i = 0; i < arr.length; i++){
            returnObj[arr[i][identifier]] = arr[i];
        }
        return returnObj
    }
};
export default functions;