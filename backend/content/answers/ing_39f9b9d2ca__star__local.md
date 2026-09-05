---
qid: ing_39f9b9d2ca__star__local
question: 'Explain: you fixed the bug you can''t verify — \"Testing Distributed Systems
  w/ Deterministic Simulation\" by Will Wilson'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 250
output_tokens: 298
total_tokens: 548
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T00:24:33-05:00'
sources: []
---

**Situation:**  
At my previous company we were rolling out a new recommendation engine that ran on a distributed Spark cluster. A regression in the feature extractor caused an intermittent drop in precision, but the bug never reproduced locally because it only appeared when multiple workers processed the same user stream concurrently.

**Task:**  
I had to identify and fix the concurrency issue without being able to reproduce it in our dev environment, all while keeping the production pipeline online for a quarterly launch.

**Action:**  
I turned to Will Wilson’s “Testing Distributed Systems with Deterministic Simulation.” First, I instrumented the worker nodes to emit deterministic timestamps for each user event. Then, using the `DeterministicExecutor` library, I replayed the exact sequence of events in a single‑process simulation that preserved the original ordering but eliminated non‑determinism from thread scheduling. This allowed me to see how race conditions surfaced in the feature extraction logic. Once the bug was isolated—a shared mutable map that wasn’t properly synchronized—I refactored it into an immutable `ConcurrentHashMap` with atomic upserts and added a unit test covering the edge case.

**Result:**  
The precision metric recovered from 78% to 93%, matching our pre‑release target. The deterministic simulation also reduced future debugging time by ~70% for similar distributed bugs, and I documented the process in our internal testing guidelines.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
