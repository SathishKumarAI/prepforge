---
qid: ing_24662de8eb__aws__local
question: 'Explain: Langfuse — Ai Evals Comprehensive Study Guide'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 231
output_tokens: 431
total_tokens: 662
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T06:49:12-05:00'
sources: []
---

**Situation / Task**  
When my team was launching a new generative‑AI product in **AWS**, we needed a repeatable way to benchmark model quality—accuracy, latency, cost—across multiple LLMs without writing custom scripts.

**Action**  
I introduced **Langfuse**, an open‑source evaluation framework that ingests prompts, captures responses, and aggregates metrics.  
*Design:*  
- **Data layer:** S3 for prompt/response logs + DynamoDB for metadata.  
- **Compute:** Lambda (stateless) to run inference via SageMaker endpoints; Step Functions orchestrate parallel runs.  
- **Analytics:** Athena queries the S3 bucket; results surface in QuickSight dashboards.  
*AWS services used:* S3, DynamoDB, Lambda, SageMaker, Step Functions, Athena, QuickSight.  
I added a CI/CD pipeline (CodePipeline + CodeBuild) to auto‑trigger Langfuse runs on every model commit.

**Result**  
- Reduced evaluation time from 2 days to **<4 hours** per model version.  
- Identified a 12 % cost saving by switching from GPT‑4 to an optimized Claude variant, while maintaining the same BLEU score (0.78).  
- Built a reusable dashboard that cut stakeholder review cycles by **30 %**.

**Learning & Ownership**  
I documented trade‑offs: Lambda’s 15 min timeout vs. Fargate for long‑running models; DynamoDB throughput tuning to avoid throttling. I also added a “failure‑mode” test that automatically alerts if latency > 500 ms, ensuring continuous reliability.  

*Leadership Principles highlighted:* **Ownership** (taking end‑to‑end responsibility), **Dive Deep** (understanding AWS cost/latency trade‑offs).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
