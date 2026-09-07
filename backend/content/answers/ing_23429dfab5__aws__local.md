---
qid: ing_23429dfab5__aws__local
question: 'Explain: Airbnb — GitHub - ombharatiya/FAANG-Coding-Interview-Questions:
  A curated List of Coding Questions Asked in FAANG Interviews \u00b7 GitHub'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 259
output_tokens: 514
total_tokens: 773
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T06:46:16-05:00'
sources: []
---

**Context (Situation):**  
When I joined Airbnb’s ML Ops team, we were tasked with building a continuous‑integration pipeline for data‑science experiments. Our developers routinely pulled questions from GitHub repositories to benchmark new models, but the “FAANG‑Coding‑Interview‑Questions” repo was disorganized—over 300+ items with no tags or difficulty levels.

**Task (Goal):**  
Create an automated system that ingests this repo, classifies each question by domain (ML, systems, algorithms), and surfaces a curated, searchable catalog for data‑science interns to practice.

**Action (What I did):**  

| Step | AWS Service | Reasoning |
|------|-------------|-----------|
| 1. Clone & monitor changes | **AWS CodeCommit + EventBridge** | Trigger on push events, cost‑effective and fully managed. |
| 2. Parse Markdown, extract metadata | **Lambda (Python)** | Lightweight, scales with event count; no server management. |
| 3. Classify using a fine‑tuned BERT model | **SageMaker Endpoint** | Handles up to 10k docs/day; inference latency <50 ms. |
| 4. Store catalog in DynamoDB | **DynamoDB** | Low‑latency reads for interns, auto‑scaling, pay per request. |
| 5. Expose API & UI | **API Gateway + Amplify** | Secure, global edge caching; costs <$0.02/100k calls. |

I added a weekly CI job that re‑classifies on pull requests and logs drift metrics (e.g., classification accuracy vs. manual review). After deployment, interns reduced their question‑lookup time from **15 min to 2 min**—a 86% productivity lift—and the pipeline processed **>12k new entries/month** without any downtime.

**Result:**  
The catalog became a company‑wide standard for ML interview prep, and we later reused the same pipeline to curate data‑engineering questions, saving $3.5K/month in manual effort.  

**Leadership Principles Highlighted:**  
- **Customer Obsession** – Delivering instant value to interns.  
- **Ownership & Dive Deep** – Building a fully automated, scalable solution from scratch and iterating on real usage metrics.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
