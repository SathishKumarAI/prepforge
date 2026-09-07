---
qid: ing_8feb7974be__aws__local
question: 'Explain: Debugging round — Sierra Agent Engineer Interview Guide | Sample
  Questions (2026) - Exponent'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 241
output_tokens: 444
total_tokens: 685
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T10:51:34-05:00'
sources: []
---

**Debugging Round – Sierra Agent Engineer Interview Guide (Exponent, 2026)**  
*Leadership Principles: Ownership & Dive Deep*

> **Situation:** A client’s machine‑learning inference agent in the Sierra platform was intermittently returning `NaN` predictions, causing a 12 % drop in downstream KPI scores.  
> **Task:** Own the incident, isolate root cause, and implement a robust fix that scales to millions of requests per day.  
> **Action:**  
> 1. **Data‑driven hypothesis** – Logged all inputs, batch sizes, and GPU utilization; discovered a race condition in the TensorRT inference pipeline when batch size > 64.  
> 2. **Dive deep into code & infrastructure** – Reviewed C++ agent source, Dockerfile, and AWS ECS task definitions. Added `CUDA_VISIBLE_DEVICES` isolation and switched to `ECS Spot + Fargate` for cost efficiency.  
> 3. **Proposed design** – Implement a stateless micro‑service using **AWS Lambda@Edge** for pre‑processing, **Amazon SageMaker Endpoint** (Multi‑Model) for inference, and **DynamoDB** for request audit logs.  
> 4. **Testing & validation** – Ran A/B tests; latency dropped from 350 ms to 210 ms, and error rate fell below 0.01 %.  
> **Result:** Restored 99.9 % uptime, reduced inference cost by 18 %, and created a reusable debugging playbook adopted across all Sierra agents.

**What a bar‑raiser looks for:**  
- *Ownership:* Taking full responsibility from triage to deployment.  
- *Dive Deep:* Inspecting code, logs, and AWS services until the root cause is proven.  
- *Quantified Impact:* Reporting latency, error rates, and cost savings.  
- *Learning:* Documenting failures and turning them into repeatable best practices.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
