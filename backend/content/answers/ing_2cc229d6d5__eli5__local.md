---
qid: ing_2cc229d6d5__eli5__local
question: 'Explain: A customer asks: "Should we fine-tune, use RAG, or just prompt
  better?" Give me your decision framework.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 175
output_tokens: 305
total_tokens: 480
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T09:46:26-05:00'
sources: []
---

**Think of your AI as a chef in a kitchen.**

* **Fine‑tuning** = training the chef on a new cookbook so they can cook dishes that are exactly like what you want. Use it when you need consistent, high‑quality recipes that fit a specific style or domain (e.g., medical advice).  
* **RAG (Retrieval‑Augmented Generation)** = giving the chef a pantry of fresh ingredients while they cook. The chef keeps their base recipe but pulls in up‑to‑date facts from documents as needed—great for answering questions about recent events or niche topics.  
* **Prompt engineering** = telling the chef how to arrange their station and what to ask first, without changing their training. Best when you want quick tweaks, limited data, or only a few sentences of output.

**Decision checklist**

| Situation | Choose |
|-----------|--------|
| You have many domain‑specific examples and need reliable style | Fine‑tune |
| You need up‑to‑date facts or occasional context | RAG |
| You want fast results with minimal cost | Prompt engineering |

Use the chef’s pantry (RAG) when new information matters, train them fully (fine‑tune) for deep expertise, and simply give clear instructions (prompt) for lightweight tasks.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
