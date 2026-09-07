---
qid: ing_d0b8cbf955__aws__local
question: 'Explain: Before you begin — Example: Deploying Cassandra with a StatefulSet
  | Kubernetes'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 546
total_tokens: 783
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T13:12:55-05:00'
sources: []
---

**Situation & Task**

I was leading the data‑science platform for a fintech startup that had just hit 1 M active users. Our models required low‑latency, highly available key‑value storage for feature flags and user embeddings. The team chose Cassandra for its tunable consistency and horizontal scalability, but we were on Kubernetes where stateful workloads are notoriously tricky.

**Action**

1. **Requirements & Design**  
   * Each node needed 64 GiB SSD, 8 vCPU, and 2 TB of network‑attached storage.  
   * We opted for a `StatefulSet` with 3 replicas (RAID‑0 across two EBS volumes) to guarantee persistence and failover.  
   * Service discovery used the headless service pattern; we added a sidecar that exposes Cassandra’s JMX metrics to Prometheus via `cassandra-exporter`.  
   * To simplify operations, I wrote an ArgoCD pipeline that applied Helm charts with custom values (`k8s-cassandra`), automatically rolling out schema changes.

2. **Scalability & Availability**  
   * The StatefulSet leveraged Kubernetes’ pod anti‑affinity to spread replicas across AZs, giving us >99.9 % availability during a simulated AZ outage.  
   * Auto‑scaling was achieved by adding a `ClusterIP` service that exposes the Gossip protocol; we used a custom operator to monitor read/write latency and trigger node addition when thresholds exceeded.

3. **Cost & Trade‑offs**  
   * Using EC2 spot instances for non‑critical nodes reduced spend by 35 %.  
   * The trade‑off was an increased operational overhead for managing spot interruptions, mitigated by the `cassandra-operator`’s graceful eviction handling.

4. **Result**

| Metric | Value |
|--------|-------|
| Query latency (99th percentile) | 12 ms (↓30 % vs baseline) |
| Availability during AZ outage | 99.95 % |
| Cost per node‑month | $120 (35 % lower than on‑demand) |

**Reflection**

I took full ownership of the deployment, diving deep into Cassandra’s internals and Kubernetes’ stateful semantics. The bar‑raiser will note that I quantified impact with latency and cost metrics, learned from a failed scaling test (nodes didn’t respect anti‑affinity), and iterated on the operator to fix it—demonstrating *Ownership*, *Dive Deep*, and *Deliver Results*.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
