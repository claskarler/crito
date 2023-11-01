import React from 'react'
import './ArticleNews.css'
import img_articleone from '../../assets/images/article-image-1.png'
import img_articletwo from '../../assets/images/article-image-2.png'
import img_articlethree from '../../assets/images/article-image-3.png'

const ArticleNews = () => {
  return (
    <section className="article-news">
        <div className="container">
            <div className="article-news-header">
                <div className="section-title">
                    <p>Article & News</p>
                    <h2>Get Every Single Articles & News</h2>
                </div>
                <a className="btn-transparent" href="#">Browse Articles<i className="fa-regular fa-arrow-up-right"></i></a>
            </div>
            <div className="article-grid">
                <a className="article 1" href="#">
                    <div className="image-date">
                        <div className="date-box">
                            <h3>25</h3>
                            <p>Mar</p>
                        </div>
                        <img src={img_articleone}/>
                    </div>
                    <div className="article-text">
                        <p>Business</p>
                        <h3>How To Use Digitalization In The Classroom</h3>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto sed hic libero.</p>
                    </div>
                </a>
                <a className="article 2" href="#">
                    <div className="image-date">
                        <div className="date-box">
                            <h3>17</h3>
                            <p>Mar</p>
                        </div>
                        <img src={img_articletwo}/>
                    </div>
                    <div className="article-text">
                        <p>Business</p>
                        <h3>How To Implement Chat GPT In Your Projects</h3>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto sed hic libero.</p>
                    </div>
                </a>
                <a className="article 3" href="#">
                    <div className="image-date">
                        <div className="date-box">
                            <h3>13</h3>
                            <p>Mar</p>
                        </div>
                        <img src={img_articlethree}/>
                    </div>
                    <div className="article-text">
                        <p>Business</p>
                        <h3>The Guide To Support Modern CSS Design</h3>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto sed hic libero.</p>
                    </div>
                </a>
            </div>
            <div className="scroll">
                <div className="button-container">
                    <div className="active scroll-circle"></div>
                    <div className="scroll-circle"></div>
                    <div className="scroll-circle"></div>
                    <div className="scroll-circle"></div>
                    <div className="scroll-circle"></div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default ArticleNews