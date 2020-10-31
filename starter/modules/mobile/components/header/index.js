import React from 'react'
import Link from 'next/link'
import AppBar  from '@material-ui/core/AppBar'
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import TollBar from '@material-ui/core/Toolbar'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import Toolbar from '@material-ui/core/Toolbar'

const useStyles = makeStyles((theme)=>({
  root:{
      flex: 1
  },
  menuButton:{
      marginRight: theme.spacing(2)
  }
}))

const Header = () => {
  const clasess = useStyles()
  return (
		<div className={clasess.root}> 
			<AppBar postion="fixed">
				<Toolbar>
					<IconButton edge="start" className={clasess.menuButton} color="inherit" aria-label="menu">
						<MenuIcon />
					</IconButton>
					<Link href="/">
						<Typography variant="h6">
							Ecommerce Toko Sayur
						</Typography>
					</Link>
				</Toolbar>
			</AppBar>

		</div>
  )
}

export default Header