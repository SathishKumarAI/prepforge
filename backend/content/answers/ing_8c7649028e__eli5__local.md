---
qid: ing_8c7649028e__eli5__local
question: 'Explain: When to Fine-Tune — Fine Tuning Strategies'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 159
output_tokens: 254
total_tokens: 413
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T12:19:13-05:00'
sources: []
---

**Fine‑tuning is like customizing a recipe for your taste.**  
Imagine you have a basic soup (the pre‑trained model) that already tastes good but isn’t exactly what you want. If you need the soup to be salty, spicy, or vegetarian, you add just enough seasoning—no need to start from scratch. Fine‑tuning works the same way: you keep the core knowledge the AI learned from millions of examples and adjust only a few extra “spices” (the last layers) so it speaks your language, follows your style, or solves a specific task.

**When to fine‑tune?**

1. **Specialized tasks** – e.g., legal document classification or medical diagnosis.  
2. **Domain vocabularies** – industry jargon that the base model rarely sees.  
3. **Performance gaps** – when the default accuracy is too low for your needs.  

If the problem can be solved by a general model, skip fine‑tuning; it saves time and keeps the AI’s broad knowledge intact. Fine‑tune only when you need that extra flavor.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
