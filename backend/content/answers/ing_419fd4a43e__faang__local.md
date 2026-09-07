---
qid: ing_419fd4a43e__faang__local
question: 'Explain: Hardware Failures — Reliability | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 491
total_tokens: 724
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T21:16:35-05:00'
sources: []
---

**Hardware Failures – Reliability in ML Systems**

1. **Clarify**  
   *Goal:* Build an ML pipeline that stays available when individual hardware nodes fail.  
   *Assumptions to confirm:*  
   - Service level objective (SLO) for uptime (e.g., 99.999%).  
   - Types of failures: disk corruption, power loss, network partition, GPU crash.  
   - Data residency constraints and compliance rules.

2. **Approach**  
   - **Redundancy & Replication:** Deploy stateless inference workers behind a load balancer; replicate training data shards across nodes.  
   - **Health‑checks & Heartbeats:** Use Kubernetes liveness/readiness probes plus custom metrics (GPU temperature, memory usage).  
   - **Graceful Degradation:** If a node fails, route traffic to healthy replicas and trigger an automated retraining job if model drift is detected.

3. **Depth**  
   - *Data Layer:* Store checkpoints in erasure‑coded object storage (e.g., Ceph or S3) so any single disk loss doesn’t corrupt the model.  
   - *Compute Layer:* Spin up spare GPU nodes; use a scheduler that can hot‑swap failed workers.  
   - *Networking:* Employ SD‑WAN with multipath routing to avoid single points of failure.  
   Complexity: O(1) for health checks, O(n) for data replication where n = number of replicas. Trade‑off between storage cost and fault tolerance.

4. **Edge Cases**  
   - Simultaneous multi‑node failures (e.g., rack power loss).  
   - Correlated failures from a shared NVMe SSD.  
   - Data consistency after partial writes; test with Byzantine fault simulation.

5. **Optimize & Communicate**  
   - Introduce *self‑healing* by automating node replacement and checkpoint recovery.  
   - Use observability dashboards (Prometheus + Grafana) to surface failure patterns early.  
   Narrate: “We’ll design the system to be *stateless* at the inference layer, *replicated* at storage, and *self‑healing* at compute—ensuring that any hardware glitch is absorbed without impacting user experience.”

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
