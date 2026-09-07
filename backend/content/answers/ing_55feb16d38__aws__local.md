---
qid: ing_55feb16d38__aws__local
question: How Do WebSockets Work? — Long Polling vs WebSockets - by Ashish Pratap
  Singh
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 437
total_tokens: 677
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T08:40:28-05:00'
sources: []
---

**Customer Obsession & Ownership**

*Situation:* While revamping our real‑time analytics dashboard for a global e‑commerce platform, I noticed latency spikes during peak traffic because we relied on long polling to push updates.

*Task:* Replace the polling mechanism with a scalable, low‑latency solution that could support 2 M concurrent users without breaking SLA.

*Action:*  
1. **Dive Deep** – profiled current stack: 200 ms round‑trip per poll, 5 % CPU on API servers, and 30 % request churn.  
2. Designed a **WebSocket‑based gateway** using Amazon **API Gateway WebSocket APIs** + **AWS Lambda** for message routing.  
3. Implemented **Amazon DynamoDB Streams** to push events to the gateway; each update triggers a Lambda that writes to an in‑memory cache (Redis via ElastiCache) and pushes to connected sockets.  
4. Added **Auto Scaling** on API Gateway’s concurrent connections and used **Lambda Provisioned Concurrency** for cold‑start mitigation.  
5. Set up **CloudWatch metrics** (latency, error rate) and a PagerDuty alerting rule.

*Result:* Latency dropped from 200 ms to <30 ms; throughput increased by 4×. CPU usage on API servers fell from 5 % to 0.7 %. We achieved 99.95 % uptime during the holiday surge, exceeding the SLA by 1.3 pp.  

**Learning:** Switching from polling to WebSockets required understanding both protocol semantics (handshake, ping/pong keep‑alive) and AWS service limits (max concurrent connections). I documented best practices for scaling Lambda concurrency and handling backpressure, which now serves as a reference in our ops playbook.

> *Bar‑raiser listens:* clear ownership of the problem, depth in protocol & AWS service trade‑offs, quantifiable impact, and actionable learning.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
