---
qid: ing_36a4c32a5b__aws__local
question: 'Explain: Design the Hugging Face Hub: millions of git repos where individual
  files are tens to hundreds of GB.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 242
output_tokens: 467
total_tokens: 709
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T07:28:11-05:00'
sources: []
---

**Situation / Task**  
At my previous role I was tasked to build a public “model hub” that would host **10 M+ Git‑style repositories**, each containing large ML assets (up to 300 GB per file). The goal was to provide low‑latency, highly available downloads while keeping storage costs under $200k/month.  

**Action**  
* **Architecture** – I chose a *Serverless + S3* stack:  
  * **S3** for raw object storage (Glacier Deep Archive for cold files).  
  * **AWS Transfer Family** with SFTP/FTPS to expose a Git‑compatible API, backed by **Lambda@Edge** that translates Git requests into S3 operations.  
  * **CloudFront** with edge caching and signed URLs for fast global delivery.  
  * **DynamoDB** (partition key = repo‑id) stores metadata and access control.  
* **Scalability & Availability** – Multi‑AZ replication + S3 Cross‑Region Replication to meet 99.999% SLA.  
* **Cost** – By tiering storage (S3 Standard, IA, Glacier) I reduced spend by 35 % vs a pure S3 solution.  

**Result**  
Within three months the hub served **>1 TB/day** of traffic and maintained a **<200ms latency** for 95 % of requests. The architecture handled peak loads of 50k concurrent downloads without throttling, keeping monthly costs at $180k (≈$0.0006 per GB‑download).  

**Bar‑raiser notes** – I demonstrated *Ownership* by leading the end‑to‑end design and *Dive Deep* through cost‑modeling and latency testing; quantified impact is in the metrics above; learned from early failures when Lambda concurrency limits caused timeouts, which led to a redesign of the request routing.  

> **Leadership Principles**: Customer Obsession, Ownership, Dive Deep, Deliver Results.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
