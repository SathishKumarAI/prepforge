---
qid: ing_a14450f2dc__faang__local
question: 'Explain: On-call playbook — Multi Tenant Fine Tuning Platform'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 484
total_tokens: 719
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T00:59:28-05:00'
sources: []
---

**Clarify**  
We need to design a *multi‑tenant fine‑tuning platform* that can run on‑call operations (monitoring, auto‑restart, alerting).  
Assumptions:  

1. Tenants are isolated at the data & model level but share compute resources.  
2. Fine‑tuning jobs can be long‑running and may fail mid‑run.  
3. On‑call team expects automated recovery, metrics, and audit logs.

**Approach**  
1. **Job orchestration layer** – a scheduler (e.g., Argo Workflows) that queues, retries, and scales GPU pods per tenant.  
2. **State persistence** – each job writes checkpoints to object storage; a metadata DB tracks progress, owner, and status.  
3. **Health checks & watchdog** – liveness probes plus an external watchdog service that restarts failed jobs after a threshold.  
4. **Observability stack** – Prometheus metrics (GPU usage, loss curves), Loki logs, and Alertmanager alerts for failures or SLA breaches.

**Depth**  
- Scheduler assigns GPUs via Kubernetes QoS classes; uses resource quotas per tenant to enforce limits.  
- Checkpoints are stored in S3‑compatible buckets with IAM policies isolating tenants.  
- The watchdog polls the metadata DB every 30 s, compares last checkpoint timestamp against a configurable timeout, and triggers pod recreation.  
- Complexity: O(n) for polling all jobs; acceptable given n is moderate (hundreds). Trade‑off: more aggressive timeouts reduce manual ops but increase false positives.

**Edge Cases**  
- Sudden GPU failure → pod evicts; watchdog restarts on same node if possible.  
- Data corruption in checkpoints → fallback to last good checkpoint or full restart.  
- Tenant data leaks → strict RBAC and bucket policies prevent cross‑access.

**Optimize & Communicate**  
We can batch health checks using a shared Redis stream to reduce DB load, and add predictive failure modeling (ML on job metrics) to preemptively scale resources. I’d explain this flow in a whiteboard diagram, highlight the separation of concerns, and emphasize how each component lowers on‑call toil while maintaining tenant isolation.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
