---
qid: ing_142aa326d7__faang__local
question: 'Explain: Implement "top-k most frequent search queries" over a large query
  log, then tell me what breaks when the log becomes an unbounded stream across many
  machines.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 256
output_tokens: 493
total_tokens: 749
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T19:30:02-05:00'
sources: []
---

**Clarify**  
We need to return the *k* most frequent search terms from a huge log. The log can be huge enough that it no longer fits in memory, and later we’ll consider an unbounded stream distributed over many machines.

Assumptions:  
- Query strings are hashable.  
- We know *k* (small compared to total distinct queries).  
- For the streaming part, we assume a bounded‑delay model but unlimited volume.

**Approach**  
1. **Single machine / bounded data** – use a hash map to count frequencies, then a min‑heap of size *k* to keep top‑k as we iterate.  
2. **Distributed / unbounded stream** – each node maintains a local sketch (Count‑Min Sketch or HyperLogLog) and periodically emits its heavy hitters; merge them with a global aggregator that again keeps a min‑heap.

**Depth**  
- Time: *O(N)* to scan, *O(D log k)* for heap updates where *D* distinct queries.  
- Space: hash map size *O(D)*; heap *O(k)*.  
- In streaming mode, sketches reduce space to *O(1/ε·log 1/δ)* with error ε, δ.  
- Merging heavy hitters is linear in number of nodes.

**Edge Cases**  
- Ties on frequency: break by lexicographic order or timestamp.  
- Extremely skewed data: a few queries dominate; heap stays stable but memory for hash map grows if many low‑frequency terms appear.  
- In streaming, counters may under‑estimate due to sketch collisions.

**Optimize & Communicate**  
For the bounded log, we can use a *reservoir* of top‑k after the first pass to reduce memory if *D* is huge. In the unbounded case, replace per‑node sketches with *Top‑M* summaries (e.g., SpaceSaving) so merging is exact for heavy hitters while still bounded in space. Explain that as the stream grows, the sketch guarantees only probabilistic accuracy; if we need deterministic counts, we’d have to store all distinct terms, which breaks scalability. This shows clear trade‑offs between precision and resource usage—exactly what FAANG interviewers look for.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
