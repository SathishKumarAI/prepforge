---
qid: ing_592a537efc__eli5__local
question: Design the IR and pass pipeline for a compiler targeting a spatial dataflow
  accelerator. Where does the memory-residency decision live, and why?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 176
output_tokens: 265
total_tokens: 441
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T10:57:47-05:00'
sources: []
---

Imagine the compiler is a chef preparing a meal for a kitchen that can only cook one dish at a time but has many burners (the spatial dataflow accelerator). The **IR** (Intermediate Representation) is like a recipe card written in plain language: it lists every ingredient, step, and how long each step takes. The **pass pipeline** is the chef’s prep routine—first you sort ingredients, then decide which ones to chop now or later, then arrange them on burners so that while one burner cooks, another can start.

The **memory‑residency decision** (whether data stays in fast local memory or must be fetched from slower storage) belongs in the early “organize ingredients” pass. This is because knowing where each piece of data lives determines how you schedule the steps: if a datum is already on the burner, you can start cooking immediately; if it’s still in the pantry (main memory), you need to bring it over first. Placing this decision early lets all later passes—like “schedule burners” and “optimize parallelism”—work with a clear picture of data availability, ensuring the accelerator runs as smoothly as possible.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
