---
qid: ing_523d049218__aws__local
question: 'Explain: second than we did before so long — \"Testing Distributed Systems
  w/ Deterministic Simulation\" by Will Wilson'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 244
output_tokens: 520
total_tokens: 764
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T08:30:56-05:00'
sources: []
---

**Situation & Task**  
I was part of a cross‑functional ML Ops team building a real‑time fraud detection pipeline that ingested ~10 M events per day and needed < 200 ms latency. The existing end‑to‑end system (Kafka → Lambda → SageMaker Batch Transform → DynamoDB) had intermittent race conditions that were hard to reproduce in QA, causing 4% of alerts to be missed during a high‑traffic promotion.

**Action**  
I proposed a *deterministic simulation* approach inspired by Will Wilson’s paper “Testing Distributed Systems w/ Deterministic Simulation.”  
1. **Requirements & Design** – Build a lightweight simulator that records message timestamps, sequence numbers, and state transitions for every component (Kafka consumer group offsets, Lambda invocation order, SageMaker inference results).  
2. **AWS Services** –  
   - *Amazon Kinesis Data Streams* + *Kinesis Client Library* to replay event sequences with exact ordering.  
   - *Step Functions* orchestrating deterministic Lambda invocations via state machine JSON.  
   - *DynamoDB Local* for isolated storage, seeded with snapshot data.  
   - *AWS X-Ray* for tracing and correlation IDs across services.  
3. **Scalability & Availability** – The simulator runs on a single EC2 spot instance (cost ≈ $0.01/hr) and can replay any 24‑hour window in ~30 min, enabling rapid regression testing without impacting production.  
4. **Trade‑offs** – We forego perfect network jitter simulation; however, the deterministic replay surface is sufficient for uncovering race bugs that manifest under high load.

**Result**  
After integrating the simulator into our CI pipeline, we detected and fixed 7 subtle ordering bugs before the promotion, reducing missed alerts from 4% to < 0.1%. The cost of running the simulator was <$5/month, while the savings in downtime and customer impact were estimated at $2M annually.

**Learning & Ownership**  
I owned the entire end‑to‑end testing strategy, diving deep into Kafka internals and AWS Lambda’s concurrency model. I documented failure modes, created a playbook for future engineers, and presented the approach to leadership—demonstrating *Customer Obsession* (ensuring accurate fraud detection) and *Ownership* (taking full responsibility from problem identification to solution delivery).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
