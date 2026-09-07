---
qid: ing_cbd628e0b4__faang__local
question: 'Explain: Redundancy — How to Prepare for System Design Interview'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 442
total_tokens: 678
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T02:33:10-05:00'
sources: []
---

**Clarify**  
You’re asked how redundancy can be used when preparing for a system‑design interview in ML.  
Assumptions:  
1) The goal is to design an ML pipeline that remains functional if one component fails.  
2) You have access to cloud services, data stores, compute nodes, and monitoring tools.

**Approach**  
1. **Identify critical components** (data ingestion, feature store, training cluster, inference endpoint).  
2. **Add redundancy at each layer**: replicate storage, use multiple availability zones, deploy micro‑services with health checks.  
3. **Automate failover** using load balancers and circuit breakers.  
4. **Validate** by simulating failures in a sandbox.

**Depth**  
- *Data ingestion*: duplicate Kafka topics or SQS queues; employ consumer groups so if one broker dies, others pick up the stream.  
- *Feature store*: use a replicated NoSQL DB (e.g., DynamoDB with cross‑region replication).  
- *Training cluster*: run jobs on Kubernetes with pod replicas and a scheduler that restarts failed pods.  
- *Inference*: deploy model servers behind an ELB; keep at least two instances per region, auto‑scale based on latency metrics.  
Complexity: O(n) for monitoring but constant space. Trade‑off is higher cost vs. 99.999% availability.

**Edge Cases**  
- Network partition can cause split‑brain; use consensus protocols (Raft).  
- Data consistency: eventual vs. strong; decide based on business impact.  
- Simultaneous multi‑AZ failure – plan for disaster recovery sites.

**Optimize & Communicate**  
Explain that redundancy reduces single points of failure, improves SLAs, and is a core design principle in production ML systems. Show a diagram of replicated components, mention observability tools (Prometheus, Grafana), and highlight how you’d iterate on this architecture during an interview: start simple, add layers, then discuss trade‑offs with the interviewer.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
