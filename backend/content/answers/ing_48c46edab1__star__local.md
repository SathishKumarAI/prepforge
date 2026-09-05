---
qid: ing_48c46edab1__star__local
question: 'Explain: Cloud ☁️ — GitHub - langwatch/langwatch: The platform for LLM
  evaluations and AI agent testing \u00b7 GitHub'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 257
output_tokens: 330
total_tokens: 587
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T00:53:58-05:00'
sources: []
---

**Situation:**  
When my team was preparing to launch a new conversational AI product, we had an open‑source benchmark pipeline on GitHub (langwatch/langwatch) but it was running locally and hitting resource limits. Our evaluation suite needed to test 12 different LLMs against 200 real‑world prompts each day, yet our on‑prem servers were maxing out CPU and memory.

**Task:**  
I had to migrate the langwatch pipeline to a scalable cloud environment so we could run continuous integration tests for every model release without manual intervention, while keeping costs under $2k/month.

**Action:**  
Using AWS Fargate with Spot Instances I containerized the repo’s Docker image, defined an ECS task that pulled fresh commits from GitHub, and scheduled it via CloudWatch Events. I added S3 buckets for prompt storage and result logs, and enabled CloudTrail to audit changes. To cut costs, I configured auto‑scaling policies tied to CPU usage and set up a Lambda function that stopped the cluster after 30 minutes of inactivity. I also integrated Slack notifications to alert us when a model’s accuracy dropped below 85%.

**Result:**  
The cloud deployment reduced evaluation time from ~3 hours to under 45 minutes, cut our infra spend by 35%, and gave us real‑time visibility into model performance across all 12 LLMs. I learned that careful resource provisioning and automated scaling are key when running heavy NLP workloads at scale.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
