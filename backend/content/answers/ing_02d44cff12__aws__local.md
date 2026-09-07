---
qid: ing_02d44cff12__aws__local
question: 'Explain: Push vs Pull model — Socialnetworkfacebookinstagram'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 231
output_tokens: 519
total_tokens: 750
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T05:30:44-05:00'
sources: []
---

**Situation & Task**  
I was leading the architecture of a real‑time feed system for a startup that wanted to compete with Facebook/Instagram in terms of content freshness and personalization. The core question: should we push updates to users’ devices or pull them when they open the app? I had to decide, justify the trade‑offs, and design a scalable solution on AWS.

**Action (Design & Technical Choices)**  
* **Push model** – Use Amazon SNS + Lambda to publish new posts to an SQS queue per user segment. Each Lambda writes a “feed event” to DynamoDB Streams; Kinesis Data Analytics aggregates trending tags and updates a Personalization DynamoDB table. Devices receive APNs/FCM pushes, ensuring instant visibility for high‑engagement users (≈ 30 % of the audience).  
* **Pull model** – Users request their feed via an API Gateway + Lambda that queries a pre‑computed “feed” table in DynamoDB (partitioned by user ID) and streams results back. This keeps traffic predictable for low‑engagement users (≈ 70 %).  

I introduced a hybrid: *critical* posts are pushed; the rest are pulled. We used **Amazon CloudWatch** to monitor latency, and **AWS X-Ray** to trace failures.

**Result**  
After launch:  
- 40 % reduction in average feed load time for high‑engagement users (from 4 s to 2.4 s).  
- 25 % increase in daily active sessions because users saw content instantly.  
- Cost savings of 18 % by limiting push traffic to only the top 30 % of users.

**Leadership Principles Highlighted**  
* **Customer Obsession** – We chose the model that delivered the fastest experience for our most engaged users while keeping latency low for all.  
* **Ownership & Dive Deep** – I led end‑to‑end design, continuously instrumented metrics, and iterated on the hybrid strategy until we hit the target KPIs.

**Bar‑raiser Takeaway**  
The interviewers looked for: a clear ownership mindset, deep technical justification of push vs pull trade‑offs (latency, cost, scalability), quantifiable impact, and evidence that I learned from early load‑testing failures to refine the design.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
