---
qid: ing_94356eef12__aws__local
question: 'Explain: LLM-based evals (slower, but handles nuance)'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 387
total_tokens: 621
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T11:01:09-05:00'
sources: []
---

**Situation & Task**  
At my last role I led the rollout of a *LLM‑based evaluation pipeline* for our chatbot product. The existing rule‑engine scored responses in milliseconds but missed nuance—leading to a 12 % churn spike when users received bland replies.

**Action**  
I re‑architected the eval stack using **Amazon SageMaker** for inference, wrapped in an **AWS Step Functions** workflow that first runs a lightweight keyword filter (≤50 ms) and only forwards “borderline” outputs to the full LLM scoring step. The LLM was deployed on **GPU‑enabled `ml.p3` instances**, auto‑scaling by 0–10 nodes based on queue depth, and cached recent prompts in **Amazon ElastiCache** to cut token usage by 35 %. I introduced a *confidence threshold* that triggers manual review only for the top 5 % of low‑score cases.

**Result**  
The hybrid pipeline reduced evaluation latency from 2.3 s to 0.8 s on average, while preserving the nuanced scoring that lowered churn by **18 %** and increased NPS from 62 to 73. Costs rose only 12 % due to efficient caching and spot instance usage.

**Reflection (Bar‑raiser lens)**  
I took *Ownership* of end‑to‑end latency, *Dive Deep* into token economics, quantified impact with churn/NPS metrics, and learned that a two‑tier approach balances speed and quality—an insight we now apply across all AI services.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
