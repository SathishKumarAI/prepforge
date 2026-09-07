---
qid: ing_e7a07f1d5f__faang__local
question: 'Explain: Basic Architecture of Kafka Cluster'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 230
output_tokens: 435
total_tokens: 665
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T03:38:37-05:00'
sources: []
---

**Clarify**  
You’re asking for a high‑level view of a *Kafka cluster*—the nodes, roles, and how data flows between them. I’ll assume you want the core components (brokers, Zookeeper or KRaft, topics, partitions) and their interactions, not an implementation detail.

**Approach**  
1. Outline the physical topology: brokers + controller.  
2. Explain topic/partition abstraction and replication.  
3. Show message flow for produce/consume.  
4. Touch on fault‑tolerance (leader election, ISR).  

**Depth**  
- **Brokers** run Kafka processes; each holds partitions of topics.  
- **Controller** (one broker elected) manages metadata: topic creation, partition reassignment, leader elections.  
- **Zookeeper** (pre‑KRaft) or the built‑in **KRaft** log stores cluster state; brokers register here and read metadata.  
- A **topic** is split into *partitions* for parallelism; each partition has a single **leader** broker and zero‑or-more **followers** that replicate data.  
- Producers send records to the leader of the target partition (via key hashing). The leader appends to its log, acknowledges, then pushes copies to followers asynchronously.  
- Consumers read from leaders directly or via consumer groups; each consumer group tracks offsets per partition.

**Edge Cases**  
- Broker crash → controller elects a new leader from ISR; if none, topic becomes unavailable.  
- Network partitions can split the cluster; Kafka tolerates by keeping majority of replicas online.  
- Out‑of‑order writes are prevented by ordering guarantees within each partition.

**Optimize & Communicate**  
Highlight that horizontal scaling is achieved by adding brokers and increasing partitions, while replication provides durability. Mention that recent Kafka releases use KRaft for simpler architecture (no external Zookeeper). Conclude with a quick diagram reference if asked.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
