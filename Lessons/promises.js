const getDataFromForm = () => {
    const requestObject = {
        firstName: "Bruce",
        lastName: "Lee",
        categories: ["nerdy"]
    };
    return requestObject;
};

const buildRequestUrl = (requestData) => {
    return `http://api.icndb.com/jokes/random?firstName=${requestData.firstName}&
//     lastName=${requestData.lastName}&limitTo=[${requestData.categories}]`;
};

const requestJoke = async (url) => {
    const response = await fetch(url);
    const jsonResponse = await response.json();
    const joke = jsonResponse.value.joke;
    // console.log(joke);
    postJokeToPage(joke);
};

const postJokeToPage = (joke) => {
    console.log(joke);
};

const processJokeRequest = async () => {
    const reqData = getDataFromForm();
    const reqUrl = buildRequestUrl(reqData);
    await requestJoke(reqUrl);
    console.log("finished!");
};

processJokeRequest();