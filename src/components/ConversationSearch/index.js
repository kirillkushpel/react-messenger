import React from 'react';
import './ConversationSearch.css';
import debounce from "../../utils/debounce";

export default function ConversationSearch() {

   const highlightedText = (text) => {
        if (this.query) {
            const lowText = text.toLowerCase();
            const lowQuery = this.query.toLowerCase();
            const splitText = lowText.split(lowQuery);
            const res = [];
            let i = 0;
            splitText.forEach((t, idx) => {
                const ar = [];
                const ar2 = [];
                for (let k = 0; k < t.length; k++) {
                    const l = t.charAt(k);
                    const up = text.charAt(i) === text.charAt(i).toUpperCase();
                    ar.push(up ? l.toUpperCase() : l.toLowerCase());
                    i += 1;
                }
                for (let k = 0; k < lowQuery.length; k++) {
                    const l = lowQuery.charAt(k);
                    const up = text.charAt(i) === text.charAt(i).toUpperCase();
                    ar2.push(up ? l.toUpperCase() : l.toLowerCase());
                    i += 1;
                }
                res.push(ar.join(''));
                if (idx < splitText.length - 1) {
                    res.push('<span class="hl">' + ar2.join('') + '</span>');
                }
            });
            return res.join('');
        }
        return text;
    }

    const highlightedTextHandler = debounce(query => {
        highlightedText(query);
    }, 500);

    const inputHandler = e => {
       console.log('input', e.target.value)
    }


    return (
      <div className="conversation-search">
        <input
          type="search"
          onChange={inputHandler}
          className="conversation-search-input"
          placeholder="Найти в сообщениях"
        />
      </div>
    );
}
