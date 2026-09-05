---
qid: ing_7eedaaff42__eli5__local
question: 'Explain: Default generate — Text generation \u00b7 Hugging Face'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 163
output_tokens: 254
total_tokens: 417
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T11:58:04-05:00'
sources: []
---

**Default generate – the “automatic storyteller” of Hugging Face**

Imagine a robot that writes stories for you. You give it a starting sentence (the *prompt*). The robot then picks one word at a time, looking back at everything it has already written to decide what comes next. It keeps doing this until it reaches a stop‑signal: the story ends when it hits a special “end of text” marker or when you tell it to stop after a certain number of words.

In Hugging Face’s library, that robot is called **`model.generate()`**.  
* Prompt = your starting text  
* Tokens = individual words (or sub‑words) the model produces  
* Stop token = an invisible “stop” marker like `</s>` telling the model to finish  
* Max length = how many tokens it can write before giving up  

So, *default generate* is simply: give a prompt → let the model keep adding words until it naturally ends or reaches the set limit. No math needed—just a friendly, ever‑ready storyteller.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
