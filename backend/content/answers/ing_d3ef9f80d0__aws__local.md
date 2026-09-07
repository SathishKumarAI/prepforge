---
qid: ing_d3ef9f80d0__aws__local
question: 'Explain: A/B Testing — Langsmith Observability'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 229
output_tokens: 475
total_tokens: 704
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T13:19:50-05:00'
sources: []
---

**Situation & Task**  
At my last role I led a feature that added an AI‑driven recommendation engine to our e‑commerce platform. We needed to prove that the new model improved conversion without hurting latency or cost, so we built an A/B test harness inside Langsmith’s observability stack.

**Action (Design)**  
1. **Feature flag + Traffic Shard** – used AWS AppConfig to roll out 30 % of traffic to Variant B while keeping 70 % on Variant A.  
2. **Observability Pipeline** – every inference was logged in Amazon Kinesis Data Streams, then processed by a Lambda that enriched logs with request metadata and pushed them to Amazon OpenSearch for real‑time dashboards.  
3. **Metric Collection** – custom CloudWatch metrics (`conv_rate`, `latency_ms`, `inference_cost_usd`) were emitted per variant.  
4. **Statistical Significance** – a Step Functions workflow queried the metrics every 5 min, ran a Bayesian A/B test (using the `statsmodels` library) and auto‑rolled back if Variant B fell below the 95 % confidence threshold.

**Result**  
Variant B delivered a **12.3 % lift in conversion** (+$1.2M/month revenue), **latency dropped by 18 ms**, and **inference cost decreased by 7 %** thanks to a more efficient model. The experiment ran for 14 days, and we rolled out the feature globally with zero incidents.

**Leadership Principles**  
- *Customer Obsession*: Directly measured impact on conversion.  
- *Ownership & Dive Deep*: Built end‑to‑end observability from AppConfig → Kinesis → Lambda → OpenSearch → CloudWatch, ensuring data integrity and rapid rollback.  

**Bar‑raiser Takeaway**  
I demonstrated ownership by owning the full experiment lifecycle, depth through a custom Bayesian test pipeline, quantified impact with clear metrics, and learned that embedding observability into the CI/CD loop reduces risk for future AI rollouts.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
