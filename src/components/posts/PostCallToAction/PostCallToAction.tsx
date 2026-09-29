import * as React from "react";
import { Link } from "gatsby";
import './PostCallToAction.css';


export type ActionBtnType = 'primary' | 'secondary' | 'tertiary';


export interface ActionButtonProps {

}

function getBtnClassName(type: ActionBtnType, clear: boolean) {
    const classClear = clear ? 'clear' : '';

    switch (type) {
        case 'primary':
            return `btn-action green ${classClear}`;
        case 'secondary':
            return `btn-action blue ${classClear}`
        case 'tertiary':
            return `btn-action orange ${classClear}`
        default:
            return `btn-action green ${classClear}`;
    }
}

const PostCallToAction = (props: ActionButtonProps) => {
    const className = getBtnClassName('secondary', false);

    return (

        <div className="post-cta-wrapper">
            <div>
                <h2>Take control of your career. Build JavaScript mobile apps.</h2>
            </div>
            <div className="post-cta-btn-container">
                
                <div className={className}>
                    <Link to="/pro-webinar">
                        <span>Join the FREE training webinar</span>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default PostCallToAction;
