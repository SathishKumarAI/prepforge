---
qid: ing_876be8e7e3__eli5__local
question: 'Explain: Models | Sarvam API Docs'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 156
output_tokens: 238
total_tokens: 394
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T12:10:47-05:00'
sources: []
---

Think of an **ML model** as a very smart recipe book.  
When you give it a new dish (input data), the book looks at all the recipes it has learned and tells you how to cook it (output).  

In Sarvam’s API, each *model* is one of those recipe books. It has been trained on many examples, so it knows what kind of output to produce for different kinds of inputs.  
- **Input**: The raw data you send (e.g., a sentence, an image, or numbers).  
- **Output**: What the model predicts—maybe a label (“spam” vs “not spam”), a translation, a price estimate, etc.  

You choose which recipe book to use by selecting a specific *model* in the API call. Once you pick it, Sarvam runs that trained recipe on your input and returns the result. The whole process is just: give data → model reads it → gives back an answer, exactly like following a recipe to finish a dish.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
