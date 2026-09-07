---
qid: ing_2962a43068__faang__local
question: 'Explain: Horizontal Scaling — System Design was HARD until I Learned these
  30 Concepts'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 852
total_tokens: 1091
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T20:20:02-05:00'
sources: []
---

**Clarify**  
The interview asks how horizontal scaling became “hard” before mastering certain concepts and what those concepts are. I’ll assume the context is distributed ML pipelines (data ingestion → training → inference) that need to scale across many nodes.

**Approach**  
1. List core ideas that unlock scalable design.  
2. Briefly explain each concept’s role in solving a specific pain point.  
3. Quantify impact where possible.

**Depth**

| # | Concept | Why it mattered | Typical pain resolved |
|---|---------|-----------------|-----------------------|
| 1 | **Stateless services** | Enables easy replication | Single‑point failures |
| 2 | **Event‑driven architecture** | Decouples producers/consumers | Bottleneck on queues |
| 3 | **Message brokers (Kafka, Pulsar)** | Handles high throughput & durability | Backpressure |
| 4 | **Back‑pressure handling** | Prevents overload | Data loss |
| 5 | **Data partitioning / sharding** | Parallel processing | Hotspots |
| 6 | **Consistent hashing** | Balanced shards with minimal rebalancing | Repartition cost |
| 7 | **CAP theorem awareness** | Trade‑offs in consistency vs. latency | Availability during partitions |
| 8 | **Read/write replicas** | Scale read traffic | Stale reads |
| 9 | **Leader election (Raft/Zookeeper)** | Fault‑tolerant coordination | Split brain |
|10 | **Distributed locking** | Safe concurrent updates | Deadlocks |
|11 | **Batch vs. streaming** | Optimize compute patterns | Latency budgets |
|12 | **Data locality** | Reduce network I/O | Cross‑region traffic |
|13 | **Feature store architecture** | Consistent feature access | Feature drift |
|14 | **Model versioning & lineage** | Reproducibility | “What if” scenarios |
|15 | **A/B testing frameworks** | Safe rollout | Black‑box changes |
|16 | **Canary releases** | Minimize risk | Rollback latency |
|17 | **Observability stack (metrics, logs, traces)** | Root cause analysis | Silent failures |
|18 | **Auto‑scaling policies** | Elasticity | Over‑provisioning |
|19 | **Circuit breakers** | Protect downstream services | Cascading failures |
|20 | **Service mesh (Istio/Linkerd)** | Traffic control & security | Hard‑coded configs |
|21 | **Container orchestration (K8s)** | Declarative deployments | Manual scaling |
|22 | **Horizontal pod autoscaler** | Scale by demand | CPU/memory spikes |
|23 | **StatefulSet for stateful workloads** | Persist data across rescale | Data loss |
|24 | **Distributed training frameworks (Horovod, DeepSpeed)** | Parallelize GPU usage | Synchronization overhead |
|25 | **Gradient checkpointing & mixed precision** | Reduce memory footprint | Training time |
|26 | **Model compression (pruning, quantization)** | Faster inference | Accuracy drop |
|27 | **Edge caching** | Low‑latency inference | Cold starts |
|28 | **Feature flagging** | Toggle experiments safely | Feature toggle drift |
|29 | **Security hardening (RBAC, secrets management)** | Prevent data leaks | Compliance issues |
|30 | **Cost monitoring & budgeting tools** | Predict spend | Unexpected bill spikes |

**Edge cases**  
- Sudden traffic surges → autoscaler lag.  
- Partitioned network → consistency violations.  
- Data drift in feature store → model degradation.

Test by simulating node failures, burst loads, and data schema changes.

**Optimize & communicate**  
Explain trade‑offs (e.g., eventual vs. strong consistency) and how each concept reduces a specific scaling barrier. Emphasize that mastering these 30 ideas turns an ad‑hoc “scale when it breaks” mindset into a proactive, resilient system design approach.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
