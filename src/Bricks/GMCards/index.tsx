import React from 'react'
import { TouchableOpacity, ViewProps } from 'react-native'
import styles from './GMCardsStyles'

interface Props {
    onPress: () => void
    customStyle?: ViewProps
}

const GMCards: React.FC<Props> = (props) => {
    return (
        <TouchableOpacity onPress={props.onPress} style={[styles.rootView, props.customStyle]}>
            {props.children}
        </TouchableOpacity>
    )
}

export default GMCards