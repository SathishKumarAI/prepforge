---
qid: vq_24f2abccfe__aws__local
question: What’s the most exciting festival you’ve ever attended?
topic: Behavioral
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 230
output_tokens: 513
total_tokens: 743
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T04:43:15-05:00'
sources: []
---

**Situation & Task**  
During my sophomore year I volunteered to run the university’s annual “Summer Beats” music festival. The event had grown from 1,200 attendees in 2018 to 3,500 in 2020, and the organizers needed a more reliable ticket‑sales platform that could handle peak traffic without downtime.

**Action – Design & Ownership**  
I took ownership of the entire tech stack:  

| Requirement | AWS Service | Why |
|-------------|-------------|-----|
| **Scalable front‑end** | Amazon CloudFront + S3 static hosting | Handles 10k concurrent users with low latency. |
| **Real‑time ticket inventory** | DynamoDB (global tables) + Lambda for business logic | Auto‑scales, sub‑ms reads/writes, and provides eventual consistency across regions. |
| **Payment processing** | Amazon API Gateway + Stripe webhook integration | Secure, serverless, no infrastructure to maintain. |
| **Analytics & alerting** | CloudWatch + Athena on S3 logs | Enables post‑event reporting in minutes. |

I also set up a CI/CD pipeline with CodePipeline and Terraform for repeatable deployments—reducing release time from days to hours.

**Result – Data‑Driven Impact**  
- Ticket sales increased by **35%** compared to the previous year (1,200 → 1,620).  
- Peak traffic of 12,000 concurrent users was handled with <0.2 s latency and 99.9% uptime.  
- Operational cost dropped from $4,500 (on‑prem servers) to **$1,200** on AWS, a **73% reduction**.

**Reflection – Learning & Bias for Action**  
I learned that “Customer Obsession” means anticipating attendee pain points—so I built a real‑time waitlist and push‑notification feature. My bar‑raiser would note my deep dive into DynamoDB’s consistency model, the quantified ROI, and the quick pivot to serverless when early load tests revealed bottlenecks.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
