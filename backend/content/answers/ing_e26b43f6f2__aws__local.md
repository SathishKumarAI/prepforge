---
qid: ing_e26b43f6f2__aws__local
question: 'Explain: The benefits of orchestration: — Orchestration vs. Choreography
  in Microservices'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 394
total_tokens: 634
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T13:51:27-05:00'
sources: []
---

**Situation / Task**  
At my last role I led the migration of a legacy analytics pipeline to a serverless micro‑service architecture on AWS. The team debated whether to use orchestration (step functions) or choreography (event‑driven services).  

**Action**  
I scoped the problem:  
- *Requirements*: guarantee data lineage, enforce ordering for compliance, and provide observability.  
- *Design*: a **Step Functions state machine** orchestrating Lambda workers that each run a training job on SageMaker; events from S3 trigger the first step.  
- *AWS services used*: Step Functions (orchestration), EventBridge (choreography fallback for non‑critical flows), Lambda, SageMaker, CloudWatch Logs/Events.  

I ran a proof of concept with 10 jobs and measured:  
- **Throughput** rose from ~30 jobs/hr to 120 jobs/hr (4×).  
- **Latency** dropped by 35 % because state transitions were explicit and retriable.  
- **Cost** stayed within budget—$0.02 per job vs. $0.04 when using pure choreography.

**Result**  
The new orchestrated pipeline reduced SLA violations from 12 % to <1 %, cut manual monitoring effort by 70 %, and earned a “Best Practice” award in the quarterly leadership review.

**Reflection (Bar‑raiser notes)**  
- *Ownership*: I drove the decision, owned the risk matrix, and presented trade‑offs.  
- *Dive Deep*: I benchmarked both patterns with real data and quantified impact.  
- *Learning from Failure*: The initial choreography attempt caused race conditions; the switch to orchestration eliminated them while keeping costs low.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
