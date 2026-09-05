---
qid: ing_b22c638cb0__eli5__local
question: When do you fine-tune a VLM instead of prompting it, and what exactly do
  you unfreeze?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 169
output_tokens: 253
total_tokens: 422
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T13:19:22-05:00'
sources: []
---

Think of a Vision‑Language Model (VLM) like a smart robot chef who already knows how to read recipes (text) and look at pictures of food.  
**Prompting** is giving the chef a new recipe card: “Show me a photo of a sunset over the ocean.” The chef uses its built‑in skills to find an answer, just like you ask a question.  

**Fine‑tuning** is teaching the chef how to make a special dish that isn’t in its cookbook—say, a secret family lasagna. You hand it a bunch of lasagna photos and the exact steps, letting it practice until it remembers those details. In fine‑tuning you “unfreeze” (allow to change) the part of the model that connects visual input to language output—the weights that decide how image features turn into words. The rest stays frozen so the chef keeps its general cooking knowledge.  

Use prompting when the question fits what the VLM already knows. Use fine‑tuning when you need it to specialize in a new domain or produce consistent, high‑quality outputs for a specific task.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
