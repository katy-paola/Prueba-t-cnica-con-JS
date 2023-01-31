const getCatPhrase = async() => {
    try {
        const response = await fetch('https://catfact.ninja/fact')
        const {fact} = await response.json()
        return fact
    } catch (error) {
        return 'No cat facts for you!'
    }
}

export default getCatPhrase