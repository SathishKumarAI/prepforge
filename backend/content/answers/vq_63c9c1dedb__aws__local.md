---
qid: vq_63c9c1dedb__aws__local
question: are asked to choose three cards one at a time?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 230
output_tokens: 512
total_tokens: 742
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T04:54:31-05:00'
sources: []
---

**Situation & Task (Customer Obsession + Ownership)**  
I was hired as an AWS Solutions Architect for a fintech startup that wanted to build a “smart card picker” – a web app where users could choose three AI‑generated cards one at a time, each card influencing the next. The goal was to reduce decision fatigue and increase engagement.

**Action (Dive Deep + Bias for Action)**  
1. **Requirements Clarification**  
   * Stateless UI: 3 sequential selections with no server‑side session.*  
   * Real‑time feedback on card impact.*  
   * High availability during peak traffic (10k concurrent users).*

2. **Design**  
   *Frontend*: React + Vite, served from CloudFront.  
   *Backend*: Serverless API Gateway → Lambda (Node.js) that calls a SageMaker endpoint for AI scoring.  
   *State Management*: DynamoDB “CardSession” table with TTL to keep only the last 30 days of sessions.  
   *Cache*: ElastiCache‑Redis to store pre‑computed card combos, reducing SageMaker invocations by ~70%.  
   *Observability*: CloudWatch metrics + X-Ray traces for latency and error rates.

3. **Scalability & Cost**  
   *Lambda concurrency auto‑scales; we set a 10 % cushion via reserved concurrency to avoid cold starts.*  
   *SageMaker endpoint uses an `ml.t2.medium` instance (cost $0.25/hr) with autoscaling; we achieved <$200/month vs. on‑prem inference at $1,500/mo.*  

**Result (Deliver Results)**  
- **Engagement**: 45 % lift in average session length, from 30 s to 44 s.  
- **Conversion**: Card selection completion rose 28 %.  
- **Cost Savings**: Total infrastructure cost dropped from $1,200/month to $350/month (70 % reduction).  

**Learning & Bar‑raiser Focus**  
I iterated on the DynamoDB schema after noticing a latency spike; adding a GSI for `userId` reduced query time by 60 %. The bar‑raiser looks for that ownership: I owned the full stack, dove into metrics to pinpoint bottlenecks, quantified impact with clear numbers, and documented lessons learned for future iterations.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
