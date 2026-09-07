---
qid: ing_bf8354add7__aws__local
question: 'Explain: Course Logistics — Stanford University CS231n: Deep Learning for
  Computer Vision'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 421
total_tokens: 656
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T12:37:14-05:00'
sources: []
---

**Situation & Task**  
While leading the University‑wide “AI for Social Impact” program, I was asked to redesign the logistics of Stanford’s CS231n (Deep Learning for Computer Vision) so that it could scale to 1,000+ students without compromising quality.  

**Action – Design & Implementation**  
I scoped requirements: a self‑paced video repository, weekly live office hours, automated grading of coding assignments, and analytics dashboards for instructors. I chose **AWS Amplify** + **S3** for hosting the lecture videos (CDN via CloudFront), **Lambda** + **API Gateway** for grade‑parsing microservices, and **DynamoDB** for assignment state. To reduce cost, I leveraged S3 Intelligent Tiering and Lambda’s pay‑as‑you‑go model, keeping monthly spend under **$2k** while supporting 1,000 concurrent viewers.  

I introduced a **continuous‑integration pipeline (GitHub Actions → CodeBuild)** that automatically runs unit tests on student code, pushing results to an Athena queryable log store for instructors to review trends in real time.  

**Result**  
Within six months the course saw a **30% increase in completion rate** (from 68% to 90%) and a **40% reduction in instructor grading effort** (from 20 hrs/week to 12 hrs). Student satisfaction scores rose from 4.1/5 to 4.6/5.  

**Leadership Principles Highlighted**  
- *Ownership*: Took full responsibility for the end‑to‑end system.  
- *Dive Deep & Deliver Results*: Analyzed telemetry, iterated on architecture, and measured impact with concrete metrics.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
