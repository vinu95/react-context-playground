import { useForm } from "react-hook-form";
import { styled } from "styled-components";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useTeams } from "../../Contexts/UserContext";
import { useId, useRef } from "react";

const validationSchema = yup
  .object({
    id: yup.string(),
    name: yup.string().required("You must enter your name").max(30),
    username: yup.string().required("You must enter your username").max(30),
    email: yup
      .string()
      .email()
      .required("You must enter your email address")
      .max(30),
    companyName: yup
      .string()
      .required("You must enter your company name")
      .max(30),
    city: yup.string().required("You must enter your city name").max(30),
  })
  .required();

type FormData = yup.InferType<typeof validationSchema>;

function Form() {
  const id = useId();
  const formRef = useRef<HTMLFormElement>(null);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({ resolver: yupResolver(validationSchema) });
  const { addUser } = useTeams();

  const onSubmit = (data: FormData) => {
    addUser({
      ...data,
      address: {
        city: data.city,
      },
      company: {
        name: data.companyName,
      },
      id,
    });
    reset();
    alert("User Added to the team");
  };

  return (
    <FormWrapper
      onSubmit={handleSubmit(onSubmit)}
      aria-label="signup form"
      ref={formRef}
    >
      <FormGroup>
        <label htmlFor="name-input-field">Name</label>
        <input
          type="text"
          id="name-input-field"
          aria-invalid={errors.name ? "true" : "false"}
          aria-required="true"
          aria-label="Name"
          {...register("name")}
        />
      </FormGroup>
      {errors?.name && (
        <ErrorSection role="alert">
          {errors?.name && errors?.name.message}
        </ErrorSection>
      )}
      <FormGroup>
        <label htmlFor="username-input-field">User Name </label>
        <input
          type="text"
          id="username-input-field"
          aria-invalid={errors.username ? "true" : "false"}
          aria-required="true"
          {...register("username")}
        />
      </FormGroup>
      {errors?.username && (
        <ErrorSection role="alert">
          {errors?.username && errors?.username.message}
        </ErrorSection>
      )}
      <FormGroup>
        <label htmlFor="email-input-field">Email </label>
        <input
          type="email"
          id="email-input-field"
          aria-invalid={errors.email ? "true" : "false"}
          aria-required="true"
          {...register("email", {
            required: true,
            pattern: /[a-z0-9]+@[a-z]+.[a-z]{2,3}/i,
          })}
        />
      </FormGroup>
      {errors?.email && (
        <ErrorSection role="alert">
          {errors?.email && errors?.email.message}
        </ErrorSection>
      )}
      <FormGroup>
        <label htmlFor="company-input-field">Company Name </label>
        <input
          type="text"
          id="company-input-field"
          aria-invalid={errors.companyName ? "true" : "false"}
          aria-required="true"
          {...register("companyName")}
        />
      </FormGroup>
      {errors?.companyName && (
        <ErrorSection role="alert">
          {errors?.companyName && errors?.companyName.message}
        </ErrorSection>
      )}
      <FormGroup>
        <label htmlFor="city-input-field">City </label>
        <input
          type="text"
          id="city-input-field"
          aria-invalid={errors.city ? "true" : "false"}
          aria-required="true"
          {...register("city")}
        />
      </FormGroup>
      {errors?.city && (
        <ErrorSection role="alert">
          {errors?.city && errors?.city.message}
        </ErrorSection>
      )}
      <button type="submit">Add User</button>
    </FormWrapper>
  );
}

const FormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  padding: 1rem 3rem;

  & button {
    background: ${({ theme }) => theme.colors.variant_3};
    color: ${({ theme }) => theme.colors.text};
    border: none;
    font-size: 1rem;
    cursor: pointer;
    padding: 0.6rem;
    margin: 1.4rem 0rem;

    &:focus {
      border: 1px solid #0a93d2;
    }
  }
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;

  label {
    display: inline-block;
    color: ${({ theme }) => theme.colors.text};
    margin: 1rem 0;
    font-weight: 600;
    &:focus-within {
      color: #0a93d2;
    }
  }
  input {
    display: block;
    border: none;
    border-bottom: 0.125rem solid #5a5858;
    width: 20rem;
    padding: 0.5rem 0;
    background: ${({ theme }) => theme.colors.variant_1};
    color: ${({ theme }) => theme.colors.text};
    font-size: 1rem;
    &:focus {
      border-color: #0a93d2;
    }
  }
`;

const ErrorSection = styled.span`
  padding-top: 0.5rem;
  color: red;
`;

export default Form;
