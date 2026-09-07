---
qid: ing_45f75e3cea__aws__local
question: How Does the Real-Time Presence Platform Work?
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 230
output_tokens: 384
total_tokens: 614
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T08:03:52-05:00'
sources: []
---

**Situation & Task (Customer Obsession)**  
At my last role I led the launch of a real‑time presence platform for an IoT‑enabled retail chain that needed to show shoppers’ in‑store locations on a mobile app with < 200 ms latency. The goal was to increase upsell opportunities by 15 % per visit.

**Action (Dive Deep & Ownership)**  
I designed a serverless architecture:  
- **IoT Greengrass** streams beacon data to **Kinesis Data Streams** → **Lambda** transforms and writes to **DynamoDB Global Tables** (replicated across us‑east‑1/us‑west‑2).  
- A **WebSocket API Gateway** pushes updates to subscribed clients.  
- For caching, I added **ElastiCache for Redis** to keep the most recent 10 k presence records in memory, reducing DB reads by 90 %.  
I introduced a “presence heartbeat” protocol that drops stale entries after 30 s, ensuring data freshness.

**Result (Deliver Results)**  
Within two weeks of deployment, we saw:  
- **Latency < 180 ms** (95th percentile) across all regions.  
- **$2k/month** savings by using serverless vs. EC2.  
- Upsell revenue grew 18 % in the first month, surpassing the target.

**Reflection (Bias for Action & Learn from Failure)**  
Initially we hit a throttling issue on DynamoDB; I added adaptive provisioned throughput and implemented exponential back‑off in Lambda. This prevented outages during peak traffic and taught us the importance of proactive capacity planning.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
