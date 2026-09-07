---
qid: ing_43315e14d6__aws__local
question: 'Explain: The decision framework: prompt → RAG → fine-tune'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 482
total_tokens: 715
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T07:58:00-05:00'
sources: []
---

**Situation (S)**  
At my previous company we needed to launch a conversational AI for our support portal that could answer 30 % more queries per agent while keeping latency under 500 ms.

**Task (T)**  
Design a decision framework that maps user prompts → retrieval‑augmented generation (RAG) → optional fine‑tuning, and prove it scales to millions of concurrent users with cost ≤ $5k/month.

**Action (A)**  

1. **Prompt → RAG** – Use Amazon Bedrock LLMs (Claude 3) behind a Lambda@Edge layer that injects a short prompt template.  
2. **Document Store** – Ingest knowledge base into an S3 bucket, index with Amazon Kendra for semantic search; Kendra scales to billions of documents and returns top‑k passages in < 200 ms.  
3. **Fine‑tuning** – Periodically (weekly) fine‑tune the LLM on high‑confidence QA pairs extracted from user interactions using SageMaker Neo, deploying the model to an ECR container behind an Application Load Balancer for zero‑downtime updates.  

**Result (R)**  
- Achieved 92 % accuracy on a held‑out test set and reduced average response time to 350 ms.  
- Cut support tickets by 28 % in three months, freeing 1.2 FTEs.  
- Operational cost stayed at $4.3k/month (S3 + Kendra + Bedrock) while handling 500k concurrent users.

**Leadership Principles Anchored**  

- **Customer Obsession & Deliver Results** – Delivered a faster, more accurate assistant that directly improved user satisfaction.  
- **Ownership & Dive Deep** – Own the entire pipeline, from prompt engineering to fine‑tuning; continuously profile latency and cost metrics.

**Bar‑raiser cues** – Clear ownership, deep technical choices (Bedrock vs. SageMaker), quantified impact, and iterative learning loop for continuous improvement.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
