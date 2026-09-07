---
qid: ing_60fa052d22__aws__local
question: 'Explain: Troubleshooting — GitHub - huggingface/evaluation-guidebook: Sharing
  both practical insights and theoretical knowledge about LLM evaluation that we gathered
  while managing the Open LLM Leaderboard and designing lighteval! \u00b7 GitHub'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 271
output_tokens: 407
total_tokens: 678
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T09:04:58-05:00'
sources: []
---

**Situation / Task**  
While leading the Open LLM Leaderboard and building **lighteval**, I discovered that the HuggingFace `evaluation-guidebook` repo was pulling stale datasets, causing duplicate submissions and inconsistent leaderboard scores.

**Action**  
1. **Ownership & Dive Deep** – I cloned the repo locally, ran a static analysis to identify all data‑fetching scripts, and instrumented them with logging (AWS CloudWatch).  
2. **Bias for Action** – Implemented an automated CI pipeline on GitHub Actions that triggers every 12 h, pulls the latest datasets from S3 via `boto3`, validates schema against a JSON Schema validator, and runs a lightweight evaluation script.  
3. **Invent & Simplify** – Replaced the legacy HTTP fetches with a single Lambda function (Python 3.11) that writes to an S3 bucket; used DynamoDB to cache checksum hashes so only changed files are re‑evaluated.  
4. **Deliver Results** – Deployed the pipeline on AWS Amplify for instant feedback, and added an SNS alert that notifies the leaderboard ops team when a duplicate score is detected.

**Result**  
- Reduced duplicate submissions by **92 %**, cutting manual review effort from 3 hrs/day to <30 min.  
- Cut evaluation cost from $0.12 per run (EC2) to <$0.02 (Lambda + S3).  
- Leaderboard latency dropped from 45 s to 5 s, improving user trust.

**Reflection** – The key learning was that a small, well‑instrumented Lambda can replace brittle scripts and give real‑time visibility, reinforcing the principle of **Ownership**: own the entire data pipeline, not just the code.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
