import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

type SignUpFormData = {
  username: string;
  email: string;
  password: string;
};

const SignUpSchema = yup.object().shape({
  username: yup
    .string()
    .min(4, "Username must be at lest 4 characters")
    .required("Username is required"),
  email: yup.string().email("Invalid email").required("Email is required"),
  password: yup
    .string()
    .min(6, "Password must be at least 6 characters")
    .max(20, "Password must be at most 20 characters")
    .required("Password is required"),
});

const SignUP = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<SignUpFormData>({
    resolver: yupResolver(SignUpSchema),
  });

  const onSubmit = (data: SignUpFormData) => {
    console.log(data);
  };

  return (
    <div className="wrapper">
      <div className="container">
        <div>
          <h2 className="text-3xl font-bold mb-4">Create account</h2>
        </div>
        <form action="" onSubmit={handleSubmit(onSubmit)}>
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              placeholder="Username"
              {...register("username")}
            />
            {errors.username && (
              <p className="text-red-300">{errors.username.message}</p>
            )}
          </div>
          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <input
              type="text"
              placeholder="Email address"
              {...register("email")}
            />
            {errors.email && (
              <p className="text-red-300">{errors.email.message}</p>
            )}
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              placeholder="Password"
              {...register("password")}
            />
            {errors.password && (
              <p className="text-red-300">{errors.password.message}</p>
            )}
          </div>
          <button>Sign Up</button>
        </form>
        <div className="mt-4">
          <p>
            Already have an account? <a href="/login">Login here</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUP;
