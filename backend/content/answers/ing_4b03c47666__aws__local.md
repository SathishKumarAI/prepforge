---
qid: ing_4b03c47666__aws__local
question: Which One Should You Pick? — REST vs GraphQL - by Ashish Pratap Singh
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 414
total_tokens: 652
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T08:14:49-05:00'
sources: []
---

**Situation & Task**  
I led a data‑science platform for an e‑commerce product‑search service that had to expose real‑time ML predictions (price, relevance) to front‑end teams and partners. The team debated **REST vs GraphQL** for the prediction API.

**Action**  
- **Customer Obsession & Ownership**: I mapped each option against user pain points—latency, bandwidth, and developer ergonomics.  
- **Dive Deep**: Built a micro‑benchmark with 10 k concurrent requests, measuring payload size (REST: 1.2 KB; GraphQL: 0.8 KB) and round‑trip time (REST: 35 ms; GraphQL: 28 ms).  
- **AWS Services**: Chose **API Gateway + Lambda** for REST and **AppSync + DynamoDB Streams** for GraphQL, leveraging built‑in caching and schema stitching.  
- **Scalability & Cost**: Estimated $0.25/month per 1 M invocations for REST vs $0.18/month for GraphQL (due to reduced data transfer).  

**Result**  
Implemented GraphQL; user teams reported a **30% reduction in frontend bundle size**, and the ML inference latency dropped from 35 ms to 28 ms, boosting conversion by **2.5%** over two months. Cost savings were **$1,200 annually**.

**Bar‑raiser takeaways**  
- Demonstrated ownership by driving the decision end‑to‑end.  
- Dived deep into metrics and trade‑offs.  
- Quantified impact on revenue and cost.  
- Learned from a prior REST rollout that had higher payloads and developer friction, prompting us to pivot quickly.

---

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
