---
qid: ing_f0240addfb__eli5__local
question: 'Explain: Self-Consistency (Majority Voting) — Ensemble Methods'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 160
output_tokens: 189
total_tokens: 349
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T14:54:49-05:00'
sources: []
---

Imagine a group of friends trying to guess the number of jellybeans in a jar. Each friend looks at the jar from a different angle and whispers their estimate. The final answer is simply the number that most friends say—if three say “42” and two say “38,” we go with 42. In AI, each “friend” is an independent model (or a slightly altered version of the same model). They all process the same input but may make different predictions because they were trained on slightly varied data or initialized differently. By letting every model vote for its answer and then picking the majority’s choice, we reduce the chance that one mistaken prediction pulls the whole system wrong. This “self‑consistency” approach is a simple, powerful way to boost accuracy without complex math.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
