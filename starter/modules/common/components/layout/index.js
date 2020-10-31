import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import PropTypes from 'prop-types'
import MobileHeader from '@mobile/components/header'

const useStyles = makeStyles({
    content: {
        marginTop: 74
    }
})

const Layout = ({ children }) => {
  const clasess = useStyles()
  return (
      <React.Fragment >
        <MobileHeader/>
        <div className={clasess.content}>
          {children}
        </div>
      </React.Fragment>
    )
}


Layout.PropTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]),
}


export default Layout