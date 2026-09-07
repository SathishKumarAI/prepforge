---
qid: ing_5b5a1b0c83__aws__local
question: 'Explain: Whiteboard Exercises for AI System Design'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 228
output_tokens: 430
total_tokens: 658
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T08:51:50-05:00'
sources: []
---

**Customer Obsession & Dive Deep**

*Situation:* My team was asked to design a real‑time recommendation engine for an e‑commerce platform that could handle 5 M daily users and deliver <50 ms latency.

*Task:* Build a scalable whiteboard prototype that balances speed, accuracy, and cost while ensuring the model stays fresh with minimal downtime.

*Action:*  
1. **Data pipeline** – use Kinesis Data Streams to ingest clickstreams, store raw events in S3 (cold), and stream into DynamoDB for real‑time feature lookup.  
2. **Model serving** – containerize a TensorFlow inference graph on ECS Fargate behind an Application Load Balancer with weighted routing to A/B test new models.  
3. **Feature cache** – deploy Redis‑Cache (ElastiCache) as a read‑through layer; fall back to DynamoDB if miss, guaranteeing <30 ms response for 99.9% of requests.  
4. **Model retraining loop** – schedule nightly SageMaker training jobs on spot instances; use CloudWatch alarms to trigger immediate re‑deployment if AUC drops below 0.82.

*Result:* Achieved 98.7% accuracy, <45 ms latency for 99.5% of traffic, and cut inference cost by 35 % versus a monolithic EC2 solution.  

**Bar‑raiser notes:**  
- **Ownership:** I led cross‑functional discussions to define SLAs and budget constraints.  
- **Dive Deep:** Detailed trade‑offs between DynamoDB vs. ElastiCache latency and cost were documented in the design doc.  
- **Quantified impact:** 0.35 × cost savings and 3 % lift in conversion rate post‑deployment.  
- **Learning from failure:** Early prototype hit >200 ms latency; I iterated on caching strategy and reduced cold start by refactoring container image size.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
