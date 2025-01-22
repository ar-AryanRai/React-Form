import React from "react";
import { useForm } from "react-hook-form";

const App = () => {
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors, isSubmitting },
  } = useForm();

  const password = watch("pswd");

  async function onSubmit(data) {
    await new Promise((resolve) =>
      setTimeout(() => {
        console.log("Form is submitted");
        console.log(data);
        reset();
      }, 4000)
    );
  }

  return (
    <div className="bg-[#1c1c1c] text-white min-h-[100vh] flex justify-center items-center">
      <form className="p-10" onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-5">
          <label className="mr-10" htmlFor="name">
            Name:{" "}
          </label>
          <input
            className="bg-gray-100 px-6 py-2 outline-none rounded-lg w-[350px] text-black"
            type="text"
            id="name"
            placeholder="Enter your name"
            {...register("name", {
              required: {
                value: true,
                message: "Name field can't be empty",
              },
              minLength: {
                value: 3,
                message: "Name should be atleast of 3 letters",
              },
            })}
          />
          {errors.name && (
            <div className="text-red-400 mt-4 font-semibold">
              ! {errors.name.message}
            </div>
          )}
        </div>

        <div className="mb-5">
          <label className="mr-10" htmlFor="age">
            Age:{" "}
          </label>
          <input
            className="bg-gray-100 px-6 py-2 outline-none rounded-lg w-[350px] text-black"
            type="text"
            id="age"
            placeholder="Enter your age"
            {...register("age", {
              required: {
                value: true,
                message: "Age field can't be empty",
              },
              pattern: /^[0-9]*$/,
              maxLength: {
                value: 3,
                message: "Age can't be in thousands",
              },
              validate: (value) =>
                value <= 120 || "You are too old to be alive.",
            })}
          />
          {errors.age && (
            <div className="text-red-400 mt-4 font-semibold">
              ! {errors.age.message}
            </div>
          )}
        </div>

        <div className="mb-5">
          <label className="mr-10" htmlFor="email">
            Email:{" "}
          </label>
          <input
            className="bg-gray-100 px-6 py-2 outline-none rounded-lg w-[350px] text-black"
            type="text"
            id="email"
            placeholder="employee@example.com"
            {...register("email", {
              required: {
                value: true,
                message: "Email field can't be empty",
              },
              pattern: {
                value: /\S+@\S+\.\S+/,
                message: "Invalid email id",
              },
            })}
          />
          {errors.email && (
            <div className="text-red-400 mt-4 font-semibold">
              ! {errors.email.message}
            </div>
          )}
        </div>

        <div className="mb-5">
          <label className="mr-10" htmlFor="password">
            Password:{" "}
          </label>
          <input
            className="bg-gray-100 px-6 py-2 outline-none rounded-lg w-[350px] text-black"
            type="password"
            id="password"
            placeholder="Enter your password"
            {...register("pswd", {
              required: {
                value: true,
                message: "Password field can't be empty",
              },
              minLength: {
                value: 6,
                message: "Password should be atleast of 6 letters",
              },
              maxLength: {
                value: 14,
                message: "Password can atmost be of 14 letters",
              },
              pattern: {
                value:
                  /^(?=.*[A-Z])(?=.*[a-z])(?=.*[@#$%^&+=!])(?=.*[0-9]).{6,14}$/,
                message:
                  "Password should cantain atleast 1 digit, 1 Uppercase character, 1 Lowercase character and 1 Special character",
              },
            })}
          />
          {errors.pswd && (
            <div className="text-red-400 mt-4 font-semibold">
              ! {errors.pswd.message}
            </div>
          )}
        </div>

        <div className="mb-5">
          <label className="mr-10" htmlFor="confirmPassword">
            Name:{" "}
          </label>
          <input
            className="bg-gray-100 px-6 py-2 outline-none rounded-lg w-[350px] text-black"
            type="password"
            id="confirmPassword"
            placeholder="Confirm your password"
            {...register("cpswd", {
              required: {
                value: true,
                message: "Confirm Password field can't be empty",
              },
              validate: (value) =>
                value === password || "Password does not match",
            })}
          />
          {errors.cpswd && (
            <div className="text-red-400 mt-4 font-semibold">
              ! {errors.cpswd.message}
            </div>
          )}
        </div>
        <div className="flex justify-center">
          <button
            className="bg-green-500 rounded-full px-6 py-2 font-semibold active:scale-90"
            type="submit"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Signing Up" : "Sign Up"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default App;
