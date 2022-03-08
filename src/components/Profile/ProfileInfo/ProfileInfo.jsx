import React from "react";
import classes from "./ProfileInfo.module.css";

const ProfileInfo = () => {
  return (
    <div>
      <div className={classes.img}>
        <img src="https://images.ctfassets.net/hrltx12pl8hq/7yQR5uJhwEkRfjwMFJ7bUK/dc52a0913e8ff8b5c276177890eb0129/offset_comp_772626-opt.jpg?fit=fill&w=800&h=300"></img>
      </div>
      <div className={classes.descriptionBlock}>
        <img src="http://www.esa.int/var/esa/storage/images/esa_multimedia/images/2003/10/soho_image_28_october_2003/10098404-2-eng-GB/SOHO_image_28_October_2003_node_full_image_2.jpg"></img>
        <div className={classes.descript}>description</div>
      </div>
    </div>
  );
};

export default ProfileInfo;
