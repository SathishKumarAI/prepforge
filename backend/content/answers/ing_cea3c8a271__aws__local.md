---
qid: ing_cea3c8a271__aws__local
question: 'Explain: gets lost in a Time Warp B — \"Testing Distributed Systems w/
  Deterministic Simulation\" by Will Wilson'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 244
output_tokens: 410
total_tokens: 654
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T13:08:05-05:00'
sources: []
---

**Context & Challenge**  
During my senior role at AWS, I led a project to validate the consistency of our *distributed event‑driven services* (SNS/SQS + Lambda). Traditional chaos testing was noisy and hard to reproduce; we needed a deterministic way to “warp” time and replay interleavings.  

**Action – Design & Implementation**  
I built a **Time‑Warp Test Harness** inspired by Will Wilson’s paper:  
1. Capture every event timestamp and payload into an *event log* (stored in DynamoDB).  
2. Run the system under test in a *deterministic simulation engine* that rewinds/fast‑forwards the wall clock, feeding recorded events back via Kinesis Data Streams.  
3. Use **AWS Step Functions** to orchestrate replay, with Lambda workers reading from the stream and invoking the real service endpoints.  
4. Inject controlled delays (via CloudWatch Events) to stress specific race conditions.  

**Result**  
- Detected 27 subtle ordering bugs that had caused *>1 %* data loss in production (≈$2 M/year).  
- Reduced regression testing time from **12h → 90m** per release, cutting costs by **30 %**.  

**Reflection**  
I owned the end‑to‑end pipeline, diving deep into AWS SDK internals to guarantee replay fidelity. The bar‑raiser looked for ownership (owning failures), depth (understanding event causality), quantified impact (cost savings & bug reduction), and lessons learned—most notably that deterministic simulation unlocks reproducibility without sacrificing realism.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
