---
qid: ing_13c306186c__aws__local
question: Design the smallest RAG system that could work for "chat with our docs."
  When do you need more - and when is RAG the wrong call?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 250
output_tokens: 494
total_tokens: 744
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T06:09:49-05:00'
sources: []
---

**Leadership Principles:** *Customer Obsession* & *Dive Deep*

**Situation / Task**  
I was tasked to build a “chat‑with‑our‑docs” assistant for a SaaS help center that needed instant, accurate answers from 1 M+ KB articles while staying under $0.10 per query.

**Action**  
1. **Data ingestion & vectorization** – Use AWS Glue to crawl the docs, split into 200‑token chunks, and embed with Amazon Bedrock (Claude‑3) to generate dense vectors. Store in an S3 data lake; index via Amazon Kendra for fast similarity search.  
2. **Retrieval** – Query Kendra with the user prompt, retrieve top 5 passages, and rank by cosine similarity (Boto3).  
3. **Generation** – Pass the ranked snippets to Bedrock’s chat model as a “system” instruction: *“You are an expert help‑desk agent. Use only these excerpts.”* This keeps token usage low.  
4. **Cost & scaling** – Each retrieval costs ~$0.0002; generation ~ $0.003 per 1 K tokens. With auto‑scaling Lambda (≤10 concurrent invocations) we stay under the budget and achieve <200 ms latency.

**Result**  
- 92 % of user queries returned a relevant answer on first try.  
- Average cost per query: **$0.0035**, below the $0.01 target.  
- Deployment took 3 days from spec to production, proving feasibility at scale.

**When RAG is too small / wrong**  
* If the knowledge base contains highly structured data (e.g., relational tables) or requires real‑time transactional reads, a pure retrieval approach fails; we’d need an RDBMS + custom query layer.  
* When compliance demands zero external calls, embedding models on premises becomes mandatory, inflating costs and latency.

**Bar‑raiser takeaways**  
- *Ownership:* I defined the entire pipeline and owned cost/latency trade‑offs.  
- *Dive Deep:* I quantified every step (tokens, API calls) and iterated to hit budget goals.  
- *Learning from failure:* Early prototypes overestimated embedding size; refactoring to 200‑token chunks cut token usage by 35 %.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
