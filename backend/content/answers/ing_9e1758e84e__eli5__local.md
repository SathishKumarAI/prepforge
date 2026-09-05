---
qid: ing_9e1758e84e__eli5__local
question: 'Explain: 🧠 LLM & Transformer Fundamentals — Cheatsheet'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 160
output_tokens: 241
total_tokens: 401
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T12:48:00-05:00'
sources: []
---

Think of a transformer as a giant **library assistant** that reads every book (sentence) in the world and learns to predict what word comes next.  
When you ask it a question, it first breaks your text into small “tokens” (like individual words or sub‑words). Each token gets a hidden number called an *embedding*—a compact code that captures its meaning.

The transformer then uses **self‑attention**: every token looks at all the others and decides how much weight to give them. Imagine each book page whispering hints to every other page; the assistant collects these whispers, mixes them together, and produces a new set of numbers for each position.  
These new numbers are fed through several layers (the library’s shelves), each time refining its understanding.

A **large language model** (LLM) is just many such transformers stacked together, trained on trillions of tokens so that the assistant becomes very good at guessing the next word—almost like a human who has read an entire encyclopedia and can finish any sentence for you.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
