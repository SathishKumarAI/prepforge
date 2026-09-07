---
qid: ing_704787c9f0__aws__local
question: 'Explain: Implement Core Components — Agent Building Guide'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 229
output_tokens: 451
total_tokens: 680
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T09:38:57-05:00'
sources: []
---

**Situation / Task**  
At a fintech startup I led the migration of our rule‑based fraud detector to an ML‑powered agent that could learn from every transaction in real time. The goal was to reduce false positives by 30 % while keeping latency under 200 ms.

**Action**  
1. **Data pipeline** – Ingested clickstream into Amazon Kinesis → processed with Lambda, stored feature vectors in S3.  
2. **Model training** – Used SageMaker Ground Truth for labeling, then trained a Gradient‑Boosting model on SageMaker Training Jobs (auto‑scaling).  
3. **Serving** – Deployed the model as a SageMaker Endpoint behind an Application Load Balancer; added a Lambda edge function to pre‑process requests and enforce rate limits.  
4. **Observability** – Emitted metrics to CloudWatch and set up dashboards with Amazon Lookout for Metrics to detect drift.  
5. **Feedback loop** – Implemented Step Functions that retrain the model nightly using new labeled data, automatically replacing the endpoint if A/B test accuracy > 2 % better.

**Result**  
- False positives dropped from 12 % to 8 % (≈ 33 % improvement).  
- Throughput reached 10k TPS with < 180 ms latency.  
- Cost decreased by 18 % year‑over‑year by leveraging spot instances for training and autoscaling for inference.

**Leadership Principles Highlighted**  
- **Customer Obsession / Deliver Results** – Delivered a smoother user experience and measurable fraud reduction.  
- **Ownership / Dive Deep** – Built end‑to‑end pipeline, continuously monitored drift, and iterated on model quality.  

Bar‑raisers look for evidence of *ownership* (end‑to‑end ownership), *deep dive* into metrics and trade‑offs, and learning from failures (how we handled drift).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
