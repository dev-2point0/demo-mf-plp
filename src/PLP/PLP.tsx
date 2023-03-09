import React, { useEffect, useState } from "react";
import axios from 'axios';
import './PLP.scss';

class PLP extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
        this.state = {
            textList: []
        }
    }
    componentDidMount(): void {
        const params = this.props.params;
        axios(`https://baconipsum.com/api/?type=${params.testparam}`)
        .then(y => {
            this.setState({
                textList: y.data
            })
        });   
    }
    render() {
        const { textList } = this.state;
        return (<div className="plp-comp">
            <div className="row">
                <div className="col plp-text">
                    {
                        textList.map((item: string, index: number) => <p key={index}>{item}</p>)   
                    }
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <div className="product-name">
                        Product 1
                    </div>
                    <div className="product-detail">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                    when an unknown printer took a galley of type and scrambled it to make a
                    type specimen book. It has survived not only five centuries,
                    but also the leap into electronic typesetting, remaining essentially unchanged.
                    It was popularised in the 1960s with the release
                    </div>
                </div>
                <div className="col">
                    <div className="product-name">
                        Product 2
                    </div>
                    <div className="product-detail">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                    when an unknown printer took a galley of type and scrambled it to make a
                    type specimen book. It has survived not only five centuries,
                    but also the leap into electronic typesetting, remaining essentially unchanged.
                    It was popularised in the 1960s with the release
                    </div>
                </div>
                <div className="col">
                    <div className="product-name">
                        Product 3
                    </div>
                    <div className="product-detail">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                    when an unknown printer took a galley of type and scrambled it to make a
                    type specimen book. It has survived not only five centuries,
                    but also the leap into electronic typesetting, remaining essentially unchanged.
                    It was popularised in the 1960s with the release
                    </div>
                </div>
                <div className="col">
                    <div className="product-name">
                        Product 4
                    </div>
                    <div className="product-detail">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                    when an unknown printer took a galley of type and scrambled it to make a
                    type specimen book. It has survived not only five centuries,
                    but also the leap into electronic typesetting, remaining essentially unchanged.
                    It was popularised in the 1960s with the release
                    </div>
                </div>
                
            </div>
        </div>);
    };
}

export default PLP;
