---
qid: ing_a1fb374032__aws__local
question: 'Explain: Agentic RAG'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 225
output_tokens: 392
total_tokens: 617
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T11:31:15-05:00'
sources: []
---

**Situation / Task**  
When I joined the AI squad at **Acme Corp**, we were asked to build a production‑grade Retrieval‑Augmented Generation (RAG) system that could answer internal policy queries in real time while keeping latency below 200 ms and cost under $0.02 per query.

**Action**  
I took *Ownership* of the end‑to‑end pipeline, starting with a *Dive Deep* analysis of our data volume (~12 TB of PDFs + markdown). I chose **Amazon Kendra** for semantic indexing (≈$0.0005 per document) and **Amazon OpenSearch Service** for fast vector search. For generation, I used **Amazon Bedrock** (Claude 2) wrapped in a Lambda layer to keep the cold‑start cost low.  
To enforce *Bias for Action*, I prototyped a single‑pass pipeline that fetched top‑10 passages from Kendra, scored them with an embedding model on SageMaker, and fed the best snippet into Bedrock via a custom prompt template.  

**Result**  
The live system achieved **95 % precision@1** on a held‑out policy QA set, reduced average latency to **140 ms**, and cut per‑query cost from $0.08 to **$0.015**—a 80 % savings that freed up the budget for additional data ingestion.  

**Reflection**  
I learned that coupling Kendra’s semantic search with a lightweight vector re‑ranking layer delivers the best trade‑off between speed, accuracy, and cost. I also realized that continuous monitoring of prompt drift is essential; we now roll out new prompts quarterly based on user feedback.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
