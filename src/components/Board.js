import React, { Component } from 'react'
import { DragDropContext } from 'react-dnd'
import HTML5Backend from 'react-dnd-html5-backend'
import TouchBackend from 'react-dnd-touch-backend'
import Modernizr from 'browsernizr'
import Container from './Container'
import './Board.css'

class Board extends Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: props.notes
    }
  }
  componentWillReceiveProps(nextProps) {
    this.setState({
      notes: nextProps.notes
    });
  }
  render() {
    return (
      <div className="Board">
        <Container
         label={this.props.label}
         color={this.props.color}
         defaultTitle={this.props.defaultTitle}
         defaultDescription={this.props.defaultDescription}
         onNoteClick={this.props.onNoteClick}
         onNoteAdd={this.props.onNoteAdd}
         onNoteDelete={this.props.onNoteDelete}
         onNotesChange={this.props.onNotesChange}
         onNoteInitialize={this.props.onNoteInitialize}
         onNoteRendarText={this.props.onNoteRendarText}
         onNoteRendarTooltip={this.props.onNoteRendarTooltip}
         notes={this.state.notes}/>
      </div>
    )
  }
}
export default DragDropContext(Modernizr.touchevents ? TouchBackend({ enableMouseEvents: true }) : HTML5Backend)(Board)