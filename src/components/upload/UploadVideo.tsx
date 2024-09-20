import { Flex, Spin, Upload } from "antd";
import { useState } from "react";
import type { UploadRequestOption } from "rc-upload/lib/interface";
import { toast } from "sonner";
import { LoadingOutlined, InboxOutlined } from "@ant-design/icons";
import { uploadVideo } from "@/utils/upload";

export default function UploadVideo() {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [fileList, setFileList] = useState<string[]>([
    
  ]);

  const { Dragger } = Upload;

  const handleCustomRequest = async (options: UploadRequestOption) => {
    try {
      const url = await uploadVideo(options);
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

  const handleDelete = (index: number) => {
    const updatedFileList = fileList.filter((_, i) => i !== index);
    setFileList(updatedFileList);
  };

  return (
    <>
      {fileList.length >= 1 ? null : (
        <Dragger name="file" customRequest={handleCustomRequest}>
          <p className="ant-upload-drag-icon">
            <InboxOutlined />
          </p>
          <p className="ant-upload-text">
            Click or drag file to this area to upload
          </p>
          <p className="ant-upload-hint">
            Support for a single or bulk upload. Strictly prohibited from
            uploading company data or other banned files.
          </p>
        </Dragger>
      )}

      {fileList.map((imageUrl, index) => (
        <>
          <video key={index} src={imageUrl} autoPlay muted controls />
          <span
            onClick={() => handleDelete(index)}
            className="text-red-500 hover:text-red-600 cursor-pointer font-semibold"
          >
            Xóa
          </span>
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
