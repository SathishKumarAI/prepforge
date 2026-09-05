---
qid: ing_2c20b2f362__fp__local
question: 'Explain: IOPS — Amazon EBS I/O characteristics and monitoring - Amazon
  EBS'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 177
output_tokens: 411
total_tokens: 588
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T17:38:36-05:00'
sources: []
---

**IOPS (Input/Output Operations Per Second)** is the metric that turns an *abstract* disk throughput requirement into a *concrete* performance guarantee for Amazon Elastic Block Store (EBS).  
At its core, a block device performs two independent operations: **seek** and **transfer**. In SSD‑based EBS volumes, seek time is essentially zero; what matters is the *latency of each I/O request*. If an average request takes \(L\) milliseconds, then the theoretical maximum throughput is  

\[
\text{IOPS}_{\max}=\frac{1000}{L}\quad(\text{ops/sec})
\]

EBS enforces this relationship by throttling volume‑type and size: each volume type (gp3, io2, etc.) defines a *baseline* \(L_{\min}\). The product of the number of concurrent requests and the per‑request latency is capped at the volume’s IOPS ceiling.  

Monitoring tools expose three complementary metrics:

1. **VolumeReadOps / VolumeWriteOps** – raw counts of issued operations.  
2. **BurstBalance** – a percentile‑based indicator that tells you how much “burst headroom” remains; it is derived from the difference between current IOPS and the baseline.  
3. **AverageReadLatency / AverageWriteLatency** – the actual latency, which can be compared against \(L_{\min}\) to detect degradation.

A non‑obvious insight: *BurstBalance is not a simple counter but an exponential moving average of recent I/O activity*. It smooths out spikes so that you see whether you’re steadily approaching or staying below the burst threshold, rather than reacting to transient bursts. This subtlety matters when autoscaling your workloads; ignoring it can lead to sudden throttling even though raw IOPS counts appear normal.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
