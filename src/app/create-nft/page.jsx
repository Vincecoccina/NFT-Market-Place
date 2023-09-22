"use client";
import React, { useCallback, useState, useMemo, useContext } from "react";
import { useRouter } from "next/navigation";
import { useDropzone } from "react-dropzone";
import Image from "next/image";
import Button from "@/components/UIElement/Button";
import images from "../../assets";
import classes from "../../styles/CreateNft.module.css";

const CreateNFT = () => {
  const [fileUrl, setFileUrl] = useState(null);
  const router = useRouter();

  const onDrop = useCallback(() => {
    //Upload Image to the blockchain
  }, []);

  const {
    getRootProps,
    getInputProps,
    isDragActive,
    isDragAccept,
    isDragReject,
  } = useDropzone({
    onDrop,
    accept: "image/*",
    maxSize: 500000,
  });
  const fileStyle = useMemo(() => {
    return classes.inputStyle;
  }, [classes]);

  return (
    <div className={classes.container_createNft}>
      <div className={classes.container_formCreateNft}>
        <h1 className={classes.title_part}>Create New NFT</h1>

        <div className={classes.container_dropzone}>
          <div className={classes.container_btn}>
            <p className={classes.dropzone_title}>Upload File</p>
            <Button onClick={() => router.push("/")}>Créer une image via IA</Button>
          </div>
          <div className={classes.container_input}>
            <div {...getRootProps()} className={fileStyle}>
              <input {...getInputProps()} />
              <div className={classes.container_itemsInput}>
                <p className={classes.dropzone_title}>
                  JPG, PNG, GIF, SVG, WEBM, MP3, MP4. Max 100Mb
                </p>
                <div className={classes.container_imgForm}>
                  <Image src={images.upload} height={150} width={150} />
                </div>
                <p className={classes.dropzone_title}>
                  Glissez votre image ici
                </p>
                <p className={classes.dropzone_title}>
                  ou importez une image d'un dossier
                </p>
              </div>
            </div>
            {fileUrl && (
              <aside>
                <div>
                  <Image src={fileUrl} alt='asset_file'/>
                </div>
              </aside>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateNFT;
