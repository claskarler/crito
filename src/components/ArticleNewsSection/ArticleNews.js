import React from 'react'
import './ArticleNews.css'

import SectionTitle from '../Generics/SectionTitle'
import Button from '../Generics/Button'
import DateBox from '../Generics/DateBox'

import img_articleone from '../../assets/images/article-image-1.png'
import img_articletwo from '../../assets/images/article-image-2.png'
import img_articlethree from '../../assets/images/article-image-3.png'

const ArticleNews = () => {
  return (
    <section className="article-news">
        <div className="container">
            <div className="article-news-header">
                <SectionTitle text="Article & News" title="Get Every Single Articles & News"/>
                <Button type= "transparent" text="Browse Articles" url="/articles"/>
            </div>
            <div className="article-grid">
                <a className="article 1" href="#">
                    <div className="image-date">
                        <DateBox date= "25" month="Mar"/>
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
                        <DateBox date= "17" month="Mar"/>
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
                        <DateBox date= "13" month="Mar"/>
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