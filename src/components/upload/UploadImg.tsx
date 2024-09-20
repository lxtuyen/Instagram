import { useState } from "react";
import { PlusOutlined } from "@ant-design/icons";
import { Image, Upload } from "antd";
import { toast } from "sonner";
import type { UploadRequestOption } from "rc-upload/lib/interface";
import { LoadingOutlined } from "@ant-design/icons";
import { Flex, Spin } from "antd";
import { uploadImage } from "@/utils/upload";

export default function UploadImg() {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [fileList, setFileList] = useState<string[]>(["https://res.cloudinary.com/multi-library/image/upload/v1726243364/yafcabvazwhhd0f6getr.png"]);

  const handleCustomRequest = async (options: UploadRequestOption) => {
    try {
      const url = await uploadImage(options);
      setIsLoading(true);
      if (url) {
        setFileList((prevList) => [...prevList, url]);
        setIsLoading(false);
        toast.success("Upload thành công");
      }
    } catch (error) {
      setIsLoading(false);
      toast.error("Upload thất bại");
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
