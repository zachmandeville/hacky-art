const html = require('choo/html');

const { escapeKey, escapeMsg } = require('../helpers/escape');

module.exports = (state, emit) => {
  return html`<figure>
    ${
    state.blob ?
    html`<a href="${
      state.msgId ?
      `/publication/${escapeMsg(state.msgId)}` :
      ''
    }">
        <img class="publicationImg" src="${URL.createObjectURL(state.blob)}"></img>
      </a>` :
    html`<div class="imgLoading">Image loading...</div>`
    }

    <figcaption>
    ${
    typeof state.caption === 'string' && state.caption.length > 0 ?
    html`<div class="publicationCaption">${state.caption}</div>` :
    ''
    }
    </figcaption>
    </figure>
    <div class="description">
    ${
    typeof state.title === 'string' && state.title.length > 0 ?
    html`<h2 class="publicationTitle">${state.title}</h2>` :
    ''
    }
    <a class="author" href="/user/${escapeKey(state.authorId)}">${state.author}</a>
    ${
    typeof state.description === 'string' && state.description.length > 0 ?
    html`<div class="publicationDescription">${state.description}</div>` :
    ''
    }
    </div>
`
};
