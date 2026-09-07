---
qid: ing_19dca24961__faang__local
question: 'Explain: Tier-selection table — Agent Memory And State'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 443
total_tokens: 675
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T19:45:20-05:00'
sources: []
---

**Clarify**  
We’re asked how a “tier‑selection table” governs an agent’s memory and state in an AI system—essentially, the decision logic that maps a situation (e.g., user intent, context) to the appropriate memory tier (short‑term, mid‑term, long‑term) and corresponding behavioral state.  
Assumptions: *The agent has multiple storage tiers with differing latency/size;* *states are finite automaton nodes driven by memory content.*

**Approach**  
1. Define **tiers** and their properties (latency, size, persistence).  
2. Enumerate **state transitions** tied to tier availability.  
3. Build a deterministic **lookup table** mapping input conditions → tier + state.  
4. Integrate fallback logic for missing data.

**Depth**  
- *Tier definitions*: S‑tier (in‑memory, <1 ms), M‑tier (SSD cache, ~10 ms), L‑tier (distributed DB, >100 ms).  
- *Table schema*: `condition_hash | target_tier | next_state`.  
- *Runtime*: On each request, hash the context → O(1) lookup; fetch from tier; if miss, trigger load and state update.  
- *Complexity*: Lookup O(1); memory O(T×S).  
- *Trade‑offs*: Faster tiers reduce latency but increase cost; deeper states risk stale data.

**Edge Cases**  
- Tier starvation (no space): evict LRU.  
- State drift when data migrates between tiers: trigger state reconciliation.  
- Concurrent updates: use optimistic locking on tier metadata.

**Optimize & Communicate**  
- Cache the table in memory for sub‑ms access; serialize to disk for persistence.  
- Profile latency per tier; if S‑tier hit rate < 70 %, consider expanding it or compressing data.  
- Document the mapping and rollback paths so interviewers see clear reasoning, complexity analysis, and a path to scalability.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
