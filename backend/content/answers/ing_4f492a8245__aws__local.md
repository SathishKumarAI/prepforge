---
qid: ing_4f492a8245__aws__local
question: 'Explain: Mission Critical — Apache Kafka'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 227
output_tokens: 719
total_tokens: 946
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T08:24:29-05:00'
sources: []
---

**Mission‑Critical Apache Kafka – Design & Execution**

**Situation (S)**  
At my previous firm we launched a real‑time fraud‑detection pipeline for payment transactions. The system had to process ~10 M events/sec with <200 ms latency and 99.999% availability, because any outage meant lost revenue and regulatory risk.

**Task (T)**  
I owned the data ingestion layer: build a Kafka cluster that could ingest, buffer, and stream millions of messages reliably while staying cost‑efficient on AWS.

**Action (A)**  

| Step | What I did | Why it mattered |
|------|------------|-----------------|
| **Cluster sizing** | Deployed 3 AZs of `kafka` using Amazon MSK with 15 broker nodes (r5.4xlarge). Each broker had 2 TB EBS‑IO1 for high write throughput. | Guarantees partition replication across AZs → fault tolerance and low latency. |
| **Partitioning strategy** | Chose 2000 partitions, keyed by `transaction_id`. | Ensures parallelism: each consumer can read from a unique partition, scaling to thousands of consumers. |
| **Retention & compaction** | Set log retention to 7 days with compacted topics for deduplication. | Meets regulatory audit needs while limiting storage costs. |
| **Monitoring & Auto‑Scaling** | Integrated CloudWatch metrics (`BrokerCPUUtilization`, `UnderReplicatedPartitions`) with Lambda that triggers MSK’s dynamic broker scaling (via AWS Service Catalog). | Keeps performance high without manual intervention. |
| **Security** | Applied IAM roles, VPC endpoints, and TLS encryption; used KMS for key rotation. | Meets PCI‑DSS compliance. |
| **Cost control** | Leveraged Spot Instances for non‑critical read replicas; applied Savings Plans on compute usage. | Reduced $350k annual spend while maintaining SLA. |

**Result (R)**  

* 99.999% uptime over 18 months, with no major outages.  
* Latency dropped from 1.2 s to <200 ms, boosting fraud‑detection accuracy by 12%.  
* Cost savings of **35%** vs a traditional on‑prem Kafka cluster.  

---

### Leadership Principles

| Principle | How I Demonstrated It |
|-----------|-----------------------|
| **Ownership** | Took full responsibility from requirement gathering to post‑launch monitoring, including cost optimization. |
| **Dive Deep** | Analyzed broker metrics at the partition level, tuned GC settings, and performed root‑cause analysis of a 500 ms spike. |
| **Deliver Results** | Met SLA targets while cutting costs—quantified impact on revenue and compliance risk. |

---

### What a Bar‑raiser Looks For

* **Quantified Impact:** I reported exact uptime %, latency improvement, and cost savings.  
* **Depth & Trade‑offs:** Explained partition count choice, EBS IOPS vs throughput, and Spot vs On‑Demand trade‑offs.  
* **Learning from Failure:** After an initial 3 day outage due to a mis‑configured replication factor, I documented the incident, updated runbooks, and automated the check in CI/CD.  

This showcases Amazon’s focus on customer obsession (reliable fraud detection), ownership (full lifecycle control), and delivering measurable results.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
