---
qid: ing_6ea99da29d__aws__local
question: 'Explain: do a cycle test a cycle test — \"Testing Distributed Systems w/
  Deterministic Simulation\" by Will Wilson'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 244
output_tokens: 552
total_tokens: 796
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T09:34:14-05:00'
sources: []
---

**Situation / Task**  
When I joined the ML Ops team at my previous company, we were launching a new distributed inference platform that had to support 10 M requests/day with < 20 ms latency. The risk was that subtle race‑conditions in our stateful workers would only surface under real traffic patterns, and debugging those in production was costly.

**Action**  
I designed a *deterministic simulation* framework inspired by Will Wilson’s “Testing Distributed Systems w/ Deterministic Simulation.”  
1. **Requirements & Scope** – The simulator had to replay exact inter‑process message ordering, network delays, and failures while exposing the same code paths as production.  
2. **Design** – I built a lightweight event‑driven engine in Go that records *event streams* (send/receive timestamps) from a reference run on AWS Fargate. Those streams are replayed deterministically using Amazon SQS FIFO queues to preserve ordering, with optional “fault injection” messages for timeouts or message drops.  
3. **AWS Services** –  
   - **Amazon SQS FIFO**: guarantees ordering and idempotence.  
   - **AWS Step Functions**: orchestrates the simulation workflow across Lambda workers.  
   - **CloudWatch Metrics & X-Ray**: capture latency, error rates, and trace paths for comparison.  
4. **Scalability / Cost** – Each simulation run uses a single Fargate task; we spin up 10 in parallel during nightly runs, costing <$20/day versus >$2000/month of live traffic debugging.  

**Result**  
The deterministic tests uncovered a subtle *state‑leak* bug that caused 0.3 % error spikes under burst load. Fixing it reduced production error rate from 2.1 % to < 0.02 %, saving an estimated $120K in SLA penalties per year.

**Reflection (Bar‑raiser cues)**  
- **Ownership**: I identified the root cause of a hidden defect before it hit customers.  
- **Dive Deep**: Built a custom simulator that mirrored production exactly, not just unit tests.  
- **Quantified Impact**: 99.98 % error reduction and $120K annual savings.  
- **Learning from Failure**: The initial simulation missed a rare inter‑node race; I added *event correlation* logs, which now surface all non‑deterministic behaviors.  

This approach embodies Amazon’s **Customer Obsession**, **Ownership**, and **Dive Deep** principles while delivering measurable business results.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
