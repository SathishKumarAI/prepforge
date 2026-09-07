---
qid: ing_7552419f9a__aws__local
question: 'Explain: Scheduling — SSTable compaction and compaction strategies \u00b7
  scylladb/scylladb Wiki \u00b7 GitHub'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 251
output_tokens: 499
total_tokens: 750
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T09:51:19-05:00'
sources: []
---

**Situation & Task (S)**  
In my last role I led a migration of a high‑traffic IoT platform from Cassandra to ScyllaDB on an AWS‑managed cluster. The data model required frequent time‑series writes and near‑real‑time analytics, so we had to tune SSTable compaction to keep read latency under 5 ms while handling >1 M writes/sec.

**Action (A)**  
I evaluated the three native strategies—Leveled, Size‑Tiered, and Time‑Windowed—and ran a 48‑hour proof‑of‑concept on an EC2 m6i.10xlarge fleet with DynamoDB‑backed metadata for auto‑scaling.  
- **Size‑Tiered** was fast to write but produced large compaction windows, hurting reads.  
- **Leveled** gave consistent read latency (~3 ms) but increased CPU usage (40 % higher).  
- **Time‑Windowed** matched our ingestion pattern: we partitioned by 15‑minute windows and set `compaction_threshold=4`. This reduced compaction time by 60 %, kept write amplification <1.2×, and lowered IOPS to ~80 k/s.

I scripted the configuration in Terraform, integrated with CloudWatch for metrics, and added an SNS alert if latency exceeded 10 ms.

**Result (R)**  
After rollout:  
- Read latency dropped from 12 ms to 3.4 ms (71 % improvement).  
- Write throughput increased by 35 %.  
- Cost per GB stored fell 18 % due to fewer SSTables and lower IOPS.

**Leadership Principles**  
- **Customer Obsession**: We focused on the end‑user’s need for sub‑5 ms reads.  
- **Dive Deep & Ownership**: I owned the entire compaction tuning process, from hypothesis to production deployment, learning that a hybrid strategy often beats “one size fits all.”  

**Bar‑raiser takeaway**  
Showed deep technical knowledge of ScyllaDB’s compaction internals, quantified impact on latency and cost, and demonstrated proactive learning by iterating on strategies until the metrics aligned with business goals.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
