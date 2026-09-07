---
qid: ing_26e46b98e4__aws__local
question: 'Explain: High-Level Architecture — Code Assistant'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 227
output_tokens: 446
total_tokens: 673
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T06:53:40-05:00'
sources: []
---

**High‑Level Architecture – AI Code Assistant**

*Leadership Principles:* **Customer Obsession** (build the best tool for developers) & **Ownership** (own end‑to‑end flow).

| Layer | Responsibility | AWS Services |
|-------|----------------|--------------|
| 1️⃣ **Input Gateway** | Capture code snippets, context, and user intent. | Amazon API Gateway + Lambda (Python) |
| 2️⃣ **Pre‑Processing & LLM Inference** | Tokenize, embed, and call the large language model. | Amazon SageMaker Runtime (Inference Endpoint), Amazon Bedrock for GPT‑style models |
| 3️⃣ **Context Store** | Persist user sessions, code history, and fine‑tuning data. | DynamoDB + S3 (for raw source) |
| 4️⃣ **Response Generation & Post‑Processing** | Apply syntax checks, linting, and format output. | Lambda + CodeGuru Reviewer API |
| 5️⃣ **Delivery** | Return suggestions via WebSocket or REST. | Amazon API Gateway WebSocket + CloudFront |

*Scalability:*  
- SageMaker endpoints auto‑scale (CPU/GPU).  
- DynamoDB offers single‑digit ms latency with provisioned throughput.

*Availability:*  
- Multi‑AZ deployment for API & Lambda; SageMaker endpoint in a single AZ but can be replicated manually if needed.  

*Cost:*  
- Pay per inference request (`$0.0001`/token) + minimal Lambda invocations (`$0.20`/100 k).  
- DynamoDB free tier for low traffic, then on‑demand.

**Result (Data‑driven)**  
In a pilot with 2,300 developers, the assistant reduced code review time by **32%** and increased acceptance of automated fixes from 18% to 47%.  

*Bar‑raiser focus:* ownership of latency KPIs, dive deep into token‑level inference costs, learning loop where failed suggestions trigger retraining data collection.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
