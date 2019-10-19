import React, {useContext} from "react";
import {Form, FormGroup, Input, Label} from "reactstrap";
import {WonderfullFormContext} from "./WonderfullForm.context";

export const WonderfullForm = () => {
    const context = useContext(WonderfullFormContext);
    const onNameChanged = (event) => context.setName(event.target.value);

    return (
        <Form>
            <FormGroup>
                <Label for="name">Hey! Comment toutoupèl ?</Label>
                <Input type="text" onChange={onNameChanged} value={context.name} name="name" id="name" placeholder="Votre nom" />
            </FormGroup>
        </Form>
    );
};
