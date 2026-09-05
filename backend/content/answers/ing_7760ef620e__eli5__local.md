---
qid: ing_7760ef620e__eli5__local
question: 'Explain: Sharding | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 155
output_tokens: 272
total_tokens: 427
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T11:45:41-05:00'
sources: []
---

**Sharding in machine‑learning systems**

Imagine you have a gigantic recipe book that lists every single food item the world has ever made—tens of millions of recipes, each with its own ingredients and instructions. If you want to find the recipe for “chocolate cake” quickly, you can’t flip through the whole book; it would take forever.

**Sharding is like splitting that book into many smaller, numbered volumes**, each holding a slice of the whole collection (e.g., recipes whose names start with A–F, G–L, etc.). When someone asks for “chocolate cake,” you first look at the volume whose range includes “C” and then search inside it. Because each volume is much smaller, the lookup is fast.

In a machine‑learning system that stores millions of training examples or model checkpoints, sharding means dividing the data across several servers or databases (the volumes). Each shard contains only a portion of the total records, so queries hit fewer rows and the system scales out: more shards can be added as data grows. The key idea is **partitioning by key** (like alphabetic ranges) to keep individual parts manageable while still presenting a unified dataset.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
