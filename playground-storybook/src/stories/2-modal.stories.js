import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import {ModalWithButton} from "../components/ModalWithButton/ModalWithButton";
import {WonderfullForm} from "../components/WonderfullForm/WonderfullForm";
import {WonderfullFormContext} from "../components/WonderfullForm/WonderfullForm.context";
import {NameDisplay} from "../components/NameDisplay/NameDisplay";

export default {
  title: 'Modal',
};

export const modal = () => {
  const [name, setName] = useState('');

  return (
      <>
        <WonderfullFormContext.Provider value={{name, setName}}>
          <ModalWithButton title={"Titre de gueudin"}>
            <WonderfullForm/>
          </ModalWithButton>
          <NameDisplay />
        </WonderfullFormContext.Provider>

      </>
  );
};

