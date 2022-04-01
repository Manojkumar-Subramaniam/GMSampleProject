import React from 'react'
import { View, Text } from 'react-native'
import GMCards from '../../../Bricks/GMCards'

interface Props {

}

const CommitSummary: React.FC<Props> = () => {
    return (
        <GMCards>
            <View style={{ margin: 30, height: 80, width: 100 }}>
                <Text>
                    Hello world
                </Text>
            </View>
        </GMCards>
    )
}

export default CommitSummary
