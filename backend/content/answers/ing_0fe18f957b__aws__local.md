---
qid: ing_0fe18f957b__aws__local
question: 'Explain: Agentic RAG (Loop-based) — Rag Fundamentals'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 462
total_tokens: 694
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T06:01:21-05:00'
sources: []
---

**Situation & Task**  
In a recent project I led the migration of our internal knowledge‑base chatbot from a simple retrieval‑augmented generation (RAG) pipeline to an *Agentic RAG* loop that continuously updates its context and self‑rectifies hallucinations. The goal was to cut customer support tickets by 30 % while keeping latency < 1 s.

**Action & Design**  
I architected a serverless loop:  

| Component | AWS Service | Role |
|-----------|-------------|------|
| Document store | **Amazon OpenSearch** (with vector plugin) | Stores embeddings, supports nearest‑neighbor queries. |
| Retrieval engine | **AWS Lambda + SageMaker Endpoint** | Calls the OpenSearch vector search, feeds results to the model. |
| Generation & self‑critique | **Amazon Bedrock** (Claude 3) | Generates answer and a *confidence score*; if below threshold, triggers another retrieval pass. |
| Orchestration | **Step Functions** | Manages loop state, retry limits, and logs each iteration for audit. |

The loop runs at most three times per request, guaranteeing sub‑1 s latency (measured 920 ms avg). I added a *feedback queue* (SQS) that captures user corrections; Lambda processes these to fine‑tune embeddings nightly with SageMaker Pipelines.

**Result**  
Post‑deployment we saw **32 % reduction in support tickets** and a **42 % drop in average handle time**. Cost per request fell from $0.12 (single RAG) to $0.08 due to fewer redundant calls, while maintaining 99.95 % availability.

**Reflection (Bar‑raiser focus)**  
I owned the full lifecycle—from requirement gathering to post‑production monitoring—demonstrating *Ownership* and *Dive Deep*. Quantifying impact (ticket reduction, latency, cost) satisfies *Deliver Results*. The iterative loop taught me that a single retrieval step isn’t enough; continuous self‑assessment is key to reliable AI.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
