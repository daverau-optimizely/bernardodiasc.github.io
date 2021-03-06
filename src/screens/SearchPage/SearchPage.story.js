import React from 'react'
import { storiesOf } from '@storybook/react'
import { withKnobs } from '@storybook/addon-knobs/react'
import StoryRouter from 'storybook-router'
import Provider from 'stories/containers/Provider'
import Docs from 'stories/containers/Docs'

import SearchPage from './SearchPage'
import SearchPageReadme from './README.md'
storiesOf('Screens/SearchPage', module)
  .addDecorator(story => <Provider story={story()} />)
  .addDecorator(StoryRouter())
  .addDecorator(withKnobs)
  .add('Info', () => <Docs>{SearchPageReadme}</Docs>)
  .add('Example', () => <SearchPage />)
  .add('Minimal render', () => <SearchPage />)
