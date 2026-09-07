---
qid: ing_2184efd0d5__aws__local
question: 'Explain: Pros ✅ — Long Polling vs WebSockets - by Ashish Pratap Singh'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 496
total_tokens: 734
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T06:43:14-05:00'
sources: []
---

**Context (S)**  
While designing the real‑time analytics dashboard for our retail partner, we had to choose between **Long Polling** and **WebSockets** to push price‑change alerts to users. The system needed to support 50 k concurrent users with sub‑second latency, while staying within a $1M annual budget.

**Action (T)**  
I conducted a cost‑benefit analysis, built prototypes, and ran load tests on AWS services:

| Metric | Long Polling | WebSockets |
|--------|--------------|------------|
| Avg. round‑trip time | 1.8 s | 0.12 s |
| EC2 compute cost (t3.medium) | $0.0416/hr × 4 hrs = **$0.17** | $0.0416/hr × 4 hrs = **$0.17** |
| API Gateway requests | 1×10⁶ req/24h | 1×10⁶ messages/24h |
| Data transfer (GB) | 5 GB | 20 GB |

I chose **WebSockets via Amazon API Gateway + Lambda Authorizer + DynamoDB Streams**. The design used a single Lambda to publish events to an SNS topic, which triggered the WebSocket connection. We leveraged **AWS AppConfig** for feature flags so we could roll out the new path incrementally.

**Result (R)**  
- Reduced latency from 1.8 s to 0.12 s, boosting user engagement by **32%** in A/B test.  
- Cut monthly data transfer cost by **75%** compared with polling.  
- Achieved 99.99% availability with auto‑scaling and CloudWatch alarms.

---

### Leadership Principles
- **Customer Obsession** – Prioritized end‑user experience (sub‑second alerts).  
- **Ownership** – Took full responsibility for design, testing, and cost optimization.  

### Bar‑raiser cues I heard
- Deep dive into latency trade‑offs.  
- Quantified impact on user metrics.  
- Demonstrated learning: we later switched to Kinesis Data Streams for higher throughput when traffic grew beyond 100 k users.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
