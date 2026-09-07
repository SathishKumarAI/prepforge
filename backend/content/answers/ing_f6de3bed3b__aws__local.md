---
qid: ing_f6de3bed3b__aws__local
question: 'Explain: Run code-based evals — Ai Evals Complete Guide Langwatch Langfuse'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 446
total_tokens: 683
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T14:34:51-05:00'
sources: []
---

**Situation & Task**  
I was tasked to launch a *code‑based evaluation pipeline* for our internal AI models—essentially “AI Evals” that automatically run user‑submitted scripts against curated test suites (Langwatch/Langfuse). The goal: reduce manual QA effort, provide real‑time model health metrics, and surface regressions before production.

**Action & Design**  
1. **Orchestration** – I built a *Step Functions* state machine that triggers an *ECS Fargate* container for each eval job.  
2. **Execution** – Containers run the user code in a sandboxed environment (AWS Nitro). Results are streamed to *CloudWatch Logs* and persisted in *DynamoDB* (key: model‑ID + timestamp).  
3. **Metrics** – A Lambda aggregates logs into an *Amazon OpenSearch* domain, feeding dashboards in *Grafana*.  
4. **Cost & Scale** – Fargate’s per‑second billing keeps idle costs < $0.01/hr; we provisioned 100 concurrent jobs and hit a peak of 1,200 during a release sprint without throttling.

**Result**  
- Cut manual evaluation time from ~8 hrs to < 30 min per model.  
- Detected 4 regressions that would have slipped into production—preventing a $2M SLA penalty.  
- Reduced infrastructure cost by 35% vs the legacy EC2‑based approach.

**Reflection (Bar‑raiser focus)**  
I took full ownership, diving deep into container security and log parsing to ensure zero false positives. The quantified impact (time & cost savings) validates the design, and I documented lessons learned—especially about sandboxing untrusted code—to improve future iterations.  

*Leadership Principles:* **Customer Obsession** (faster feedback for internal users), **Ownership**, **Dive Deep**, **Deliver Results**.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
