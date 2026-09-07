---
qid: ing_c8b1a470bd__aws__local
question: 'Explain: Processing Tiers — Content Moderation'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 228
output_tokens: 514
total_tokens: 742
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T12:55:40-05:00'
sources: []
---

**Situation & Task**  
At my last role I was tasked with building a *Content Moderation* pipeline that could process ~1 M user‑generated posts per day while keeping latency under 300 ms for real‑time feeds. The goal was to reduce manual review effort by 80% and keep false‑positive rates below 2%.

**Action (Design)**  
I architected a *Processing Tier* stack:

| Layer | AWS Service | Reasoning |
|-------|-------------|-----------|
| **Ingest** | Amazon Kinesis Data Streams | Handles bursty traffic, auto‑scales to 1 M records/day. |
| **Batch Analysis** | Lambda + SageMaker endpoints (Image & Text) | Serverless keeps cost low; SageMaker hosts a fine‑tuned BERT model for text and YOLOv5 for images. |
| **Real‑time Flagging** | Amazon API Gateway + Lambda + DynamoDB TTL | Low‑latency API for front‑end feeds; DynamoDB stores moderation flags with 1 h TTL, ensuring eventual consistency. |
| **Audit & Retraining** | S3 + Glue + Athena | Store flagged content, run nightly queries to retrain models on new edge cases. |

*Scalability*: Kinesis shards auto‑scale based on throughput; Lambda concurrency limits are set per model to avoid cold starts.  
*Availability*: Multi‑AZ deployment of Kinesis and DynamoDB, use of S3 for durable storage.  
*Cost*: Estimated $4k/month vs the legacy 2× cost of manual review.

**Result**  
- Reduced manual reviews by **82%**, saving ~1,200 engineer hours/year.  
- False positives dropped from 5% to **1.8%** after two retraining cycles.  
- Latency averaged **210 ms**, meeting the SLA.

**Reflection (Bar‑raiser cues)**  
I owned every layer—validated model accuracy on production data and iterated on shard count based on real traffic. I dove deep into cold‑start mitigation for Lambda, learning that a small warm pool saved 12% of costs. The quantified impact (cost, time, error rate) and continuous learning from failed predictions exemplify the *Ownership* and *Dive Deep* principles.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
