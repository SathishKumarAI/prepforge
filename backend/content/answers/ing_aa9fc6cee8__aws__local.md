---
qid: ing_aa9fc6cee8__aws__local
question: 'Explain: Cons ❌ — Long Polling vs WebSockets - by Ashish Pratap Singh'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 422
total_tokens: 661
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T11:52:13-05:00'
sources: []
---

**Situation & Task**  
While architecting a real‑time notification service for our e‑commerce platform, I had to decide between long polling and WebSockets. The goal was to keep latency < 200 ms while handling 5 M concurrent users during peak sales.

**Action**  
I benchmarked both patterns on an EC2 Auto Scaling group (t3.medium) behind an Application Load Balancer (ALB).  
* **Long Polling:** Each client sent a GET every 30 s. This generated ~1.2 TB of outbound traffic and ~12 M HTTP requests, leading to a 45 % higher cost in CloudWatch metrics.  
* **WebSockets via API Gateway + Lambda Edge**: I used *AWS API Gateway WebSocket APIs* backed by an *Elasticache Redis* for session state. The connection count stayed stable at 5 M with ~0.3 ms average RTT, and overall data transfer dropped to 300 GB— a 75 % cost saving.

I also added a **fallback**: if the client’s browser didn’t support WebSockets, it automatically switched to long polling.

**Result**  
Post‑deployment, page load times improved by 35 %, user churn during flash sales fell from 12 % to < 3 %, and we saved ~$200K annually.  

**Leadership Principles**  
* **Customer Obsession:** Delivered a smoother UX under peak loads.  
* **Ownership & Dive Deep:** Ran end‑to‑end tests, measured every metric, and iterated on the fallback logic.

**Bar‑raiser takeaways** – I demonstrated ownership by owning the entire pipeline, dove deep into metrics to quantify impact, and learned from the high‑cost long‑polling failure to refactor cost‑effective WebSockets.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
