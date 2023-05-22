import { styled } from "styled-components";
import Form from "./Form";

function UserForm() {
  return (
    <FormWrapper>
      <h1>Add User</h1>
      <Form />
    </FormWrapper>
  );
}

const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  column-gap: 5rem;
  padding: 1rem;
  background: ${({ theme }) => theme.colors.variant_1};

  h1 {
    padding-top: 1.4rem;
  }
`;

export default UserForm;
