---
qid: vq_649cf3f183__aws__local
question: How to you create Singleton classes in Scala?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 229
output_tokens: 474
total_tokens: 703
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T04:54:41-05:00'
sources: []
---

**Answer (Amazon style)**  

> **Leadership Principles:** *Ownership* & *Dive Deep*  

**S – Situation**  
In a recent ETL pipeline for our marketing analytics platform I noticed that the `SchemaRegistryClient` was being instantiated dozens of times per worker, inflating memory usage by ~30 % and causing GC pauses during peak hours.  

**T – Task**  
I had to refactor the client into a true singleton so that each Spark executor would share a single instance without sacrificing thread safety or performance.  

**A – Action**  
1. **Clarified requirements** – The client must be immutable, lazily initialized, and accessible from both driver and executors.  
2. **Design** – Implemented the *Scala object* pattern (`object SchemaRegistryClient`) with a `lazy val` that holds the underlying Java client. This guarantees single‑instance creation on first access and is inherently thread‑safe in Scala.  
3. **AWS services** – Deployed the pipeline on EMR; used S3 for configuration, Glue Catalog for schema storage, and Parameter Store for credentials. The singleton lives inside the driver JVM and is serialized to executors via Spark broadcast, ensuring no extra network calls per task.  
4. **Scalability & Cost** – With one client per executor, we reduced memory footprint from ~250 MB to ~80 MB per node, cutting on‑demand instance hours by 12 % during nightly runs.  

**R – Result**  
After deployment:  
- GC pause time dropped from 1.2 s to 0.3 s (≈ 75 % reduction).  
- Throughput increased by 18 % (more records processed per hour).  
- Cost savings of ~$1,200/month on an 8‑node cluster.  

**Learning** – I documented the trade‑off: while broadcasting a singleton is efficient for stateless clients, stateful ones would require sharding or a shared database; future work will explore AWS App Mesh for dynamic service discovery. This experience reinforced my ownership mindset and deep dive into JVM internals to deliver measurable results.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
