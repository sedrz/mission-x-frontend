import { ListItemSecondaryAction } from '@material-ui/core'
import React from 'react'
import "./Sitemap.css"

const companylist = [
    'About Us',
    'Careers',
    'Partners'
]
function Sitemap() {
    return (
        <div className="container">
            companyList
            <ul>
                {companylist.map(item => <li>companylist</li>)}
            </ul>        
        </div>
    )
}

export default Sitemap
