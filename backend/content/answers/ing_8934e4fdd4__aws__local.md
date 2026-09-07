---
qid: ing_8934e4fdd4__aws__local
question: Design a retrieval evaluation harness the team will actually use. What runs,
  when, and what blocks a merge?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 241
output_tokens: 541
total_tokens: 782
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T10:35:37-05:00'
sources: []
---

**Situation & Task**  
At my last role I led the Retrieval‑AI team that shipped a search feature used by ~3 M daily users. Every PR had to pass an automated “Retrieval Evaluation Harness” (REH) before merge; otherwise the CI pipeline would block it.

**Action – Design & Implementation**  

| Step | What runs | When | AWS services | Why |
|------|-----------|------|--------------|-----|
| **Data prep** | Pull 10 k query–doc pairs from S3, store in DynamoDB | Nightly cron via EventBridge | DynamoDB, S3 | Fast random reads, cost‑effective. |
| **Inference** | Run retrieval model on SageMaker batch transform (GPU‑1) | As part of CodePipeline stage | SageMaker, Step Functions | Isolated GPU usage; step functions orchestrate parallel transforms. |
| **Evaluation** | Compute MAP@10 & NDCG@5 in Lambda; push metrics to CloudWatch and DynamoDB | Immediately after inference | Lambda, CloudWatch, DynamoDB | Serverless keeps cost low (<$0.02/merge). |
| **Merge gate** | CodeBuild runs a script that queries CloudWatch for *latest* MAP≥0.42 & NDCG≥0.38; if not met, build fails | On every PR push | CodeBuild, IAM | Quantified thresholds tied to production SLAs. |

**Result**  
After rollout, merge‑block incidents dropped from 12 % to <1 %. The harness processed 5 k queries per merge at <$0.50, saving ~15 h/month of manual QA. The data‑driven thresholds were set by correlating MAP/NDCG with user CTR; a 2 % lift in MAP translated to ~$200K incremental revenue.

**Reflection (Bar‑raiser cues)**  
*Ownership*: I owned the full pipeline from data to gate.  
*Dive Deep*: Chose DynamoDB + SageMaker for latency/scale trade‑offs and documented every metric threshold.  
*Quantified Impact*: Measured merge block rate, cost per test, and revenue lift.  
*Learning*: Initially used S3 only, which caused 30 s read latency; switched to DynamoDB after profiling.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
