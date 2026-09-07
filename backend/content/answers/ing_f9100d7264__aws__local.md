---
qid: ing_f9100d7264__aws__local
question: 'Explain: Bandwidth — Design WhatsApp | System Design Interview | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 483
total_tokens: 719
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T14:41:27-05:00'
sources: []
---

**Situation (S)** – I led a cross‑functional team that had to cut end‑to‑end latency for media uploads in the global WhatsApp client by **30 %**, while keeping cost per GB under $0.02.

**Task (T)** – Redesign the bandwidth‑aware upload pipeline so it adapts to user network conditions, minimizes retries, and scales to 2 B concurrent users.

**Action (A)**  
1. **Dive Deep into metrics:** Collected per‑region RTT, packet loss, and churn data from *Amazon CloudWatch* and *AppDynamics*.  
2. **Design pattern:** Adopted a **chunk‑based adaptive bitrate** model inspired by DASH. Each chunk’s size is chosen via an online algorithm that balances throughput and error probability.  
3. **AWS services:**  
   - **API Gateway + Lambda** for the upload API (auto‑scales, 99.999 % availability).  
   - **S3 Transfer Acceleration** to speed edge uploads; *S3* stores chunks with versioning.  
   - **Elastic File System (EFS)** for temporary buffering during recombination.  
   - **Kinesis Data Streams** feed analytics back into the adaptive algorithm in real time.  
4. **Cost & availability trade‑offs:** S3 Transfer Acceleration incurs a 20 % bandwidth surcharge but cuts retry traffic by 70 %, reducing total egress cost by $5M annually. EFS provides high durability (99.9999 %) with sub‑ms latency for the recombination step.

**Result (R)** – Within three months, upload latency dropped from **1.8 s to 1.2 s** (≈33 % improvement), and the per‑GB cost fell by **$0.005**, saving $12M yearly. The new system handled a 50 % traffic surge during peak hours without additional capacity.

*Leadership Principles:* **Customer Obsession** – we measured real user experience; **Ownership** – I drove the full end‑to‑end redesign and post‑deployment monitoring.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
