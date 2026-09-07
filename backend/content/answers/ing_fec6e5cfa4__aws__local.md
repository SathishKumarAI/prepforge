---
qid: ing_fec6e5cfa4__aws__local
question: 'Explain: We we kept on kind of replaying — Seattle Conference on Scalability:
  YouTube Scalability'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 241
output_tokens: 448
total_tokens: 689
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T14:54:04-05:00'
sources: []
---

**Situation –**  
In 2021 I led a cross‑functional team at Amazon Video to scale our recommendation engine for the Seattle Conference on Scalability. The core challenge was that we kept “replaying” user interaction streams—processing the same click logs repeatedly—to train new models, which bled CPU and storage budgets.

**Task –**  
Design an architecture that eliminates redundant replay while keeping model accuracy high, meeting 99.9 % availability during peak traffic (≈ 4 M requests/second) and staying under a $5k/month budget.

**Action –**  
1. **Event‑driven ingestion:** Switched from scheduled batch jobs to an event‑driven pipeline using **Amazon Kinesis Data Streams** with per‑user sharding, ensuring each user’s events are processed exactly once.  
2. **Stateful deduplication:** Leveraged **DynamoDB Global Tables** (partitioned by user ID) as a lightweight state store; each stream record checks the last processed timestamp before writing to S3.  
3. **Model training on-demand:** Triggered nightly training jobs in **AWS SageMaker**, feeding only new, de‑duplicated data from S3, reducing data volume by 70 %.  
4. **Cost control:** Adopted spot instances for SageMaker and reserved capacity for Kinesis to cap spend at $4.2k/month.

**Result –**  
- Eliminated redundant replay → reduced CPU hours by **68 %** (≈ $1.8k saved).  
- Model accuracy improved from 82 % to **85 %** precision@10 due to cleaner data.  
- System achieved 99.95 % uptime during the conference, surpassing SLA.

**Learning –**  
I realized that *Ownership* and *Dive Deep* mean questioning every “why replay?” assumption and measuring impact with concrete metrics. Future iterations will explore serverless event processing (Lambda) to further cut costs while maintaining latency targets.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
