const { Configuration, OpenAIApi } = require("openai");

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

const generateImage = async(req, res) =>{
    const { prompt, size } = req.body; 

    const imageSize = size === 'small' ? '256X256' : size === 'medium' ? '512X512' : '1024X1024'; 

    try {
        const response = await openai.createImage({
            prompt: 'Insanity in cat form', 
            n: 1, 
            size: imageSize, 
        }); 

        const imgUrl = response.data.data[0].url; 

        res.status(200).json({
            success: true, 
            data: imgUrl
        })
    } catch (error) {
        if (error.response) {
            console.log(error.response.status);
            console.log(error.response.data);
          } else {
            console.log(error.message);
        }

        res.status(400).json({
            success: false, 
            error: 'The image could not be generated'
        })
    }
}

module.exports = { generateImage }; 