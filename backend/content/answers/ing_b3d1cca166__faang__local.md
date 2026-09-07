---
qid: ing_b3d1cca166__faang__local
question: 'Explain: Table of System Design Interview Problems'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 231
output_tokens: 663
total_tokens: 894
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T01:42:10-05:00'
sources: []
---

**Clarify**

You’re asking for a concise guide that lists common *system‑design* interview questions in the machine‑learning domain, along with brief explanations so candidates can prepare and think through them.  
Assumptions I’d confirm:  
- Target audience is mid‑level engineers (M2–SDE II).  
- Focus on end‑to‑end ML pipelines rather than pure algorithmic problems.  

**Approach**

1. **Categorize** the problems by system component (data ingestion, feature store, training infra, inference serving, monitoring).  
2. **List** 8–10 representative questions per category with a one‑sentence context.  
3. **Add quick hints** on key trade‑offs or design patterns that interviewers typically probe.  

**Depth**

| Category | Sample Problem | Context & Core Design Focus |
|----------|----------------|----------------------------|
| Data Ingestion | *Design an online pipeline to stream sensor data into a training dataset.* | Throughput, latency, schema evolution, fault tolerance. |
| Feature Store | *Build a real‑time feature store for recommendation engines.* | Consistency guarantees, cold start, versioning. |
| Training Infrastructure | *Scale distributed training of deep nets on GPU clusters.* | Cluster provisioning, data sharding, checkpointing. |
| Hyperparameter Tuning | *Implement an automated hyper‑parameter search system.* | Parallelism, early stopping, resource allocation. |
| Model Registry & Versioning | *Create a model registry that tracks lineage and rollback.* | Metadata storage, access control, reproducibility. |
| Inference Serving | *Serve a large language model with sub‑100 ms latency.* | Model sharding, request routing, autoscaling. |
| Edge Deployment | *Deploy a lightweight vision model on IoT devices.* | Compression, quantization, OTA updates. |
| Monitoring & Governance | *Set up monitoring for drift and bias in production models.* | Data quality metrics, alerting, explainability. |
| A/B Testing Framework | *Design an online A/B test platform for ML models.* | Randomization, statistical power, multi‑armed bandits. |
| Security & Compliance | *Securely expose a model API to external partners.* | Authentication, rate limiting, audit logs. |

**Edge Cases**

- High‑cardinality feature spaces that explode storage.  
- Latency spikes during peak inference periods.  
- Model drift leading to catastrophic failures.  
- Data privacy constraints (GDPR/FedRAMP) impacting ingestion.

**Optimize & Communicate**

- Emphasize *trade‑offs* (e.g., eventual vs. strong consistency, batch vs. streaming).  
- Show how you’d use *design patterns*: CQRS for feature store, micro‑services for inference.  
- Conclude with a quick “What’s next?”: suggest adding observability dashboards or auto‑ML pipelines to close the loop.

*This table gives interviewers a ready reference and candidates a focused study map—both aligning with FAANG’s preference for structured, depth‑first problem solving.*

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
