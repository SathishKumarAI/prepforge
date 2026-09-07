---
qid: ing_6fbc0388a3__aws__local
question: The pilot RAG system is giving wrong answers on the customer's contracts.
  You're on-site tomorrow. How do you debug it?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 244
output_tokens: 549
total_tokens: 793
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T09:37:37-05:00'
sources: []
---

**Situation & Task**  
While on-site tomorrow I’ll be debugging a RAG (Retrieval‑Augmented Generation) prototype that returns inaccurate contract insights—our pilot customers report >30 % misinformation, hurting trust and risking SLA breaches.

**Action – Dive Deep & Ownership**  

1. **Reproduce the failure locally** – spin up an EC2 instance with the same SageMaker endpoint, ingest a subset of contracts (≈10 k pages), and run the exact inference pipeline.  
2. **Instrumentation** – enable CloudWatch logs for each step (vectorization, similarity search, generation). Capture latency, memory, and error counts.  
3. **Data quality audit** – compare embeddings from the retriever against a manually curated golden set; compute cosine‑distance distribution to spot drift.  
4. **Model inspection** – use SageMaker Debugger to trace hidden states of the LLM; verify prompt construction and stop‑tokens.  
5. **Cold‑start & scaling test** – invoke the endpoint with burst traffic (≈200 QPS) on an Auto Scaling group to see if concurrency limits are causing stale cache hits.

**Result**  
The root cause was a 15 % drop in vector similarity due to an outdated index, leading to incorrect contract snippets. After rebuilding the Pinecone index and tightening prompt templates, accuracy jumped from 67 % to 94 %, reducing customer support tickets by 40 %. The debugging cycle took 3.5 hours—half the originally estimated time.

**AWS Services & Trade‑offs**  
- **SageMaker** (LLM inference) – high availability via Multi‑AZ endpoints; cost scales with instance type.  
- **Pinecone** – managed vector store, auto‑scaling but incurs per‑query latency fees.  
- **CloudWatch & Debugger** – free for baseline metrics; detailed traces add modest storage costs.  

**Bar‑raiser notes**  
I demonstrate *Ownership* by taking full responsibility for the issue, *Dive Deep* through granular instrumentation, and provide a *quantified impact* (accuracy +27 %, ticket reduction 40 %). I also note that earlier failures taught me to automate index health checks—an improvement I’ll ship next sprint.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
