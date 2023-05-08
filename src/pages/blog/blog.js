import React from 'react';
import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';
import classes from './blog.module.css';
import {AiOutlineSearch} from "react-icons/ai";
import Blog1 from '../../assets/blog1.png';
import Blog2 from '../../assets/blog2.png';
import Blog3 from '../../assets/blog3.png';
import Blog4 from '../../assets/blog4.png';
import Blog5 from '../../assets/blog5.png';
import Blog6 from '../../assets/blog6.png';
import Blog7 from '../../assets/blog7.png';
import Blog8 from '../../assets/blog8.png';
import Blog9 from '../../assets/blog9.png';
import Blog10 from '../../assets/blog10.png';
import Blog11 from '../../assets/blog11.png';
import Blog12 from '../../assets/blog12.png';


const blog = () => {
  return (
    <div>
        <Header/>
        <div className={classes.blog}>
            <div className={classes.news}>
                <h2>News & Articles</h2>
                <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et.</p>
                <div className={classes.form}>
                    <span className={classes.outlineSearch}>
                        <input type="text" placeholder="Search blog..." />
                        <div className={classes.search}><AiOutlineSearch /></div>

                    </span>                     
                </div>
            </div>

                <div className={classes.blogB}>
                    <div className={classes.cards}>
                        <div className={classes.card}>
                                
                            <div className={classes.Image1}>
                                <img src={Blog1} alt='blog1' />
                                <div className={classes.date}>
                                    <p>July 15</p>
                                </div>
                            </div>
                               
                                <div className={classes.text}>
                                    <h5>Do millennials care about saving?</h5>
                                    <p>Curabitur tincidunt sed neque id pretium. Aenean volutpat tristique tincidunt. Pellentesque ac urna.</p>
                                </div>

                                <div className={classes.btn}>
                                    <button>Read More</button>
                                </div>  

                        </div>

                        <div className={classes.card}>
                                
                                <div className={classes.Image1}>
                                    <img src={Blog2} alt='blog2' />
                                    <div className={classes.date}>
                                        <p>July 15</p>
                                    </div>
                                </div>
                                   
                                    <div className={classes.text}>
                                        <h5>Do millennials care about saving?</h5>
                                        <p>Curabitur tincidunt sed neque id pretium. Aenean volutpat tristique tincidunt. Pellentesque ac urna.</p>
                                    </div>
    
                                    <div className={classes.btn}>
                                        <button>Read More</button>
                                    </div>  
    
                            </div>

                            <div className={classes.card}>
                                
                                <div className={classes.Image1}>
                                    <img src={Blog3} alt='blog3' />
                                    <div className={classes.date}>
                                        <p>July 15</p>
                                    </div>
                                </div>
                                   
                                    <div className={classes.text}>
                                        <h5>Do millennials care about saving?</h5>
                                        <p>Curabitur tincidunt sed neque id pretium. Aenean volutpat tristique tincidunt. Pellentesque ac urna.</p>
                                    </div>
    
                                    <div className={classes.btn}>
                                        <button>Read More</button>
                                    </div>  
    
                            </div>

                            <div className={classes.card}>
                                
                                <div className={classes.Image1}>
                                    <img src={Blog4} alt='blog4' />
                                    <div className={classes.date}>
                                        <p>July 15</p>
                                    </div>
                                </div>
                                   
                                    <div className={classes.text}>
                                        <h5>Do millennials care about saving?</h5>
                                        <p>Curabitur tincidunt sed neque id pretium. Aenean volutpat tristique tincidunt. Pellentesque ac urna.</p>
                                    </div>
    
                                    <div className={classes.btn}>
                                        <button>Read More</button>
                                    </div>  
    
                            </div>


                            <div className={classes.card}>
                                
                                <div className={classes.Image1}>
                                    <img src={Blog5} alt='blog5' />
                                    <div className={classes.date}>
                                        <p>July 15</p>
                                    </div>
                                </div>
                                   
                                    <div className={classes.text}>
                                        <h5>Do millennials care about saving?</h5>
                                        <p>Curabitur tincidunt sed neque id pretium. Aenean volutpat tristique tincidunt. Pellentesque ac urna.</p>
                                    </div>
    
                                    <div className={classes.btn}>
                                        <button>Read More</button>
                                    </div>  
    
                            </div>
    
                            <div className={classes.card}>
                                    
                                    <div className={classes.Image1}>
                                        <img src={Blog6} alt='blog6' />
                                        <div className={classes.date}>
                                            <p>July 15</p>
                                        </div>
                                    </div>
                                       
                                        <div className={classes.text}>
                                            <h5>Do millennials care about saving?</h5>
                                            <p>Curabitur tincidunt sed neque id pretium. Aenean volutpat tristique tincidunt. Pellentesque ac urna.</p>
                                        </div>
        
                                        <div className={classes.btn}>
                                            <button>Read More</button>
                                        </div>  
        
                                </div>
    
                                <div className={classes.card}>
                                    
                                    <div className={classes.Image1}>
                                        <img src={Blog7} alt='blog7' />
                                        <div className={classes.date}>
                                            <p>July 15</p>
                                        </div>
                                    </div>
                                       
                                        <div className={classes.text}>
                                            <h5>Do millennials care about saving?</h5>
                                            <p>Curabitur tincidunt sed neque id pretium. Aenean volutpat tristique tincidunt. Pellentesque ac urna.</p>
                                        </div>
        
                                        <div className={classes.btn}>
                                            <button>Read More</button>
                                        </div>  
        
                                </div>
    
                                <div className={classes.card}>
                                    
                                    <div className={classes.Image1}>
                                        <img src={Blog8} alt='blog8' />
                                        <div className={classes.date}>
                                            <p>July 15</p>
                                        </div>
                                    </div>
                                       
                                        <div className={classes.text}>
                                            <h5>Do millennials care about saving?</h5>
                                            <p>Curabitur tincidunt sed neque id pretium. Aenean volutpat tristique tincidunt. Pellentesque ac urna.</p>
                                        </div>
        
                                        <div className={classes.btn}>
                                            <button>Read More</button>
                                        </div>  
        
                                </div>


                                <div className={classes.card}>
                                
                                <div className={classes.Image1}>
                                    <img src={Blog9} alt='blog9' />
                                    <div className={classes.date}>
                                        <p>July 15</p>
                                    </div>
                                </div>
                                   
                                    <div className={classes.text}>
                                        <h5>Do millennials care about saving?</h5>
                                        <p>Curabitur tincidunt sed neque id pretium. Aenean volutpat tristique tincidunt. Pellentesque ac urna.</p>
                                    </div>
    
                                    <div className={classes.btn}>
                                        <button>Read More</button>
                                    </div>  
    
                            </div>
    
                            <div className={classes.card}>
                                    
                                    <div className={classes.Image1}>
                                        <img src={Blog10} alt='blog10' />
                                        <div className={classes.date}>
                                            <p>July 15</p>
                                        </div>
                                    </div>
                                       
                                        <div className={classes.text}>
                                            <h5>Do millennials care about saving?</h5>
                                            <p>Curabitur tincidunt sed neque id pretium. Aenean volutpat tristique tincidunt. Pellentesque ac urna.</p>
                                        </div>
        
                                        <div className={classes.btn}>
                                            <button>Read More</button>
                                        </div>  
        
                                </div>
    
                                <div className={classes.card}>
                                    
                                    <div className={classes.Image1}>
                                        <img src={Blog11} alt='blog11' />
                                        <div className={classes.date}>
                                            <p>July 15</p>
                                        </div>
                                    </div>
                                       
                                        <div className={classes.text}>
                                            <h5>Do millennials care about saving?</h5>
                                            <p>Curabitur tincidunt sed neque id pretium. Aenean volutpat tristique tincidunt. Pellentesque ac urna.</p>
                                        </div>
        
                                        <div className={classes.btn}>
                                            <button>Read More</button>
                                        </div>  
        
                                </div>
    
                                <div className={classes.card}>
                                    
                                    <div className={classes.Image1}>
                                        <img src={Blog12} alt='blog12' />
                                        <div className={classes.date}>
                                            <p>July 15</p>
                                        </div>
                                    </div>
                                       
                                        <div className={classes.text}>
                                            <h5>Do millennials care about saving?</h5>
                                            <p>Curabitur tincidunt sed neque id pretium. Aenean volutpat tristique tincidunt. Pellentesque ac urna.</p>
                                        </div>
        
                                        <div className={classes.btn}>
                                            <button>Read More</button>
                                        </div>  
        
                                </div>

                    </div>
                </div>
                <Footer/>

        </div>
        
    </div>
  )
}

export default blog