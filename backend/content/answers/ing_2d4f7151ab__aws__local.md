---
qid: ing_2d4f7151ab__aws__local
question: 'Explain: Problem Exploration (5 minutes) — System Design Interview'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 367
total_tokens: 599
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T07:07:29-05:00'
sources: []
---

**Problem Exploration – System‑Design Interview (5 min)**  

**Situation:** A startup wants a real‑time recommendation engine that scales from 1 M users to 10 M+ while keeping latency < 50 ms.  
**Task:** Design the end‑to‑end pipeline: data ingestion, feature store, model training & inference, monitoring.  
**Action (Dive Deep + Ownership):**  
1. **Ingest** – Use Kinesis Data Streams for low‑latency event capture; batch with S3 for archival.  
2. **Feature Store** – Deploy Amazon SageMaker Feature Store; partition by user ID to guarantee 10 ms reads.  
3. **Training** – Schedule nightly training on SageMaker Pipelines, leveraging Spot Instances (cost ↓ 70%) and Hyper‑parameter tuning.  
4. **Inference** – Host the model as a SageMaker endpoint behind an Application Load Balancer; autoscale based on CloudWatch metrics to maintain < 50 ms SLA.  
5. **Observability** – Push logs to CloudWatch, set up Prometheus/Grafana dashboards; trigger Lambda alerts for drift or latency spikes.  

**Result (Deliver Results):** Prototype achieved 45 ms average inference, 99.8% accuracy, and cost per request fell from $0.02 to $0.007 after Spot usage.  
**Bar‑raiser cues:** Demonstrated ownership by mapping each component to AWS services, diving into latency budgets, quantifying cost savings, and explaining how failures (e.g., endpoint throttling) would be detected and remediated.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
