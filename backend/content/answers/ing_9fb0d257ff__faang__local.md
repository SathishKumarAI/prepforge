---
qid: ing_9fb0d257ff__faang__local
question: 'Explain: Cost Optimization Playbook'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 228
output_tokens: 485
total_tokens: 713
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T00:55:21-05:00'
sources: []
---

**Clarify**  
You’re asking for a framework that reduces cloud/AI‑ops spend while preserving performance.  
Assumptions to confirm:  

1. The stack uses managed services (e.g., GCP AI Platform, AWS SageMaker).  
2. Workloads are batch & inference‑heavy with predictable traffic patterns.  
3. You have monitoring data (cost, latency, utilization) and a budget target.

**Approach**  
1. **Visibility** – tag resources, enable cost explorer + custom dashboards.  
2. **Right‑size** – match instance types to CPU/GPUs vs. memory needs; use autoscaling groups or spot instances.  
3. **Schedule** – shut down idle notebooks, use preemptible VMs for training.  
4. **Data & Model** – compress datasets, prune models (quantization, pruning), cache inference results.  
5. **Infrastructure** – adopt serverless functions for micro‑tasks; move to managed pipelines (e.g., Vertex AI Pipelines).  
6. **Governance** – set budget alerts, enforce tagging policy, review quarterly.

**Depth**  
- **Autoscaling**: `min=1,max=10` with target CPU 70% → reduces idle cost by ~30%.  
- **Spot VMs**: up to 80 % savings; add checkpointing for fault tolerance.  
- **Model pruning**: 50 % fewer parameters → inference latency drop + GPU memory cut.  
- **Data compression**: Parquet + columnar store cuts storage cost by ~40%.  

Complexity is linear in #resources; trade‑offs involve risk of spot termination vs. savings.

**Edge Cases**  
- Non‑interruptible workloads (real‑time inference) cannot use spot.  
- Highly variable traffic may over‑scale if thresholds set too low.  
- Pruning can degrade accuracy beyond acceptable limits—need validation.  

**Optimize & Communicate**  
Iterate by running A/B tests on instance types, monitor SLA drift. Present findings in a dashboard with cost‑benefit ratios; recommend quarterly reviews to adjust thresholds. This structured playbook balances savings against performance guarantees, aligning with FAANG’s data‑driven decision culture.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
