const axios = require("axios").default;
const index = {};

//funcion para crear el FormData xd

index.creatFormData = async (data) => {

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

export default index;