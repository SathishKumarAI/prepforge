---
qid: ing_f21fc6e049__aws__local
question: 'Explain: SSD vs. hybrid hard drive — What is an SSD (Solid-State Drive)?'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 479
total_tokens: 717
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T14:24:33-05:00'
sources: []
---

**Situation / Task**  
When redesigning the data‑plane for our new AI inference service, I had to decide between an SSD and a hybrid HDD for storing model weights and training checkpoints. The goal was to keep latency < 5 ms while staying under $0.12 / GB/month.

**Action**  
I mapped the workload: 80 % random reads (model loading), 20 % sequential writes (checkpointing). I benchmarked an NVMe SSD (1‑TB) and a SATA HDD + SSD cache (2‑TB hybrid). Using **Amazon S3** for long‑term storage, I provisioned an **EBS gp3** volume for the SSD path and an **EBS io1** volume for the hybrid. I introduced **AWS Lambda** to orchestrate tiering: hot weights in EBS gp3, cold checkpoints archived to Glacier.

- **Scalability:** EBS auto‑scales up to 16 MIOPS; the hybrid model handled burst writes with a 2× cache hit rate.  
- **Availability:** Both services are AZ‑redundant; we enabled Multi‑AZ snapshots.  
- **Cost:** The SSD path cost $0.10/GB/month vs. $0.03 for hybrid, but overall spend dropped 18 % thanks to reduced read amplification.

**Result**  
Latency improved from 12 ms to 4.3 ms (a 64 % reduction), throughput rose to 1.2 ×, and cost savings were 18 %. The solution received a “Tech Champion” award in Q3.

**Leadership Principles Highlighted**  
- **Customer Obsession:** Delivered sub‑5 ms latency for our ML inference customers.  
- **Ownership & Dive Deep:** I owned the full cost–benefit analysis, from raw benchmarks to cloud service selection.  

*Bar‑raiser takeaway:* The candidate demonstrates ownership by owning a complex trade‑off, dives deep with metrics and architecture choices, quantifies impact, and learns from prior failures (previously overprovisioned HDDs caused 30 % latency spikes).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
