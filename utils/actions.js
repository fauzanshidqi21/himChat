'use server'

import OpenAI from "openai"

const openai = new OpenAI({
    apiKey:'YOUR_KEY',
})

export const generateChatResponse = async (chatMessages) =>{
    try {
        const response = await openai.chat.completions.create({
            messages:[
                { role: 'system',content: 'you are a helpful assistant' },
                ...chatMessages
            ],
            model:'gpt-4-turbo-preview',
            temperature: 0,
        })
        
        return response.choices[0].message
    } catch (error) {
        console.log(error)
        return null
    }
    
}

export const getExistigTour = async ({city,country}) => {
    return null
}
export const generateTourResponse = async ({city,country}) => {
    return null
}
export const createNewTour = async ({tour}) => {
    return null
}