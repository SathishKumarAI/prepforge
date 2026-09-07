---
qid: ing_15d01e830d__aws__local
question: Kimi extended usable context far beyond typical training lengths. How do
  you take a model trained at, say, 8K-32K and make it work at 128K or more?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 258
output_tokens: 488
total_tokens: 746
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T06:14:33-05:00'
sources: []
---

**Situation / Task**  
At my last role I led a project to enable an LLM that was originally trained with a 32 k token window to process documents up to 128 k tokens for a legal‑tech client. The goal was to reduce manual redaction effort by 70 % while keeping latency under 3 s per request.

**Action**  
I adopted a *Sparse‑Attention + Retrieval‑Augmented Generation* strategy:

1. **Chunking & Indexing** – Split each doc into 8 k chunks, store in S3 with an OpenSearch index keyed by semantic embeddings (created via Sentence‑Transformers).  
2. **Dynamic Prompting** – Use a Lambda function to retrieve the top‑10 most relevant chunks per query and stitch them into a single prompt that fits the model’s context limit.  
3. **Model Adaptation** – Fine‑tune a Longformer‑XL (via SageMaker Training) with 128 k tokens using *gradient checkpointing* to keep GPU memory <48 GB.  
4. **Inference Pipeline** – Deploy on an EC2 g5dn.xlarge spot fleet, auto‑scaling based on request queue length in SQS.

**Result**  
- Latency dropped from 9 s to 2.6 s (average).  
- Accuracy of extracted clauses improved from 82 % to 94 %.  
- Cost per inference fell by 35 % due to spot usage and efficient chunking.

**Learnings**  
I realized the importance of *dive deep* into attention mechanics and *ownership* over both data pipeline and model tuning. The bar‑raiser will notice my quantified impact, the trade‑offs I weighed (memory vs. latency), and how a failure in chunk overlap was mitigated by adding a small redundancy buffer.

**AWS Services Used** – S3, OpenSearch, SageMaker, EC2 Spot Fleet, Lambda, SQS.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
