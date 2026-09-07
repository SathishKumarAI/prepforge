---
qid: ing_2c20b2f362__faang__local
question: 'Explain: IOPS — Amazon EBS I/O characteristics and monitoring - Amazon
  EBS'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 738
total_tokens: 978
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T20:25:51-05:00'
sources: []
---

**1️⃣ Clarify**  
The interview question asks about **IOPS (Input/Output Operations Per Second)** for **Amazon Elastic Block Store (EBS)**: what determines an EBS volume’s IOPS, how those I/O characteristics differ across volume types, and which CloudWatch metrics you would monitor to keep performance in check.  
Assumptions: we’re dealing with SSD‑based volumes (gp3, io1/io2) rather than magnetic HDD, and the goal is to understand both *capacity* limits and *observability*.

**2️⃣ Approach**  
- Identify the key IOPS ceiling per volume type.  
- Explain how those ceilings translate into latency & throughput.  
- List CloudWatch metrics that expose real‑time performance.  
- Show how to use these metrics for capacity planning or anomaly detection.

**3️⃣ Depth**  

| Volume | Max IOPS (per GB) | Typical max IOPS | Avg latency | Throughput limit |
|--------|-------------------|------------------|-------------|------------------|
| **gp2** | 3 IOPS/GB | 16,000 IOPS | ~4 ms | 250 MiB/s |
| **gp3** | 3 IOPS/GB (configurable up to 40k) | 160 k IOPS | 1–5 ms | 1 GiB/s |
| **io1/io2** | 50 IOPS/GB (up to 64 k) | 256 k IOPS | < 1 ms | 4 GiB/s |

*IOPS* is a measure of how many read/write operations the volume can perform per second. SSDs expose *latency* and *throughput* as secondary characteristics; lower latency yields higher effective IOPS for burst workloads.

**Monitoring (CloudWatch)**  
| Metric | What it shows | Typical alarm threshold |
|--------|---------------|-------------------------|
| `VolumeReadOps`, `VolumeWriteOps` | Total ops per second | > 90% of max IOPS |
| `VolumeReadBytes`, `VolumeWriteBytes` | Throughput | > 80% of throughput cap |
| `VolumeIdleTime` | Idle percentage | < 10% over 5‑min window (for underutilization) |
| `VolumeQueueLength` | Pending ops | > 50 (indicates backlog) |
| `BurstCreditBalance` (gp2/gp3) | Available burst credits | < 10% |

**4️⃣ Edge Cases**  
- **Bursting**: gp2 volumes temporarily exceed baseline IOPS if credit balance allows; monitor `BurstCreditBalance`.  
- **IOPS saturation**: When ops hit the ceiling, latency spikes—watch `VolumeQueueLength`.  
- **Large sequential writes**: Might hit throughput cap before IOPS limit; check `VolumeWriteBytes`.  

**5️⃣ Optimize & Communicate**  
To scale performance, pre‑provision higher‑IOPS volumes (io1/io2) or shift to gp3 with configurable IOPS. Use CloudWatch dashboards to correlate latency spikes with queue length and credit balance. Automate alerts that trigger scaling actions or cost‑optimization reviews.  

*By articulating the relationship between volume type, IOPS ceiling, latency, throughput, and observability metrics, you demonstrate a deep, systems‑level understanding—exactly what FAANG interviewers look for.*

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
