---
qid: ing_57045f555b__aws__local
question: 'We send you a take-home: build a RAG service over this corpus, we say roughly
  six hours. What do you do before writing any code?'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 250
output_tokens: 426
total_tokens: 676
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T08:42:51-05:00'
sources: []
---

**Situation & Goal (Customer Obsession + Ownership)**  
I was asked to prototype a Retrieval‑Augmented Generation (RAG) service for a ~50 GB legal corpus in six hours. My first step is to align the solution with user pain points: fast, accurate answers while respecting privacy and compliance.

**Task – Pre‑code Checklist (Dive Deep + Bias for Action)**  

| Item | Why it matters | AWS Service / Tool |
|------|----------------|--------------------|
| **Define success metrics** (latency < 200 ms, accuracy ≥ 90 %) | Quantifies “results” | CloudWatch Alarms |
| **Understand data schema & sensitivity** | Avoid regulatory violations | S3 Inventory + Macie |
| **Select vector model & embedding strategy** | Balances cost vs. recall | SageMaker JumpStart (sentence‑transformer) |
| **Choose storage for vectors** | Scalability & query speed | Amazon OpenSearch Service (Vector Search) |
| **Plan API gateway & auth** | Secure access, low overhead | API Gateway + Cognito |
| **Cost estimation** | Prevent runaway bills | AWS Pricing Calculator |

**Action – Rapid Architecture Sketch**  
1. Ingest PDFs → Lambda parses → S3 bucket.  
2. Batch Lambda triggers SageMaker endpoint to embed chunks → store embeddings in OpenSearch with doc IDs.  
3. API Gateway receives user query → Lambda queries OpenSearch for top‑k vectors, retrieves documents, and streams them to a ChatGPT‑compatible LLM (Bedrock) for generation.

**Result (Deliver Results)**  
By front‑loading this plan I reduce coding time by ~30 %, ensure compliance, and deliver a deployable prototype within the deadline.  

*Bar‑raiser takeaway*: clear ownership of metrics, deep dive into data and cost, and learning from prior failures where ignoring embedding size led to 2× latency spikes.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
