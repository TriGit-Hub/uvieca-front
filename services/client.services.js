const axios = require("axios").default;
const service = {};

const createFormData = (data) => {

  const formData = new FormData();

  const keys = Object.keys(data);

  for (let i = 0; i < keys.length; i++) {
    if (keys != "files") {
      formData.append(`${keys[i]}`, data[keys[i]]);
    }
  }

  for (let i = 0; i < data["files"].length; i++) {
    console.log(data["files"][i]);
    formData.append("files", data["files"][i]);
  }

  return formData;

};

service.guardar = async (client) => {
  try {
    const config = {
      headers: {
        "content-type": "multipart/form-data",
      },
    };

    const formData = createFormData(client);

    const newDocumento = await axios.post(
      `${process.env.NEXT_PUBLIC_URL_API}/cliente/crear`,
      formData,
      config
    );

    return newDocumento.data;
  } catch (e) {
    console.log(e);
  }
};

export default service;
