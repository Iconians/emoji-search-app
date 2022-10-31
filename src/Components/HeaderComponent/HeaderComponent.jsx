import React from "react";
import EmojiResults from "../EmojiResults/EmojiResults";
import SearchInput from "../SearchInput/SearchInput";
import emojiList from "../emojiList.json";
import "./HeaderComponent.css";

class HeaderComponent extends React.Component {
  constructor() {
    super();
    this.state = {
      filteredEmojis: [
        {
          title: "Search for Emojis",
          symbol: "",
        },
      ],
    };
  }

  filterEmojiList = ({ target: { value } }) => {
    let array = [];
    Object.values(emojiList).forEach((emoji) => {
      if (emoji.keywords.search(value) !== -1) {
        if (array.length < 20) {
          array.push(emoji);
        }
      }
    });

    let result = array;
    this.setState({ filteredEmojis: result });
  };

  render() {
    const { filteredEmojis } = this.state;
    return (
      <div>
        <div>
          <SearchInput filterEmojis={this.filterEmojiList} />
        </div>
        <div>
          <EmojiResults filteredList={filteredEmojis} />
        </div>
      </div>
    );
  }
}

export default HeaderComponent;
