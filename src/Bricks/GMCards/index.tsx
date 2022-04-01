import React from 'react'
import { View, ViewProps } from 'react-native'
import styles from './GMCardsStyles'

interface Props {
    children?: React.ReactNode
    customStyle?: ViewProps
}

const GMCards: React.FC<Props> = ({ children, customStyle }) => {
    return (
        <View style={[styles.rootView, customStyle]}>
            {children}
        </View>
    )
}

export default GMCards