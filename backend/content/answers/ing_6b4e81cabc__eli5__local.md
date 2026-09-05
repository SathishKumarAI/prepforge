---
qid: ing_6b4e81cabc__eli5__local
question: 'Explain: The Decode Phase (Token Generation) — Inference Fundamentals'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 160
output_tokens: 235
total_tokens: 395
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T11:25:58-05:00'
sources: []
---

Imagine a recipe book that only knows how to write one word at a time.  
During the **decode phase** (or *token generation*), the model reads all the words it has already written, then decides what the next word should be—just like a chef tasting a soup and adding a pinch of salt.

A **token** is simply a piece of text that the model understands—often a whole word or part of one.  
The model looks at the current sequence of tokens, runs them through its internal network, and produces a probability for every possible next token. It then picks the most likely one (or samples from the top choices) and appends it to the growing sentence.

This step repeats until the model reaches an end‑of‑sentence marker or a set length. Each chosen token shapes what comes next, so the decode phase is the “storytelling” part of inference, turning raw probabilities into coherent text.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
