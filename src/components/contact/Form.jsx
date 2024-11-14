"use client";
import { useForm } from "react-hook-form";

export default function Form() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  console.log(errors);

  return (
    <form
      className="max-w-md w-full flex flex-col items-center justify-center space-y-4"
      onSubmit={handleSubmit(onSubmit)}
    >
      <input
        type="text"
        placeholder="name"
        {...register("name", { required: true })}
      />
      <input
        type="email"
        placeholder="Email"
        {...register("Email", { required: true })}
      />
      <textarea
        type="textarea"
        placeholder="message"
        {...register("message", { required: true })}
      />

      <input type="submit" />
    </form>
  );
}
