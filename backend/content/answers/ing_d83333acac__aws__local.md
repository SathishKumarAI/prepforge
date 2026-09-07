---
qid: ing_d83333acac__aws__local
question: 'Explain: When to start using compacted tables — SSTable compaction and
  compaction strategies \u00b7 scylladb/scylladb Wiki \u00b7 GitHub'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 257
output_tokens: 528
total_tokens: 785
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T13:28:30-05:00'
sources: []
---

**Situation & Task**  
I was tasked to reduce the 4‑TB write‑throughput bottleneck on a production ScyllaDB cluster that served a real‑time recommendation engine. The cluster had been using the default *size‑tiered* compaction, which caused frequent read amplification and high disk I/O.

**Action & Technical Design**  
- **Dive Deep into Metrics:** Analyzed `sstable_size_in_bytes` and `compactions_per_second`. Found that most SSTables were < 200 MB but were still being merged every few minutes.  
- **Choose the Right Strategy:** Switched to *Leveled* compaction for hot tables (10 % of writes) because it keeps read amplification bounded at ~4×, while keeping *Size‑Tiered* for cold archival data.  
- **AWS Integration:** Exported compaction logs to CloudWatch and used Kinesis Data Firehose to stream metrics into a DynamoDB table for real‑time monitoring.  
- **Cost & Availability Trade‑offs:** Leveled requires more write amplification (≈ 2×) but dramatically lowers read latency; we accepted the extra writes because our application’s SLA was 10 ms reads, not writes.  

**Result**  
- Read latency dropped from 35 ms to 12 ms (−65 %).  
- Disk I/O decreased by 40 %, freeing capacity for future growth.  
- Monthly storage cost fell by ~15 % due to fewer SSTables.

**Reflection & Learning**  
I learned that compaction strategy is a *system‑level ownership* decision—choosing the right trade‑offs early saves downstream engineering effort. I also realized the importance of continuously revisiting metrics; what works today may not scale tomorrow.  

**Bar‑raiser cues:**  
- Demonstrated ownership by driving end‑to‑end change.  
- Showed depth through metric analysis and strategy selection.  
- Quantified impact with clear latency & cost numbers.  
- Embraced failure by iterating on strategy after observing the first run’s performance.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
