---
qid: ing_74cf214d3f__faang__local
question: 'Explain: Related resources — Amazon EBS I/O characteristics and monitoring
  - Amazon EBS'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 647
total_tokens: 887
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T23:16:19-05:00'
sources: []
---

**Clarify**

The interviewer asks you to explain how Amazon Elastic Block Store (EBS) handles input/output operations, what its performance limits are, and how one can monitor those metrics in practice.  
Key assumptions:  
* We’re dealing with EBS **General‑Purpose SSD (gp3/gp2)** and **Provisioned IOPS SSD (io1/io2)** volumes; other types (magnetic) are legacy.  
* Monitoring will use CloudWatch, not the console.

**Approach**

1. Identify core performance metrics: *IOPS*, *throughput (MiB/s)*, *latency*.  
2. Explain how EBS maps these to **Volume type + size** and optional **provisioned IOPS**.  
3. Describe CloudWatch metrics that expose the above and how to set alarms or dashboards.

**Depth**

| Volume Type | Max IOPS (per 1 GiB) | Max Throughput | Notes |
|-------------|---------------------|----------------|-------|
| gp2 | 3 IOPS/GB up to 16,000 | 250 MiB/s | Baseline + burst |
| gp3 | 3000 IOPS baseline; 16 KiB/s per GB throughput can be provisioned independently up to 16,000 IOPS and 1,000 MiB/s |
| io1/io2 | 50 IOPS/GB (io1) or 500 IOPS/GB (io2) | 1000 MiB/s | Provisioned IOPS required |

*Latency*: ~10‑30 ms for gp3, <5 ms for io2.

**CloudWatch metrics**

- `VolumeReadOps`, `VolumeWriteOps` – total ops per second.  
- `VolumeReadBytes`, `VolumeWriteBytes` – throughput.  
- `VolumeIdleTime` – idle fraction (helps detect throttling).  
- `VolumeThroughputPercentage` – percent of provisioned IOPS used.  

**Edge Cases**

*Burst balance depletion*: gp2 bursts until the *burst credit* pool is empty, then falls back to baseline.  
*IOPS oversubscription*: If total ops exceed provisioned IOPS on io1/io2, CloudWatch shows `VolumeThroughputPercentage` > 100 % and latency spikes.  
*Large file writes*: May hit 256‑MiB per write limit; use multipart or block‑device mapping.

**Optimize & Communicate**

- **Use gp3 for cost‑effective throughput**: set IOPS/throughput independently, avoid overprovisioning.  
- **Monitor `VolumeThroughputPercentage` and latency** to preempt throttling; auto‑scale provisioned IOPS if spikes are frequent.  
- **Explain trade‑offs**: gp2 cheaper but bursty; io1/io2 guarantees performance at higher cost.

Wrap up by summarizing that understanding these metrics lets engineers tune storage for latency‑critical workloads while staying within budget.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
