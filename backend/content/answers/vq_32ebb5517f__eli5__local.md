---
qid: vq_32ebb5517f__eli5__local
question: What are the types of Calculated columns available ?
topic: DSA
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 158
output_tokens: 318
total_tokens: 476
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T08:07:57-05:00'
sources: []
---

Think of a calculated column like a recipe you add to your cookbook.  
There are **two kinds** of recipes you can use:

1. **Stored (or computed) columns** – the dish is actually cooked and kept in the pantry. Every time you open the book, the finished food is already there; it just takes a second to serve. In a database this means the value is calculated once, written out, and stored on disk.

2. **Virtual (or non‑stored) columns** – the recipe stays on paper. When someone asks for the dish, you read the instructions and whip it up right then. The database re‑runs the calculation each time you query it; nothing is saved permanently.

So a calculated column can be *persisted* (stored) or *dynamic* (virtual), just like choosing between pre‑made meals and cooking fresh on demand.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
