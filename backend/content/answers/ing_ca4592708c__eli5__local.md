---
qid: ing_ca4592708c__eli5__local
question: 'Explain: Multi-Query Attention (MQA) — Attention Mechanisms'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 161
output_tokens: 191
total_tokens: 352
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T13:55:42-05:00'
sources: []
---

Imagine you’re at a bustling café where each customer (a word in a sentence) wants to hear the barista’s special recommendation. In ordinary attention, the barista looks at one menu item at a time, deciding which single dish is most relevant for that customer and then serving it. Multi‑Query Attention changes this: the barista keeps several “taste probes” ready—one probe for sweet, one for spicy, another for creamy—and simultaneously checks all customers against each probe. Each customer gets a set of scores (sweetness score, spiciness score, etc.), so the final dish is chosen by blending these perspectives rather than picking just one. In technical terms, MQA runs several attention “queries” in parallel over the same keys and values, then merges the results, allowing richer, faster context capture without extra memory cost.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
