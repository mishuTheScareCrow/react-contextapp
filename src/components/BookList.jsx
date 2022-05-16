import { Component } from "react";
import { ThemeContext } from "../contexts/ThemeContext";

class BookList extends Component {
  static contextType = ThemeContext;
  render() {
    const { isLightTheme, light, dark } = this.context;
    const theme = isLightTheme ? light : dark;
    return (
      <div className="book-list" style={{ color: theme.syntax, background: theme.bg }}>
        <ul>
          <li style={{ background: theme.ui }}>Komola kanter doptor</li>
          <li style={{ background: theme.ui }}>Grihodaho</li>
          <li style={{ background: theme.ui }}>Pother pachali</li>
        </ul>
      </div>
    );
  }
}

export default BookList;
