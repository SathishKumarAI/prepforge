---
qid: ing_d1b8b470c8__star__local
question: 'Explain: Given a list of allowed IP ranges as CIDR blocks plus explicit
  deny ranges, implement `is_allowed(ip)` efficiently for millions of checks per second.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 257
output_tokens: 368
total_tokens: 625
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T06:29:03-05:00'
sources: []
---

**Situation:**  
At my previous cloud‑security startup we had to filter traffic in real time for a CDN that handled ~30 M requests/sec. The firewall logic required checking each IP against thousands of CIDR allow blocks and dozens of explicit deny ranges, all while keeping latency under 200 µs per request.

**Task:**  
Design an `is_allowed(ip)` routine that could perform millions of lookups per second with deterministic worst‑case performance, using only in‑memory data structures and minimal CPU cycles.

**Action:**  
I implemented a two‑stage radix trie. First, I built a Patricia tree from all CIDR blocks, collapsing common prefixes to reduce node count to ~12 k. Each leaf stored the longest‑prefix match flag. For denies, I kept a separate sorted list of explicit ranges and performed a binary search with a small cache of recent lookups (LRU size 4 k) to hit most deny checks in O(1). During lookup, the IP is first checked against the deny list; if not found, it traverses the trie bit‑by‑bit, stopping early when a leaf’s mask matches. The algorithm uses only integer shifts and bitwise ANDs, enabling vectorization on AVX‑512 cores.

**Result:**  
Benchmarks showed 3.8 M `is_allowed` calls per second on a dual‑socket Xeon with 64 GB RAM, meeting our SLA of <200 µs latency. The memory footprint stayed below 70 MB. I learned that careful data‑structure choice (radix trie + cache) can bring theoretical O(log n) operations down to practical constant time in high‑throughput security systems.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
