---
qid: ing_d1b8b470c8__faang__local
question: 'Explain: Given a list of allowed IP ranges as CIDR blocks plus explicit
  deny ranges, implement `is_allowed(ip)` efficiently for millions of checks per second.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 254
output_tokens: 407
total_tokens: 661
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T02:48:10-05:00'
sources: []
---

**Clarify**  
We need an O(1)–ish lookup for millions of `ip` queries, given a set of *allow* CIDR blocks and a smaller set of explicit *deny* ranges that override any allow. IPs are IPv4 (32‑bit). We assume the lists fit in memory and can be pre‑processed offline.

**Approach**  
1. Build two tries: one for allows, one for denies.  
2. For each CIDR, insert its prefix into the corresponding trie, marking the node as “terminal”.  
3. At query time walk both tries simultaneously following the IP bits; keep track of the deepest terminal seen in each trie.  
4. If a deny terminal is found at any depth that matches the prefix, return *False*.  
5. Otherwise, if an allow terminal exists, return *True*; else *False*.

**Depth**  
- Each lookup touches at most 32 nodes per trie → ~64 operations.  
- Memory: each node stores two child pointers and two flags (allow/deny). For 10⁶ CIDRs the trie size is < 200 MB.  
- Complexity: O(1) per query, O(N) pre‑processing.

**Edge Cases**  
- Overlapping ranges where a deny is inside an allow → denies win by design.  
- An IP that matches multiple allows: any match suffices.  
- Empty lists: default to *False*.  
- IPv6 would require 128‑bit tries; we’d use radix‑4 or Patricia trie.

**Optimize & Communicate**  
Use a compressed (Patricia) trie to reduce node count, and store the terminal flag as an integer bitmask for cache friendliness. Explain that this guarantees constant‑time lookups, meets throughput needs, and keeps memory well below typical server limits.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
