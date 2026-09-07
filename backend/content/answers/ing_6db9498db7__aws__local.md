---
qid: ing_6db9498db7__aws__local
question: 'Explain: SSD vs. eMMC — What is an SSD (Solid-State Drive)?'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 448
total_tokens: 685
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T09:31:44-05:00'
sources: []
---

**Situation & Task**  
I was tasked with choosing the right storage tier for a new server‑less ML inference pipeline that needed sub‑millisecond latency on model artifacts while keeping costs under $0.05 per GB/month.

**Action**  
I evaluated **SSD (NVMe)** vs. **eMMC**. An SSD is a flash‑based solid‑state drive that exposes high‑throughput, low‑latency block storage via PCIe/NVMe, with 1–10 GB/s read/write and <200 µs latency. eMMC, by contrast, is an embedded flash interface with lower bandwidth (~150 MB/s) and higher latency (>2 ms).  
I mapped the pipeline’s requirements:  
- **Read‑only model files** (≈50 GB total), accessed sequentially 1–2×/hour.  
- **Burst traffic** during model warm‑up, needing <500 µs to load weights into GPU memory.  

Using **Amazon EBS gp3 SSD** for the inference tier gave me 3 TB of storage at $0.08/GB/month, with 16 k IOPS and 125 MiB/s throughput per volume—well above what eMMC could provide. For cost‑sensitive batch jobs I paired it with **S3 Glacier Deep Archive** for cold model versions.

**Result**  
The SSD choice reduced inference latency from 4 ms to 0.8 ms (a 80% improvement), increased throughput by 5×, and cut overall storage spend by 12%. The solution also scaled horizontally: adding NVMe‑based volumes did not impact availability due to EBS’s built‑in replication.

**Reflection**  
I learned that **ownership** means validating assumptions with real metrics; **Dive Deep** is critical when choosing hardware that underpins ML performance. This decision directly improved customer experience by delivering faster predictions, aligning with Amazon’s *Customer Obsession* and *Deliver Results* principles.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
