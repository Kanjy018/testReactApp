export type AmplifyDependentResourcesAttributes = {
    "auth": {
        "Assignment1Cloud": {
            "IdentityPoolId": "string",
            "IdentityPoolName": "string",
            "UserPoolId": "string",
            "UserPoolArn": "string",
            "UserPoolName": "string",
            "AppClientIDWeb": "string",
            "AppClientID": "string"
        }
    },
    "storage": {
        "imagestorage": {
            "BucketName": "string",
            "Region": "string"
        }
    },
    "api": {
        "notesapp": {
            "GraphQLAPIKeyOutput": "string",
            "GraphQLAPIIdOutput": "string",
            "GraphQLAPIEndpointOutput": "string"
        }
    },
    "analytics": {
        "assignment1cloud": {
            "Region": "string",
            "Id": "string",
            "appName": "string"
        }
    }
}