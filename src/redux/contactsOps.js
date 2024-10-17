import { createAsyncThunk } from "@reduxjs/toolkit";
import api from "src/services/api";

export const fetchContacts = createAsyncThunk(
  "contacts/fetchAll",
  async (_, { rejectWithValue }) => {
    try {
      const data = await api.getContacts();
      return data;
    } catch (e) {
      return rejectWithValue(e.message);
    }
  }
);

export const addContact = createAsyncThunk(
  "contacts/addContact",
  async (contact, { rejectWithValue }) => {
    try {
      const data = await api.createContact(contact);
      return data;
    } catch (e) {
      return rejectWithValue(e.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  "contacts/deleteContact",
  async (id, { rejectWithValue }) => {
    try {
      const data = await api.removeContact(id);
      return data;
    } catch (e) {
      return rejectWithValue(e.message);
    }
  }
);

export default { fetchContacts, addContact, deleteContact };
