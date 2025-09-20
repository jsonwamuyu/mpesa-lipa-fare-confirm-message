import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import * as yup from "yup";

type LoginFormData = {
  username: string;
  password: string;
};

const LoginSchema = yup.object().shape({
  username: yup.string().required("Username is required"),
  password: yup
    .string()
    .min(8, "Password must be min 8 character")
    .required("Password is required"),
});

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>({
    resolver: yupResolver(LoginSchema),
  });

  const onSubmit = (data: LoginFormData) => {
    console.log(data);
  };

  return (
    <div className="wrapper">
      <div className="container">
        <div>
          <h2 className="text-3xl font-bold mb-4">Login</h2>
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

          <button>Login</button>
        </form>
        <div className="mt-4">
          <p>
            Have no account yet? <a href="/signup">Create here</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
