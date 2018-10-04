import React, {Component} from 'react'

class QuizQuestionButton extends Component {
  render() {
    return (
      <li>
        <button>{this.props.button_text}</button>
      </li>
      /*<li>{this.props.quiz_question.answer_options[0]}</li>*/
    )
  }
}

export default QuizQuestionButton