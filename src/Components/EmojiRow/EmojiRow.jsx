import React from "react";

const EmojiRow = ({ symbol, title }) => {
  const copyToClipboard = ({ target: { id } }) => {
    let copyEmoji = document.getElementById(id);
    copyEmoji.select();
    // copyEmoji.setSelectionRannge(0, 99999);
    navigator.clipboard.writeText(copyEmoji.value);
    alert("Copied text to clipBoard: " + copyEmoji.value);
  };

  return (
    <div cursor="pointer" className="emoji-row-parent">
      <div className="emoji-row-wrapper">
        <input
          id={title}
          value={symbol}
          readOnly
          onClick={copyToClipboard}
        ></input>
        <div>{title}</div>
      </div>
      <div>Click to copy emoji</div>
    </div>
  );
};

export default EmojiRow;
