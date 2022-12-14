import { baseUrl } from "./Auth";

export const PlaceBetApi = async (item, successCallback) => {
  console.log("calling api");
  var myHeaders = new Headers();
  const user = localStorage.getItem("betting_user");
  if (user == null || user == "null") {
    // alert("Log in to place bid");
    return successCallback({
      status: false,
      message: "Log in to place the bid",
    });
  }
  const userData = JSON.parse(user);
  const token = userData.usertoken;
  const { bearer } = userData;
  console.log(item.matchId, "<<<<item match id");
  // console.log(user);
  const payloadData = {
    token,
    game_id: item.matchId,
    amount: item.amount,
    odd_type: item.odd_type,
    multiply_value: item.odds,
    decision: item.decision,
    status: "running",
    team_id: item.team_id,
  };
  console.log(payloadData, "<<< payload while bid");
  // return null;
  myHeaders.append("Authorization", "Bearer " + bearer);

  var formdata = new FormData();
  formdata.append("token", token);
  formdata.append("game_id", payloadData.game_id);
  formdata.append("team_id", payloadData.team_id);
  formdata.append("amount", payloadData.amount);
  formdata.append("multiply_value", payloadData.multiply_value);
  formdata.append("odd_type", payloadData.odd_type);
  formdata.append("decision", payloadData.decision);
  formdata.append("status", "running");

  var requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: formdata,
    redirect: "follow",
  };

  fetch(baseUrl + "/Bet", requestOptions)
    .then((response) => response.text())
    .then((result) => successCallback(JSON.parse(result)))
    .catch((error) => {
      successCallback({ status: false, msg: "Unable to place bid" });
    });
};

export const getUserDetail = async (successCallback) => {
  // WARNING: For POST requests, body is set to null by browsers.
  var myHeaders = new Headers();
  const user = localStorage.getItem("betting_user");
  const userData = JSON.parse(user);
  const token = userData.usertoken;
  const { bearer } = userData;

  myHeaders.append("Authorization", "Bearer " + bearer);
  var formdata = new FormData();
  formdata.append("token", token);

  var requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: formdata,
    redirect: "follow",
  };

  fetch(
    "https://client.drazs.com/backend/public/api/getUser?user_type=user",
    requestOptions
  )
    .then((response) => response.text())
    .then((result) => {
      const data = JSON.parse(result);
      console.log(data, "<<<<user details");
      successCallback(data);
    })
    .catch((error) => console.log("error", error));
};

export const changePasswordApi = async (password, successCallback) => {
  const user = localStorage.getItem("betting_user");
  console.log(user, "<<<<<userwhilelogin");
  const userData = JSON.parse(user);
  const token = userData.usertoken;
  console.log(userData, "<<<user");
  var myHeaders = new Headers();
  myHeaders.append("Authorization", "Bearer " + userData.bearer);

  var formdata = new FormData();
  console.log(userData.usertoken, userData.email, password, userData.bearer);
  formdata.append("token", userData.usertoken);
  formdata.append("email", userData.email);
  formdata.append("password", password);
  formdata.append("user_type", "user");

  var requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: formdata,
    redirect: "follow",
  };

  fetch(
    "https://client.drazs.com/backend/public/api/updateUser",
    requestOptions
  )
    .then((response) => response.text())
    .then((result) => successCallback(result))
    .catch((error) => console.log("error", error));
};

export const getDataSavedInDb = (payload, successCallback) => {
  try {
    var myHeaders = new Headers();
    const user = localStorage.getItem("betting_user");
    const userData = JSON.parse(user);
    const token = userData.usertoken;
    myHeaders.append("Authorization", "Bearer " + userData.bearer);

    var formdata = new FormData();
    formdata.append("token", token);
    formdata.append("game_id", payload.matchId);
    // formdata.append(
    //   "game_id",
    //   "/sport/football/japanese-j-league/tosu-v-kashima/31736038"
    // );

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: formdata,
      redirect: "follow",
    };

    fetch(
      "https://client.drazs.com/backend/public/api/getmatch",
      requestOptions
    )
      .then((response) => response.text())
      .then((result) => {
        // console.log(result, "<<<<<resultatpar");
        const parseIt = JSON.parse(result);
        const parseData = JSON.parse(parseIt.game_data);
        console.log(parseData, "<<<parse it data");
        successCallback(parseData);
      })
      .catch((error) => {
        successCallback([]);
        console.log("error", error);
      });
  } catch (e) {
    console.log(e);
  }
};

export const amountWidraw = async (amount, successCallBack) => {
  try {
    var myHeaders = new Headers();
    const user = localStorage.getItem("betting_user");
    const userData = JSON.parse(user);
    const token = userData.usertoken;
    myHeaders.append("Authorization", "Bearer " + userData.bearer);

    var formdata = new FormData();
    formdata.append("token", token);
    formdata.append("amount", amount);

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: formdata,
      redirect: "follow",
    };

    fetch(
      "https://client.drazs.com/backend/public/api/addwithdrawl",
      requestOptions
    )
      .then((response) => response.text())
      .then((result) => {
        console.log(result);
        successCallBack(result);
      })
      .catch((error) => console.log("error", error));
  } catch (e) {
    console.log(e);
  }
};

export const earnAmount = async (amount, id, successCallBack) => {
  var myHeaders = new Headers();
  const user = localStorage.getItem("betting_user");
  const userData = JSON.parse(user);
  const token = userData.usertoken;
  myHeaders.append("Authorization", "Bearer " + userData.bearer);
  var formdata = new FormData();
  formdata.append("token", token);

  formdata.append("amount", amount);
  formdata.append("id", id);

  var requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: formdata,
    redirect: "follow",
  };

  fetch(
    "https://client.drazs.com/backend/public/api/earnamount",
    requestOptions
  )
    .then((response) => response.text())
    .then((result) => {
      successCallBack(result);
      console.log(result);
    })
    .catch((error) => console.log("error", error));
};

export const withdrawApi = async (amount, successCallBack) => {
  var myHeaders = new Headers();
  const user = localStorage.getItem("betting_user");
  const userData = JSON.parse(user);
  const token = userData.usertoken;
  myHeaders.append("Authorization", "Bearer " + userData.bearer);
  var formdata = new FormData();
  formdata.append("token", token);
  formdata.append("amount", amount);

  var requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: formdata,
    redirect: "follow",
  };

  fetch(
    "https://client.drazs.com/backend/public/api/addwithdrawl",
    requestOptions
  )
    .then((response) => response.text())
    .then((result) => {
      successCallBack(JSON.parse(result));
      console.log(result, "<<<<withdrawl");
    })
    .catch((error) => console.log("error", error));
};

export const getSocket = () => {
  var requestOptions = {
    method: "GET",
    redirect: "follow",
  };

  fetch(
    "https://api.thesports.com/v1/cricket/odds/live?user=omrahul&secret=110a77c9f841e6c6e683045d5d77f4b9",
    requestOptions
  )
    .then((response) => response.text())
    .then((result) => console.log(result))
    .catch((error) => console.log("error", error));
};
