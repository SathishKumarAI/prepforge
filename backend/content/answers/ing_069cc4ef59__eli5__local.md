---
qid: ing_069cc4ef59__eli5__local
question: 'Explain: 3.2. Self-Registration — System Design: What is Service Discovery?'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 167
output_tokens: 207
total_tokens: 374
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T08:46:05-05:00'
sources: []
---

**Service discovery** is like a phone book for software components that live inside a big, ever‑changing building.

Imagine you’re at a hotel where every room can play music, turn on lights, or order food. When you arrive, you call the front desk (the *service registry*) and ask, “Which room has the music system?” The desk looks up the room number and tells you how to reach it—just like a computer program asks a registry for the address of another service (e.g., a data‑labeling micro‑service).  

If a new music room opens or an old one closes, the front desk updates its list. Programs can then keep asking the registry instead of guessing addresses, so they always find the right component even as the system grows or shrinks. This dynamic lookup is what we call **service discovery** in machine‑learning pipelines.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
