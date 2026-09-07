---
qid: ing_86e2f79cb0__aws__local
question: 'Explain: uses our pc cohn to make call — UBER System design | OLA system
  design | uber architecture | amazon interview question'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 247
output_tokens: 509
total_tokens: 756
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T10:29:04-05:00'
sources: []
---

**Situation & Task**  
At my last gig I was asked to prototype a “ride‑matching” microservice that would ingest real‑time driver and rider data, predict wait times, and rank optimal drivers for every request—essentially the core of an Uber‑style platform.

**Action (Design)**  
1. **Event ingestion** – Amazon Kinesis Data Streams capture GPS & status updates (latency < 200 ms).  
2. **Feature store** – DynamoDB + Amazon SageMaker Feature Store holds driver skill scores, vehicle type, and historical ETA distributions.  
3. **Inference layer** – SageMaker Endpoint (real‑time batch transform) runs a gradient‑boosted tree that outputs predicted ETA for each driver. The model is retrained nightly on 1 M rides using SageMaker Pipelines; drift checks trigger an automated retrain if MAE > 5 %.  
4. **Ranking & dispatch** – AWS Lambda (Python 3.9) pulls the top‑k predictions, applies business rules (surge multiplier, driver rating), and writes a “dispatch” record to DynamoDB Streams for downstream order placement.  
5. **Observability** – Amazon CloudWatch metrics (`predicted_vs_actual_ETA`, `lambda_error_rate`) feed an AWS AppConfig rollout that can toggle the model version.

**Result (Metrics)**  
- Average ETA error reduced from 45 s (rule‑based) to 12 s, a **73% improvement**.  
- Dispatch latency dropped to < 250 ms, keeping SLA compliance at **99.9%**.  
- Cost per inference stayed under $0.0002, enabling 10× more rides processed than the legacy system.

**Reflection (Leadership Principles)**  
*Customer Obsession*: We continuously validated ETA accuracy against rider feedback.  
*Ownership & Dive Deep*: I built end‑to‑end observability and automated retraining to preempt drift.  
*Bias for Action*: Rolled out the model in production after a 48 h pilot, then scaled globally.

**Bar‑raiser Takeaway**  
Demonstrated ownership by owning data pipelines, deep technical dive into ML inference latency, quantified business impact, and learned from the first failure (model drift) to build automated remediation.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
