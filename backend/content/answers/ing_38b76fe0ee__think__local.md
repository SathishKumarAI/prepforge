---
qid: ing_38b76fe0ee__think__local
question: 'Explain: Cost — Content Delivery Network (CDN) | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 193
output_tokens: 408
total_tokens: 601
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T05:56:40-05:00'
sources: []
---

**1. Clarify the scope & assumptions**  
- Identify that “Cost” refers to *how much it costs* to run a CDN in a system‑design interview.  
- Assume we’re dealing with a typical web or media service (static assets, APIs) and that the audience knows basic CDN terminology.  

**2. Choose a mental model**  
- Treat the CDN as a layered cost engine: *Infrastructure*, *Traffic*, *Operations*, and *Vendor choices*.  
- Map each layer to concrete metrics (e.g., number of edge locations, bandwidth GB, request counts).  

**3. Step‑by‑step reasoning**  
1. **Identify billable components** – Edge servers, data transfer out, cache hits/misses, storage, API calls, health checks.  
2. **Quantify usage** – Estimate traffic (GB/month), request volume (reqs/day), and cache hit rate.  
3. **Apply vendor pricing models** – Use a public CDN’s tiered table: per‑GB outbound, per‑request fee, fixed edge node cost.  
4. **Compute total** – Multiply usage by rates; add flat fees for edge nodes or reserved capacity if applicable.  
5. **Consider optimizations** – Compression, cache control, request routing to reduce traffic and thus cost.  

**4. Common traps to avoid**  
- Forgetting *cache miss* charges (many vendors bill per request regardless of hit).  
- Ignoring “free” tier limits that can quickly become paid if exceeded.  
- Over‑estimating traffic without a realistic growth curve.  

**5. Sanity‑check & communicate**  
- Cross‑verify the computed cost against industry benchmarks for similar services.  
- Present the calculation in a simple table or formula, labeling each component clearly so the interviewer can see your logical flow and assumptions.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
