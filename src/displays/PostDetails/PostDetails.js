import React, { PureComponent } from 'react'
import marked from 'marked'
import renderHTML from 'react-render-html'
import './PostDetails.css'

import TextBlock from 'displays/TextBlock'

class PostDetails extends PureComponent {
  static defaultProps = {
    post: {
      title: '',
      date: '',
      body: '',
    },
  }

  render() {
    const { body } = this.props.post
    return (
      <div className="PostDetails">
        <h1 className="PostDetails__title">{this.props.post.title}</h1>
        <p className="PostDetails__meta">{this.props.post.date}</p>
        <TextBlock>
          {body && renderHTML(marked(body))}
        </TextBlock>
      </div>
    )
  }
}

export default PostDetails