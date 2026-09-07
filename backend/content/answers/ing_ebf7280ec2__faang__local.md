---
qid: ing_ebf7280ec2__faang__local
question: 'Explain: How it provides high availability: — Availability | System Design'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 525
total_tokens: 760
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T03:49:17-05:00'
sources: []
---

**Clarify**  
You’re asking how an AI‑based system can be designed for *high availability* (HA). I’ll assume we want the service to stay online and responsive even when individual components fail, with minimal downtime and a target SLA of 99.999 % uptime.

**Approach**  
1. **Redundancy at every layer** – duplicate compute nodes, storage shards, networking paths.  
2. **Health‑checks & graceful failover** – continuous liveness probes that trigger automatic switchover to healthy replicas.  
3. **Stateless microservices + distributed cache** – so any node can handle a request; no single point of failure.  
4. **Data replication strategy** – use multi‑region geo‑replication (e.g., Raft or Paxos) for model checkpoints and inference results.  
5. **Circuit breakers & back‑pressure** – prevent cascading failures when downstream services lag.

**Depth**  
- *Compute*: Deploy the inference engine in a Kubernetes cluster with pod autoscaling; use canary releases to roll out new models without downtime.  
- *Storage*: Store model artifacts in an S3‑compatible, cross‑region bucket; replicate every write to a second region (latency ≈ 20 ms).  
- *Networking*: Use DNS‑based load balancers with health checks that route traffic only to healthy endpoints.  
- *Consistency*: For training data pipelines, employ eventual consistency but lock critical updates via distributed consensus (e.g., etcd).  
Complexity: O(n) for n replicas in read paths; write latency increases by the replication round‑trip (~50 ms per region).

**Edge Cases**  
- **Simultaneous regional outage** – fallback to a cold standby region or degraded mode.  
- **Model drift** – continuous monitoring and automated rollback if accuracy falls below threshold.  
- **Burst traffic spikes** – auto‑scale compute nodes; use rate limiting.

**Optimize & Communicate**  
I’d suggest adding *watchdog* services that log failure patterns, enabling predictive scaling. In a real interview I would sketch the architecture diagram, quantify SLA math (e.g., 4‑nines ≈ 0.5 hr downtime), and explain trade‑offs between consistency vs. latency for AI workloads. This shows structured thinking, depth in system design, and clear communication—key signals FAANG interviewers look for.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
