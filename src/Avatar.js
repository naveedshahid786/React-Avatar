import React, { Component } from "react";
import 'tachyons'
import './Avatar.css'
import Avatarlist from './Avatarlist'

class Avatar extends Component {

    render() {
        const avatarlistarray = [
            {
                id: 1,
                name: 'Naveed Shahid',
                title: 'Software Developer',
            },
            {
                id: 2,
                name: 'Umer Allaudin',
                title: 'Web Developer',
            },
            {
                id: 3,
                name: 'Eeva pursianen',
                title: 'Mobile Developer',
            },
            {
                id: 4,
                name: 'Alisher Usman',
                title: 'Web full Developer',
            }
        ]

        const avatarcard = avatarlistarray.map((products, index) => {
            return <Avatarlist id={avatarlistarray[index].id}
                name={avatarlistarray[index].name}
                title={avatarlistarray[index].title} />
        }
        )

        return (<div>
            <h1>Welcome to my world</h1>
            {avatarcard}

        </div>
        )
    }
}

export default Avatar;