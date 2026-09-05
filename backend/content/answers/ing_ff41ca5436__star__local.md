---
qid: ing_ff41ca5436__star__local
question: 'Explain: Cost-Benefit Analysis — Reranking Strategies'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 390
total_tokens: 627
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T07:59:14-05:00'
sources: []
---

**Situation:**  
At my previous company we launched a new recommendation engine for our e‑commerce platform. Early A/B tests showed that the ranking algorithm improved click‑through rates by 8 % but also increased server latency by 120 ms per request, pushing our average response time over the SLA threshold.

**Task:**  
I was asked to perform a cost‑benefit analysis to decide whether to adopt a reranking strategy—adding a lightweight second‑pass model—to balance relevance gains against performance costs.

**Action:**  
1. Built an experiment framework that injected a 2 ms inference step from a distilled BERT model as a reranker.  
2. Collected metrics: CTR, conversion rate, latency, and GPU utilisation over a two‑week period for 200K users.  
3. Calculated ROI using the formula:  
   \[
   \text{Benefit} = (\Delta\text{Revenue}) - (\Delta\text{Latency cost})
   \]
   where revenue was estimated from conversion lift (≈$15 k/month) and latency cost from increased server hours ($4 k/month).  
4. Ran a sensitivity analysis on batch size to find the sweet spot at 8 requests per GPU.

**Result:**  
The reranker raised CTR by 5 % and conversions by 3 %, translating to an additional $18 k/month, while latency only increased by 30 ms—well within SLA limits. The net benefit was +$14 k/month. I documented the trade‑off curve for future feature rollouts and learned that a disciplined, data‑driven cost‑benefit framework is essential when optimizing AI systems at scale.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
