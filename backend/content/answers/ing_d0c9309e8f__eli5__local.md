---
qid: ing_d0c9309e8f__eli5__local
question: 'Explain: ​ Response format — Structured output - Docs by LangChain'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 160
output_tokens: 228
total_tokens: 388
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T14:06:10-05:00'
sources: []
---

Think of a recipe book that not only tells you what ingredients to use, but also lays out exactly how each step should look: the number of spoons, the temperature, and the order of actions.  
In AI, *structured output* works the same way. Instead of just giving a free‑form text answer, the model is asked to fill in a pre‑defined “template” – like a form with boxes for name, date, address, etc. LangChain’s **Structured Output** feature turns that template into a small set of rules: it tells the AI which fields are required, what type of data each field holds (text, number, date), and even gives examples of valid answers.  
When you ask a question, the model returns a tidy JSON object that matches the template. This makes it easy for your program to read the answer directly—no guessing or extra parsing needed. It’s like having a perfectly organized recipe card that any kitchen can follow without confusion.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
