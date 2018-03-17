import React, { PureComponent } from 'react'
import { DiscussionEmbed } from 'disqus-react'
import './Disqus.css'
import config from 'config'

class Disqus extends PureComponent {
  static defaultProps = {
    url: '',
    identifier: '',
    title: '',
  }

  render() {
    const disqusShortname = 'bernardodiasc'
    const disqusConfig = {
      // url: this.props.url,
      identifier: this.props.identifier,
      title: this.props.title,
    }

    return config.PUBLIC_URL ? (
      <div className="Disqus">
        <DiscussionEmbed
          shortname={disqusShortname}
          config={disqusConfig}
        />
      </div>
    ) : null
  }
}

export default Disqus