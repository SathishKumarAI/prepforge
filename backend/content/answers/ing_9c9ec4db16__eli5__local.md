---
qid: ing_9c9ec4db16__eli5__local
question: When would you fine-tune a model instead of using prompting or RAG?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 163
output_tokens: 256
total_tokens: 419
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T12:45:39-05:00'
sources: []
---

Think of an AI model like a Swiss‑army knife that already has many tools—cutting, screwing, opening bottles—but you need it to do a very specific job, like cutting a particular shape in wood.  
**Prompting** is giving the knife a quick instruction (“cut a triangle”). It works if the shape is simple and the knife’s existing blades can handle it.  
**RAG (Retrieval‑Augmented Generation)** is adding a clipboard of extra information that the knife can read while cutting—useful when you need fresh facts but still rely on the same basic tools.  

**Fine‑tuning** is like taking the knife to a specialist who reshapes its blades so it cuts exactly that shape every time, no matter what. You do this when:  
1. The task consistently needs a new skill the base model lacks (e.g., translating legal contracts).  
2. Accuracy and speed are critical—prompt tricks or extra data can’t guarantee consistency.  

So, fine‑tune when you want the AI to *become* a dedicated expert rather than just *ask* it for help.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
