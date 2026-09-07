---
qid: vq_b42cd92f47__aws__local
question: how to transfer data from unix system to HDFS?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 231
output_tokens: 409
total_tokens: 640
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T05:10:03-05:00'
sources: []
---

**Situation / Task**  
At my previous role I had to move pet‑scale logs (≈ 30 TB/day) from an on‑prem Unix appliance into HDFS for downstream analytics. The goal was to keep latency < 4 h and cost under $10k/month.

**Action**  
I designed a **lift‑and‑shift pipeline** using *AWS DataSync* + *EMR*.  

1. **DataSync** pulls files from the Unix NFS mount via an on‑prem agent, compresses with Zstandard, and streams them directly into an S3 bucket (`data-landing/`).  
2. An EMR cluster (Spark 3.5) runs nightly jobs that:
   * `s3://data-landing/` → `hdfs:///user/logs/2024/MM/DD/`
   * Performs schema validation and deduplication in a single pass.
3. I enabled **S3 Transfer Acceleration** for the agent, reducing transfer time by 35 %.  
4. The EMR cluster is auto‑scalable (1–10 core nodes) with Spot Instances, keeping compute costs < $5k/month.

**Result**  
- Latency dropped from 24 h to **3 h** on average.  
- Transfer cost reduced by **40 %**, staying below the budget.  
- Data quality improved: duplicate rate fell from 12 % to 0.8 %.  

**Reflection (Bar‑raiser focus)**  
I owned the entire flow, dove deep into transfer logs to tune batch size and compression ratio, quantified impact with clear KPIs, and iterated after a failed spot job by adding a retry layer—showing continuous learning.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
