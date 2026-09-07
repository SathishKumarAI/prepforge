---
qid: ing_b26ae14abc__faang__local
question: 'Explain: Durability'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 227
output_tokens: 499
total_tokens: 726
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T01:38:34-05:00'
sources: []
---

**Durability (in an ML lifecycle)**  
*Clarify:* We’re asked to describe what “durability” means for a machine‑learning system—how we keep models and data reliable over time and across deployments. I’ll assume the context is production‑grade ML, where models must survive version changes, scaling, and data drift.

**Approach:**  
1. **Data durability** – secure storage, backup, immutable logs.  
2. **Model durability** – reproducible builds, deterministic training, versioned artifacts.  
3. **Deployment durability** – canary releases, rollback, A/B testing.  
4. **Monitoring & retraining triggers** – detect drift, maintain performance.

**Depth:**  
- *Data:* Store raw and processed data in immutable buckets (e.g., S3 with versioning), use snapshots for back‑testing. Use ACID‑compliant databases for metadata.  
- *Model artifacts:* Containerize the model with all dependencies; tag images with semantic versions. Build pipelines that hash training code + data to guarantee reproducibility. Store models in a registry (MLflow, SageMaker Model Registry).  
- *Deployment:* Deploy via blue/green or canary strategies; keep previous stable version online until metrics confirm new one is safe. Use health checks and circuit breakers.  
- *Monitoring:* Track performance metrics, feature distributions, and data quality scores daily. If drift exceeds thresholds, trigger automated retraining pipelines.

**Edge Cases:**  
- Sudden data schema changes break ingestion → use schema registry with backward‑compatibility checks.  
- Model file corruption → signed artifacts, checksum verification on pull.  
- Deployment failure mid‑rollout → automatic rollback to last known good version.

**Optimize & Communicate:**  
We can reduce downtime by leveraging *immutable infrastructure* (e.g., Terraform + immutable AMIs). For communication: “Durability is the guarantee that our ML pipeline’s data, models, and serving layers are reproducible, recoverable, and maintain performance over time.” This shows clear problem framing, technical depth, and an eye toward production resilience—key signals for FAANG interviewers.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
