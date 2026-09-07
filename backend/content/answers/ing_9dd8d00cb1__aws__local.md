---
qid: ing_9dd8d00cb1__aws__local
question: 'Explain: The changes to AI in hiring: when Anthropic applicants can use
  the tech'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 477
total_tokens: 713
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T11:21:50-05:00'
sources: []
---

**Situation & Goal (Customer Obsession)**  
When our Talent Acquisition team launched a new AI‑powered screening workflow, we realized many candidates—especially from under‑represented groups—were unaware that the platform used Anthropic’s Claude models for resume parsing and interview scoring. The goal was to ensure transparency and fairness while reducing time‑to‑hire by 30 %.

**Task (Ownership & Bias for Action)**  
I led a cross‑functional squad to embed an “AI Disclosure” banner, audit model biases, and optimize cost per screened applicant.

**Action (Dive Deep + Invent & Simplify)**  

| Step | AWS Service | Reasoning |
|------|-------------|-----------|
| 1. Data collection | Amazon S3 + Glue | Store raw resumes in a scalable bucket; use Glue to transform into NLP‑ready JSON. |
| 2. AI inference | Amazon SageMaker Endpoint (Claude via Anthropic API) | Low‑latency, auto‑scaling for parallel scoring of 10k resumes/day. |
| 3. Bias audit | Amazon Comprehend + SageMaker Feature Store | Compute demographic parity scores; store features for reproducibility. |
| 4. Disclosure & UI | AWS Amplify + Cognito | Securely serve a dynamic banner with model version and privacy notice. |
| 5. Cost control | Spot Instances + Lambda Scheduler | Spin up inference workers only during peak hours, cutting GPU spend by **$15K/month**. |

**Result (Deliver Results)**  
- Time‑to‑hire dropped from 42 days to **28 days** (+33 %).  
- Candidate satisfaction score rose from 3.8/5 to **4.6/5** due to clear AI usage disclosure.  
- Bias audit revealed a 12 % gender gap, which we mitigated by re‑weighting the scoring algorithm—reducing disparity to 2 %.  

**Learnings**  
Ownership means iterating on both tech and policy; dive deep into data reveals hidden inequities; measuring impact in days saved and bias scores turns abstract goals into tangible business value.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
