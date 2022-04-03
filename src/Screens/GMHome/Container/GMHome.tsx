import React, { useEffect } from 'react'
import { View, FlatList, SafeAreaView, Image, Text, TouchableOpacity } from 'react-native'
import CommitSummary from '../Component/CommitSummary'
import styles from '../Styles/GMHomeStyles'
import gitCommitApiResponseModal from '../../../Modals/gitCommitModal'
import { useNavigation } from '@react-navigation/native';
import colors from '../../../Utils/colors'
import fonts from '../../../Utils/fonts'
import { Strings } from '../../../Utils'
import fetchApi from '../../../Network/fetchApi'



const renderCommitItem = (item: gitCommitApiResponseModal, navigation: any) => {

    return (
        <CommitSummary
            data={item}
            onpress={() => navigation.navigate('CommitInfo', { data: item })} />
    )
}

const GMHome: React.FC = () => {
    const navigation = useNavigation()

    const [isDataLoaded, setLoadComplete] = React.useState<boolean>(false)
    const [commitData, setCommitData] = React.useState<gitCommitApiResponseModal[]>([])

    React.useEffect(() => {
        const fetchdata = async () => {
            let data = await fetchApi<gitCommitApiResponseModal[]>('rockimanj', 'GMSampleProject')
            setLoadComplete(true)
            setCommitData(data)
        }
        fetchdata()
    }, [isDataLoaded])

    return (
        <SafeAreaView style={!isDataLoaded ? { backgroundColor: colors.BLACK, flex: 1 } : {}}>
            {!isDataLoaded ? <Image resizeMode='center' source={require('../../../Assets/GM.gif')} style={styles.loader} /> :
                <View style={styles.rootView}>
                    {commitData.length > 0 ?
                        <FlatList
                            data={commitData}
                            renderItem={({ item }) => renderCommitItem(item, navigation)}
                            inverted={false}
                            showsVerticalScrollIndicator={false}
                            ItemSeparatorComponent={() => <View style={{ height: 24 }} />}
                        /> : <TouchableOpacity style={styles.retryBtn} onPress={() => { setLoadComplete(false) }}>
                            <Text style={[styles.retryTxt, fonts.fontNormalWhite]}>
                                {Strings.RETRY_TXT}
                            </Text>
                        </TouchableOpacity>}
                </View>}
        </SafeAreaView>
    )
}

export default GMHome