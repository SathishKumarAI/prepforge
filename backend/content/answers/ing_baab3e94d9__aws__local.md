---
qid: ing_baab3e94d9__aws__local
question: 'Explain: Questions that actually matter — Mobile System Design Interview'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 231
output_tokens: 456
total_tokens: 687
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T12:25:40-05:00'
sources: []
---

**Situation & Task**  
I led the redesign of a *mobile‑first* recommendation engine for a global e‑commerce app that served 15 M daily active users (DAU). The existing model was batch‑trained nightly, causing stale recommendations and a 12 % drop in click‑through rate (CTR).

**Action – Design & Implementation**  
1. **Real‑time feature pipeline** – Deployed Kinesis Data Streams + Lambda to ingest user events; features were cached in Redis (Amazon ElastiCache) for <5 ms latency.  
2. **Model serving** – Trained a LightGBM model on SageMaker, exported as ONNX and served via Amazon ECS Fargate behind an Application Load Balancer, guaranteeing 99.9 % availability.  
3. **A/B testing & feedback loop** – Integrated CloudWatch metrics and DynamoDB for real‑time CTR monitoring; automated retraining triggers when drift >2%.  

*Scalability*: The stream can scale to 50k events/sec; ECS autoscaling keeps cost < $0.12/instance/hr.  
*Availability*: Multi‑AZ deployment with ELB health checks.  
*Cost*: Reduced batch compute by 80 % and eliminated nightly SageMaker training jobs, saving ~$150k annually.

**Result**  
CTR rose from 8.2 % to **11.5 %** (+40 %) within two weeks; session depth increased 15 %. Monthly revenue grew $3.6M (30 % YoY).  

**Leadership Principles**  
- *Customer Obsession*: Delivered fresher recommendations, directly boosting user engagement.  
- *Ownership & Dive Deep*: Built end‑to‑end pipeline, monitored drift, and iterated on model quality.

**Bar‑raiser takeaways**  
- Quantified impact (CTR lift, revenue growth).  
- Demonstrated ownership from data ingestion to production serving.  
- Showed depth by explaining trade‑offs between latency, cost, and scalability.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
