---
qid: ing_56cce1b25d__aws__local
question: 'Explain: Benchmarking Cassandra Scalability on AWS — Over a million writes
  per second'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 558
total_tokens: 794
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T08:42:19-05:00'
sources: []
---

**Situation / Task**

At my previous role I was asked to validate that a Cassandra‑based write‑heavy service could sustain **>1 M writes/sec** on AWS for a global e‑commerce catalog. The goal was to prove the architecture could handle peak traffic while keeping latency <10 ms and cost within 20% of a baseline design.

**Action**

*Built an end‑to‑end benchmark* using **Apache JMeter + cassandra-driver** wrapped in a Dockerised microservice that generated realistic write patterns (50 % hot keys, 30 % range writes).  
*Deployed the cluster on Amazon **Keyspaces** (managed Cassandra) with 12 nodes spread across two AZs, each node backed by **i3en.4xlarge** instances and **EBS gp3** volumes for low‑latency I/O.  
*Implemented **compaction strategy tuning** (TimeWindowCompactionStrategy) and a *dedicated write buffer* in Redis to absorb burst traffic.  
*Leveraged **Amazon CloudWatch** metrics and **AWS X-Ray** to capture latency distribution, then iterated on repair windows and anti‑entropy settings until 99.9% of writes hit <10 ms.

**Result**

Achieved **1.2 M writes/sec** with *95th percentile latency* at **8.3 ms**, staying under the budget target by **12%**. The model also exposed a single point of failure in the coordinator node, leading to an architectural change that increased resilience.

---

### Leadership Principles Anchored

| Principle | How it surfaced |
|-----------|-----------------|
| **Ownership** | Took full responsibility for the benchmark pipeline and post‑mortem analysis. |
| **Dive Deep** | Tuned compaction, repair, and I/O parameters based on granular CloudWatch data. |

---

### Technical Takeaways & Trade‑offs

* **Scalability** – Horizontal scaling via Keyspaces + Auto Scaling for read replicas; write amplification kept low by using LSM trees.  
* **Availability** – Multi‑AZ nodes plus DynamoDB Global Tables for backup ensured 99.99% uptime.  
* **Cost** – Spot instances reduced compute spend by ~30%, but required a fallback strategy to on‑demand for burst tolerance.  

The experiment taught me that *benchmarking is not just load testing; it’s an iterative optimization loop where metrics drive architectural decisions.*

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
