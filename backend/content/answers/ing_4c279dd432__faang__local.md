---
qid: ing_4c279dd432__faang__local
question: 'Explain: Availability | System Design'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 228
output_tokens: 516
total_tokens: 744
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T21:41:24-05:00'
sources: []
---

**Availability | System Design – FAANG‑style Answer**

| Step | What I’d say |
|------|--------------|
| **Clarify** | “You’re asking how we build a system that keeps an AI service up when traffic spikes, failures happen or components go offline.  Key assumptions: <br>• Latency budget (e.g., <200 ms).<br>• SLA target (99.9 % uptime).<br>• Stateless vs stateful workloads (model inference is stateless; training data is stateful).<br>• Geographic distribution and regulatory constraints.” |
| **Approach** | 1️⃣ Use *regional* replication of the model artifacts.<br>2️⃣ Deploy a *load‑balancer + health‑check* layer that routes only healthy nodes.<br>3️⃣ Apply *canary releases* for new model versions. <br>4️⃣ Store inference metadata in a highly available key‑value store (e.g., DynamoDB). |
| **Depth** | • Each region hosts N replicas; LB performs round‑robin + health checks every 10 s.<br>• If a replica fails, the LB drops it until recovery. <br>• For stateful training jobs, use a distributed file system (S3/FSx) with cross‑region replication; read‑replicas provide low‑latency reads while writes go to primary. <br>• Use *Circuit Breaker* patterns to avoid cascading failures.<br>Complexity: O(1) routing per request; recovery time ≈ 30 s (depends on health‑check interval). |
| **Edge Cases** | • Network partitions between regions → fallback to a single region with degraded latency.<br>• Model update rollbacks if accuracy drops.<br>• Cold starts for new replicas – pre‑warm containers. |
| **Optimize & Communicate** | • Add *predictive autoscaling* based on traffic trends.<br>• Expose a health API so monitoring dashboards can trigger alerts early.<br>When presenting, I’d start with the high‑level diagram, then walk through each failure mode and how our design keeps the SLA. This shows clear reasoning, depth, and awareness of trade‑offs—exactly what FAANG interviewers look for. |

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
