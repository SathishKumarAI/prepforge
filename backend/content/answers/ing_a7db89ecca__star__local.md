---
qid: ing_a7db89ecca__star__local
question: 'Explain: Ribbon Filter — Bloom Filters | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 328
total_tokens: 564
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T05:08:42-05:00'
sources: []
---

**Situation:**  
At my previous company we built a real‑time ad attribution engine that had to look up user IDs in a 200 GB click log every second. The latency budget was only 15 ms per request, and the naïve hash table approach would have blown memory and caused cache thrashing.

**Task:**  
I needed to reduce lookup time and memory footprint while keeping false‑positive rates below 1% so that downstream fraud checks were still reliable.

**Action:**  
I designed a two‑layer filter: first a compact Bloom filter for a fast “probably not present” test, then a lightweight ribbon filter (a space‑efficient variant of a cuckoo hash) to resolve collisions with minimal extra memory. I implemented the Bloom filter using 8 hash functions on a bit array sized by the target false‑positive probability, and tuned the ribbon filter’s bucket size to keep insertion time O(1). We integrated the filters into our Rust microservice, exposing a single `contains` API that returned true/false in under 5 µs.

**Result:**  
The combined filters cut memory usage from 200 GB to ~30 GB and reduced average lookup latency to 4.2 ms, meeting the SLA. The false‑positive rate stayed at 0.8%, keeping downstream fraud logic accurate. I learned how careful probabilistic data structures can turn a seemingly impossible real‑time requirement into an elegant solution.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
