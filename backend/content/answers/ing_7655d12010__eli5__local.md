---
qid: ing_7655d12010__eli5__local
question: 'Explain: How services find each other — System Design: What is Service
  Discovery?'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 164
output_tokens: 220
total_tokens: 384
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T11:43:49-05:00'
sources: []
---

**Service discovery** is like a city’s phone book for computer programs. Imagine you’re at a big festival where many stalls (services) sell food, drinks, and gadgets. To get a drink, you need to know which stall sells it and how to reach it. Instead of memorizing every stall’s address, you ask the *festival guide*—the discovery system. The guide keeps an up‑to‑date list: “Water stall is at gate 3, coffee at booth B2.” When a new stall opens or moves, the guide updates its map automatically.

In software, each micro‑service registers itself with a central registry (the guide) and can query that registry to find others. This keeps services loosely coupled, lets them scale independently, and ensures they always know where to send requests without hard‑coding addresses.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
