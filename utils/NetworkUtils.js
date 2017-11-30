export default {

    async getBakeSalesDealJsonData(){
        try {
            const responseData = await fetch("https://bakesaleforgood.com/api/deals");
            const responseJson = await responseData.json();
            console.log(responseJson);
            return responseJson;
        } catch (error) {
            console.log("network error " + error);
        }
       
    }

}