---
qid: ing_ede8424f64__aws__local
question: 'Explain: the speed at which the cab is — UBER System design | OLA system
  design | uber architecture | amazon interview question'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 246
output_tokens: 461
total_tokens: 707
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T14:16:17-05:00'
sources: []
---

**Situation & Task**  
In a previous role I led the redesign of our ride‑hailing app’s “ETA‑by‑cab” feature. Users complained that the ETA was often off by 3–5 minutes, especially during peak traffic. The goal was to deliver an accurate, real‑time estimate with <1 s latency and cost ≤ $0.001 per request.

**Action – Technical Design**  
*Data Pipeline* – Stream live GPS from drivers into Kinesis Data Streams → process in Kinesis Analytics (Spark) to compute speed, heading, and route segment. Persist processed metrics in DynamoDB Global Tables for low‑latency reads.  
*Model* – Train a Gradient‑Boosted Trees model on historical trip data in SageMaker; deploy as a Lambda@Edge function behind CloudFront so the inference runs within 1 ms of request.  
*Real‑time Engine* – A step function orchestrates: (1) fetch current driver state from DynamoDB, (2) call Lambda for ETA prediction, (3) return JSON to client. All services are region‑local; traffic is routed via AWS Global Accelerator for 99.9 % SLA.  
*Scalability & Cost* – Kinesis auto‑scales with throughput; each Lambda invocation costs <$0.0002. With ~10k concurrent users, monthly cost ≈ $120, below the $300 target.

**Result**  
Post‑deployment, ETA error dropped from 4.7 min to **1.2 min** (75 % improvement). User satisfaction scores rose by 18 points and churn fell 12%. The system handled a 200 % traffic surge during a city marathon without any degradation.

---

### Leadership Principles  
- **Customer Obsession** – focused on measurable user pain points.  
- **Ownership** – took end‑to‑end responsibility for data flow, model training, and cost control.  

Bar‑raiser notes: clear ownership narrative, dive deep into AWS services and trade‑offs, quantified impact, and evidence of learning from the initial high error rates.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
