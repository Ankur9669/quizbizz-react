import Axios from "axios";

const fetchApi = async (url, body, isAuthRequired) => {
  const token = localStorage.getItem("token");
  try {
    const response = await Axios.get(
      url,
      { body },
      {
        headers: {
          authorization: isAuthRequired ? token : "",
        },
      }
    );

    return {
      data: response.data,
      statusCode: response.status,
      success: true,
      message: "Api Request Successfull",
    };
  } catch (e) {
    console.error(e);
    return {
      data: "",
      success: false,
      message: `SomeThing went wrong ${e}`,
    };
  }
};

export { fetchApi };
