---
qid: ing_09a2d07666__aws__local
question: 'Explain: Live Streaming and Broadcasting — What are WebSockets and Why
  are they Used?'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 578
total_tokens: 815
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T05:47:46-05:00'
sources: []
---

**Situation (S)**  
While leading a cross‑functional team at my previous company, we had to add real‑time analytics to our live‑streaming platform that served 12 M concurrent viewers during peak events. The requirement was to push viewer engagement metrics (likes, comments, ad clicks) to the front‑end with sub‑second latency.

**Task (T)**  
Design a scalable, low‑latency channel for bi‑directional data flow between our streaming servers and thousands of browser clients while keeping costs under 5 % of the overall CDN spend.

**Action (A)**  
I proposed using **WebSockets** over HTTP/2:

1. **Why WebSockets?**  
   * Persistent, full‑duplex connection → no repeated handshakes.  
   * Low overhead compared to polling or Server‑Sent Events.  
   * Native browser support and easy integration with our existing React stack.

2. **Architecture**  
   * **API Gateway + Lambda Authorizer** – secure handshake, token validation.  
   * **Amazon API Gateway WebSocket API** – managed routing to the correct backend endpoint.  
   * **Elastic Load Balancer (ELB)** → **EC2 Auto‑Scaling Group** running a Node.js microservice that writes events to an **Amazon Kinesis Data Stream**.  
   * **Kinesis Data Firehose** streams data to **Amazon DynamoDB Streams** for real‑time analytics and **Amazon S3** for archival.

3. **Scalability & Availability**  
   * API Gateway scales automatically; ELB + ASG handles 50 k concurrent connections per region with <1 ms latency.  
   * Kinesis guarantees 99.9 % throughput; DynamoDB provides single‑digit millisecond read/write capacity.  

4. **Cost & Trade‑offs**  
   * Estimated $0.003 per connection‑hour → ~$30k/month for peak load, well below the CDN budget.  
   * Trade‑off: Slightly higher operational complexity vs. a simple long‑polling solution, but justified by the latency requirement.

**Result (R)**  
The implementation reduced end‑to‑end event latency from 3 s to **<200 ms**, increased user engagement metrics by **18 %** during live events, and cut operational costs by **12 %** compared to our polling prototype.  

---

### Leadership Principles Highlighted
- **Customer Obsession** – Delivered instant feedback to viewers, improving their experience.  
- **Ownership & Dive Deep** – Took full responsibility for end‑to‑end performance, dissecting each layer of the stack to optimize latency and cost.

---

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
