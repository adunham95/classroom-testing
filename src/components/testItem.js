import React from "react";

export class TestItem extends React.Component {
    constructor(props) {
        super(props);
        this.state= {
            selected: ""
        }
    }

    onChange = (e) => {
        console.log(e.target.value);
        this.setState({
            selected: e.target.value
        })
    };

    render() {
        console.log(this.props);
        let item = this.props.data;

        return (
            <fieldset data-index={this.props.index} disabled={item.visible}>
                <h3>Do you know the {item.type} <span className={"question-item"}>{item.question}</span>?</h3>
                <div>
                    <span>
                        <input checked={this.state.selected === "yes"}
                               onChange={(e) => this.onChange(e) }
                               disabled={this.state.selected !== ""}
                               type={"radio"}
                               name={`item-${item.question}`}
                               value={"yes"}
                               id={`item-${item.question}-yes`}/>
                        <label htmlFor={`item-${item.question}-yes`}>Yes</label>
                    </span>

                    <span>
                        <input checked={this.state.selected === "no"}
                               onChange={(e) => this.onChange(e) }
                               disabled={this.state.selected !== ""}
                               type={"radio"}
                               name={`item-${item.question}`}
                               value={"no"}
                               id={`item-${item.question}-no`}/>
                        <label htmlFor={`item-${item.question}-no`}>No</label>
                    </span>
                </div>
                {
                    this.state.selected === "no" ?
                        <div className={"answer"}>
                            <span>{item.answer}</span>
                            {item.audioLink.includes(".mp4") ? <audio src={item.audioLink}/> : null }
                        </div>
                        : null
                }
                <button onClick={() => this.props.onNext(this.state.selected, `Do you know the ${item.type} ${item.question}?`)}
                        type={"button"}
                        disabled={this.state.selected === ""}
                >
                    Next
                </button>
            </fieldset>
        );
    }
}