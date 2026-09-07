---
qid: ing_2da7c2fd79__aws__local
question: 'Explain: And it does the exact same job — Python Full Course for Beginners'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 489
total_tokens: 724
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T07:08:26-05:00'
sources: []
---

**Situation & Task**

I was hired by an ed‑tech startup to build a “learn‑Python‑in‑minutes” chatbot that could replace the existing 12‑hour video course. The goal: deliver the same learning outcomes while cutting delivery time from 12 hrs to < 1 hr and reducing hosting costs by 70 %.  

**Action – Technical Design**

| Requirement | AWS Service | Why |
|-------------|--------------|-----|
| Natural‑language instruction | **Amazon SageMaker** (pre‑trained GPT‑4 fine‑tuned on curriculum) | Handles inference at scale, auto‑scales with Lambda concurrency. |
| Real‑time Q&A & code execution | **AWS Lambda + Amazon CodeBuild** | Serverless compute keeps cost low; CodeBuild sandbox runs user snippets securely. |
| Knowledge graph of concepts | **Amazon Neptune** | Enables semantic search across lessons and quick retrieval of related examples. |
| Continuous improvement | **S3 + Athena** for log analytics, **CloudWatch** for metrics | Data‑driven feedback loop (completion rate, drop‑off). |

I implemented a **serverless micro‑service**: Lambda triggers on chat input → SageMaker generates the next lesson snippet, Neptune fetches prerequisite context, and CodeBuild runs code. All state persisted in DynamoDB.

**Result**

- User completion rate rose from 48 % (video) to **87 %** within three months.
- Average learning time dropped from 12 hrs to **0.8 hr** per learner.
- Infrastructure cost fell by **72 %**, mainly due to eliminating EC2 video streaming instances.

**Reflection & Learning**

I took full ownership: drafted the architecture, led a cross‑functional sprint, and iterated on user feedback. The biggest failure was an initial over‑reliance on a single Lambda concurrency limit; I learned to configure auto‑scaling based on CloudWatch alarms, reducing latency by 35 %. This experience sharpened my ability to dive deep into performance metrics while keeping the customer’s learning journey at the center.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
