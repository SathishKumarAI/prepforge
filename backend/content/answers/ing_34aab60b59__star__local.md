---
qid: ing_34aab60b59__star__local
question: 'Explain: Claude Cowork — Claude Academy \u00b7 Learn to work and build
  with Claude'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 246
output_tokens: 465
total_tokens: 711
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T00:13:43-05:00'
sources: []
---

**Situation**  
In my last role I was tasked with improving the recommendation engine for an e‑commerce platform that had seen a 12 % drop in click‑through rate over the past quarter. The existing pipeline was built in Python, but it relied on hand‑tuned heuristics and lacked any real model training.

**Task**  
I needed to design, train, and deploy a production‑ready recommendation model that would lift CTR by at least 8 % while keeping inference latency under 50 ms per request. The deadline was tight—only six weeks before the next sales season.

**Action**  
I started by scraping the last two years of user interaction logs into an AWS S3 bucket and used Glue to clean & deduplicate the data, producing a 5‑TB feature store in Athena. For modeling I chose a hybrid approach: a LightGBM ranking model for item popularity coupled with a contrastive learning network that embedded user–item pairs using the Claude API. The embedding step was done offline on an EC2 spot cluster (p3.8xlarge) to keep costs low; we fine‑tuned the Claude embeddings by adding domain‑specific prompts that emphasized brand relevance and seasonality.

Once the model was trained, I wrapped it in a FastAPI service behind an ALB, deployed it via ECS Fargate, and used CloudWatch metrics to auto‑scale based on request latency. Continuous integration pipelines with GitHub Actions ensured every new commit ran unit tests against the same 10 % holdout set.

**Result**  
After launch, CTR rose by 9.6 %, exceeding our target. The average inference time stayed at 38 ms, and we cut feature‑engineering costs by 30 % compared to the previous pipeline. I learned that combining a high‑performance tree model with prompt‑tuned embeddings can dramatically boost recommendation quality while keeping latency in check—an approach I now bring to every ML project.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
