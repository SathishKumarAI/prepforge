---
qid: ing_9f34dcc430__aws__local
question: Is RAG dead because of long context windows?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 229
output_tokens: 549
total_tokens: 778
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T11:24:41-05:00'
sources: []
---

**Situation / Task**  
At my previous firm we were building a retrieval‑augmented generation (RAG) service for legal document search. The product had to serve 5 k concurrent users while keeping latency <200 ms and cost per query under $0.02.

**Action**  
I first *dive deep* into the root cause: our transformer model’s context window was capped at 4 k tokens, but each legal brief averaged 12 k tokens. I redesigned the pipeline:

| Component | AWS Service | Rationale |
|-----------|-------------|-----------|
| Document vector store | **Amazon QLDB + OpenSearch** | Immutable audit trail + scalable full‑text search |
| Retrieval | **OpenSearch** with *vector search* (KNN) | Handles millions of vectors, low latency |
| Generation | **AWS Bedrock (Claude 3.5 Sonnet)** via *context window expansion* through chunk‑wise concatenation and summarization | Avoids token limit while preserving semantics |
| Orchestration | **Step Functions** + **Lambda** | Serverless scaling; cost control |
| Monitoring | **CloudWatch + X-Ray** | End‑to‑end latency, error rates |

We added a *chunk‑summarizer* that reduced each 12 k token document to 3 k tokens while preserving 95% of key facts (measured by ROUGE‑L). The retrieval step returned the top‑5 relevant chunks; Bedrock generated responses from those plus the original prompt.

**Result**  
- Latency dropped from **1.8 s → 0.18 s** per request.  
- Cost per query fell to **$0.015**, a **70% reduction**.  
- Accuracy (measured by human review) improved from 68% to 92%.  
- Customer satisfaction score rose from 4.1/5 to 4.7/5.

**Learnings & Bar‑raiser notes**  
*Ownership*: I took full responsibility for the end‑to‑end stack, even though it spanned multiple AWS services.  
*Dive Deep*: Quantified token reduction and ROUGE metrics guided design choices.  
*Bias for Action*: Implemented a pilot in two weeks, iterated quickly on chunk size.  
*Deliver Results*: Delivered measurable performance gains within budget constraints.  

This shows that RAG is **not dead**; with the right architecture, long context windows can be managed efficiently using AWS services.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
