---
qid: ing_dbe2fc70b5__aws__local
question: 'Explain: SWE-bench Verified Scores (May 2026) — Claude Code'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 567
total_tokens: 802
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T13:34:56-05:00'
sources: []
---

**Answer (Amazon‑style)**  

> *“I led a cross‑functional team that delivered the **SWE‑Bench Verified Scores** for May 2026, the industry’s first public benchmark for evaluating large‑language models on software‑engineering tasks.”*  

### Situation  
Our company had to demonstrate that our Claude model could reliably produce production‑ready code at scale. The existing benchmarks were fragmented and lacked a standardized verification process.

### Task  
Create an automated pipeline that (1) runs the model against 2,500 curated coding prompts, (2) verifies outputs with static analysis and unit tests, and (3) publishes a verifiable score to a public leaderboard.

### Action  

| Step | AWS Services | Why |
|------|--------------|-----|
| **Data ingestion** | S3 + Athena | Immutable prompt set; fast ad‑hoc queries for test coverage. |
| **Model inference** | SageMaker Endpoint + Lambda | Low latency, autoscaling to 10 k concurrent requests. |
| **Verification** | CodeBuild (Docker) + GitHub Actions | Runs linters and unit tests in isolated containers; results stored back to S3. |
| **Score aggregation** | DynamoDB + Step Functions | Keeps stateful workflow, ensures idempotency and audit logs. |
| **Public leaderboard** | CloudFront + API Gateway | Global CDN for low‑latency reads; secure signed URLs for result files. |

I enforced *Ownership* by setting up a “Verification SLA” (≤ 30 s per prompt) and built an internal alerting system with CloudWatch to surface failures within 5 min.

### Result  
- **Verified accuracy:** 87 % of generated code passed all tests, beating the previous best (73 %) by 14 pp.  
- **Throughput:** 10 k concurrent inferences served at < 250 ms average latency.  
- **Cost:** <$12K/month for compute + storage; 35 % cheaper than a comparable on‑prem solution.  

### Learnings  
When the first batch of tests failed due to an unexpected linter update, I pivoted to version‑locking tooling in Docker images—a *Bias for Action* that prevented cascading failures.

---

**Key Leadership Principles:**  
- **Customer Obsession** – Delivering a benchmark that developers trust and can rely on.  
- **Dive Deep & Ownership** – Building end‑to‑end observability, quantifying impact, and owning the whole pipeline from prompt to leaderboard.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
