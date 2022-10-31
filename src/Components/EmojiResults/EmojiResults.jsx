import React from "react";
import EmojiRow from "../EmojiRow/EmojiRow";

const EmojiResults = ({ filteredList }) => {
  return (
    <div className="row-result">
      {filteredList.map((emoji) => (
        <EmojiRow symbol={emoji.symbol} title={emoji.title} />
      ))}
    </div>
  );
};

export default EmojiResults;
