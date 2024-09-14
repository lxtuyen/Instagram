import { useState } from "react";
import { PlusOutlined } from "@ant-design/icons";
import { Image, Upload } from "antd";
import { toast } from "sonner";
import type { UploadRequestOption } from "rc-upload/lib/interface";
import { LoadingOutlined } from "@ant-design/icons";
import { Flex, Spin } from "antd";

export default function UploadImg() {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [fileList, setFileList] = useState<string[]>(["https://res.cloudinary.com/multi-library/image/upload/v1726243364/yafcabvazwhhd0f6getr.png"]);

  const handleCustomRequest = async (options: UploadRequestOption) => {
    const { file, onSuccess, onError } = options;
    setIsLoading(true);
    const uploadData = new FormData();
    uploadData.append("file", file);
    uploadData.append("upload_preset", "multiLibrary");
    uploadData.append("upload_name", "");
    try {
      const res = await fetch(
        "https://api.cloudinary.com/v1_1/multi-library/image/upload",
        {
          method: "POST",
          body: uploadData,
        }
      );
      const data = await res.json();
      
      if (data.url) {
        setFileList((prevList) => [...prevList, data.url]);
        onSuccess && onSuccess(data);
        setIsLoading(false);
      } else {
        setIsLoading(false);
        throw new Error("Upload failed");
      }
    } catch (err) {
      setIsLoading(false);
      toast.error("Upload failed");
      onError && onError(err as Error, null);
    }
  };

  const uploadButton = (
    <button style={{ border: 0, background: "none" }} type="button">
      <PlusOutlined />
      <div style={{ marginTop: 8 }}>Upload</div>
    </button>
  );
  
  const handleDelete = (index: number) => {
    const updatedFileList = fileList.filter((_, i) => i !== index);
    setFileList(updatedFileList);
  };


  return (
    <>
      <Upload
        customRequest={handleCustomRequest}
        listType="picture-card"
        showUploadList={false}
      >
        {fileList.length >= 8 ? null : uploadButton}
      </Upload>
      {fileList.map((imageUrl, index) => (
        <>
        <Image key={index} wrapperStyle={{ display: "block" }} src={imageUrl} />
        <span  onClick={() => handleDelete(index)} className="text-red-500 hover:text-red-600 cursor-pointer font-semibold">Xóa</span>
        </>
      ))}
      {isLoading ? (
        <Flex justify="center" align="center" gap="middle">
          <Spin indicator={<LoadingOutlined style={{ fontSize: 48 }} spin />} />
        </Flex>
      ) : null}
    </>
  );
}
