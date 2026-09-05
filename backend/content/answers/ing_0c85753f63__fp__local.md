---
qid: ing_0c85753f63__fp__local
question: You're handed a small unfamiliar agent codebase. Users report it sometimes
  confirms an order that was never actually placed. How do you debug it?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 187
output_tokens: 425
total_tokens: 612
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T16:32:22-05:00'
sources: []
---

**Why the bug happens**  
An order‑confirmation message is a *side effect* that should be triggered only when an order has transitioned from “created” to “confirmed”. If the code ever confirms without that transition, it violates the *causality invariant*: *action → state change*. The invariant can be broken by race conditions, stale cache entries, or hidden state mutation.  

**What to check first (from fundamentals)**  
1. **Reproduce deterministically** – run the same request twice with identical inputs and record all timestamps.  
2. **Inspect the order lifecycle graph** – build a directed acyclic graph of all state transitions and confirm that “confirmed” has only one incoming edge from “created”.  
3. **Audit side‑effect triggers** – search for any `sendConfirmation()` calls outside the confirmed transition.  

**Key debugging steps**  
- **Instrument every state change** with a unique trace ID; log it to an immutable audit store.  
- **Reconstruct the exact causal chain** by joining logs on that trace ID; if a confirmation appears without a preceding “created‑to‑confirmed” record, you’ve found the leak.  
- **Validate caching logic** – stale data can masquerade as a fresh order. Flush or timestamp caches and observe whether the bug persists.  

**Non‑obvious insight**  
Often the culprit is *asynchronous event ordering*: an earlier confirmation request is processed after a later “cancel” because of out‑of‑order message delivery in a distributed queue. Adding idempotency keys to every confirmation call restores causality without changing business logic.  

By treating the code as a black box that must obey the causal invariant, you narrow down the search to state‑transition violations rather than surface‑level bugs.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
