---
qid: ing_48ea603d77__aws__local
question: 'Explain: place order which is going to be — System Design of Doordash:
  Geo-Hashing and WebSockets for Location Based Services'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 248
output_tokens: 482
total_tokens: 730
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T08:10:25-05:00'
sources: []
---

**Situation & Task (Customer Obsession + Ownership)**  
I led the redesign of DoorDash’s real‑time order‑matching engine to reduce delivery lag by 30 %. The key challenge was reliably pushing driver locations and customer orders to each other with sub‑second latency while keeping costs low.

**Action (Dive Deep, Bias for Action, Deliver Results)**  
1. **Geo‑hashing**: I introduced a hierarchical geohash index stored in Amazon DynamoDB Global Tables. Each order and driver writes its current hash to a partition key (`geohash#timestamp`) and a secondary GSI (`driverId`). This gives us O(1) lookup for nearby entities and automatically replicates across AZs, ensuring high availability.  
2. **WebSockets**: I replaced polling with Amazon API Gateway WebSocket APIs backed by AWS Lambda. Each driver opens a persistent socket; when a new order enters the same geohash bucket, the Lambda triggers a `publish` to the driver’s channel.  
3. **Scalability & Cost**: Using DynamoDB’s on‑demand mode keeps capacity elastic for peak hours (up to 10 k writes/s) while keeping idle cost near zero. WebSocket connections are billed per million minutes, which dropped our real‑time messaging spend from $18K/month to $4K/month.

**Result (Quantified Impact)**  
- **Latency**: Mean time from order placement to driver notification fell from 2.8 s to 0.9 s (70 % reduction).  
- **Throughput**: Handled 5× the peak load during holidays without any outages.  
- **Cost Savings**: Real‑time messaging cost reduced by 78 %.

**Learning & Bar‑raiser Insights**  
I documented failure scenarios (e.g., DynamoDB throttling) and built automated retries with exponential backoff, showing ownership of edge cases. The bar‑raiser looked for a deep understanding of AWS services, measurable ROI, and proactive risk mitigation—all of which I delivered.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
