const {
    GoogleGenerativeAI,
    HarmCategory,
    HarmBlockThreshold,
  } = require("@google/generative-ai");
  
  const apiKey = process.env.NEXT_GEMINI_API_KEY
  ;
  const genAI = new GoogleGenerativeAI(apiKey);
  
  const model = genAI.getGenerativeModel({
    model: "gemini-2.0-flash-exp",
  });
  
  const generationConfig = {
    temperature: 1,
    topP: 0.95,
    topK: 40,
    maxOutputTokens: 8192,
    responseMimeType: "application/json",
  };
  
    export const AIDesignIdea = model.startChat({
      generationConfig,
      history: [
        {
          role: "user",
          parts: [
            {text: "Based on Logo of type Modern Mascot Logos Generate a text prompt to create Logo for Logo title/Brand name : Indian Spice with description: Indian Restaurant and referring to prompt: A vibrant logo featuring a friendly, animated character with a playful expression. The character is dressed in a classic uniform, complete with a distinctive accessory that adds personality. In one hand, they hold a signature item that represents the brand, while the other elements of the design-such as small decorative touches or natural accents-enhance the overall look. The background consists of a bold, circular design with subtle accents to highlight the character. Below, the brand name is displayed in bold, stylized lettering, with a slight curve and complementary decorative lines. The overall style is fun, welcoming, and full of character.. Give me 4/5 Suggestion of logo idea (each idea with maximum 4-5 words), Result in JSON format with ideas field I"},
          ],
        },
        {
          role: "model",
          parts: [
            {text: "```json\n{\n  \"ideas\": [\n    \"Chef Elephant with spices\",\n    \"Smiling Mango Holding Naan\",\n    \"Tiger Chef with Curry\",\n     \"Friendly Peacock Serving Biryani\",\n    \"Animated Ganesha With Samosa\"\n  ]\n}\n```\n"},
          ],
        },
      ],
    });
    export const AILogo = model.startChat({
      generationConfig,
      history: [
        {
          role: "user",
          parts: [
            {text: "Generate a text prompt to create Logo for Logo Title/Brand name : Pharmaceuticals,with description: Medicines, with Color combination of Forest Greens, also include the {logoIdea} and include Custom Luxury Logo Designs design idea and Referring to this Logo Prompt:Create a set of luxurious, elegant, and professional logos with a gold metallic finish on a dark background. Include a variety of themes, such as animals, letters, symbols, and nature-inspired designs. Each logo should convey sophistication, premium quality, and modern aesthetics, suitable for any brand or industry.  Give me result in JSON portal with prompt field only"},
          ],
        },
        {
          role: "model",
          parts: [
            {text: "```json\n{\n  \"prompt\": \"Create a custom luxury logo design for a pharmaceuticals brand. The logo should represent medicines and health, utilizing a color combination of forest greens to convey natural well-being. The design should be sophisticated, premium, and modern, reflecting a sense of trust and high quality. Inspired by the following prompt: 'Create a set of luxurious, elegant, and professional logos with a gold metallic finish on a dark background. Include a variety of themes, such as animals, letters, symbols, and nature-inspired designs. Each logo should convey sophistication, premium quality, and modern aesthetics, suitable for any brand or industry.'  {logoIdea: Consider incorporating abstract botanical elements or geometric shapes suggestive of growth, health, or pharmaceutical precision.  Avoid overtly medical imagery like pills or stethoscopes. Explore options that blend the forest green palette with subtle gold accents for a luxurious feel, referencing the sophisticated, elegant, and professional nature of the prompt. Aim for a logo that is both memorable and indicative of a high-end pharmaceutical brand.}\"\n}\n```\n"},
          ],
        },
      ],
    });
  
  
    // const result = await chatSession.sendMessage("INSERT_INPUT_HERE");
    // console.log(result.response.text());
 