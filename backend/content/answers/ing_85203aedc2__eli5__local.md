---
qid: ing_85203aedc2__eli5__local
question: 'Explain: Multi-Agent Collaboration — Agent Building Guide'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 157
output_tokens: 278
total_tokens: 435
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T12:07:48-05:00'
sources: []
---

**Imagine a group of friends building a giant Lego castle together.**  
Each friend is an *agent*—a small program that has its own goal (e.g., place the tallest tower, keep the roof stable). They can’t finish the castle alone because some parts need to be done at the same time. So they share two things:  

1. **A common map of the castle** – this is the *shared environment*, where each agent sees what others are doing and knows which blocks are already placed.  
2. **Tiny notes on their phones** – these are *messages* (like short text commands) that let an agent tell another, “I’m putting a window here, so you can start the balcony.”  

Agents follow simple rules: they look at the map, read any notes, decide what block to place next, and then update the map and send new notes. Because everyone follows the same rules and keeps the map up‑to‑date, the castle grows smoothly, even though no single friend knows everything. That’s multi‑agent collaboration in machine learning: many little programs working together through a shared state and simple communication to achieve a big task.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
