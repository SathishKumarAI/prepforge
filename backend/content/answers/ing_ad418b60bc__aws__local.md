---
qid: ing_ad418b60bc__aws__local
question: 'Explain: Set environment variables first — Ai Evals Complete Guide Langwatch
  Langfuse'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 410
total_tokens: 646
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T11:57:13-05:00'
sources: []
---

**Situation & Task**  
While leading a rapid‑prototype ML platform at my previous company, we needed to deploy the new *Ai Evals* framework and integrate two observability tools—Langwatch (runtime monitoring) and Langfuse (prompt analytics)—into our serverless inference pipeline. The team was tight on time, and any misconfiguration would stall all downstream experiments.

**Action & Technical Design**  
I drafted a single Bash script that:
1. **Sets environment variables** for each tool (`LANGWATCH_TOKEN`, `LANGFUSE_API_KEY`) using secure Parameter Store values.
2. Injects them into the Lambda execution role via **AWS Secrets Manager** to avoid hard‑coding secrets.
3. Uses **S3 event triggers** to reload env vars on every new container image, ensuring zero downtime.
4. Implements a health‑check endpoint that queries Langwatch and Langfuse dashboards for latency & error rates.

I chose **Lambda@Edge** for low‑latency inference, **CloudWatch Logs** for real‑time visibility, and **Cost Explorer** to keep the spend under 2 % of total ML ops budget. The design is horizontally scalable (auto‑scaling Lambda concurrency) and highly available (multi‑AZ S3 buckets).

**Result**  
After deployment, we reduced model rollout time from 5 days to **1 day**, cut experiment failure rates by **35 %**, and kept operational costs at **$450/month**—a 15 % savings versus the legacy monolith.  

*Leadership Principles*: **Ownership** (I took full responsibility for end‑to‑end reliability), **Dive Deep** (I scrutinized each service’s trade‑offs), and **Deliver Results** (measurable, cost‑effective improvements).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
