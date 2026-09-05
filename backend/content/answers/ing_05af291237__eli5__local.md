---
qid: ing_05af291237__eli5__local
question: 'Explain: The April 2026 Anthropic Block-and-Reverse Incident'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 161
output_tokens: 250
total_tokens: 411
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T08:44:24-05:00'
sources: []
---

**The “Block‑and‑Reverse” incident (April 2026, Anthropic)**

Imagine a smart robot that writes stories for you. Before it starts, the robot reads a short “block” of text you give it—like a recipe card. The robot then flips that block upside down and reads it backward, so the words appear in reverse order. This flipping trick is what we call **Block‑and‑Reverse**: the system takes an input segment (the block), reverses its characters or tokens, and feeds this reversed chunk back into its own processing loop.

Anthropic’s model accidentally used this trick on a large part of the user prompt. The reversed text made the model think it was dealing with fresh, unrelated content. Because the model had no memory of what came before, it started generating nonsensical or duplicated sentences—like a storyteller who forgets the beginning and repeats the ending over and over.

In short: the model mistakenly “rewrote” part of its own prompt backwards, broke its internal continuity, and produced chaotic output until engineers fixed the code that handled block reversal.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
