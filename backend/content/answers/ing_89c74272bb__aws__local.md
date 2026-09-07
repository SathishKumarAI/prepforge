---
qid: ing_89c74272bb__aws__local
question: 'Explain: High Availability — Apache Kafka'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 227
output_tokens: 479
total_tokens: 706
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T10:37:28-05:00'
sources: []
---

**Situation / Task**  
At my last role I led a real‑time fraud detection pipeline that ingested ~10 M events per day from payment terminals. The business required <1 s latency and 99.99 % availability, so we had to re‑engineer our Kafka deployment.

**Action**  
I chose **Amazon MSK (Managed Streaming for Apache Kafka)** with *three broker nodes* in two AZs and enabled *broker replication factor of 3*.  
- **High Availability**: Each topic partition’s leader was automatically moved to a healthy node if one failed, guaranteeing zero data loss.  
- **Scalability**: I configured auto‑scaling for the producer throughput (1 kB/s per broker) and set up *broker storage on EBS gp3* with 2× provisioned IOPS, allowing us to burst to 10 GB/s aggregate read/write.  
- **Cost/Trade‑off**: Using MSK eliminated ops overhead (~30 % cost savings vs self‑hosted) but locked us into a single cloud provider; we mitigated this by keeping the data lake on S3 for archival.  
I also introduced *Kafka Streams* for stateful aggregation, which reduced downstream processing time from 5 s to 1.2 s.

**Result**  
Post‑migration, the system achieved **99.999% availability** and a **latency reduction of 75%** (from 5 s to 1.25 s). The cost per transaction dropped by **$0.02**, saving ~$200k annually.

---

### Leadership Principles Highlighted
- **Customer Obsession** – Delivered ultra‑low latency for fraud alerts, directly protecting revenue.  
- **Ownership / Dive Deep** – Took full responsibility for the Kafka architecture, tuned every parameter, and documented trade‑offs for future teams.  

A bar‑raiser would note my quantified impact, deep technical dive, ownership of failure handling (broker failover), and continuous learning from post‑mortems to improve resilience further.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
