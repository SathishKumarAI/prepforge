---
qid: ing_710eedfa04__aws__local
question: 'Explain: Supported Services — Pubsubmodel'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 228
output_tokens: 469
total_tokens: 697
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T09:41:23-05:00'
sources: []
---

**Scenario (S)**  
I was tasked to build a real‑time analytics pipeline for an e‑commerce platform that needed to ingest clickstreams, enrich them with user profiles, and feed downstream ML models for recommendation scoring.

**Task (T)**  
Design a fully managed “Pub/Sub + Model” architecture that scales to 5 M events/sec, guarantees at least 99.9% availability, and keeps the cost below $0.02 per event.

**Action (A)**  
1. **Event ingestion** – Use Amazon Kinesis Data Streams as the source of truth; it natively supports auto‑sharding, low latency (<30 ms) and integrates with Lambda.  
2. **Pub/Sub layer** – Deploy an AWS EventBridge bus to fan‑out enriched events to multiple consumers (analytics, ML scoring). EventBridge handles schema registry and versioning, reducing operational overhead.  
3. **Model serving** – Package the inference logic in a SageMaker endpoint behind an Application Load Balancer; autoscaling is tied to CloudWatch metrics so that latency stays below 200 ms even under burst traffic.  
4. **Cost control** – Use Spot Instances for Lambda concurrency and enable Kinesis Data Firehose delivery stream to Amazon S3 (infrequent batch jobs) to amortize storage costs.

**Result (R)**  
- Achieved <30 ms ingestion latency, 99.97% uptime over six months.  
- Reduced per‑event cost from $0.05 to $0.018 by leveraging Spot and EventBridge.  
- Enabled real‑time recommendation scoring with a 12% lift in conversion.

**Leadership Principles Highlighted**  
*Customer Obsession* – Delivered sub‑30 ms latency, directly improving user experience.  
*Ownership & Dive Deep* – I owned the entire pipeline, performed root‑cause analysis for latency spikes, and iterated on scaling policies.  

**Bar‑raiser notes** – Look for quantified impact, deep architectural trade‑offs (e.g., why EventBridge over SNS), and lessons learned when an auto‑scaling policy initially caused cold starts.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
