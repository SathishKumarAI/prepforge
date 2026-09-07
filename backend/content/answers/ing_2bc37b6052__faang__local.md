---
qid: ing_2bc37b6052__faang__local
question: 'Explain: Pattern 2: Cost-Optimized with Prompt Caching'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 450
total_tokens: 686
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T20:24:38-05:00'
sources: []
---

**Clarify**  
You’re asking about *Pattern 2: Cost‑Optimized with Prompt Caching* in an AI deployment context—specifically how to reduce compute cost by reusing prompt–response pairs across requests. I’ll assume we’re working with a stateless LLM API (e.g., OpenAI) and that latency is acceptable but token usage drives billable cost.

**Approach**  
1. Cache the *prompt* (or the full prompt‑context string).  
2. When a new request arrives, check if an identical or highly similar prompt exists in cache.  
3. If hit, return the cached response; otherwise forward to the LLM, store the result, and evict based on policy.

**Depth**  
- **Cache key**: hash of prompt text (e.g., SHA‑256).  
- **Storage**: in‑memory (Redis) for low‑latency or disk if size grows.  
- **TTL/eviction**: LRU with a sensible TTL (e.g., 24 h) to keep data fresh while controlling memory.  
- **Complexity**: O(1) lookup; O(n) on eviction in worst case, but negligible for typical workloads.  
- **Trade‑offs**:  
  - *Pros*: Substantial token savings for repeat queries; no LLM call overhead.  
  - *Cons*: Stale responses if underlying data changes; increased memory footprint.

**Edge Cases**  
- Prompt variations (whitespace, case) → normalise before hashing.  
- Very large prompts → consider caching only the most expensive part or using a similarity search.  
- Security: ensure cached content is sanitized and access‑controlled.

**Optimize & Communicate**  
To improve, implement *prompt segmentation*: cache sub‑prompts (e.g., question text) and compose responses dynamically. I’d explain to the interviewer that this balances cost savings with freshness, and demonstrate how monitoring hit rates informs whether we should adjust TTL or move to a more sophisticated vector similarity cache.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
