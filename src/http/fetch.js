
export const $http = async (data) => {
    const options = {
        body: JSON.stringify(data || {}),
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