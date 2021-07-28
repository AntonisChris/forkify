import View from './view';
import previewView from './previewView';
import icons from 'url:../../img/icons.svg';

class ResultsView extends View {
  _parentElement = document.querySelector(`.results`);
  _errorMessage = `This is not the keyword you are looking for`;
  _message = ``;

  _generateMarkup() {
    return this._data.map(bookmark => previewView.render(bookmark, false)).join(``);
  }  
}

export default new ResultsView();
