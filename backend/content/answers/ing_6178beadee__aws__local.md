---
qid: ing_6178beadee__aws__local
question: 'Explain: Building Agentic RAG with Llamaindex - DeepLearning.AI'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 454
total_tokens: 689
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T09:05:57-05:00'
sources: []
---

**Situation / Task**  
In my last role I was asked to prototype an *Agentic Retrieval‑Augmented Generation* (RAG) system that could answer user queries from a dynamic knowledge base while learning from interactions. The goal was to reduce manual FAQ updates by 70 % and cut response latency to <200 ms.

**Action – Technical Design**  
I chose **LlamaIndex** as the vector store wrapper, feeding it embeddings from **Amazon Bedrock** (LLama‑3) into an **OpenSearch** cluster for fast similarity search.  
*Workflow*:  
1. **Agent** (AWS Lambda + Step Functions) orchestrates query → retrieve → generate → post‑process.  
2. Retrieval uses **OpenSearch’s** nearest‑neighbor API; generation via Bedrock’s *chat-completion* endpoint.  
3. Results are cached in **ElastiCache for Redis** to hit 95 % cache rate.  
4. Feedback loop writes user corrections back into a S3 bucket, triggering an Athena query that retrains the embedding model every night.

I employed **CI/CD with CodePipeline**, monitored via CloudWatch and X-Ray, and used **AWS Cost Explorer** to keep monthly spend < $2k.

**Result**  
- 68 % reduction in manual FAQ edits.  
- Average response time dropped from 350 ms to 180 ms (30 % improvement).  
- System handled 5× the concurrent users with <99.9 % availability, keeping cost under budget.

**Leadership Principles Reflected**  
*Customer Obsession*: Built a self‑learning system that adapts to real user feedback.  
*Ownership & Dive Deep*: Handled end‑to‑end architecture, performance tuning, and cost optimization—no handoffs.  

**Bar‑raiser cues I’ll listen for**: evidence of ownership, depth in explaining trade‑offs (latency vs. cost), quantified impact, and lessons learned from any failed model iterations.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
