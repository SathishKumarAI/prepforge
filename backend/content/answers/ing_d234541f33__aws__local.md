---
qid: ing_d234541f33__aws__local
question: 'Explain: Cross-Platform Solution — Apache Lucene - Apache Lucene Core'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 549
total_tokens: 784
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T13:16:02-05:00'
sources: []
---

**Situation (S)**  
At my previous role I led the redesign of our global search service for a SaaS platform used by 1 M+ users worldwide. The existing monolithic Java stack was slow on mobile devices and didn’t support cross‑platform indexing.

**Task (T)**  
Build a lightweight, cross‑platform search engine that could run natively in browsers (via WebAssembly), on Android/iOS, and on the server, while keeping latency under 200 ms for 95% of queries.

**Action (A)**  
I chose **Apache Lucene Core** as the foundation because it is language‑agnostic, highly optimized, and has a well‑documented Java API.  
1. **Server side:** Deployed a stateless RESTful service on **Amazon ECS Fargate** with an autoscaling policy tied to CPU utilization. Each task hosts a Lucene index stored in **EFS** for durability; read replicas are served from **ElastiCache Redis** for hot caching.  
2. **Client side:** Compiled the Java core to WebAssembly using **GraalVM Native Image**, bundling it with our React Native app. The WASM module loads a lightweight index shard (≈ 50 MB) into IndexedDB, enabling instant offline search on mobile devices.  
3. **Indexing pipeline:** Utilized **AWS Lambda** triggered by S3 object uploads to update the Lucene index incrementally; results are pushed to EFS via an **SQS FIFO queue** for exactly‑once semantics.

This architecture reduced average query latency from 750 ms to **120 ms** (95th percentile) and cut search‑related EC2 costs by **40%**, while delivering a consistent experience across web, Android, and iOS.  

---

**Leadership Principles**  
- *Customer Obsession*: Delivered sub‑200 ms searches for all users, including those on low‑bandwidth mobile connections.  
- *Ownership & Dive Deep*: Took end‑to‑end responsibility—from design to deployment—while deeply analyzing performance bottlenecks and iterating on the WASM build process.

**Bar‑raiser cues**  
- Clear ownership of cross‑platform stack.  
- Quantified impact (latency, cost).  
- Demonstrated depth in Lucene internals and AWS service trade‑offs.  
- Reflected on a failed early attempt that ignored mobile caching; learned to use Redis for hot data and IndexedDB for offline use.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
