---
qid: ing_5cc5ea3453__fp__local
question: 'Explain: Calculate usage — system-design-primer/solutions/system_design/pastebin/README.md
  at master \u00b7 donnemartin/system-design-primer \u00b7 GitHub'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 201
output_tokens: 419
total_tokens: 620
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T19:21:31-05:00'
sources: []
---

**Why we *calculate* Pastebin’s usage in the design‑primer**

When a service like Pastebin is scaled, the only way to decide on hardware, cache size or shard count is to know **how many operations it performs per unit time** and how large those objects are.  
The fundamental problem is: *Given an API that accepts a text blob and returns a short URL, what is the traffic pattern?*  

1. **Model the workload**  
   • Each write (POST) inserts a record of size `L` bytes.  
   • Each read (GET) fetches that record.  
   • The request rate follows a Poisson process with mean λ requests/second.  
   • Empirically, λ≈ 10⁴ writes/min and 3× the reads.

2. **Derive throughput**  
   Total bytes per second = λ\_write·L + λ\_read·L.  
   This gives us the I/O bandwidth needed for disk and network.

3. **Compute storage**  
   Average lifetime of a paste is T days → total stored data = λ\_write·T·L.  

4. **Cache sizing**  
   Using LRU with hit‑ratio h, cache must hold h·(λ\_read·T·L) to reduce backend hits.

5. **Cost & scaling**  
   Plugging the numbers into a cost model tells us whether to use SSDs, object storage or a distributed key–value store.

**Non‑obvious insight:** *The write rate dominates the storage cost because each paste is short-lived but still occupies space until garbage‑collected.*  
If you only look at traffic volume (bytes transferred), you’ll underestimate the persistence layer’s size. Thus, both **I/O** and **storage lifetime** must be calculated together to design a balanced system.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
