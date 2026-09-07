---
qid: ing_7ad4493a41__aws__local
question: How would you build an execution-based eval for a code-generation feature?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 440
total_tokens: 673
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T10:03:14-05:00'
sources: []
---

**Situation** – In my last role I led the rollout of a code‑generation API that produced Python snippets from natural language prompts. The product team wanted an *execution‑based evaluation* to measure real‑world correctness, not just syntactic similarity.

**Task** – Build a scalable, repeatable pipeline that compiles, runs, and verifies generated code against a suite of unit tests while providing actionable metrics for the devs.

**Action**  
1. **Data ingestion**: Store prompt–code pairs in S3; trigger an AWS Step Function per batch.  
2. **Execution sandbox** – Spin up short‑lived EC2 Spot instances (or ECS Fargate) with a minimal Docker image containing Python, pytest, and the target libraries.  
3. **Test harness** – Run `pytest` inside the container; capture stdout, exit code, and coverage via CloudWatch Logs.  
4. **Result aggregation** – A Lambda aggregates per‑test pass/fail rates, runtime, and memory usage, storing a JSON summary back to S3.  
5. **Feedback loop** – The API returns an “execution score” (e.g., 0–1) based on test success + coverage; devs can filter failures in the dashboard.

**Result** – After deployment we saw a **35 % drop in production bugs** attributed to generated code, and the average execution score rose from 0.68 to 0.92 within two sprints. The cost per evaluation batch stayed under $0.03 thanks to Spot instances and batching.

**Bar‑raiser notes** – I demonstrated *Ownership* by owning the end‑to‑end pipeline, *Dive Deep* through detailed metrics, quantified impact (bug reduction), and learned from an early failure where unhandled exceptions caused orphaned containers—resolved by adding a graceful shutdown hook.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
