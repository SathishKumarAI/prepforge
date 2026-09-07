---
qid: ing_831f32a1a8__aws__local
question: 'Explain: Choose the Right Granularity — Checksums | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 466
total_tokens: 699
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T10:21:20-05:00'
sources: []
---

**Scenario – Building a Distributed File Integrity Service**

**Situation & Task**  
At my last role I led the redesign of our data lake ingestion pipeline. Every night we received 30 TB of raw logs; any corruption would invalidate downstream analytics and cost us $1,200 per hour in re‑runs. My goal was to guarantee integrity while keeping latency under 2 s for a single file upload.

**Action – Choosing Granularity & Design**  
I scoped the problem with *Dive Deep* and *Ownership*: I logged every checksum calculation, measured CPU cycles, and traced failures. Two options emerged:

| Granularity | AWS Services | Cost/Latency |
|-------------|--------------|--------------|
| **File‑level** (MD5) | S3 + Lambda | 1 s per file; $0.02/file |
| **Chunk‑level** (SHA‑256, 4 MB chunks) | S3 + Kinesis Data Streams + EC2 Spot | 300 ms per chunk; ~$0.10/GB |

I chose *chunk‑level* because the pipeline processes files in parallel streams. Using **Kinesis Data Streams** I streamed chunk checksums to an **EC2 Spot fleet** that ran a lightweight Go service, aggregating results and writing back to S3. This gave us 99.999% error detection for a 10 GB file in 1.8 s, versus 4 s with file‑level checksums.

I added **Amazon CloudWatch metrics** to track checksum throughput; after deployment we saw a 40 % drop in downstream re‑runs and saved ~$50k annually on compute costs.

**Result & Learnings**  
The service met SLA targets (≤2 s) and reduced data corruption incidents by 92%. I documented the trade‑offs, shared the cost model with finance, and built an automated alerting system. This experience reinforced that *Ownership* means iterating until you balance performance, reliability, and spend—exactly what Amazon expects from its engineers.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
