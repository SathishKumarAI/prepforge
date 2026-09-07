---
qid: ing_48b7988ef7__aws__local
question: 'You''re splitting a research agent into an orchestrator and subagents.
  Design the interface: what exactly crosses the boundary in each direction?'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 245
output_tokens: 738
total_tokens: 983
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T08:09:44-05:00'
sources: []
---

**Scenario (S)**  
At a startup we were scaling an AI research platform that ran millions of experiments per month. The monolithic “research agent” was hard to test and had slow iteration cycles.

**Task (T)**  
I led the split into an **Orchestrator** (policy & scheduling) and multiple **Subagents** (model training, data‑prep, evaluation). My goal: design a clean interface that keeps latency < 2 s for control messages while preserving end‑to‑end observability.

**Action (A)**  

| Direction | Crossing payload | Tech stack |
|-----------|------------------|------------|
| **Orchestrator → Subagent** | • `JobID` + `TaskType` (train/eval) <br>• `Hyperparams` (JSON) <br>• `S3InputURI` & `OutputBucket` | AWS Step Functions state machine triggers a Lambda that pushes to an SQS queue per sub‑team. |
| **Subagent → Orchestrator** | • `JobID`, `Status` (`RUNNING/FAILED/SUCCEEDED`) <br>• `MetricsJSON` (loss, accuracy) <br>• `S3ArtifactURI` | Subagents publish to an SNS topic; the Orchestrator Lambda aggregates and writes a DynamoDB record for audit. |

*Why this works:*  
- **Scalability** – SQS queues handle bursty traffic; Step Functions orchestrate retries.  
- **Availability** – Each component is stateless; failures are retried automatically.  
- **Cost** – Lambda + SQS keeps compute idle cost low; we pay only for executions.  
- **Observability** – DynamoDB records give a single source of truth; CloudWatch metrics expose latency per task.

I introduced an automated health‑check API (`/status`) that Subagents ping every 30 s, giving the Orchestrator instant fail‑fast visibility—reducing mean time to recovery from 15 min to < 2 min.

**Result (R)**  
After deployment:  
- Experiment throughput rose **40 %** (from 1.2M → 1.7M jobs/month).  
- Latency for status updates dropped **70 %** (avg 4 s → 1.3 s).  
- Operational cost fell **25 %** due to better resource utilization.

**Leadership Principles Highlighted**

| Principle | How it shows |
|-----------|--------------|
| *Ownership* | I owned the end‑to‑end pipeline, from design through production monitoring. |
| *Dive Deep* | I profiled every microsecond of latency, dissected failure logs, and tuned SQS visibility timeouts. |
| *Bias for Action* | Deployed a prototype in two weeks, iterated on feedback, and rolled out globally within 30 days. |

**Bar‑raiser notes:**  
- Look for **quantified impact** (exact percentages).  
- Expect depth: why choose Step Functions over plain Lambda? What trade‑offs considered?  
- Demonstrate learning from early failures (e.g., initial SQS dead‑letter queue misconfiguration and how we fixed it).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
