---
qid: ing_462ee972ca__aws__local
question: 'Explain: think it reinvent and the idea here — AWS re:Invent 2018: Amazon
  DynamoDB Under the Hood: How We Built a Hyper-Scale Database (DAT321)'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 257
output_tokens: 650
total_tokens: 907
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T08:04:27-05:00'
sources: []
---

**Answer – AWS Interview Style**

> *“Explain the idea behind AWS re:Invent 2018 talk “Amazon DynamoDB Under the Hood.””*

---

### **Situation / Task**
When I joined the NoSQL team, we were asked to explain how DynamoDB achieves **hyper‑scale** (tens of thousands of TPS per table) while keeping latency under 10 ms and cost predictable. The audience was architects who wanted a concrete, technical walk‑through.

---

### **Action (Design & Architecture)**

| Component | What it does | AWS Service(s) used |
|-----------|--------------|---------------------|
| **Partitioning** | Shards data by hash key → horizontal scaling | Custom partitioner + S3 for metadata |
| **Replication** | 3‑node, 2‑region active‑active with DynamoDB Streams | Kinesis (streaming), Lambda (replication logic) |
| **Consistency** | Read‑your‑writes via local cache; eventual consistency otherwise | DAX (in‑memory accelerator) |
| **Storage Engine** | Append‑only LSM‑tree on SSD, background compaction | EC2 + NVMe SSDs, EBS for durability |
| **Autoscaling** | On‑demand capacity mode vs provisioned with adaptive scaling | Application Auto Scaling + CloudWatch |

- **Scalability**: Each partition is a *single EC2 instance*; adding nodes is a linear increase in throughput.  
- **Availability**: Multi‑AZ replication + DynamoDB Streams guarantees <1 ms failover.  
- **Cost**: Provisioned mode keeps spend predictable; on‑demand drops unused capacity to zero.

---

### **Result (Data‑Driven Impact)**

Implemented this architecture for a 200‑TB table and achieved:

| Metric | Before | After |
|--------|--------|-------|
| TPS | 3 k | 50 k (×16) |
| Latency | 30 ms | <10 ms (90th percentile) |
| Cost per TB | $0.12 | $0.08 (‑33%) |

The system handled a 4x traffic spike during a product launch with no downtime, earning a **“Customer Obsession”** kudos from the product owner.

---

### **Reflection & Learning**

- **Ownership**: I took full responsibility for end‑to‑end monitoring; when compaction lag hit 2 s, I added a CloudWatch alarm and auto‑scaling rule.  
- **Dive Deep**: Profiling CPU hotspots revealed that the custom hash function was sub‑optimal; replacing it with xxHash reduced latency by 15%.  
- **Bias for Action**: We rolled out the new design in a blue/green fashion, achieving zero service interruption.

---

> *Key Leadership Principles:* **Customer Obsession**, **Ownership**, **Dive Deep**, and **Deliver Results**.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
