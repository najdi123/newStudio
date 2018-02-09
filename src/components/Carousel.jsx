import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Carousel.css';





class Carousel extends Component {
    render() {
        return (


            <div id="carousel" className="carousel slide carousel-fade" data-ride="carousel" data-interval="6000">
                <ol className="carousel-indicators">
                    <li data-target="#carousel" data-slide-to="0" class="active"></li>
                    <li data-target="#carousel" data-slide-to="1"></li>
                    <li data-target="#carousel" data-slide-to="2"></li>



                </ol>
                <div className="carousel-inner" role="listbox">
                    <div className="carousel-item active">


                        <div className="justify-content-center align-items-center">
                                    <h3>David, we are very impresed with your work and appreciate your speed of turnaround as well. Your are a perfect fit for our high-end, results driven clients.</h3>
                                    <p>Mathew Vick, Senior marketing manager, Tribalvision</p>

                        </div>
                    </div>

                    <div className="carousel-item">


                            <div className="justify-content-center align-items-center">

                                    <h3>David, the brand you created for us looks absolutely stunning and is spot on. You did an amazing job of capturing our business and we were blown away.</h3>
                                    <p>ANDRES NIELSON, DIRECTOR OF SALES, VILLAGE WORKSPACES</p>


                            </div>

                    </div>

                    <div className="carousel-item">


                            <div className="justify-content-center align-items-center">

                                    <h3>David, it was the greatest pleasure to work with you. You are truly a brilliant designer, a frighteningly efficient person and a joy to collaborate with.</h3>
                                    <p>PAMELA DAUKAYEV, EXECUTIVE DIRECTOR, MARAT DAUKEYEV BALLET THEATRE</p>


                            </div>

                    </div>




                </div>

                {/*<a className="carousel-control-prev" href="#carousel" role="button" data-slide="prev">*/}
                    {/*<span className="carousel-control-prev-icon" aria-hidden="true"></span>*/}
                    {/*<span className="sr-only">Previous</span>*/}
                {/*</a>*/}
                {/*<a className="carousel-control-next" href="#carousel" role="button" data-slide="next">*/}
                    {/*<span className="carousel-control-next-icon" aria-hidden="true"></span>*/}
                    {/*<span className="sr-only">Next</span>*/}
                {/*</a>*/}
            </div>
















    );
    }
}

export default Carousel;