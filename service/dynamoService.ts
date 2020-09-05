import * as AWS from 'aws-sdk';

const dynamoDb = new AWS.DynamoDB({apiVersion: '2012-08-10'});

export const validateUser = async (phoneNumber: string, password: string) => {
    const query = {
        Key: {
            'phoneNumber': {
                S: phoneNumber
            }
        },
        TableName: 'quarantineApplication'
    };
    const user = await dynamoDb.getItem(query).promise();
    if (user === null || Object.keys(user).length === 0 || !user.Item) {
        return null;
    }

    return {
        isAdmin: user.Item.isAdmin.BOOL,
        validUser: user.Item.password.S === password,
        user
    };
};

export const upsertUser = async (item: any) => {
    const query = {
        Item: item,
        TableName: 'quarantineApplication'
    };
    const result = await dynamoDb.putItem(query).promise();
    if (result.$response.httpResponse.statusCode !== 200) {
        return false;
    }

    return true;
};