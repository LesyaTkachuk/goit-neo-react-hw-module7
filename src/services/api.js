import axios from "axios";

axios.defaults.baseURL = "https://671166034eca2acdb5f4bb43.mockapi.io/";

const getContacts = async () => {
  const { data } = await axios.get("contacts");
  return data;
};

const createContact = async (contact) => {
  const { data } = await axios.post("contacts", contact);
  return data;
};

const removeContact = async (id) => {
  const { data } = await axios.delete(`contacts/${id}`);
  return data;
};

export default { getContacts, createContact, removeContact };
