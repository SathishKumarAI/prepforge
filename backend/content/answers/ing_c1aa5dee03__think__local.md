---
qid: ing_c1aa5dee03__think__local
question: 'Explain: What to Cache — What is Caching? | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 193
output_tokens: 510
total_tokens: 703
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T13:43:19-05:00'
sources: []
---

**1️⃣ Clarify the scope & assumptions**  
   * Assume “Caching” refers to storing data in a fast, temporary store (memory, SSD) to reduce latency or load on slower systems.  
   * Focus on ML‑related use cases: feature stores, inference results, pre‑computed embeddings, model artefacts.  
   * Treat the audience as system designers who need to decide what to cache and why.

**2️⃣ Adopt a mental model**  
   * **Cost vs Benefit Triangle** – Evaluate the cost of storing (memory, consistency overhead) against benefits (latency reduction, reduced compute).  
   * **Read‑heavy vs Write‑heavy patterns** – Caching shines when reads far outnumber writes.  
   * **Staleness tolerance** – ML pipelines often tolerate slightly stale features; define acceptable TTLs.

**3️⃣ Step‑by‑step reasoning**  
   1. Identify the *hot data*: frequent feature lookups, repeated inference on identical inputs, or expensive preprocessing steps.  
   2. Quantify read/write ratios and access latency to decide if caching is worthwhile.  
   3. Choose a cache layer (in‑process, distributed Redis, local SSD) that matches required throughput & consistency.  
   4. Define eviction policy (LRU, LFU, TTL) based on how quickly data changes or becomes irrelevant.  
   5. Design invalidation strategy: event‑driven refresh, time‑based expiry, or versioning of feature schemas.

**4️⃣ Common traps to avoid**  
   * Caching raw model weights unnecessarily—usually stored in a model registry instead.  
   * Forgetting that cache coherence is hard; stale predictions can degrade ML quality.  
   * Over‑optimizing for latency while ignoring cost of memory or network traffic.  
   * Ignoring the “cold start” problem where first requests hit the slow backend.

**5️⃣ Sanity‑check & communicate**  
   * Re‑state the benefit: “By caching X we reduce Y seconds per request and lower compute cost by Z%.”  
   * Validate against real metrics (latency histograms, cache hit rates).  
   * Present a simple diagram: source → cache → downstream service, highlighting TTLs and invalidation triggers.  

Follow this checklist whenever you need to decide “what to cache” in an ML system design interview or production setting.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
