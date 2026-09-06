---
qid: ing_0c85753f63__think__local
question: You're handed a small unfamiliar agent codebase. Users report it sometimes
  confirms an order that was never actually placed. How do you debug it?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 206
output_tokens: 531
total_tokens: 737
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T03:32:31-05:00'
sources: []
---

**1️⃣ Clarify the problem & assumptions**

- *What does “confirms an order” mean exactly?* Is it a UI message, a log entry, or an external API call?
- *When and how is an order normally created?* Identify the user‑initiated flow that triggers order creation.
- *Assume the codebase is small enough to read in a few hours but has hidden state (caching, background jobs).*

**2️⃣ Mental model / framework**

Use a **debugging funnel**:  
1. Reproduce the symptom locally → capture the exact call stack and data at confirmation time.  
2. Trace back from confirmation to *source of truth* for order existence.  
3. Check side‑effects (caches, async jobs) that could mislead the system.

**3️⃣ Step‑by‑step reasoning**

1. **Reproduce**: Run the app in dev mode; trigger a fake order placement and monitor the “confirm” event.
2. **Log everything**: Temporarily add detailed logs around order creation, persistence, and confirmation logic (IDs, timestamps).
3. **Inspect the data store**: Verify whether an order record actually exists when confirmation occurs.
4. **Search for hidden triggers**: Look for scheduled jobs, webhook handlers, or default‑value functions that might fire a confirmation without user input.
5. **Check caching / memoization**: A stale cache could return “order confirmed” even if the DB shows none.
6. **Unit‑test the path**: Write a minimal test that places an order and ensures no confirmation is emitted until the order is persisted.

**4️⃣ Common traps to avoid**

- Assuming logs are trustworthy without checking for duplicated log statements or mocked services.  
- Overlooking asynchronous code paths (e.g., callbacks fired after user navigation).  
- Ignoring environment differences: local DB vs production may behave differently.

**5️⃣ Sanity‑check & communicate**

- **Verify** by stepping through the debugger and ensuring each variable matches expectations.  
- **Explain** your findings to a teammate: “The confirmation is triggered by a background job that reads from a cache; when the cache is stale it thinks an order exists.”  
- Propose a fix (e.g., invalidate cache on order creation) and confirm with regression tests.

By systematically reproducing, logging, tracing back to the source of truth, and ruling out async/caching side‑effects, you isolate why the system sometimes confirms non‑existent orders.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
