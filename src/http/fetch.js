export const $http = async ({ data = [], packageName }) => {
    const staticJSON = {
        "Initiator": {
            "InitiatorDisplayName": "workflow",
            "InitiatorName": "Workflow"
        },
        "InstanceCreationFlags": 0,
        "Origin": "string content",
        "Originator": "string content",
        "Parametercollection": data,
        "WorkflowName": packageName
    }
    const options = {
        body: JSON.stringify(staticJSON),
        headers: {
            'Content-Type': 'application/json'
        },
        method: "POST",
        referrer: 'no-referrer',
        cache: 'no-cache',
    }
    const { status = 400, ok = false } = await fetch('/api/instances', options)
    return (status === 200 && ok);
    // const result = await promiser.text()
}