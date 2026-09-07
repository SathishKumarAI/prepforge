---
qid: vq_0efb02ce2f__aws__local
question: What is one benefit of using procedures and functions?
topic: DSA
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 230
output_tokens: 351
total_tokens: 581
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T04:38:51-05:00'
sources: []
---

**Answer (Amazon style)**  

*Leadership Principles:* **Ownership** – I took full responsibility for the long‑term maintainability of our code base; and **Dive Deep** – I dissected how modularization impacts performance and cost.

**Situation / Task**  
In 2023, our monolithic Python service was hitting a 30 % CPU spike during nightly data ingestion. The team needed a way to isolate the heavy‑lifting logic so we could scale it independently and reduce cloud spend.

**Action**  
I refactored the core algorithm into a stateless **AWS Lambda function** triggered by an SQS queue. Each message contained a single record, allowing us to process 10 000 records per second with a concurrency of 200. I added a small wrapper library that cached intermediate results and used environment variables for configuration, ensuring no shared state leaked between invocations.

**Result**  
- **CPU usage dropped from 70 % to 25 %**, cutting EC2 time by ~45 %.  
- Lambda’s on‑demand pricing saved us $1.8k/month versus the old EC2 baseline.  
- Deployment time for future iterations fell from 4 hrs to <30 min because each function could be updated and redeployed in isolation.

**Learning**  
I realized that even a simple “function” abstraction can yield measurable ROI when paired with serverless scaling. The key was to keep the function pure, stateless, and idempotent—principles that continue to guide my architecture decisions today.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
