---
qid: ing_89d87c9e09__think__local
question: 'Explain: Docstore Query Patterns — How Uber Serves Over 40 Million Reads
  Per Second from Online Storage Using an Integrated Cache'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 204
output_tokens: 495
total_tokens: 699
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T10:09:29-05:00'
sources: []
---

**1️⃣ Clarify the ask & set assumptions**  
- *What* is a “Docstore” and why it matters?  
- *Why* Uber needs >40 M RPS from online storage?  
- Assume the reader knows basic caching but not Uber’s specific architecture.  

**2️⃣ Adopt a layered mental model**  
1. **Data source** – raw documents in persistent store (e.g., Cassandra, HBase).  
2. **Integrated cache layer** – in‑memory key‑value store that co‑exists with the DB engine.  
3. **Query patterns** – read‑heavy, low‑latency API calls (e.g., rider trip details).  

Use the “Cache‑First → Read‑Through → Write‑Back” triad to frame the discussion.

**3️⃣ Step‑by‑step reasoning**  
- Start with *why* a single cache can’t handle 40 M RPS: memory, coherence, eviction.  
- Explain how Uber embeds the cache into the DB engine itself (not a separate Redis layer).  
- Walk through a read path: client → query planner → cache lookup → hit → return; miss → fetch from storage, populate cache, return.  
- Highlight *write patterns*: appends to immutable logs + incremental updates to cache.  
- Show how partitioning & sharding across many machines keeps per‑node load manageable.  

**4️⃣ Common pitfalls to avoid**  
- Don’t oversell “cache only”; it’s a read‑through with write‑back policy.  
- Avoid assuming every key is hot; explain eviction strategies (LFU/LRU).  
- Don’t forget consistency guarantees—eventual vs strong, and how Uber trades off for speed.  

**5️⃣ Sanity‑check & verbalize**  
- Re‑phrase the core idea in one sentence: “Uber’s Docstore keeps a tightly coupled, sharded in‑memory cache inside its storage engine so that every read first probes fast memory; if it misses, it streams from disk and seeds the cache for future hits.”  
- Verify numbers: estimate per‑node RPS, show how 200 + nodes reach >40 M.  
- Conclude with a quick comparison to naïve “hot‑cache” setups to illustrate why integration matters.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
