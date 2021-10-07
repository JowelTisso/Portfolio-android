import React from "react";

function CardInfo(props) {
  return (
    <div className=" d-flex justify-content-center flex-column j-card-info text-wrap ">
      <div className="mt-5">
        <p className="j-card-title">{props.title}</p>
        <p className="j-card-sub-title">{props.subTitle}</p>
        <p className="j-card-sub-title">{props.subTitle2}</p>
        <p className="j-card-about">{props.stack}</p>
        <p className="j-card-about text-break ">{props.about1}</p>
      </div>
      <div className="d-flex mt-auto h-25">
        <a
          className=" flex-fill"
          href={props.playstoreLink}
          target="_blank"
          rel="noopener noreferrer"
        >
          <p className="link-color link">Play Store</p>
        </a>
        {props.githubLink && (
          <a
            className=" flex-fill"
            href={props.githubLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            <p className="link-color link">Github</p>
          </a>
        )}
      </div>
    </div>
  );
}

export default CardInfo;
