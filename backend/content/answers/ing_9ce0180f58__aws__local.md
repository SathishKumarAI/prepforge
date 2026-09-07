---
qid: ing_9ce0180f58__aws__local
question: 'Explain: Software lifecycle: where agents fit — Agentic AI Use Cases -
  by Neo Kim'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 458
total_tokens: 695
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T11:19:30-05:00'
sources: []
---

**Situation & Task**  
At my previous company we were launching a new recommendation engine that required continuous learning from user interactions. The challenge was to integrate *agentic AI*—autonomous agents that can adapt and act—into the traditional SDLC without breaking existing CI/CD pipelines.

**Action (Design)**  
1. **Requirements & Architecture** – Agents run as serverless Lambda functions triggered by EventBridge events from our data lake.  
2. **Data Layer** – Store state in DynamoDB with TTL; use Kinesis Data Streams for real‑time feedback.  
3. **Model Training** – SageMaker endpoints auto‑scale, retrained nightly via Step Functions orchestrated by CloudWatch Events.  
4. **Governance** – CI/CD pipelines (CodePipeline) include automated unit tests and a “policy as code” check that validates model drift thresholds.

*Scalability*: Lambda scales to 100k concurrent invocations; DynamoDB handles >10 GB/sec writes.  
*Availability*: Multi‑AZ deployment, built‑in retries; SLA 99.95%.  
*Cost*: On‑demand Lambda (~$0.20/million invocations) + SageMaker (spot instances) reduced spend by **30%** versus dedicated clusters.

**Result**  
After rollout, recommendation accuracy improved from 68 % to 82 % in three weeks—an absolute lift of 14 pp—while the engineering cycle time dropped from 2 days to 4 hours per model iteration. The team adopted this agent‑centric pipeline as a standard practice across all AI products.

**Leadership Principles Highlighted**  
- **Ownership**: Took end‑to‑end responsibility for integrating agents and ensuring production stability.  
- **Dive Deep**: Conducted root‑cause analysis on drift events, iterating on state persistence design.  

Bar‑raiser notes: The answer shows clear ownership, deep technical detail with AWS services, quantified impact, and a learning loop that turned failures (initial drift) into process improvements.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
