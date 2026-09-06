---
qid: ing_d1b8b470c8__fp__local
question: 'Explain: Given a list of allowed IP ranges as CIDR blocks plus explicit
  deny ranges, implement `is_allowed(ip)` efficiently for millions of checks per second.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 191
output_tokens: 559
total_tokens: 750
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T23:26:25-05:00'
sources: []
---

**Why the problem matters**  
An IP‑whitelist is a *set of prefixes* (CIDR blocks) that may be queried millions of times per second. Each query must decide whether an IPv4 address lies in any allowed prefix **and not** in a deny range. The naïve approach—linear scan over all ranges—is \(O(n)\), unacceptable for high‑throughput systems.

**From first principles: binary geometry**  
IPv4 addresses are 32‑bit integers; a CIDR block is defined by its *prefix* and *mask length*. Checking membership reduces to a bitwise comparison:
```text
(ip & mask) == prefix
```
Thus each allowed block can be represented as a node in a **binary trie** where depth equals the mask length. Traversing the trie according to the bits of `ip` yields all prefixes that match this address; the longest‑matching prefix is the one that actually applies (standard longest‑prefix rule).

**Handling explicit denies**  
Denies are treated identically, but they override allows when a more specific deny matches. Therefore we maintain two tries—one for allows and one for denies—and during lookup we find the *most specific* match in each trie. If the deny’s depth is ≥ allow’s depth, the address is rejected; otherwise it’s accepted.

**Efficiency tricks**  
1. **Bulk construction**: Build both tries once from the list of CIDRs. Inserting a prefix costs \(O(\text{mask length})\), negligible compared to query time.  
2. **Cache hot prefixes**: The most frequent IPs often share short prefixes; caching those results (e.g., a 64‑entry LRU) removes trie traversal for the bulk of queries.  
3. **Vectorized lookup**: Modern CPUs can evaluate multiple bits in parallel using bit‑shifts and masks, so the trie walk becomes a handful of integer operations.

**Non‑obvious insight**  
The *critical observation* is that deny ranges need not be stored as explicit intervals; representing them as prefixes automatically enforces the “most specific” rule. This turns what appears to be a set difference problem into two independent longest‑prefix searches, enabling linear‑time queries irrespective of how many deny blocks exist.

In short: build two prefix tries, look up the most specific allow and deny for each IP, compare depths, optionally cache hot prefixes—this yields sub‑nanosecond per‑lookup performance even with millions of checks per second.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
