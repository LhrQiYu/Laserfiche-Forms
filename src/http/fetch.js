export const $http = async ({ data = {}, packageName = '' }) => {
    const result = Object.entries(data).reduce((current, [Name, value]) => {
        return [...current, {Name,value}]
    }, [])
    const staticJSON = {
        "Initiator": {
            "InitiatorDisplayName": "workflow",
            "InitiatorName": "Workflow"
        },
        "InstanceCreationFlags": 0,
        "Origin": "string content",
        "Originator": "string content",
        "Parametercollection": result,
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
    try {
        const { status = 400, ok = false } = await fetch('/api/instances', options)
        return {
            status,
            ok: (status === 200 && ok)
        };
    } catch (error) {
        throw new Error(error);
    }
}