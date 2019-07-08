import React, { Component } from 'react';

export class PageNav extends Component {
    state = {  }
    render() { 
        if(this.props.page <= 0) 
            return <PageNavFront label='Food Page Navigator' page={this.props.page} decrementPage = {this.props.decrementPage} 
                    incrementPage = {this.props.incrementPage} goFirstPage = {this.props.goFirstPage} goLastPage = {this.props.goLastPage}/>
        else if(this.props.page < this.props.lastPage - 1)
            return <PageNavMid label='Food Page Navigator' page={this.props.page} decrementPage = {this.props.decrementPage} 
                    incrementPage = {this.props.incrementPage} goFirstPage = {this.props.goFirstPage} goLastPage = {this.props.goLastPage}/>
        else
            return <PageNavEnd label='Food Page Navigator' page={this.props.page} decrementPage = {this.props.decrementPage} 
                    incrementPage = {this.props.incrementPage} goFirstPage = {this.props.goFirstPage} goLastPage = {this.props.goLastPage}/>

    }
}

export class PageNavMid extends Component {
    state = {  }
    render() { 
        return ( 
                <nav aria-label={this.props.label}>
                    <ul class="pagination justify-content-center mt-5">
                        <li onClick = {() => this.props.goFirstPage()} class="page-item">
                            <a class="page-link" href="#" aria-label="Previous">
                                <span aria-hidden="true">&laquo;</span>
                                <span class="sr-only">Previous</span>
                            </a>
                        </li>
                        <li onClick = {() => this.props.decrementPage()} class="page-item"><a class="page-link" href="#">Previous</a></li>
                        <li onClick = {() => this.props.decrementPage()} class="page-item"><a class="page-link" href="#">{this.props.page}</a></li>
                        <li class="page-item active"><a class="page-link" href="#">{this.props.page + 1}</a></li>
                        <li onClick = {() => this.props.incrementPage()} class="page-item"><a class="page-link" href="#">{this.props.page + 2}</a></li>
                        <li onClick = {() => this.props.incrementPage()} class="page-item"><a class="page-link" href="#">Next</a></li>
                        <li onClick = {() => this.props.goLastPage()} class="page-item">
                            <a class="page-link" href="#" aria-label="Next">
                                <span aria-hidden="true">&raquo;</span>
                                <span class="sr-only">Next</span>
                            </a>
                        </li>
                    </ul>
                </nav>
         );
    }
}

export class PageNavFront extends Component {
    state = {  }
    render() { 
        return ( 
                <nav aria-label={this.props.label}>
                    <ul class="pagination justify-content-center mt-5">
                        <li class="page-item disabled">
                            <a class="page-link" href="#" aria-label="Previous">
                                <span aria-hidden="true">&laquo;</span>
                                <span class="sr-only">Previous</span>
                            </a>
                        </li>
                        <li class="page-item disabled"><a class="page-link" href="#">Previous</a></li>
                        <li class="page-item active"><a class="page-link" href="#">{this.props.page + 1}</a></li>
                        <li onClick = {() => this.props.incrementPage()} class="page-item"><a class="page-link" href="#">{this.props.page + 2}</a></li>
                        <li onClick = {() => this.props.incrementPage()} class="page-item"><a class="page-link" href="#">Next</a></li>
                        <li onClick = {() => this.props.goLastPage()} class="page-item">
                            <a class="page-link" href="#" aria-label="Next">
                                <span aria-hidden="true">&raquo;</span>
                                <span class="sr-only">Next</span>
                            </a>
                        </li>
                    </ul>
                </nav>
         );
    }
}

export class PageNavEnd extends Component {
    state = {  }
    render() { 
        return ( 
                <nav aria-label={this.props.label}>
                    <ul class="pagination justify-content-center mt-5">
                        <li onClick = {() => this.props.goFirstPage()} class="page-item">
                            <a class="page-link" href="#" aria-label="Previous">
                                <span aria-hidden="true">&laquo;</span>
                                <span class="sr-only">Previous</span>
                            </a>
                        </li>
                        <li onClick = {() => this.props.decrementPage()} class="page-item"><a class="page-link" href="#">Previous</a></li>
                        <li onClick = {() => this.props.decrementPage()} class="page-item"><a class="page-link" href="#">{this.props.page}</a></li>
                        <li class="page-item active"><a class="page-link" href="#">{this.props.page + 1}</a></li>
                        <li class="page-item disabled"><a class="page-link" href="#">Next</a></li>
                        <li class="page-item disabled">
                            <a class="page-link" href="#" aria-label="Next">
                                <span aria-hidden="true">&raquo;</span>
                                <span class="sr-only">Next</span>
                            </a>
                        </li>
                    </ul>
                </nav>
         );
    }
}
 