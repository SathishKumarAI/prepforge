---
qid: ing_1b443bd750__eli5__local
question: 'Explain: Zero-Shot vs. Few-Shot Efficiency — Prompt Engineering Fundamentals'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 162
output_tokens: 270
total_tokens: 432
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T09:19:24-05:00'
sources: []
---

Imagine you’re a chef who has never cooked a particular dish before (zero‑shot) versus one who’s tried it a few times and remembers the key steps (few‑shot). In AI, “prompt engineering” is how we tell the model what to do—like giving cooking instructions.  

With **zero‑shot** efficiency, the model gets only the recipe title: *“Make lasagna.”* It must use everything it learned from countless other recipes to guess how to combine layers of pasta, sauce, cheese, and meat—all without prior examples of lasagna itself.  
With **few‑shot** efficiency, we hand it a short sample: *“First layer: noodles; second layer: béchamel; third layer: mozzarella.”* Those few lines cue the model’s memory, letting it fill in the rest more accurately.  

So, zero‑shot is like improvising from scratch; few‑shot is like refining a recipe with a handful of hints—both rely on the same underlying cooking skills (the AI’s training), but the latter usually works faster and better because it has concrete clues to latch onto.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
