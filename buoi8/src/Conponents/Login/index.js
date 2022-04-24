import React from "react";
import { useState } from "react";
import Input from "../../comons/Input";
import Text from "../../comons/Text";
import Button from "../../comons/Button";
import { useForm } from "react-hook-form";
import "../../App.css";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const schema = yup
  .object()
  .shape({
    fullName: yup.string().required().min(3, "pải có ít nhất 3 ký tự"),
    age: yup.number().required().min(18, "bạn phải từ 18 tuổi trở lên"),
  })
  .required();

const Login = () => {
  const [name, setName] = useState("");

  const [age, setAge] = useState("");
  const [load, setLoad] = useState("");

  const {
    register,
    handleSubmit,
    setValue,
    getValues,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const values = getValues();

  const onSubmit = (data) => {
    setLoad("loading....");
    setTimeout(() => {
      setValue("fullName", '');
      setValue("age", '');

      setLoad("");
    }, 1000);

    // console.log(data);
  };

  return (
    <div className="App">
      <h1>{load}</h1>
      <Text text={"fullName: " + " " + values.fullName} />
      <Text text={"age: " + " " + values.age} />
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="firsName">
          <label>First Name</label>
          <input {...register("fullName")} placeholder="fullName" />
          <p>{errors.fullName?.message}</p>
        </div>
        <div className="age">
          <label>Age</label>
          <input {...register("age")} placeholder="Age" />
          <p>{errors.age?.message}</p>
        </div>
        <input type="submit" />
      </form>
    </div>

    // function handleSubmit(data) {
    //     if (name && age) {

    //         setLoad('loading....')
    //         setTimeout(() => {
    //             setAge('')
    //             setName('')
    //             setLoad('')
    //         }, 1000)
    //     } else {
    //         alert('vui lòng nhập đầy đủ ueserName and age')
    //     }
    //     console.log(data.json());
    // }

    //   const {
    //     register,
    //     handleSubmit,
    //     watch,
    //     formState: { errors },
    //   } = useForm();
    // <div className="App">
    //     <form onSubmit={handleSubmit(onSubmit)}>
    //         <Input
    //             type='text'
    //             // typeValue={name}
    //             phaceholderText='userName'
    //             // handleOnChane={(e) => {
    //             //     setName(e.target.value)
    //             //     console.log(name);
    //             // }}
    //             {...register("firstName", {
    //                 required: true,
    //                 maxLength: 20,
    //                 pattern: /^[A-Za-z]+$/i
    //             })}

    //         />
    //         {errors?.firstName?.type === "required" && <p>This field is required</p>}
    //         {errors?.firstName?.type === "maxLength" && (
    //             <p>First name cannot exceed 20 characters</p>
    //         )}
    //         <Input
    //             type='text'
    //             // typeValue={age}

    //             phaceholderText='age'
    //             // handleOnChane={(e) => {
    //             //     setAge(e.target.value)
    //             //     console.log(age);

    //             // }}
    //             {...register("age", { min: 18, max: 99 })}
    //         />
    //         {errors.age && (
    //             <p>You Must be older then 18 and younger then 99 years old</p>
    //         )}

    //         <Text

    //             text={'userName: ' + name}
    //         />
    //         <Text

    //             text={'age: ' + age}

    //         />
    //         <Text text={load} />

    //         <Button type="submit" nameButton='Remove' />

    //         {/* <h1>hello :{name}</h1>
    //     <h2>Age: {age}</h2>
    //     <h2>{load}</h2> */}
    //         {/* <button onClick={() => {
    //         if (name && age != "") {

    //             setLoad('loading....')
    //             setTimeout(() => {
    //                 setAge('')
    //                 setName('')
    //                 setLoad('')
    //             }, 1000)
    //         } else {
    //             alert('vui lòng nhập đầy đủ ueserName and age')
    //         }
    //     }}
    //     >Remove</button> */}

    //     </form>
    // </div>
  );
};

export default Login;
