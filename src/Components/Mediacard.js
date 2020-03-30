import React from 'react';


class Mediacard extends React.Component {
    render() {
        const cardHeader = (
          <div className="card">
            <header className="card-header">
              <div className="container">
                <img src={this.props.image} className="App-pic" alt="pic" width="100" />
              </div>
              <div className="text-container">
                <h3 className="name">{this.props.title}</h3>
                <p className="date">{this.props.date}</p>
              </div>
            </header>
          </div>
        );
    
        const cardMain = (
          <main className="card-main">
            <div className="main-container">
              <p className="card-text">{this.props.text}</p>
            </div>
          </main>
        );

        const cardFooter = (
          <div className="footer-container">
          <div className="likes">{this.props.likes}</div>
          <div className="heart"><i class="fas fa-heart"></i></div>
          </div>

        );
    
        const wholeCard = (
          <div className="this-is-all">
            {cardHeader}
            {cardMain}
            {cardFooter}
          </div>
        );
    
        return wholeCard;
      }
    }


export default Mediacard;