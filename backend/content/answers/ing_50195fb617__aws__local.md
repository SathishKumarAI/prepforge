---
qid: ing_50195fb617__aws__local
question: 'Explain: Tools — Durable Execution'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 225
output_tokens: 516
total_tokens: 741
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T08:26:13-05:00'
sources: []
---

**Answer (Amazon Way)**  

During a recent project to deploy an end‑to‑end recommendation engine, I faced the classic “AI pipeline flakiness” problem: model training jobs would fail mid‑run due to spot instance preemption or transient network glitches, and manual retries were costly.  
**Situation:** 3 × daily inference batches for 5M users; each batch required a 4‑hour Spark job on EMR, followed by an SageMaker model refresh.  
**Task:** Build a **durable execution** workflow that guarantees completion or graceful rollback without human intervention.  

**Action:**  
1. **AWS Step Functions (SF)** orchestrated the pipeline—each state guarded with retry logic (`ErrorEquals: [States.ALL]`, `MaxAttempts: 5`).  
2. **EventBridge** fired a “batch‑start” event; SQS queued jobs, ensuring at‑least‑once delivery.  
3. For long‑running EMR steps, I used **EMR on EKS** (spot + on‑demand mix) and wrapped each Spark job in a Lambda that reported status to SF via `SendTaskSuccess/Failure`.  
4. If a step failed after retries, the workflow invoked a cleanup Lambda to delete partial S3 artefacts and notify Slack—no orphaned data or dangling charges.  

**Result:**  
- **99.9 % successful batch rate** (up from 85 %) over 6 months.  
- Reduced manual ops by **70 %**, saving ~$12k/month in dev‑ops hours.  
- Cost per inference dropped 18 % thanks to automated spot utilization and stateful retries.

**Leadership Principles Highlighted:** *Ownership*—I took full responsibility for end‑to‑end reliability; *Dive Deep*—analyzed failure logs, tuned retry backoff, and benchmarked cost trade‑offs.  

**Bar‑raiser cues I’d expect:** Depth of Step Functions error handling, clear metrics on success vs. rollback, evidence of learning from a specific failure (e.g., why we chose EMR on EKS over classic EMR).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
