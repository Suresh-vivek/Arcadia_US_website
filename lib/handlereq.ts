import axios from "axios";

export const handlePostRequest = async (data: any) => {
  try {
    const response = await axios.post('/api/contact', data);
    console.log(response.data);
  } catch (error) {
    console.log(error);
  }
};
