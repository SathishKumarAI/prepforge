---
qid: ing_8c9e2826cb__eli5__local
question: Design the caching strategy for an LLM-backed feature. What can you cache
  and what can't you?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 167
output_tokens: 248
total_tokens: 415
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T12:19:32-05:00'
sources: []
---

Imagine your AI feature is a busy café that serves custom coffee blends (the model’s answers).  
**What you can “cache”** are the *ingredients* that stay the same every time—like the recipe for a latte or the list of beans from one supplier. In practice, this means storing:
- **Prompt templates** (the fixed question format)  
- **Pre‑computed embeddings** for known user queries  
- **Model outputs for identical prompts** (so you can serve the same answer instantly)

**What you cannot cache** is anything that changes with each cup—like the exact amount of milk or the customer’s personal preference. For an LLM, this translates to:
- The *real‑time inference* result for a new, unique prompt  
- Any dynamic data (user context, live sensor values) that feeds into the prompt

So, keep the static parts in memory and recompute only the fresh, user‑specific content each time. This keeps latency low while still delivering personalized answers.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
