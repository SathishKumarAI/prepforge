---
qid: ing_1a1b90ad50__aws__local
question: 'Explain: Example — Reranking Strategies'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 227
output_tokens: 376
total_tokens: 603
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T06:25:28-05:00'
sources: []
---

**Situation & Task**  
At my previous role I led the search‑engine team that saw a 12 % drop in click‑through rate (CTR) after a UI redesign. The product owner asked me to boost relevance by adding a *reranking* layer before results were shown.

**Action**  
I took full ownership:  

1. **Dive Deep** – profiled query logs, identified that the top 3 positions carried only 45 % of CTR.  
2. Built an online reranker using Amazon SageMaker to train a Lambda‑based *gradient‑boosted decision tree* on features (query intent, user context, snippet freshness).  
3. Deployed the model as a **SageMaker endpoint** behind an API Gateway; results were batched in **Lambda** and returned with < 50 ms latency.  
4. Introduced A/B testing via **AWS CloudWatch** metrics and automatically rolled out to 70 % of traffic once a 3‑point lift in CTR was observed.

**Result**  
Within two weeks the overall CTR rose from 12 % to 18 % (a 50 % relative improvement), translating into $2.4 M additional annual revenue at our $200/CTR‑kilo unit price. The reranker cost <$0.01 per query, keeping monthly spend under $15K.

**Learning**  
I realized that “bias for action” can coexist with rigorous measurement; the early failure to validate on a small cohort saved us from a costly rollout. This experience reinforced my commitment to **Customer Obsession**, **Ownership**, and continuous learning.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
