---
qid: ing_ad418b60bc__eli5__local
question: 'Explain: Set environment variables first — Ai Evals Complete Guide Langwatch
  Langfuse'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 164
output_tokens: 239
total_tokens: 403
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T13:11:57-05:00'
sources: []
---

Imagine you’re cooking a fancy recipe that needs secret spices, but the kitchen (your computer) doesn’t know what those spices are unless you tell it first. Setting *environment variables* is like writing a note on the fridge that says “Add 1 teaspoon of ‘API_KEY’ here” and “Use ‘MODEL=GPT‑4’.”  
For AI evaluations with **Langwatch** or **Langfuse**, those notes let each tool find the right API keys, model names, and endpoint URLs without hard‑coding them into your code.  

*Environment variable*: a named piece of data stored by the operating system that programs can read at runtime.  
By exporting these variables before you run your evaluation script—e.g., `export LANGWATCH_KEY=…` or `export LANGFUSE_URL=…`—you keep sensitive information out of source files and let the tools automatically pick up the correct credentials every time they start. This keeps your code clean, secure, and portable across machines.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
