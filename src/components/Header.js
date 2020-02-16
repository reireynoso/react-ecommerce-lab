import React from 'react'

const Header = () => {
    return(
        <div className="header">
            {/* left */}
            <div className="left-menu">
                <div>
                    Logo
                </div>

                <div>
                    DVDs
                </div>
            </div>

            {/* right */}
            <div className="right-menu">
                <div>
                    Cart
                </div>
            </div>
        </div>
    )
}

export default Header