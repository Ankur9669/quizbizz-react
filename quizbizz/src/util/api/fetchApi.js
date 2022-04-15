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
      success: true,
      message: "Api Request Successfull",
    };
  } catch (e) {
    console.log(e);
    return {
      data: "",
      success: false,
      message: `SomeThing went wrong ${e}`,
    };
  }
};

export { fetchApi };
