import React from "react";
import {questionList as tests} from "../../questions";
import {groupBy} from "../../functions/functions";
import {TestItem} from "../../components/testItem";

export default class Test extends React.Component {
    constructor(props) {
        super(props);
        console.log(props);
        this.state = {
            data: [],
            skillLevel: this.props.match.params.skillLevel,
            submit: false,
            responses: []
        }
    }

    componentDidMount() {
        let data =  groupBy(tests, "difficulty");
        console.log(data);
        data = data[this.props.match.params.skillLevel].map((item, i) => {
           i === 0 ? item.visible = false : item.visible = true;
           return item
        });
        console.log(data);


        this.setState({
            data
        })
    }

    submit= (e) => {
       e.preventDefault();
       console.log("Form Submit")
    };

    onNext = (response, question, current) => {
        console.log(current);
        let data = this.state.data;
        let responses = this.state.responses;
        console.log(data);
        if(typeof data[parseInt(current) + 1] !== "undefined"){
            data[parseInt(current) + 1].visible = false;
            data[current].visible = true;
            let answer = {
                question, response
            };
            responses.push(answer);
            console.log(responses);

            this.setState({
                data,
                responses
            })
        }
        else{
            data[current].visible = true;
            this.setState({
                data,
                submit: true
            })
        }
    };

    render() {
        let skillLevel = this.state.skillLevel;

        console.log(`Skill Level: ${skillLevel}`);

        if(typeof skillLevel === "undefined"){
            return (
                <div>
                    <h1>Skill Level not defined</h1>
                </div>
            );
        }
        else{
            if(this.state.data === []){
                return (
                    <div>
                        <h1>Could not find and data with skill level {skillLevel}</h1>
                    </div>
                );
            }
            else{
                return (
                    <div>
                        <h1>Skill Level {skillLevel}</h1>
                        <form onSubmit={(e) => this.submit(e)}>
                        {this.state.data.map((item, i) => {
                            return <TestItem key={item.id}
                                             index={i}
                                             data={item}
                                             onNext={(response, question) => this.onNext(response, question, i)}
                            />
                        })}
                        <fieldset disabled={!this.state.submit}>
                            <button type={"submit"}>Submit</button>
                        </fieldset>
                        </form>
                    </div>
                );
            }
        }
    }
}