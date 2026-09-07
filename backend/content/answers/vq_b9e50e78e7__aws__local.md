---
qid: vq_b9e50e78e7__aws__local
question: How long should raw data be retained?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 228
output_tokens: 409
total_tokens: 637
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T05:11:08-05:00'
sources: []
---

**Situation & Task**  
At a fintech startup I was tasked to design the raw‑data retention strategy for our 12‑month data lake (≈ 200 TB/month). The legal team demanded GDPR compliance, while analysts needed quick access to historical data for trend modeling.

**Action**  
1. **Ownership & Bias for Action** – I convened cross‑functional workshops and drafted a policy:  
   * Keep data in **S3 Standard** for 90 days (real‑time analytics).  
   * Transition to **S3 Intelligent‑Tiering** after 90 days, then to **Glacier Deep Archive** at 365 days.  
2. **Dive Deep** – I ran a cost/latency simulation:  
   * S3 Standard + Glacier = $0.023 GB/month + $0.0045 GB/month (Glacier) → total ≈ $1.6 M/year vs. $4.8 M if kept in Standard.  
   * Retrieval latency from Glacier averages 3–5 hrs, acceptable for quarterly modeling but not daily ops.  
3. **Deliver Results** – Implemented lifecycle rules via CloudFormation and automated compliance checks with AWS Config.  

**Result**  
* Cut storage costs by **66 %** ($3.2 M saved in year 1).  
* Maintained 99.9 % availability for current‑day data; historical queries ran within SLA (≤ 4 hrs).  
* Received a “Customer Obsession” commendation from the product team for ensuring analysts had fast access while protecting user privacy.

**Takeaway** – Balance cost, performance, and compliance by tiering storage; always validate with real metrics before rollout.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
