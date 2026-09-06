---
qid: ing_f6521e116a__fp__local
question: 'Explain: Step 2: Review the scalability article — GitHub - donnemartin/system-design-primer:
  Learn how to design large-scale systems. Prep for the system design interview.  Includes
  Anki flashcards. \u00b7 GitHub'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 212
output_tokens: 412
total_tokens: 624
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T00:43:23-05:00'
sources: []
---

**Step 2 – Review the Scalability Article (GitHub – donnemartin/system-design-primer)**  
At its core, scalability is a *resource‑allocation* problem: given an incoming workload that grows over time, how can we allocate compute, storage and network resources so that latency stays bounded and throughput keeps pace? The article reframes this by formalizing three axes of growth—**horizontal scaling**, **vertical scaling**, and **elasticity**—and linking each to a set of *design patterns* (sharding, partitioning, caching, load balancing).

Why must it be solved this way?  
1. **Linear vs logarithmic cost curves**: Adding one more node in a perfectly parallel system reduces latency roughly by \(1/n\). If the algorithm is not embarrassingly parallel, the diminishing returns curve forces us to introduce *redundancy* or *asynchronous* processing.  
2. **Consistency–latency trade‑off** (CAP theorem) becomes an optimization problem: we choose a point on the Pareto frontier that matches business SLAs.  
3. **Bottleneck identification** is formalized through *critical path analysis*: the longest chain of dependent operations dictates overall throughput, not the average load.

A non‑obvious insight people often miss is that **partitioning decisions rarely affect read latency directly; they influence write amplification and consistency guarantees**, which in turn cascade into cache hit rates and eventual read performance.  

The article’s Anki flashcards distill these principles into testable Q&A, ensuring you can recall the underlying *why* behind each design choice when faced with a system‑design interview.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
