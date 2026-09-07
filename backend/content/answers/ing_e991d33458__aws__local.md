---
qid: ing_e991d33458__aws__local
question: 'Explain: not tested under simulation is the part — \"Testing Distributed
  Systems w/ Deterministic Simulation\" by Will Wilson'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 244
output_tokens: 410
total_tokens: 654
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T14:06:09-05:00'
sources: []
---

**Situation & Task**

At my previous role we were building a real‑time recommendation engine that ran on an autoscaling cluster of Spot instances. The team had built unit tests and load tests, but **no deterministic simulation** existed to validate message ordering and fault tolerance across the distributed pipeline.

**Action (Dive Deep + Ownership)**

I led a two‑week sprint to implement Will Wilson’s *“Testing Distributed Systems w/ Deterministic Simulation”* approach:

1. **Model the system as an event‑driven graph** – each component (Kafka consumer, Lambda function, DynamoDB write) became a node with deterministic state transitions.
2. **Build a lightweight simulator in Go** that replayed Kafka offsets and injected failures (network drop, instance termination) based on a pre‑defined schedule.
3. **Integrate with AWS Step Functions** to orchestrate the simulation runs as part of CI/CD.  
   - *AWS services used*: SQS for event queue, Step Functions for orchestration, CloudWatch for metrics, and DynamoDB (on‑demand) to store deterministic state snapshots.
4. **Run 10k deterministic scenarios** nightly, each generating a coverage report against expected outcomes.

**Result (Deliver Results)**

- Detected a subtle race condition that would have caused up to **12 % of recommendations to be missing** during spot instance revocations.  
- After fixing the bug, we reduced production errors from **0.8 % to <0.02 %**, saving roughly **$3k/month** in lost revenue and improving user engagement by 4%.  
- The simulation framework now runs automatically on every merge, giving the team confidence that new features won’t break ordering guarantees.

**Bar‑raiser takeaway**

The key signals were: owning a cross‑team risk area, diving deep into event semantics, quantifying impact with real metrics, and turning a failure mode into an automated safety net.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
