---
qid: ing_92091f2706__eli5__local
question: 'Explain: When to Use Each Pattern — Production Rag At Scale'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 159
output_tokens: 282
total_tokens: 441
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T12:29:21-05:00'
sources: []
---

Imagine you’re running a large kitchen that serves millions of diners every day.  
There are two main ways you can handle orders:  

**1. Batch‑mode (the “cook‑once, serve‑later” pattern)** – You collect all the requests for a period, cook them together in one big batch, and then deliver the finished dishes. This is great when you need consistency, can afford to wait a little, and want to reuse ingredients efficiently. It’s like preparing a huge pot of soup that everyone gets from the same pot.  

**2. Streaming‑mode (the “cook on demand” pattern)** – Each order triggers an instant cooking process. The kitchen reacts immediately, keeping up with the flow of diners. This is essential when speed matters and you can’t wait for a batch to finish; it’s like a personal chef preparing each dish as soon as the customer orders.

Use **batch‑mode** when latency is low priority but cost and consistency matter (e.g., nightly reports). Use **streaming‑mode** when every millisecond counts—real‑time recommendations, live translations, or fraud alerts. In practice, many kitchens blend both: they batch some tasks while streaming others to balance speed, cost, and reliability.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
