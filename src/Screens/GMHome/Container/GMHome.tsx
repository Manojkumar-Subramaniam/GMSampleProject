import React from 'react'
import { View, Text, SafeAreaView, Alert } from 'react-native'
import CommitSummary from '../Component/CommitSummary'
import styles from '../Styles/GMHomeStyles'
import { gitCommitAPI } from '../../../../mockStore'

const GMHome: React.FC = () => {
    return (
        <SafeAreaView >
            <View style={styles.rootView}>
                <CommitSummary data={gitCommitAPI[0]} onpress={() => Alert.alert('pressed')} />
            </View>
        </SafeAreaView>
    )
}

export default GMHome