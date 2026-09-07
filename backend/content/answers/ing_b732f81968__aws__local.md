---
qid: ing_b732f81968__aws__local
question: 'Explain: Technical screen — Sierra Agent Engineer Interview Guide | Sample
  Questions (2026) - Exponent'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 612
total_tokens: 852
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T12:18:04-05:00'
sources: []
---

**How I’d coach a candidate**

> *Leadership Principles:* **Ownership** – “Take responsibility for the whole solution.”  
> **Dive Deep** – “Show depth of knowledge and be ready to drill into details.”

---

### 1️⃣ Prepare a STAR story

- **Situation:** Lead ML model deployment for Sierra Agent’s real‑time fraud detection (10 M events/day).  
- **Task:** Reduce false positives by 25% while keeping latency < 100 ms.  
- **Action:**  
  - Built a data pipeline in **AWS Glue** + **Lake Formation** to clean & dedupe logs.  
  - Trained a LightGBM model on **SageMaker** with hyper‑parameter tuning via **SM Experiments** (10 runs, 4 CPU × 8 GPUs).  
  - Deployed as an **AWS Lambda@Edge** function behind **API Gateway**, using **Amazon CloudWatch Logs Insights** for real‑time monitoring.  
- **Result:** False positives dropped from 12% to 9% (≈ 25 % improvement), latency stayed at 80 ms, cost down 18 % vs. prior batch SageMaker endpoint.

---

### 2️⃣ Technical depth

| Requirement | Design | AWS Services | Trade‑offs |
|-------------|--------|--------------|------------|
| **Scalability** | Auto‑scaling Lambda (concurrency) + SQS for burst traffic | Lambda, SQS, CloudWatch Alarms | Cold start vs. cost |
| **Availability** | Multi‑AZ SageMaker endpoint + failover to pre‑trained model in S3 | SageMaker Endpoint, Route 53 | Extra latency if failover |
| **Cost** | Spot instances for training; pay‑as‑you‑go Lambda | EC2 Spot, Lambda | Potential interruption risk |

---

### 3️⃣ What a bar‑raiser listens for

- **Ownership:** “I didn’t just build the model; I built the end‑to‑end pipeline and ownership of ops.”  
- **Dive Deep:** Specific metrics (12 % → 9 %, 80 ms latency), choice of hyper‑parameters, justification of service selection.  
- **Quantified Impact:** 25 % reduction in false positives & 18 % cost savings.  
- **Learning from Failure:** “After a 15 % spike during a traffic surge, we added an autoscaling guardrail and now the SLA is 99.9 %.”

---

**Takeaway for the candidate:** Frame every answer around *what you did*, *why it mattered*, *the measurable lift*, and *how you’ll keep improving*. That’s Amazon style.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
