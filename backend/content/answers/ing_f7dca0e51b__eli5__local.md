---
qid: ing_f7dca0e51b__eli5__local
question: 'Explain: Q108: Design a real-time fraud detection system with a hard p99
  < 500ms latency requirement, using both ML rules and an LLM-RAG layer. Walk through
  the latency budget breakdown.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 190
output_tokens: 363
total_tokens: 553
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T15:07:27-05:00'
sources: []
---

Imagine your bank’s fraud guard is a fire‑fighter who must reach every house in under 500 ms (the “p99” time). The system is split into three layers that share the “budget” of that half‑second.

1. **First layer – ML rules**  
   *What it does*: A quick set of decision trees looks at the transaction’s numbers and flags obvious red flags (e.g., a sudden overseas transfer).  
   *Latency budget*: 120 ms. Think of this as the fire‑fighter sprinting to the front door.

2. **Second layer – LLM + Retrieval‑Augmented Generation (RAG)**  
   *What it does*: A large language model reads recent account history and regulatory rules, then writes a short “report” about whether the transaction is likely fraud.  
   *Latency budget*: 200 ms. This is the firefighter walking inside, talking to residents (the LLM) while pulling up past incident logs (retrieval).

3. **Third layer – Decision & Alert**  
   *What it does*: The system combines the rule flag and the LLM report, decides if the transaction should be stopped or allowed, and sends an alert.  
   *Latency budget*: 80 ms. This is the firefighter giving the final shout to the dispatcher.

The budgets add up (120 + 200 + 80 = 400 ms), leaving a cushion for network jitter so that even in the worst 1% of cases, the total stays under 500 ms. Each layer is fast enough on its own and together they keep fraud detection real‑time.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
