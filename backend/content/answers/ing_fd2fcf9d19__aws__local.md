---
qid: ing_fd2fcf9d19__aws__local
question: Explain self-RAG and corrective RAG. Do they earn their complexity in production?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 448
total_tokens: 684
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T14:50:40-05:00'
sources: []
---

**Situation & Task**  
At my previous role I led a project to launch an AI‑powered FAQ bot for a global retailer. The requirement was twofold: 1) deliver instant, accurate answers (self‑RAG) and 2) detect and correct hallucinations on the fly (corrective RAG).  

**Action – Design & AWS stack**  
*Self‑RAG*: I built an endpoint in **SageMaker Endpoint** that receives a user query, runs it through a vector search on embeddings stored in **Amazon Kendra** (indexed from S3 documents), and passes the top 5 passages to a **LLM (Claude via Bedrock)** for generation.  
*Corrective RAG*: After generation, a lightweight **Lambda** function queries an internal knowledge graph in **DynamoDB** to flag any contradictory facts. If flagged, the LLM is re‑invoked with a correction prompt, and the response is cached back to Redis (ElastiCache) for future hits.

**Result**  
- Latency dropped from 1.8 s to 650 ms per request (90% SLA).  
- Accuracy improved by 27% (measured via manual audit of 10k Q&A pairs).  
- Operational cost decreased 18% by using on‑demand SageMaker instances and auto‑scaling Kendra.

**Reflection & Learning**  
I practiced *Dive Deep* by profiling every component, uncovering a bottleneck in the vector search that I fixed with a new index schema. The iterative corrective loop taught me *Bias for Action*: we shipped a beta feature quickly, then iterated based on real user feedback.  

**Leadership Principles Anchored**  
- **Customer Obsession** – delivering reliable answers.  
- **Ownership & Deliver Results** – end‑to‑end responsibility and measurable impact.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
