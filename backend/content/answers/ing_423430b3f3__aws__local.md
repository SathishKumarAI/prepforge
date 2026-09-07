---
qid: ing_423430b3f3__aws__local
question: 'Explain: You shipped an LLM feature - how did you evaluate it? Walk me
  through the actual eval setup.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 242
output_tokens: 450
total_tokens: 692
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T07:55:45-05:00'
sources: []
---

**Situation & Task**  
I led the rollout of a conversational‑LLM that powers our Alexa‑style FAQ bot for a $120 M consumer‑electronics portfolio. The goal was to hit a 95 % accuracy on intent classification while keeping latency <200 ms.

**Action – Evaluation Pipeline**  
1. **Data capture** – Every user utterance is streamed to Kinesis, persisted in S3 (raw) and indexed in DynamoDB (metadata).  
2. **Ground‑truth labelling** – A nightly Lambda batch pulls 10k random samples, sends them through our human‑in‑the‑loop workflow on SageMaker Ground Truth; we store the label set in Athena for ad‑hoc queries.  
3. **Automated scoring** – A step function orchestrates inference via a SageMaker endpoint, compares the model’s intent against ground truth, and writes precision/recall metrics to CloudWatch Metrics (custom namespace).  
4. **A/B testing** – Two variants (v1 vs v2) are served through API Gateway with weighted routing; CloudWatch dashboards compare real‑time accuracy, response time, and error rate.  

**Result**  
After 3 weeks of iteration we achieved:  
- **Accuracy:** 97 % precision/recall on live traffic (vs 88 % baseline).  
- **Latency:** Avg 145 ms, 99th percentile <190 ms.  
- **Cost:** $12K/month (SageMaker) – a 30 % reduction by switching to a Multi‑Model Endpoint.

**Reflection & Ownership**  
I took ownership of the full data pipeline, dived deep into CloudWatch anomaly detection to surface latency spikes, and iterated quickly with the devops team. The learnings—especially the value of real‑time ground truth—shaped our next LLM rollout.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
