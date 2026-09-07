---
qid: ing_49f3db0fc4__aws__local
question: 'Explain: Handshake — What are WebSockets and Why are they Used?'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 424
total_tokens: 659
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T08:12:31-05:00'
sources: []
---

**Handshake – Why WebSockets?**

During a sprint I owned the real‑time analytics dashboard for our ad‑tech platform (≈ 1M daily active users). The requirement was to push click‑through events to clients within < 100 ms, while keeping cost per message under $0.001.  

- **Situation**: REST polling caused 3–5 s latency and doubled API traffic.  
- **Task**: Replace polling with a scalable, low‑latency transport.  
- **Action**: I championed WebSockets, which keep a single TCP connection open so the server can push data instantly. I built a stateless gateway using **Amazon API Gateway WebSocket APIs**, backed by **AWS Lambda** for event processing and **DynamoDB Streams** for write‑back. To guarantee availability I enabled **Auto Scaling** on the API Gateway and used **CloudWatch alarms** to trigger failover to an edge‑cached **CDN (Amazon CloudFront)** if latency spiked.  
- **Result**: Latency dropped from 3 s to < 100 ms, traffic reduced by 70 %, and operational cost fell from $2.5k/month to $0.9k/month.  

*Leadership Principles*: **Customer Obsession** – delivering instant insights; **Ownership** – taking full responsibility for end‑to‑end performance; **Dive Deep** – profiling network stack to justify WebSocket use; **Bias for Action** – prototyping in 2 days and rolling out to production.

**Bar‑raiser takeaways**

- Show deep technical rationale (TCP, backpressure).  
- Quantify impact (latency, cost, traffic).  
- Demonstrate ownership: end‑to‑end design, monitoring, failure handling.  
- Highlight learning from the polling experiment and how that informed the final architecture.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
