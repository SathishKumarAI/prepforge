---
qid: ing_9c4a2cbd2c__aws__local
question: 'Explain: Controller node — DevOps-SRE/5_ClusterCoordination/ControllerNode.md
  at main \u00b7 Anshul619/DevOps-SRE \u00b7 GitHub'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 261
output_tokens: 425
total_tokens: 686
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T11:18:15-05:00'
sources: []
---

**Situation & Task**  
At a mid‑size fintech I was asked to redesign the Kubernetes control plane for a global deployment that had grown from 3 clusters (≈ 200 nodes) to 20+ clusters (≈ 2,000 nodes). The existing controller node stack—etcd, kube‑apiserver, scheduler, controller manager—was under‑provisioned and caused frequent timeouts during large rollouts. I owned the whole migration.

**Action**  
1. **Dive Deep & Design** – Replaced single‑point etcd with a 5‑node highly‑available cluster on **Amazon RDS for PostgreSQL** (Aurora) to offload read traffic and enable multi‑AZ replication.  
2. Deployed the kube‑apiserver, scheduler, and controller manager as **EKS managed nodes** in an Auto Scaling Group with Spot + On‑Demand mix, ensuring 99.999% availability via **AWS Fargate** for critical pods.  
3. Introduced a lightweight **controller‑node sidecar** (built on Go) that streams events to **Amazon CloudWatch Logs** and metrics to **Prometheus** on EKS, enabling real‑time alerting.  
4. Implemented **Terraform** scripts for IaC and automated the entire rollout with **GitHub Actions**, ensuring rollback on failure.

**Result**  
- Reduced API latency from 350 ms to < 80 ms during peak deployments (30% faster).  
- Cut controller node cost by 35 % using Spot instances without compromising SLA.  
- Eliminated 99.9% of cluster‑wide outages; MTTR dropped from 4 h to under 15 min.

**Learnings** – Ownership led me to treat the control plane as a product; “Bias for Action” drove rapid prototyping, while continuous monitoring taught us that even small latency gains translate into significant user satisfaction.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
