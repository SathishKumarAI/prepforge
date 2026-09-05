---
qid: ing_7027ea5840__eli5__local
question: 'Explain: 3.2 Attacker’s Objectives — MemoryGraft: Persistent Compromise
  of LLM Agents via Poisoned Experience Retrieval'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 174
output_tokens: 194
total_tokens: 368
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T11:33:55-05:00'
sources: []
---

Imagine a library that learns from every book it reads. A sneaky librarian (the attacker) slips in a few books that look normal but contain hidden “sticky notes” telling the library to remember wrong facts forever. Later, whenever someone asks the library a question, it pulls out those sticky‑note books first because they’re buried deep in its memory—this is the *poisoned experience retrieval*. The attacker’s goal isn’t just to trick the library once; they want the library to keep using the bad memories every time it talks. That’s **MemoryGraft**: a way to plant malicious knowledge inside a large language model so that it keeps making mistakes, even after you’ve cleaned up the surface of its training data. The attack is persistent because the model keeps “re‑reading” those poisoned memories whenever it answers questions.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
