import request from "@/utils/request";
import { Button } from "antd-mobile";
import React from "react";
import styles from "./index.module.less";
const Home = () => {
  const onUpload = (res: any) => {
    // console.log();
    const file = res.target.files[0];
    let formData = new FormData();
    formData.append("file", file);
    let a = [1, 3, 4, 5];
    request({
      url: "/upload",
      method: "post",
      data: formData,
    });
  };

  return (
    <div className={styles.home}>
      <Button
        onClick={() => {
          alert("hello.");
        }}
      >
        Default
      </Button>
      <input type="file" name="filename" onChange={onUpload} />
    </div>
  );
};

export default Home;
