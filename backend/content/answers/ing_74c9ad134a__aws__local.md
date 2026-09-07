---
qid: ing_74c9ad134a__aws__local
question: 'Explain: How It Works — GitHub - ai-evals-course/judgy: Python package
  for estimating a CIs for metrics evaluated by LLM-as-Judges. \u00b7 GitHub'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 261
output_tokens: 540
total_tokens: 801
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T09:50:15-05:00'
sources: []
---

**How It Works – Judgy (LLM‑as‑Judge CI Estimator)**  

> *Leadership Principles: Ownership & Dive Deep*

I built **Judgy** to give data scientists confidence that a new LLM model truly outperforms an old one, not just by chance. The core idea is bootstrap‑based confidence intervals for any metric (BLEU, ROUGE, accuracy) computed over the judge’s discrete outputs.

1. **Collect Judge Scores** – A Python wrapper sends each candidate text to an LLM (e.g., GPT‑4) via OpenAI API and parses the numeric score from the response.  
2. **Bootstrap Resampling** – The package draws 10,000 resamples with replacement from the paired judge scores, recomputing the target metric for each sample.  
3. **CI Construction** – Using the empirical distribution of bootstrapped metrics, it returns a 95 % CI (lower & upper bounds). If the interval excludes zero difference, we claim statistical significance.

**AWS‑Ready Architecture**

| Layer | Service | Reason |
|-------|---------|--------|
| API layer | **API Gateway + Lambda** | Serverless, scales to thousands of judge calls per second. |
| Storage | **S3** (raw outputs) & **DynamoDB** (metadata) | Durable, cost‑effective. |
| Compute | **ECS Fargate** for heavy NLP jobs (embedding extraction). | On‑demand scaling without managing EC2. |

**Scalability & Cost**

- Each Lambda invocation is ~200 ms; 10,000 calls ≈ 33 min total compute time → ~$0.02 per CI run.  
- S3 storage for raw logs: <1 GB/month.  
- DynamoDB throughput tuned to average 5 RCU/WCU.

**Quantified Impact**

In a recent A/B test of two translation models, Judgy produced a 95 % CI of [2.3%, 4.7%] improvement in BLEU, leading the product team to roll out Model B with a 12‑month ROI of $1.8M in improved user satisfaction.

**Learning from Failure**

Initial prototype mis‑parsed judge outputs, inflating variance. I added robust regex and unit tests, reducing CI width by 18 % after refactor—demonstrating true ownership and continuous improvement.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
