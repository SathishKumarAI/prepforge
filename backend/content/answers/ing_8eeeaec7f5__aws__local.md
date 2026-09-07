---
qid: ing_8eeeaec7f5__aws__local
question: 'Explain: Company context — Meta Ai'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 226
output_tokens: 385
total_tokens: 611
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T10:49:24-05:00'
sources: []
---

**Situation & Context (Meta AI)**  
At Meta I led the “AI‑Powered Content Moderation” squad, tasked with reducing harmful content by 40 % while keeping latency under 200 ms per post.  

**Task**  
Build a real‑time inference pipeline that ingests millions of posts/day, scores them with a transformer model, and routes flagged items for human review.

**Action**  
- **Ownership & Bias for Action:** I owned the end‑to‑end stack—data ingestion (Kafka), feature extraction (Lambda + SageMaker endpoints), scoring (AWS Inferentia on EC2 Spot), and routing (SQS).  
- **Dive Deep:** Profiled latency; discovered a 30 % bottleneck in model warm‑up. Deployed Auto Scaling groups with pre‑warmed containers via ECS Fargate, cutting cold start to <10 ms.  
- **AWS Services & Trade‑offs:** Used SageMaker Pipelines for CI/CD, Step Functions for orchestration, and DynamoDB (partitioned by content type) for state. Chose Inferentia over GPU to cut inference cost 60 % while meeting SLA.  
- **Deliver Results:** Achieved a 42 % reduction in harmful posts with an average latency of 145 ms; cost dropped from $3M/month to $1.2M.

**Result & Learning**  
The solution set a new benchmark for real‑time moderation at Meta, proving that owning the stack and diving deep into performance can yield measurable impact. I documented failure points (cold starts) and shared a playbook that reduced similar issues across other squads by 25 %.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
