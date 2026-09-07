---
qid: ing_950a7f58dc__aws__local
question: 'Explain: Email Services — Client-Server Architecture | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 424
total_tokens: 656
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T11:02:50-05:00'
sources: []
---

**Situation / Task**  
I was asked to redesign an in‑house email service that supported ~2 M daily recipients but had 99.9% delivery latency and frequent outages during peak traffic (10 % of messages were dropped).  

**Action – Design**  
- **Client‑Server Architecture**: Front‑end clients use a REST API behind Amazon API Gateway, throttled to 5 k req/s per user.  
- **Message Queue**: Incoming requests are pushed to an Amazon SQS FIFO queue (deduplication & ordering).  
- **Worker Layer**: A fleet of Lambda functions (scales to thousands) pulls from SQS, validates addresses, and writes payloads to an Amazon DynamoDB table (`Emails`).  
- **Delivery Engine**: Each Lambda triggers a step‑function that invokes SES for SMTP delivery; failures are retried with exponential back‑off.  
- **Observability**: CloudWatch metrics & X-Ray trace every hop; alerts on >1 % failure rate.  

**Result**  
- Delivery latency dropped from 3.2 s to <200 ms (99th percentile).  
- Message loss fell below 0.001%.  
- Operational cost decreased by **35 %** due to serverless scaling and reduced EC2 footprint.  

**Leadership Principles Highlighted**  
- *Customer Obsession*: Built a system that guarantees near‑instant, reliable email for users worldwide.  
- *Ownership & Dive Deep*: I drove the end‑to‑end redesign, profiled bottlenecks, and iterated on queue size and Lambda timeout to hit SLAs.  

**Bar‑raiser cues** – Showed ownership (full stack), deep dive into metrics, quantified impact, and post‑mortem learning that led to continuous improvement of retry logic.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
