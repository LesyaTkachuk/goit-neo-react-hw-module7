import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-hot-toast";
import { FaPhoneVolume } from "react-icons/fa";

import { fetchContacts } from "src/redux/contactsOps";

import ContactForm from "./ContactForm";
import ContactList from "./ContactList";
import SearchBox from "./SearchBox";
import Loader from "./Loader";
import Toaster from "./Toaster";

import "./App.css";
import { selectError, selectIsLoading } from "src/redux/selectors";

function App() {
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, []);

  useEffect(() => {
    if (error) {
      toast.error(error);
    }
  }, [error]);

  return (
    <>
      <div className="upper-container">
        <div className="container">
          <h1>
            <FaPhoneVolume className={"phonebook-logo"} />
            Phonebook
          </h1>
          <ContactForm />
          <SearchBox />
        </div>
        {isLoading && !error && <Loader />}
        <ContactList />
      </div>
      <Toaster />
    </>
  );
}

export default App;
