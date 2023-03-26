import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

// fire off the upload to S3
export async function checkText(text) {
    try {
        const openai = new OpenAIApi(configuration);

        let text =  `Black-on-black ware is a 20th- and 21st-century pottery tradition developed by the Puebloan Native American ceramic artists in Northern New Mexico. Traditional reduction-fired blackware has been made for centuries by pueblo artists. Black-on-black ware of the past century is produced with a smooth surface, with the designs applied through selective burnishing or the application of refractory slip. Another style involves carving or incising designs and selectively polishing the raised areas. For generations several families from Kha'po Owingeh and P'ohwhóge Owingeh pueblos have been making black-on-black ware with the techniques passed down from matriarch potters. Artists from other pueblos have also produced black-on-black ware. Several contemporary artists have created works honoring the pottery of their ancestors.` 

        const response = await openai.createCompletion({
          model: "text-davinci-001",
          prompt: `Extract keywords from this text:
          \n\n ${text} 
          `,
          temperature: 0.4,
          max_tokens: 64,
          top_p: 1,
          frequency_penalty: 0,
          presence_penalty: 0,
        });
        //Use the putobjectCommand.
        return response;
    } catch (err) {
        console.log("Error", err);
    }
}
