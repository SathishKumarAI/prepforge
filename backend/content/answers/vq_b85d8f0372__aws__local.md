---
qid: vq_b85d8f0372__aws__local
question: How Hbase can be a Distributed database?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 229
output_tokens: 524
total_tokens: 753
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T05:10:53-05:00'
sources: []
---

**S (Situation)** – In my last role I led a migration of a legacy monolithic OLTP system to a scalable analytics platform for a global retailer. The business required near‑real‑time inventory updates across 500+ warehouses, with 10 M writes per day and sub‑second read latency.

**T (Task)** – My goal was to design a distributed store that could ingest billions of rows daily while guaranteeing ACID‑like consistency for the most critical keys. I chose **Apache HBase** on EMR because it offers row‑level transactions, columnar storage, and tight integration with Hadoop.

**A (Action)** –  
1. **Cluster sizing:** 50 HBase region servers, each backed by EBS gp3 (2 TB) to hit 10 M writes/second.  
2. **Data model:** Row key = `warehouseID|productID|timestamp`; column families for inventory and metadata.  
3. **Scalability:** Automatic region splitting triggered at 100 GB, ensuring linear growth.  
4. **Availability:** Replication factor of 3 across AZs; HBase’s WAL persisted to S3 for durability.  
5. **Cost control:** Spot instances for non‑critical nodes, on‑demand for hot keys; used EMR Auto Scaling to shut down idle servers during low traffic.

**R (Result)** – The new system handled 15 M writes/second with <200 ms read latency and a 99.999% uptime SLA, reducing inventory variance by **32%** and cutting operational costs by **$1.2 M/year** versus the old monolith.

> *Leadership Principles:* **Ownership** – I took end‑to‑end responsibility for architecture, cost, and reliability. **Dive Deep** – I iterated on region split thresholds and WAL retention until performance met SLA targets.  

**Bar‑raiser cues:**  
- Clear ownership of trade‑offs (spot vs. on‑demand).  
- Quantified impact (write throughput, latency, variance reduction).  
- Learning loop: after a flash crash we added a read‑replica cluster, proving continuous improvement.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
