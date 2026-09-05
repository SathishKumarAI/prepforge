---
qid: ing_8d46b9ffc7__eli5__local
question: 'Q: What is the "Indirect Prompt Injection" risk in RAG systems?'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 163
output_tokens: 211
total_tokens: 374
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T12:20:30-05:00'
sources: []
---

Imagine you’re giving a chef (the AI) a recipe book and asking it to cook something for you. The recipe book is your “retrieval‑augmented generation” (RAG) system: it looks up the best instructions (documents) and then writes a dish (answer).  

Indirect prompt injection happens when someone sneaks a hidden note into the chef’s kitchen that isn’t part of the recipe but still influences what they cook. In RAG terms, an attacker injects misleading or malicious text **inside the retrieved documents** instead of in the user’s own question. The AI reads that note as if it were a normal reference and incorporates its message into the final answer—so you get an unexpected output without having typed any trick words yourself.

In short: the system trusts the “source” material; if that source is tampered with, the AI can be led astray even though the user’s prompt looks innocent.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
