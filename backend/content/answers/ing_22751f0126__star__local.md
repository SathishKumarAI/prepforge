---
qid: ing_22751f0126__star__local
question: 'Explain: or later like a retry happens like — \"Testing Distributed Systems
  w/ Deterministic Simulation\" by Will Wilson'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 250
output_tokens: 379
total_tokens: 629
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T23:38:08-05:00'
sources: []
---

**Situation** – In my last role I was tasked with validating the fault‑tolerance of our microservice mesh that processes real‑time analytics. The service had a retry policy that kicked in on transient network failures, but we kept seeing flaky test results because retries happened at random times.

**Task** – I needed to build a deterministic testing harness that could reproduce exactly when a retry would fire so that regression tests ran reliably and we could pinpoint the root cause of any failure.

**Action** – I implemented a lightweight simulation layer inspired by Will Wilson’s “Testing Distributed Systems w/ Deterministic Simulation.” The core idea was to replace real timers with a virtual clock and inject “retry events” into an event queue. I used Python’s `asyncio` loop but patched it so that every `await asyncio.sleep()` advanced the virtual clock instead of sleeping in real time. Each service instance subscribed to the same event bus, ensuring that when a retry was scheduled, all replicas saw the exact same timestamp. I also added a deterministic random number generator seeded per test run so that any probabilistic decisions (e.g., exponential back‑off) were reproducible.

**Result** – The new harness cut flaky test failures from 18 % to <1 %. We could now run 200+ unit tests in under an hour, and the deterministic retries revealed a subtle race condition in our session store that we fixed before production. I learned that injecting a virtual clock is often simpler than mocking every timer and that deterministic simulations give you confidence in distributed retry logic.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
