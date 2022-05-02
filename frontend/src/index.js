import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from "axios";

import AddImage from './components/AddImage';

class App extends Component {
  constructor() {
    super();
    this.state = {
      images: [],
      image: "",

    };
    this.addImage = this.addImage.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  componentDidMount() {
    this.getImages();
  };

  handleChange(event) {
    const obj = {};
    obj[event.target.name] = event.target.files[0];
    console.log("Object", obj)
    this.setState(obj);
  };


  getImages() {
    axios.get(`${process.env.REACT_APP_USERS_SERVICE_URL}/image`)
        .then((res) => { this.setState({ images: res.data }); })
        .catch((err) => {
          console.log(err);
        });
  };
  addImage(event) {
    event.preventDefault();
    const formData = new FormData();
    formData.append("original", this.state.image);

    axios.post(
        `${process.env.REACT_APP_USERS_SERVICE_URL}/image`,
        formData,
        { headers: {"Content-Type": "multipart/form-data", "Accept": "multipart/form-data"} })
        .then((res) => {
          this.getImages()
          this.setState({ image: ""})
        })
        .catch((err) => { console.log(err); });
  };

  render() {
    return (
      <section className="section">
        <div className="container">
          <div className="columns">
            <div className='form-upload-container'>
              <div className='border-1px-solid'>

                <h2 className='text-center'>Выберите изображение для загрузки</h2>
                <AddImage
                    image={this.state.image}
                    addUser={this.addImage}
                    handleChange={this.handleChange}
                />
              </div>

              <h2 className='margin-top50 text-center'>Последние 3 преобразования:</h2>
            </div>
            {
              this.state.images.map((img) => {
                return (
                  <div className='container-images'>
                    <div className="box" key={img.id}>

                      <div className="media-content">
                        <figure className="image is-64x64">
                          <img src={img.negative_url} alt="Img" />
                        </figure>
                      </div>
                      <div className="media-content">
                        <figure className="image is-64x64">
                          <img src={img.original_url} alt="Img" />
                        </figure>
                      </div>

                    </div>
                  </div>
                )
              })
            }

          </div>
          
        </div>
      </section>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);

