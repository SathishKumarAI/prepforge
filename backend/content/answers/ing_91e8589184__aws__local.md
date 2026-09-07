---
qid: ing_91e8589184__aws__local
question: 'Explain: Together AI Coding Problems — Ai Companies Interview Questions'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 230
output_tokens: 543
total_tokens: 773
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T10:55:52-05:00'
sources: []
---

**Situation (S)**  
I was tasked with designing a *Together AI Coding Problems* service that lets AI‑powered companies post algorithm challenges and automatically evaluate user submissions at scale.

**Task (T)**  
Create a highly available, cost‑effective platform that supports 10 k concurrent users, guarantees sub‑second evaluation latency, and provides real‑time analytics for each problem.

**Action (A)**  

1. **Architecture** –  
   * API Gateway → Lambda (auth & routing) → Step Functions (workflow orchestration).  
   * Containerized worker pool in ECS Fargate; each container runs a sandboxed Docker image that executes the submitted code and returns verdicts to SQS.  
   * DynamoDB for problem metadata + ElastiCache Redis for hot‑keys (leaderboard, recent submissions).  
   * CloudWatch & X-Ray for observability.

2. **Scalability / Availability** –  
   * Fargate autoscaling with target CPU = 70 % → handles spikes to 10k concurrent jobs without over‑provisioning.  
   * Multi‑AZ deployment + ALB ensures 99.95 % uptime.  

3. **Cost & Trade‑offs** –  
   * Serverless Lambda for lightweight ops (≈$0.20/1M invocations).  
   * Fargate spot instances reduce compute cost by ~30 %.  
   * Storing only essential logs in S3 Glacier saves storage spend.

4. **Metrics & Learning** –  
   * First‑pass success rate 98 %; latency <300 ms (90th percentile).  
   * Reduced evaluation time from 2 s to 0.3 s → 6× faster feedback loop.  
   * After a buggy sandbox release, I instituted automated unit tests for each container image, cutting regressions by 80 %.

**Result (R)**  
The platform now serves 15 k daily users with <1 % failure rate while keeping monthly spend under $12K, exceeding the original SLA of 99.9 % availability.

> **Leadership Principles Anchored:**  
> • *Customer Obsession* – rapid feedback improves learner experience.  
> • *Ownership* – I drove end‑to‑end design, testing, and post‑deployment monitoring.  
> • *Dive Deep* – detailed cost/latency trade‑offs informed architectural choices.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
