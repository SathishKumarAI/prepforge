---
qid: ing_0b32ae0f41__eli5__local
question: 'Explain: Provenance — pydantic-ai \u00b7 PyPI'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 163
output_tokens: 217
total_tokens: 380
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T08:53:21-05:00'
sources: []
---

Think of **provenance** as the “family tree” for a piece of data that’s been fed into an AI model.  
When you use *pydantic‑ai* (a tool that helps Python programs send structured data to OpenAI), provenance records where each field came from, how it was transformed, and which version of your code produced it.  

Imagine baking a cake: the recipe lists ingredients (raw data), the oven temperature (preprocessing step), and the baker’s name (the code version). Provenance keeps all that info so you can later ask, “Which ingredient caused the model to give this answer?” or “Did I use the correct temperature?”  

In pydantic‑ai, each field in a Pydantic model gets tagged with its source and any changes it underwent. This makes debugging easier and ensures reproducibility—just like tracing back every step of that cake’s creation.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
