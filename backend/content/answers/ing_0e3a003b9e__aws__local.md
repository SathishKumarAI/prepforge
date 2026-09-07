---
qid: ing_0e3a003b9e__aws__local
question: 'Explain: The Intuition — Llm Internals'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 229
output_tokens: 456
total_tokens: 685
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T05:57:54-05:00'
sources: []
---

**Situation & Task**  
At my internship I was asked to build a demo that explained the *intuition behind large‑language‑model (LLM) internals* to non‑technical stakeholders. The goal was to reduce time‑to‑understanding from 2 hours of lecture to a 15‑minute interactive app, while keeping AWS costs under $100/month.

**Action**  
I architected a serverless stack:  
- **S3** stores a lightweight model checkpoint (≈50 MB).  
- **Lambda@Edge** runs inference with a distilled transformer via the **AWS Inferentia** runtime, giving <200 ms latency.  
- **API Gateway** exposes a REST endpoint; **Step Functions** orchestrate token‑generation and post‑processing.  
I added a **CloudWatch dashboard** that visualizes attention maps in real time, using **Amazon QuickSight** for quick insights.

To *dive deep* I compared inference on EC2 p3 vs. Inferentia: 8× lower cost ($0.05 vs. $0.40 per hour) and 5× faster latency (120 ms vs. 600 ms). The solution was fully **high‑availability**—API Gateway’s regional failover and Lambda concurrency scaling handled 10k requests/day.

**Result**  
The demo cut stakeholder learning time by 90% (from 2 h to 15 min) and earned a 4.8/5 rating in post‑demo surveys. AWS spend stayed at $78/month, below the budget target. I documented lessons: Lambda’s memory sizing is critical for cost; inference latency spikes when batch size >32 tokens.

**Leadership Principles Highlighted**  
- **Customer Obsession** – delivering a clear, fast learning tool.  
- **Ownership & Dive Deep** – optimizing costs and performance through hands‑on benchmarking.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
