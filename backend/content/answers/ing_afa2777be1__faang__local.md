---
qid: ing_afa2777be1__faang__local
question: 'Explain: Concepts — Disasterrecovery'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 229
output_tokens: 533
total_tokens: 762
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T01:31:38-05:00'
sources: []
---

**Clarify**  
We’re asked to explain *disaster recovery* as it applies to AI systems—i.e., how we protect model training, inference pipelines, and data from catastrophic events (hardware failure, data corruption, ransomware). Clarifying assumptions: we’re dealing with production‑grade ML workloads, high availability, and minimal downtime.

**Approach**  
1. Identify critical assets: training data, feature stores, model checkpoints, serving infrastructure.  
2. Define recovery objectives: RTO (Recovery Time Objective) & RPO (Recovery Point Objective).  
3. Map out redundancy layers: multi‑region replication, immutable snapshots, and automated rollback.

**Depth**  
- **Data Layer:** Use versioned object storage (S3/Blob) with cross‑region replication; enable point‑in‑time recovery via snapshotting feature stores.  
- **Model Layer:** Store checkpoints in a distributed filesystem (e.g., GCS, S3) and tag them with metadata (seed, hyperparams). Implement “model registry” that supports immutable tagging for rollback.  
- **Infrastructure Layer:** Deploy inference services on managed Kubernetes clusters with pod auto‑scaling; use Helm charts to roll back to previous stable releases. Leverage Terraform for IaC so the entire stack can be rebuilt from code in minutes.  
- **Automation:** CI/CD pipelines trigger nightly full restores into a staging environment, validating against sanity tests (e.g., latency, accuracy thresholds).  
- **Monitoring:** Continuously audit data integrity via checksums; alert on anomalous model drift that could signal corruption.

**Edge Cases**  
- *Simultaneous region outage*: use multi‑master databases or read replicas in independent clouds.  
- *Model poisoning*: incorporate adversarial validation during restore to catch tampered weights.  
- *Storage cost spikes*: balance frequent snapshots against retention policies; prune old checkpoints after validation.

**Optimize & Communicate**  
Improvements: adopt serverless inference (e.g., Lambda, Cloud Run) for burst recovery; use immutable containers to eliminate “it works on my machine” issues. I’d narrate the plan by walking through a fail‑over drill: data fails in region A → automated replication pulls latest checkpoint from B → Kubernetes auto‑spins new pods with that checkpoint → monitoring confirms latency within RTO, accuracy matches baseline. This showcases structured thinking, depth of knowledge, and clear communication—exactly what FAANG interviewers look for.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
