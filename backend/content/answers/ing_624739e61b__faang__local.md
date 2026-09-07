---
qid: ing_624739e61b__faang__local
question: 'Explain: Title: Less Context, Better Agents: Efficient Context Engineering
  for Long-Horizon Tool-Using LLM Agents'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 246
output_tokens: 419
total_tokens: 665
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T22:32:26-05:00'
sources: []
---

**Clarify**  
The question asks how we can reduce the amount of context fed into a large‑language‑model (LLM) while still enabling it to execute multi‑step tasks that involve external tools over long horizons. I’ll assume: *the agent must keep track of state across steps, call APIs, and respond in natural language*.

**Approach**  
1. **State abstraction** – compress the history into a succinct “belief state” (e.g., key facts, pending actions).  
2. **Chunked prompts** – feed only the current action request plus the compressed state, not the full dialogue.  
3. **Tool‑specific caching** – cache API responses and reuse them via identifiers instead of re‑querying.  
4. **Dynamic context windows** – grow the prompt only when new critical information appears.

**Depth**  
We represent the belief as a JSON object: `{step, pending_actions, recent_results}`. The LLM receives a template prompt like:

```
State: {…}
Action: <to be decided>
```

When calling an API, we store its output under a key and reference it later (`result_42`). Complexity is linear in the number of distinct keys; memory stays bounded by the cache size.

**Edge Cases**  
- **Mismatched IDs** – ensure deterministic hashing of requests.  
- **State drift** – periodically refresh with a full context snapshot if divergence exceeds a threshold.  
- **Tool failures** – fallback to default actions or retries without bloating the prompt.

**Optimize & Communicate**  
We can further compress state via embedding similarity and prune stale keys. Explain trade‑offs: tighter compression reduces latency but risks losing nuance; looser compression keeps fidelity at higher cost. Present this as a modular pipeline, emphasizing that each component (abstraction, caching, dynamic windows) is independently testable and tunable for different workloads.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
