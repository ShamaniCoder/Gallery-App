'use strict'

export const fetchData = async (url) => {
    const response = await fetch(url)
    if (!response.ok) {
        throw new Error('Cannot Fetch Data')
    }
    return response.json()
} 