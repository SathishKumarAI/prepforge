---
qid: ing_7c080581b7__aws__local
question: 'Explain: show up and so the idea here — \"Testing Distributed Systems w/
  Deterministic Simulation\" by Will Wilson'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 244
output_tokens: 455
total_tokens: 699
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T10:05:45-05:00'
sources: []
---

**Situation / Task**  
At my previous role I led a team that was shipping nightly ML model updates to production on a distributed inference cluster. Our last release hit a 12 % increase in latency due to race conditions that were hard to reproduce locally.

**Action (Technical)**  
I introduced *Deterministic Simulation* inspired by Will Wilson’s paper:  
1. **Capture Execution Graphs** – instrument each worker with a lightweight trace of message sends/receives (`AWS X-Ray` + custom log tags).  
2. **Replay Engine** – build an in‑memory replay service (Python + `asyncio`) that consumes the graph and replays events deterministically using a *sequential event queue* (`Amazon SQS FIFO`).  
3. **Simulation API** – expose a REST endpoint on `API Gateway` to trigger a replay with a specified seed; results are stored in `DynamoDB` for audit.

The simulation runs on an `EC2 Spot Fleet` (cost ↓ 70%) and scales horizontally via `Auto Scaling`. Because the replay is deterministic, we can run 100× real‑time simulations nightly without impacting production traffic.

**Result**  
- Detected a subtle ordering bug that reduced latency by **8 %** once fixed.  
- Reduced post‑release incidents from 4 per month to 0 in 6 months (a 100 % drop).  
- Saved ~$12k/month in manual testing effort and avoided potential SLA penalties.

**Leadership Principles**  
- *Customer Obsession* – ensured end users saw consistent performance.  
- *Ownership & Dive Deep* – I owned the problem, built a repeatable solution, and dug into low‑level concurrency bugs.

**Bar‑raiser cues**  
I demonstrated ownership by owning the entire pipeline from instrumentation to replay, dove deep into event ordering semantics, quantified impact with latency and cost metrics, and learned from the failure by automating detection instead of reactive debugging.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
