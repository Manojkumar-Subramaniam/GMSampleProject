import React, { useState, useEffect } from 'react'
import { View, FlatList, SafeAreaView, Alert } from 'react-native'
import CommitSummary from '../Component/CommitSummary'
import styles from '../Styles/GMHomeStyles'
import { gitCommitAPI } from '../../../../mockStore'
import gitCommitApiResponseModal from '../../../Modals/gitCommitModal'
import axios from 'axios'

const renderCommitItem = ({ item }: { item: gitCommitApiResponseModal }) => <CommitSummary data={item} onpress={() => Alert.alert('pressed')} />

const GMHome: React.FC = () => {

    const [commitData, setCommitData] = useState([])

    useEffect(() => {
        try {
            const fetchdata = async () => {
                let result = await axios(
                    'https://api.github.com/repos/rockimanj/GMSampleProject/commits',
                )
                setCommitData(result.data)
            }
            fetchdata()
        } catch (e) {
            //handle Api error
        }
    }, [])

    return (
        <SafeAreaView >
            <View style={styles.rootView}>
                {commitData.length > 0 ?
                    <FlatList
                        data={commitData}
                        renderItem={renderCommitItem}
                        inverted={false}
                        showsVerticalScrollIndicator={false}
                        ItemSeparatorComponent={() => <View style={{ height: 24 }} />}
                    /> : null}
            </View>
        </SafeAreaView>
    )
}

export default GMHome