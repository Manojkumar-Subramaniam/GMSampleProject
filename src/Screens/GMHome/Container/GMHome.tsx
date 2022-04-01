import React from 'react'
import { View, Text, SafeAreaView } from 'react-native'
import CommitSummary from '../Component/CommitSummary'
import styles from '../Styles/GMHomeStyles'

const GMHome: React.FC = () => {
    return (
        <SafeAreaView >
            <View style={styles.rootView}>
                <CommitSummary />
            </View>
        </SafeAreaView>
    )
}

export default GMHome