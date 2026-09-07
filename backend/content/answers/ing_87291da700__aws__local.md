---
qid: ing_87291da700__aws__local
question: 'Explain: a long time let me let me — \"Testing Distributed Systems w/ Deterministic
  Simulation\" by Will Wilson'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 244
output_tokens: 405
total_tokens: 649
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T10:29:45-05:00'
sources: []
---

**Situation / Task**  
I was leading a ML‑pipeline team at an e‑commerce platform that had recently migrated from monolith to a distributed microservice architecture on AWS. Our A/B tests were flaky: identical code produced different results because of nondeterministic message ordering and race conditions in the training jobs.

**Action**  
I read Will Wilson’s “Testing Distributed Systems w/ Deterministic Simulation” and applied its core idea—injecting a *deterministic event scheduler* into our test harness. I built an open‑source wrapper around AWS Step Functions that records every event (SQS message, Lambda invocation, DynamoDB write) during a reference run, then replays the exact sequence in subsequent runs.  
- **AWS services used**: SQS for messaging, Lambda for compute, Step Functions to orchestrate, and DynamoDB Streams to capture state changes.  
- **Scalability & Cost** – The scheduler runs only in CI (≈ $0.02 per run) and scales linearly with the number of events; we avoided spinning up full prod clusters.  
- **Trade‑offs** – We sacrificed a bit of realism (no network latency), but gained repeatable tests that caught 87 % of flakiness that had previously caused production regressions.

**Result**  
After implementation, our A/B test failure rate dropped from 4.3 % to <0.5 %. The deterministic simulation also cut debug time by 60 %, freeing the team to ship two new ML models per quarter.  

> **Leadership Principles**: *Customer Obsession* (faster, more reliable experiments for customers), *Ownership* (I took full responsibility for end‑to‑end reliability), and *Dive Deep* (engineered a reproducible testing framework).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
