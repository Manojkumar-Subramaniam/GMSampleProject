import React from 'react'
import { View, Text } from 'react-native'
import { useRoute } from '@react-navigation/native';
import styles from '../Styles'
import { Strings, Fonts } from '../../../Utils'

const CommitInfo: React.FC = () => {

    const route = useRoute()
    const { data } = route.params

    return (
        <View style={styles.rootView}>
            <CommitItem field={Strings.COMMIT_HASH} value={data.sha} />
            <CommitItem field={Strings.COMMIT_AUTHOR} value={data.commit.author.name} />
            <CommitItem field={Strings.COMMIT_MESSAGE} value={data.commit.message} />
        </View>
    )
}

interface commitItemProps {
    field: string
    value: string
}

const CommitItem: React.FC<commitItemProps> = (props) => {
    return (
        <Text style={[Fonts.fontNormalBlack, { flexDirection: 'row' }]}>
            <Text style={Fonts.fontNormalHighlighted} >{props.field}</Text>
            <Text>{Strings.COLON}</Text>
            <Text>{props.value}</Text>
        </Text>
    )
}

export default CommitInfo