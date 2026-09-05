---
qid: ing_cba28299a6__eli5__local
question: Design an example store for dynamic few-shot selection. What do you get,
  and what does it cost you?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 169
output_tokens: 206
total_tokens: 375
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T13:57:38-05:00'
sources: []
---

Think of the AI as a chef who has to cook a new dish on demand but only remembers a handful of recipes (the “few‑shot” examples).  
The **store** is like a smart pantry that keeps a tiny, well‑organized shelf of ingredients: a few labeled images or texts that the chef can pull out quickly when asked for a new task.  

When you ask the AI to classify a picture of a dog, it grabs one or two similar pictures from the pantry, uses them as a quick reference, and then dishes up an answer.  
What you get is a fast, adaptable model that needs almost no extra training data.  
The cost is that every time you change the task (e.g., switch to cars), you must update the pantry with new examples, and storing those few samples uses very little memory compared to full‑scale retraining.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
