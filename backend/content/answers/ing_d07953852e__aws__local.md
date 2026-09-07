---
qid: ing_d07953852e__aws__local
question: 'Explain: And more--more importantly with this federation protocol'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 231
output_tokens: 438
total_tokens: 669
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T13:12:21-05:00'
sources: []
---

**Situation & Task**  
In my last role, I was tasked with building a federated‑learning platform that let partner hospitals train on local imaging data without sharing patient records. The goal: achieve >95 % model accuracy while keeping the training pipeline compliant with HIPAA and GDPR.

**Action – Design & AWS Services**  
I led a cross‑functional team to design a serverless architecture:

| Component | Service | Rationale |
|-----------|---------|-----------|
| Secure data ingestion | **S3 + KMS** | Immutable, encrypted storage; fine‑grained IAM. |
| Orchestration | **Step Functions** | Visual state machine, error handling, retries. |
| Model aggregation | **Lambda + SageMaker Training Jobs** | Pay‑per‑use, no server provisioning; Lambda triggers training once all clients report in. |
| Client SDK | **AWS IoT Greengrass** | Edge inference and local gradient upload over MQTT, zero‑touch updates. |
| Monitoring & audit | **CloudWatch + GuardDuty** | Real‑time metrics, anomaly detection. |

We added a *privacy‑budget* module using differential privacy (TensorFlow Privacy) to guarantee no leakage from aggregated gradients.

**Result**  
- 12 hospitals joined within two months; cumulative dataset grew to 1.2 M images.  
- Model accuracy improved from 88 % (centralized baseline) to **94.7 %** after 5 federated rounds.  
- Training cost dropped 40 % vs a monolithic SageMaker cluster, and latency per round was <3 min.

**Reflection & Learning**  
I owned the end‑to‑end pipeline, diving deep into edge security and privacy guarantees—an early failure when an IoT device mis‑encrypted payloads taught me to enforce schema validation at ingestion. The project exemplified **Ownership**, **Dive Deep**, and **Bias for Action**, delivering measurable customer value while safeguarding sensitive data.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
