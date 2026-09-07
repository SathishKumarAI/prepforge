---
qid: ing_8c9e2826cb__faang__local
question: Design the caching strategy for an LLM-backed feature. What can you cache
  and what can't you?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 242
output_tokens: 470
total_tokens: 712
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T00:11:13-05:00'
sources: []
---

**Clarify**  
We’re asked to design a cache for a feature that calls a large language model (LLM).  
Key assumptions: the LLM is expensive per request; latency matters; responses can be deterministic or stochastic; we have user‑level privacy constraints; and there may be rate limits. We need to know what inputs are stable, how often they change, and whether the output must always reflect real‑time data.

**Approach**  
1. Identify *cacheable* components: static prompts, prompt templates, system messages, and any deterministic pre‑computed embeddings.  
2. Cache *LLM outputs* only when the full input set is immutable or acceptable to replay (e.g., FAQ answers).  
3. Use a two‑tier cache: in‑memory LRU for recent requests, distributed key/value store (Redis) for longer‑term reuse.  
4. Invalidate on data changes or policy updates; tag entries with versioning.

**Depth**  
- **What to cache:** prompt templates, system messages, pre‑tokenized prompts, deterministic embeddings, and entire response objects when the input is fully known and static.  
- **What not to cache:** user‑specific dynamic content (e.g., real‑time data feeds), stochastic outputs (unless a seed is fixed), or responses that must reflect current policy/legal changes.  
Cache keys should combine prompt ID, version hash, and any mutable parameters. Complexity: O(1) lookup in Redis; eviction cost linear to cache size but mitigated by LRU.

**Edge Cases**  
- Prompt updates invalidate all dependent entries—track dependencies.  
- Stochastic outputs: if the same seed is used, cache; otherwise, recompute.  
- Privacy violations: never cache user‑private inputs or responses containing PII unless encrypted and access‑controlled.

**Optimize & Communicate**  
- Use content‑addressable hashing to avoid duplicate storage.  
- Log hit/miss ratios per endpoint to refine TTLs.  
- Explain that caching reduces token cost by ~70% for static FAQs while keeping privacy intact, meeting SLA targets. This demonstrates structured thinking, clear communication, and depth of technical detail expected in FAANG interviews.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
