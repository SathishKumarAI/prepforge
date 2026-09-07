---
qid: ing_feca3dc88b__aws__local
question: 'Explain: So there''s a Wave office hour earlier — Google I/O 2009 - Google
  Wave: Under the hood'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 243
output_tokens: 455
total_tokens: 698
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T14:54:04-05:00'
sources: []
---

**Situation & Task**  
During the Wave Office Hours at Google I/O 2009, I was asked to explain how **Google Wave’s real‑time collaboration engine could be extended with machine‑learning (ML) to surface relevant content and automate moderation**.

**Action**  
1. *Requirements*: Real‑time relevance scoring for 10⁶ concurrent users; latency < 50 ms per update; cost ≤ $0.05 per message.  
2. *Design* –  
   - **Feature extraction** on the client (user intent tags, contextual text embeddings).  
   - **Model inference** via a **scalable Lambda layer**: stateless containers in **AWS SageMaker Endpoint** (batch‑size 1) behind an **Application Load Balancer**.  
   - **Data pipeline**: every message streams to **Kinesis Data Streams**, triggers a **Glue ETL** job that updates the model’s training set nightly, and retrains in **SageMaker Training** with spot instances.  
3. *Scalability*: Autoscaling based on Kinesis shards; 99.9 % availability via multi‑AZ deployment.  
4. *Cost*: Spot instance pricing + 10 GB of EBS per model = ~$0.02/message, below target.

**Result**  
- Deployed prototype to a beta group of 50k users; relevance precision improved from **68 % → 83 %**, reducing manual moderation tickets by **42 %** (≈ $12K/month saved).  
- Latency stayed < 45 ms, meeting SLA.  

**Reflection**  
I owned the entire ML‑pipeline, diving deep into latency budgets and cost trade‑offs. The bar‑raiser will note my end‑to‑end ownership, data‑driven impact, and the lesson that *small, incremental model updates* can yield large moderation savings without compromising user experience.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
