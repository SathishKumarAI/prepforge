---
qid: ing_f30037a319__eli5__local
question: 'Explain: Q33: Describe strategies for LLM application security'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 159
output_tokens: 268
total_tokens: 427
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T14:59:15-05:00'
sources: []
---

Imagine your AI app is a kitchen that can cook any recipe from the internet.  
The **security** of that kitchen means keeping two things safe:  

1. **Ingredients (data)** – only trusted, clean ingredients should go in. Use *data‑validation filters* like a strainer that blocks spam or malicious text before it reaches the model.  
2. **Cooking process (model inference)** – the stove must not be misused to create harmful food. Apply *input sanitization* and *output monitoring*: check prompts for dangerous instructions, and scan the model’s replies for disallowed content.

Other good habits are:  

- **Least‑privilege access** – give each user only the tools they need, like giving a sous‑chef just a knife, not the whole kitchen.  
- **Audit logs** – keep a recipe book of every request so you can trace any mistake later.  
- **Rate limiting** – prevent someone from over‑loading the stove by setting a cooking cap per minute.

By treating data as fragile ingredients and inference as a powerful stove that must be carefully managed, you keep your AI kitchen safe and reliable.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
