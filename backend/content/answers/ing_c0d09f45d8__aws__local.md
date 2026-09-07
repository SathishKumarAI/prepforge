---
qid: ing_c0d09f45d8__aws__local
question: 'Explain: You don''t really care what is happening — Google Maps System
  Design Interview Question'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 439
total_tokens: 675
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T12:39:44-05:00'
sources: []
---

**Situation / Task**  
I was hired as a senior ML engineer on the real‑time routing team at a mapping startup that had just hit 5 M daily active users. My manager asked me to design an end‑to‑end system that would serve personalized route suggestions in under 200 ms while handling 10 k concurrent requests per second.

**Action**  
1. **Ownership & Customer Obsession** – I gathered user feedback, discovered that latency spikes during peak hours caused a 12% drop in session length.  
2. **Dive Deep** – I profiled the existing monolith and identified the graph‑search component as the bottleneck.  
3. **Design** – Built a microservice architecture:
   * **API Gateway + Lambda@Edge** for edge routing (AWS services) → 99.999% availability, <50 ms cold start.  
   * **Elasticache Redis** to cache pre‑computed shortest paths per region (30 GB cache).  
   * **Kinesis Data Streams** ingest live traffic updates; **Flink** recomputes affected subgraphs every 5 s.  
4. **Bias for Action & Invent & Simplify** – Replaced the SQL join heavy logic with a graph‑based in‑memory store (Neo4j) on EC2 spot instances, cutting compute cost by 35%.  

**Result**  
- Latency dropped from 350 ms to 180 ms, improving average session duration by **18%**.  
- Cost per request fell from $0.0025 to $0.0013 (≈48 % savings).  
- The system now scales linearly to 50 k rps with a single region deployment.

**Bar‑raiser takeaways** – I owned the problem, dug into metrics, quantified impact, and iterated quickly, learning that caching traffic patterns was more effective than re‑architecting the entire graph engine.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
