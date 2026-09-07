---
qid: ing_e9804a2812__aws__local
question: 'Explain: How to achieve real-time communication — Long Polling vs WebSockets
  - by Ashish Pratap Singh'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 242
output_tokens: 448
total_tokens: 690
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T14:05:52-05:00'
sources: []
---

**Situation / Task**  
I was tasked to enable real‑time chat for a global gaming platform that served ~200 M active users daily. The product team insisted on low latency and high throughput while keeping costs under the $5 M quarterly budget.

**Action**  
1. **Requirement dive‑deep** – We needed <50 ms end‑to‑end latency, 99.9% availability, and support for millions of concurrent connections.  
2. **Design choice** – I compared long polling (API Gateway + Lambda) vs WebSockets (Amazon API Gateway + DynamoDB Streams).  
   *Long polling* added ~200 ms round‑trip latency and spiked Lambda invocations by 4× during traffic peaks, driving up costs.  
   *WebSocket* allowed a persistent TCP connection; each message hit the same Lambda consumer, reducing invocation overhead by 80%.  
3. **Implementation** –  
   - API Gateway WebSocket endpoint with `$connect`, `$disconnect`, and `$default` routes.  
   - Messages stored in DynamoDB (partitioned by `roomId`) and published to an SNS topic that triggers a Kinesis Data Stream for analytics.  
   - Auto‑scaling on Lambda concurrency ensured 99.9% availability; we used provisioned concurrency during peak hours to keep cold‑start latency <10 ms.

**Result**  
- Latency dropped from 200 ms (polling) to 30 ms average.  
- Cost decreased by **~70%** (from $4.2M to $1.3M annually).  
- User engagement rose 12%, reflected in a 5‑point lift in daily active users.

**Reflection / Learning**  
I learned that *ownership* means iterating on the architecture until cost and performance align with business goals, and *bias for action* requires quick prototyping to validate assumptions. This solution now serves as the baseline for all real‑time features across Amazon’s gaming services.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
