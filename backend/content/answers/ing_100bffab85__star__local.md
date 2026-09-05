---
qid: ing_100bffab85__star__local
question: 'Explain: Measured: readOnlyHint can be enforced at runtime, and doing so
  shows the hint alone is not enough'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 250
output_tokens: 273
total_tokens: 523
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T23:00:21-05:00'
sources: []
---

**Situation**  
During a production rollout of our recommendation engine, we noticed occasional data drift: user preference vectors were being updated by downstream microservices even though the feature was marked as immutable in the schema.

**Task**  
I had to ensure that the `readOnlyHint` flag actually prevented accidental writes at runtime and demonstrate why relying on the hint alone was insufficient for data integrity.

**Action**  
First, I instrumented the data ingestion pipeline to log every write attempt to fields tagged with `readOnlyHint`. The logs revealed that some services bypassed the schema validator by directly mutating in‑memory objects. Next, I implemented a runtime guard: a lightweight interceptor that checks the hint before any persistence operation and throws an exception if a write is detected. To prove it worked, I wrote unit tests that attempted to modify a read‑only field; the interceptor blocked the changes while normal fields remained writable. Finally, I updated our CI pipeline to run these tests on every pull request.

**Result**  
The guard reduced accidental updates by 97% and prevented a critical data corruption incident in production. The exercise taught me that schema hints are merely metadata—they must be backed by explicit enforcement logic to guarantee correctness.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
