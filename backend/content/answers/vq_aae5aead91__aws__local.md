---
qid: vq_aae5aead91__aws__local
question: Have you made friends through any of your hobbies?
topic: Behavioral
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 229
output_tokens: 429
total_tokens: 658
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T05:08:19-05:00'
sources: []
---

**Situation**  
During my senior year I joined the university’s *Python Hackers* club because I love building web apps in my free time. The group met twice a week to brainstorm ideas and share code.

**Task**  
I was asked to lead a project that would help newcomers learn Python quickly, while also giving me an opportunity to practice mentorship—an area where I had little experience.

**Action**  
I designed a micro‑service–based learning platform using **AWS Lambda** (serverless compute), **Amazon API Gateway**, and **DynamoDB** for user progress tracking. The architecture was intentionally *simplified* so that each member could contribute without deep infrastructure knowledge. I also organized weekly “code‑along” sessions, which were recorded on **Amazon S3** and streamed via **CloudFront**.

To measure success I set a clear KPI: increase new member retention from 30 % to at least 70 %. I tracked this with a simple analytics dashboard built in **AWS QuickSight**, pulling data from CloudWatch metrics of the Lambda functions.

**Result**  
After six months, new‑member retention rose to **73 %**, and we grew the club size from 12 to 38 members—an increase of 217 %. The platform’s cost stayed under $20/month thanks to Lambda’s pay‑as‑you‑go model.  

**Reflection**  
I learned that *Ownership* means taking full responsibility for both product quality and team culture, while *Dive Deep* required me to understand every layer of the stack to keep latency below 200 ms. The success reinforced my belief in **Customer Obsession**—designing a tool that truly helped learners—and taught me how to iterate quickly on user feedback, a skill I bring to any AWS‑based solution.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
