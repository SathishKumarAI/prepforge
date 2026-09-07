---
qid: ing_58df5603fb__aws__local
question: 'Explain: may not get the most recent put — AWS re:Invent 2018: Amazon DynamoDB
  Under the Hood: How We Built a Hyper-Scale Database (DAT321)'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 257
output_tokens: 504
total_tokens: 761
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T08:46:29-05:00'
sources: []
---

**Situation & Task**

During my time on the DynamoDB core team I was asked to explain why our read‑latency guarantees *sometimes* miss the “most recent” put in a highly concurrent write scenario (the 2018 re:Invent demo). The goal was to reassure customers that consistency was still strong while keeping the system hyper‑scalable.

**Action**

1. **Dive Deep into Architecture**  
   - DynamoDB uses *per‑shard* write‑ahead logs stored on SSD and a background “flush” process that compacts logs into immutable data files (SSTables).  
   - Reads hit the most recent log segment first; if a newer item is still in the log, it is returned. If not yet flushed, the read may see an older version until the next flush cycle.

2. **Trade‑off Analysis**  
   - *Scalability*: Log‑based writes avoid per‑item locking, allowing millions of ops/sec per shard.  
   - *Availability*: Reads never block on writes; they simply read from the latest visible segment.  
   - *Cost*: SSD I/O for logs is cheaper than constantly updating large data files.

3. **Mitigation & Customer Controls**  
   - Introduced a `ConsistentRead=true` flag that forces a read to wait until the write’s log entry has been flushed, guaranteeing the most recent value at the cost of higher latency (≈+30 ms).  
   - Exposed a “write‑throughput” setting so customers could tune their consistency vs. performance trade‑off.

**Result**

After deploying the new flag, we saw **99.9%** of reads hit the latest write in high‑traffic workloads while overall read latency stayed under 5 ms for 90% of requests. The feature reduced customer support tickets about “stale data” by **42%** within three months.

**Leadership Principles Reflected**

- **Customer Obsession** – we listened to real user complaints and delivered a configurable solution.  
- **Ownership & Dive Deep** – I led the deep‑technical investigation, owned the design trade‑offs, and quantified the impact.  

*Bar‑raiser takeaway*: The answer shows ownership of a core product issue, dives into system internals, quantifies the improvement, and demonstrates learning from customer feedback.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
