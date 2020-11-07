import React, { FunctionComponent } from "react";
/* components */
import { Upload } from "antd";
/* modules */
import clsx from "classnames";
/* assets */
import { ReactComponent as ImageIcon } from "assets/icons/image.svg";
/* types */
import { UploadDropboxComponentProps } from "./UploadDropbox.types";
/* styles */
import s from "./UploadDropbox.module.scss";

const { Dragger } = Upload;

export const UploadDropbox: FunctionComponent<UploadDropboxComponentProps> = props => {
    const {
        className,
        title = "تصویر را اینجا وِل کنید",
        subTitle = "حداکثر حجم عکس باید 500 کیلوبایت باشد",
        ...restProps
    } = props;

    return (
        <div className={clsx(s.box, `shadow`, className)}>
            <Dragger {...restProps}>
                <ImageIcon />
                <p className={s.title}>{title}</p>
                <p className={s.description}>{subTitle}</p>
            </Dragger>
        </div>
    );
};