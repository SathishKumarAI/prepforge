---
qid: ing_45f3bb7028__aws__local
question: 'Explain: What Strong Interview Candidates Cover — Computer Use Agent Production'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 231
output_tokens: 454
total_tokens: 685
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T08:03:45-05:00'
sources: []
---

**Situation** – In my last role I led the migration of a legacy desktop‑automation suite into a cloud‑native “Computer Use Agent” (CUBA) platform that powers our internal helpdesk bots.  

**Task** – Build an end‑to‑end, scalable production system that could run 5 000 concurrent agent sessions with <2 s latency while ensuring zero data loss and compliance with SOC‑2.

**Action**  
- **Architecture:** Deployed a stateless EC2‑Auto Scaling group behind an ALB, using **Amazon ECS (Fargate)** for containerized agents. Each task pulls a Selenium grid from **AWS Device Farm** to emulate user desktops.  
- **State & Observability:** Persisted session state in **DynamoDB** with TTL; used **CloudWatch Logs** + **X-Ray** for end‑to‑end tracing.  
- **Security & Compliance:** Enforced IAM roles, encrypted EBS volumes (KMS), and logged all network traffic to a VPC Flow Log.  
- **Cost Control:** Leveraged Spot Instances (70 % cost reduction) with on‑demand fallback; implemented autoscaling based on CPU/memory metrics.  

**Result** – Delivered the platform in 8 weeks, reducing manual support tickets by 38 % and cutting agent runtime costs from $12k/month to $4k/month. The system now handles peak loads of 10 000 concurrent sessions with <1.5 s response time.

> **Leadership Principles:** *Ownership* (owning the entire migration cycle), *Dive Deep* (profiling latency, cost, and security), *Bias for Action* (spot‑based scaling), *Deliver Results* (measurable ticket reduction).  

**Bar‑raiser notes:** Look for clear ownership, data‑driven impact, depth of technical trade‑offs, and a candid reflection on what could have gone better (e.g., earlier adoption of Fargate spot).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
