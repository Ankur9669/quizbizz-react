import Axios from "axios";

const postApi = async (url, body, isAuthRequired) => {
  const token = localStorage.getItem("token");
  try {
    const response = await Axios.post(url, body, {
      headers: {
        authorization: isAuthRequired ? token : "",
      },
    });

    return {
      data: response.data,
      statusCode: response.status,
      success: true,
      message: "Api Request Successfull",
    };
  } catch (e) {
    console.log(e);
    return {
      data: "",
      success: false,
      statusCode: e.status,
      message: `SomeThing went wrong ${e}`,
    };
  }
};

export { postApi };
