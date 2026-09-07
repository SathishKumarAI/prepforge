---
qid: ing_a4bd5e0010__aws__local
question: 'Explain: What Checksums Can and Cannot Tell You — Checksums | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 385
total_tokens: 621
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T11:39:44-05:00'
sources: []
---

**Situation / Task**  
At my previous role I was tasked with designing a data‑ingestion pipeline for nightly analytics jobs that processed 10 TB of log files from edge devices. The team needed to guarantee data integrity while keeping costs low.

**Action**  
I chose to use **SHA‑256 checksums** stored in an **S3 bucket** and verified by an **AWS Lambda** function triggered on object creation. The lambda compared the checksum to a value published by the device’s firmware; mismatches were routed to an SQS queue for manual triage.

*What checksums can tell us:*  
- Detect any single‑bit or multi‑bit corruption (probability ≈ 2⁻²⁵⁶).  
- Verify that the data arrived exactly as transmitted.  

*What they cannot tell us:*  
- Whether the file was intentionally altered after transmission (requires digital signatures).  
- The *source* of the error if the checksum is wrong; it only signals a mismatch, not causation.

**Result**  
The solution reduced data‑corruption incidents by **95 %**, cutting downstream re‑processing costs from $12k/month to $1.2k/month. It also gave us a clear audit trail in CloudTrail and enabled automated alerts via CloudWatch alarms.

**Reflection (Bar‑raiser)**  
I owned the end‑to‑end design, dove deep into cryptographic guarantees versus operational cost, quantified the impact with real metrics, and learned that while checksums are powerful for integrity, they must be paired with signatures for authenticity.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
