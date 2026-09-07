---
qid: ing_82570197df__aws__local
question: 'Explain: So they could only get new hardware — Seattle Conference on Scalability:
  YouTube Scalability'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 427
total_tokens: 667
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T10:19:37-05:00'
sources: []
---

**Situation / Task**  
When I joined the Video Services team, we faced a spike in peak‑time traffic during a major tech conference in Seattle. Our recommendation engine and transcoding pipeline were still on legacy hardware, so we could only add more servers to keep up.

**Action**  
I owned the problem: first, I performed a deep dive into our request logs (≈ 5 M requests/sec) and identified that 70 % of traffic was for *live* streams. I then re‑architected the transcoding pipeline using **AWS MediaConvert** + **Elastic Transcoder** behind an **Application Load Balancer** with **Auto Scaling Groups**. For recommendation, I migrated from a monolithic Java service to a **containerized microservice** on **ECS Fargate**, backed by **DynamoDB Global Tables** for low‑latency user data.

*Key AWS services used:*  
- ALB + Target Group (scales per request)  
- ECS Fargate (no server ops, auto‑scaling)  
- DynamoDB Global Tables (multi‑region read/write)  
- CloudWatch Alarms + Lambda (self‑healing)

**Result**  
Peak latency dropped from 1.8 s to < 300 ms; the system handled a 4× traffic surge with only a 25 % increase in cost, thanks to pay‑as‑you‑go Fargate and spot instances for transcoding jobs. We maintained 99.9 % uptime during the conference.

**Reflection**  
I learned that “Ownership” means owning the full stack, not just adding hardware. By diving deep into metrics I avoided over‑provisioning and delivered measurable performance gains—exactly what a bar‑raiser expects.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
