---
qid: ing_b2c3739326__eli5__local
question: 'Explain: State Management Across Tool Calls — Architecture Patterns'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 157
output_tokens: 254
total_tokens: 411
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T13:20:21-05:00'
sources: []
---

Imagine you’re cooking a big meal and each recipe step is a separate kitchen station (a “tool”). The stove, the fridge, the mixing bowl are all parts of your overall kitchen.  
**State management** is like keeping track of what ingredients have already been chopped, how much sauce remains, or whether the dough has risen enough. When you move from one station to another, you need a simple way to pass that information so every step can finish correctly.

Two common patterns help:

1. **Central Kitchen Counter (Single‑Source State)** – All stations write and read from one shared notebook. Every time a station finishes, it updates the notebook; the next station reads the latest entry before starting.  
2. **Station‑Specific Shelves (Local State with Hand‑Off)** – Each station keeps its own shelf of items. When it’s done, it hands over only what the next station needs (e.g., a jar of sauce). This reduces clutter but requires careful hand‑off rules.

Both patterns let you keep your cooking workflow organized and prevent steps from “forgetting” where they left off.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
