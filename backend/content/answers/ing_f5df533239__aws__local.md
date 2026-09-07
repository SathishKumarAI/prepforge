---
qid: ing_f5df533239__aws__local
question: 'Explain: What they emphasise — Deepseek'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 228
output_tokens: 442
total_tokens: 670
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T14:32:46-05:00'
sources: []
---

**DeepSeek’s Focus – “Scale the Model, Not the Cost”**

*Leadership Principles:* **Customer Obsession** + **Ownership**  
*Behavioral (STAR):*  
- **Situation:** A startup needed a high‑performance LLM for real‑time customer support but had a $5 M cap on cloud spend.  
- **Task:** Deliver an inference pipeline that kept latency < 200 ms and cost < $0.01 per query.  
- **Action:** I designed a two‑tier model: a distilled “Lite” version (4 B params) served via **AWS Lambda + Amazon SageMaker Edge** for 90% of traffic, while the full 30 B model ran on **Amazon EC2 G5 instances** behind an auto‑scaling **Application Load Balancer**. I added a request‑routing Lambda that cached recent prompts in **ElastiCache Redis** to hit the Lite model whenever possible.  
- **Result:** Latency dropped from 600 ms to 180 ms, cost per query fell by 78% (from $0.04 to $0.01), and overall monthly spend stayed under budget. Customer satisfaction rose 12% in post‑deployment surveys.

*Technical Insight:*  
- **AWS Services Used:** Lambda, SageMaker Edge, EC2 G5, ALB, ElastiCache Redis, CloudWatch for metrics.  
- **Scalability & Availability:** Auto‑scaling ensures 99.9% uptime; multi‑AZ deployment mitigates single‑point failures.  
- **Cost Trade‑offs:** Distilled model saves GPU hours but sacrifices ~3% accuracy—acceptable for most support scenarios.

*Bar‑raiser Takeaway:* Ownership of cost vs. performance, deep dive into latency/accuracy trade‑offs, and quantifiable ROI demonstrate true impact.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
