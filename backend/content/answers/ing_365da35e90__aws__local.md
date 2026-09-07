---
qid: ing_365da35e90__aws__local
question: 'Explain: The 80% Rule of Chunking — Production Rag At Scale'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 485
total_tokens: 719
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T07:27:30-05:00'
sources: []
---

**Situation & Task**  
I was asked to build a high‑throughput content ingestion pipeline for a media company that wanted to “chunk” long transcripts into 80 % overlapping blocks (the **80% Rule of Chunking**) before feeding them into an LLM for summarization. The goal: process millions of hours of video each day with <1 s latency per chunk and <5 % error rate.

**Action – Technical Design**  
1. **S3 + EventBridge** – upload raw audio → trigger Lambda that streams the file to Amazon Transcribe (Batch).  
2. **Transcribe Streaming + Step Functions** – once transcripts are returned, a state machine splits the text into 80 % overlapping windows (e.g., 500‑word chunks with 400‑word overlap) using an in‑memory Python library; results are written back to S3 in a partitioned key scheme.  
3. **Glue + Athena** – catalog chunk metadata for downstream analytics and search.  
4. **Cost & Scalability** – Transcribe scales horizontally; Step Functions orchestrate parallel Lambda invocations, keeping concurrency within limits. Estimated cost: <$0.02 per 100 words vs. $0.10 on a monolithic batch job.  

**Result**  
- Processed 5 M hours of content in <12 h versus the previous 48 h.  
- Latency dropped from 4 s to 0.8 s per chunk.  
- Error rate fell from 9 % to 2 %.  
- Cost savings: ~70 % annual reduction.

**Leadership Principles**  
*Customer Obsession*: Delivered a faster, cheaper solution that met client SLA expectations.  
*Dive Deep & Ownership*: Tracked every metric in CloudWatch, iterated on chunking logic after noticing an edge‑case drift, and documented the failure modes for future teams.  

Bar‑raiser signals: I showed ownership by owning the entire pipeline, dove deep into AWS services to justify design choices, quantified impact with real metrics, and learned from a prior monolithic approach that failed to scale.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
