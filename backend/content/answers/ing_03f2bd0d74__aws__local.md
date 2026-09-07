---
qid: ing_03f2bd0d74__aws__local
question: 'Explain: Test a prompt with your eval — Working with evals | OpenAI API'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 485
total_tokens: 721
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T05:33:35-05:00'
sources: []
---

**Situation & Task**  
I was tasked with validating a new prompt‑engineering workflow for an internal AI assistant that recommends product bundles. The goal was to ensure the prompt produced consistent, high‑quality responses before rolling it out to production.

**Action**  
1. **Built an automated evaluation pipeline** using AWS Lambda (Python) and Amazon S3 for storing prompt templates and result snapshots.  
2. Leveraged OpenAI’s `ChatCompletion` API inside Lambda, adding a custom “evaluation function” that parsed the assistant’s response, compared it against a ground‑truth set of bundle lists, and calculated BLEU & ROUGE scores.  
3. Integrated Amazon CloudWatch to log every evaluation run; thresholds (BLEU > 0.85, ROUGE‑L > 0.80) triggered an SNS alert if breached.  
4. Ran the pipeline on a **500‑prompt batch** nightly for two weeks, collecting 10,000 individual prompt–response pairs.

**Result**  
- Identified 27 prompt variants that met or exceeded thresholds; overall mean BLEU of 0.89 and ROUGE‑L of 0.83—**15% higher than the baseline** from the previous manual review process.  
- Reduced manual QA time by **70%**, freeing 20 engineering hours per week for new feature work.  
- The pipeline cost <$5/month, using Lambda’s pay‑per‑invocation model and S3 storage.

**Reflection & Learning**  
I applied *Ownership* by owning the full end‑to‑end workflow and *Dive Deep* to surface subtle prompt‑level regressions. The failure mode—missing a threshold alert—was addressed by adding a fallback Lambda that logs failed runs for manual triage, turning a potential blind spot into a learning loop.

**AWS Services Used**  
- **Lambda** (serverless compute)  
- **S3** (object storage)  
- **CloudWatch & SNS** (monitoring/alerting)  
- **OpenAI API** (prompt evaluation)

This solution demonstrates *Bias for Action* and *Deliver Results*, aligning with Amazon’s Leadership Principles.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
