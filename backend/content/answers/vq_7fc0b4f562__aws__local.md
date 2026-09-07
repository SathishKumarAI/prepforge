---
qid: vq_7fc0b4f562__aws__local
question: How do people in your country celebrate the New Year?
topic: Behavioral
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 230
output_tokens: 538
total_tokens: 768
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T05:00:24-05:00'
sources: []
---

**Situation & Task (S)**  
When I moved from India to the U.S., I noticed that people in both countries celebrate New Year differently—India with fireworks, family feasts, and digital greetings; the U.S. with parties, countdown streams, and public broadcasts. My goal was to bridge these cultures by creating a *New‑Year Celebration Platform* that lets users share their traditions, coordinate events, and experience virtual celebrations worldwide.

**Action (A)**  
I took full ownership of the project:  
1. **Customer Obsession** – conducted surveys with 3 k participants across both countries, capturing 87 % preferences for real‑time interaction and 73 % interest in cross‑cultural content.  
2. Designed a scalable architecture on AWS:  
   * **API Gateway + Lambda** (serverless) for low‑latency event creation.  
   * **Amazon DynamoDB** (global tables) to store user profiles, event metadata, and real‑time chat messages—ensuring < 10 ms read latency worldwide.  
   * **AWS Amplify + Cognito** for authentication & social sign‑in, keeping costs below $0.03/user/month.  
3. Built a media pipeline with **Amazon S3**, **Elastic Transcoder**, and **CloudFront** to host live streams of fireworks from major cities (NYC, Mumbai) at 4K without buffering.  
4. Deployed an AI‑driven recommendation engine using **Amazon Personalize** to surface culturally relevant celebrations.

**Result (R)**  
Within two months of launch:  
* 12 k active users from 34 countries.  
* Average session time increased by 45 %, indicating high engagement.  
* Revenue from in‑app purchases rose 27 % due to premium “cross‑culture packages.”  

**Reflection & Learning**  
The bar‑raiser will note my ownership: I led end‑to‑end design, drove data‑driven decisions, and iterated quickly (Beta → GA in 8 weeks). I dove deep into AWS cost models, optimizing Lambda concurrency to cut spend by 18 %. Failure came when the initial stream buffer caused lag; I learned to pre‑warm CloudFront edge locations and adjusted bitrate. This experience sharpened my bias for action while ensuring high availability and customer delight.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
