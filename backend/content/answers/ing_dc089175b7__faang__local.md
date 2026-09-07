---
qid: ing_dc089175b7__faang__local
question: 'Explain: Cloud Management and Analytics — Top 20 Questions'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 942
total_tokens: 1176
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T03:10:04-05:00'
sources: []
---

**Clarify**  
The interviewer wants a concise cheat‑sheet of the most common interview questions around *cloud‑based ML infrastructure* (deployment, monitoring, cost, data pipelines). I’ll assume we’re targeting senior ML ops roles and that the audience knows basic ML concepts.

---

### 1. Cloud Management & Analytics – Top 20 Questions

| # | Question | Why It Matters |
|---|----------|----------------|
| 1 | How do you choose a cloud provider for an ML workload? | Trade‑offs: compute, storage, networking, pricing, ecosystem. |
| 2 | What are the key cost drivers in ML on the cloud? | Spot vs reserved instances, data egress, model serving latency. |
| 3 | Explain “serverless” inference vs containerized inference. | Cost, scalability, cold starts, control. |
| 4 | How do you monitor GPU utilization and memory usage? | Detect bottlenecks, autoscaling triggers. |
| 5 | What metrics would you collect for model drift detection? | Accuracy, precision‑recall over time, feature distributions. |
| 6 | Describe a typical data pipeline from ingestion to training on AWS/GCP/Azure. | Ingestion (Kinesis/Dataproc), storage (S3/Datalake), orchestration (Step Functions). |
| 7 | How do you handle multi‑tenant data security in the cloud? | IAM, KMS, VPC, encryption at rest/transit. |
| 8 | Explain “feature store” and its benefits. | Reproducibility, consistency between training & serving. |
| 9 | What are the pros/cons of using managed ML services (SageMaker, Vertex AI)? | Speed vs flexibility, vendor lock‑in. |
|10 | How do you perform A/B testing of models in production? | Canary releases, traffic split, rollback strategy. |
|11 | Describe a cost‑optimization strategy for large‑scale hyperparameter tuning. | Spot instances, multi‑step training, early stopping. |
|12 | What is “model explainability” and how does the cloud help? | Cloud AI Platform Explainable AI, SHAP dashboards. |
|13 | How do you ensure compliance (GDPR, HIPAA) for ML workloads? | Data residency, audit logs, DLP. |
|14 | Explain data versioning in a cloud context. | LakeFS, Delta Lake, S3 versioning. |
|15 | What is “cold start” in serverless inference and how to mitigate it? | Provisioned concurrency, warm containers. |
|16 | How would you architect an online vs batch inference pipeline? | Pub/Sub vs Cloud Scheduler, latency trade‑offs. |
|17 | Describe the role of CI/CD for ML models on the cloud. | Model registry, automated tests, rollout scripts. |
|18 | What are common security threats to cloud ML pipelines and mitigations? | Man‑in‑the‑middle, data poisoning, model theft. |
|19 | How do you monitor and alert on anomalous resource usage? | Cloud Monitoring, PagerDuty integration. |
|20 | Explain the concept of “ML Ops” maturity levels. | From ad‑hoc to fully automated pipelines. |

---

**Depth**  
For each question, I’d dive into concrete cloud services (e.g., **AWS SageMaker**, **Google Vertex AI**, **Azure ML**), discuss trade‑offs between *managed* vs *self‑hosted* solutions, and illustrate with code snippets or architecture diagrams when time permits. Complexity ranges from O(1) API calls to O(n log n) for distributed hyperparameter search.

---

### 2. Edge Cases & Testing  
- **Burst traffic**: test autoscaling limits.  
- **Data drift spikes**: simulate distribution shifts.  
- **Cost anomalies**: create synthetic high‑usage scenarios.  

---

### 3. Optimize & Communicate  
Start with a high‑level “why” (business impact), then drill into the “how” using concrete cloud services, always circling back to cost and reliability. Highlight that the best answers weave together *technical depth*, *operational pragmatism*, and *cloud economics*—exactly what FAANG interviewers score on.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
