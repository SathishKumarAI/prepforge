---
qid: ing_2a3717d816__aws__local
question: What are the types of SSDs? — What is an SSD (Solid-State Drive)?
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 610
total_tokens: 848
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T07:00:53-05:00'
sources: []
---

**What is an SSD?**  
An SSD (Solid‑State Drive) stores data on flash memory rather than spinning disks, giving sub‑millisecond access times, lower power draw, and higher resilience to shock—critical for high‑throughput workloads.

| **Type** | **Flash Type** | **Typical Use Case** | **Key AWS Service Pairing** |
|----------|----------------|----------------------|-----------------------------|
| **SLC (Single‑Level Cell)** | 1 bit per cell | Enterprise databases, transactional logs | **Amazon FSx for Lustre + S3** – low latency, high write endurance |
| **MLC (Multi‑Level Cell)** | 2 bits/cell | General purpose storage, backup | **Amazon EBS gp3** – balanced price/performance |
| **TLC (Triple‑Level Cell)** | 3 bits/cell | Cost‑effective archival, media streaming | **Amazon S3 Glacier Deep Archive** – long‑term retention |
| **QLC (Quad‑Level Cell)** | 4 bits/cell | Bulk data lakes, analytics with infrequent writes | **Amazon Redshift Spectrum + Athena** – pay per query |

### Behavioral STAR

**Situation:** In 2023 I led a migration of our customer‑facing service from on‑prem HDDs to AWS.  
**Task:** Reduce read latency by ≥50 % while staying under the $2M annual budget.  
**Action:** Conducted a **dive‑deep** analysis of access patterns, identified hot keys, and chose **SLC SSDs (EBS io1)** for those, MLC for warm data, and TLC for cold logs. Deployed an automated tiering policy via **AWS S3 Intelligent-Tiering**.  
**Result:** Latency dropped from 120 ms to 55 ms (53 % improvement), throughput increased by 2×, and the project saved $180K annually—exceeding the goal while demonstrating ownership and a bias for action.

### Technical Design

* **Scalability:** Use EBS volume types with provisioned IOPS; scale volumes elastically via **EBS Multi-Attach**.  
* **Availability:** Store critical data across multiple AZs using **S3 Cross‑Region Replication**; enable **EBS snapshots** for point‑in‑time recovery.  
* **Cost Trade‑offs:** SLC offers the best endurance but at 4× cost of MLC; TLC/QLC provide near‑zero incremental cost for archival tiers, justifying tiered architecture.

**Bar‑raiser focus:** Ownership (lead migration), depth (flash cell distinctions), quantified impact (latency & cost metrics), and learning from failed attempts to over‑provision IOPS.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
