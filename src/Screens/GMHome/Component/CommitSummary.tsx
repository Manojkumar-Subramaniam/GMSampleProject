import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import GMCards from '../../../Bricks/GMCards'
import gitCommitApiResponseModal from '../../../Modals/gitCommitModal'
import styles from '../Styles/CommitSummaryStyles'
import { Strings, Fonts } from '../../../Utils'

interface Props {
    data: gitCommitApiResponseModal
    onpress: () => void
}

const CommitSummary: React.FC<Props> = (props) => {
    return (
        <GMCards onPress={props.onpress}>
            <View style={styles.rootView}>
                <CommitItem isLeftEllipse={true} field={Strings.COMMIT_HASH} value={props.data.sha} />
                <CommitItem field={Strings.COMMIT_AUTHOR} value={props.data.commit.author.name} />
                <CommitItem field={Strings.COMMIT_MESSAGE} value={props.data.commit.message} />
            </View>
        </GMCards>
    )
}

interface commitItemProps {
    isLeftEllipse?: boolean
    field: string
    value: string
}

const CommitItem: React.FC<commitItemProps> = (props) => {
    return (
        <Text numberOfLines={1} style={Fonts.fontNormalBlack}>
            <Text style={Fonts.fontNormalHighlighted} >{props.field}</Text>
            <Text > {Strings.COLON}</Text>
            <Text ellipsizeMode={props.isLeftEllipse ? 'head' : 'tail'}>{props.value}</Text>
        </Text>
    )
}

export default CommitSummary
