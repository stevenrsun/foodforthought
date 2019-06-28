import React, { Component } from 'react';

export class Diabetes extends Component {

    render() { 
        return (  
            <div>
                <h1>Diabetes</h1>
                <h5>Symptoms:</h5>
                <p>Frequent urination, increased thirst, constant hunger, extreme fatigue, blurry vision.</p>
                <h5>Risk Factors:</h5>
                <p>Type 1: Hereditary/Genetic</p>
                <p>Type 2: High blood pressure, high blood fat levels, obesity</p>
                <h5>Prevention</h5>
                <p>Type 2: Avoid high alcohol intake and high-fat/carbohydrate diets.</p>
                <h5>Treatment:</h5>
                <p>Thiazolidinediones (lower insulin), alpha-glucosidase inhibitors (slow digestion of complex carbohydrates), 
                bile acid sequestrants (cholesterol lowering drugs), GLP-1 receptor agonists (help pancreas produce insulin), direct insulin injections.
                </p>
                <h5>Frequency:</h5>
                <p>9.4% of Americans in 2015 (30.3 million)</p>
            </div>
        );
    }
}

export class UTI extends Component {

    render() { 
        return (  
            <div>
                <h1>Urinary Tract Infection (UTI)</h1>
                <h5>Symptoms:</h5>
                <p>Burning feeling during urination, frequent urge to urinate, strange-smelling or bloody urine.</p>
                <h5>Risk Factors:</h5>
                <p>Higher sexual activity and age, kidney stones, poor bladder control.</p>
                <h5>Prevention</h5>
                <p>Drink lots of liquids, empty bladder after intercourse, drink cranberry juice.</p>
                <h5>Treatment:</h5>
                <p>Antibiotics, Penicillin.
                </p>
                <h5>Frequency:</h5>
                <p>Relatively common (women), uncommon (men).</p>
            </div>
        );
    }
}

export class HypoThy extends Component {

    render() { 
        return (  
            <div>
                <h1>Hypothyroidism</h1>
                <h5>Symptoms:</h5>
                <p>Change in appetite, insomnia, fatigue, frequent bowel movements (diarrhea), increased sweating and heat intolerance.</p>
                <h5>Risk Factors:</h5>
                <p>Family history of hypothyroidism, personal history of chronic illness.</p>
                <h5>Prevention</h5>
                <p>Avoid foods rich in iodine such as dairy products, salt, water, and eggs.</p>
                <h5>Treatment:</h5>
                <p>Radioactive iodine, anti-thydroid medications, beat blockers, surgery (thyroidectomy).
                </p>
                <h5>Frequency:</h5>
                <p>Relatively uncommon (12% of US population or 20 million peopel have or will have thyroid problems)</p>
            </div>
        );
    }
}