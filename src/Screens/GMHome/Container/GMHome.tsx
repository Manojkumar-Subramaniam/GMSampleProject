import React, { useState, useEffect } from 'react'
import { View, FlatList, SafeAreaView, Alert } from 'react-native'
import CommitSummary from '../Component/CommitSummary'
import styles from '../Styles/GMHomeStyles'
import { gitCommitAPI } from '../../../../mockStore'
import gitCommitApiResponseModal from '../../../Modals/gitCommitModal'
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';



const renderCommitItem = (item: gitCommitApiResponseModal, navigation: any) => {

    return (
        <CommitSummary
            data={item}
            onpress={() => navigation.navigate('CommitInfo', { data: item })} />
    )
}

const GMHome: React.FC = () => {
    const navigation = useNavigation()
    const [commitData, setCommitData] = useState([])

    useEffect(() => {
        try {
            const fetchdata = async () => {
                let result = await axios.get(
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
                        renderItem={({ item }) => renderCommitItem(item, navigation)}
                        inverted={false}
                        showsVerticalScrollIndicator={false}
                        ItemSeparatorComponent={() => <View style={{ height: 24 }} />}
                    /> : null}
            </View>
        </SafeAreaView>
    )
}

export default GMHome