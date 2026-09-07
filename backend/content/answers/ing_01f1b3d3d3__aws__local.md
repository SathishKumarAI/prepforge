---
qid: ing_01f1b3d3d3__aws__local
question: 'Explain: Case Study: Enterprise RAG System'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 228
output_tokens: 470
total_tokens: 698
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T05:28:38-05:00'
sources: []
---

**Situation & Task**  
At a Fortune‑500 financial services firm I led the build of an Enterprise RAG (Retrieval‑Augmented Generation) platform to answer compliance queries from over 50,000 employees in real time. The goal was to reduce manual support tickets by 70% and keep latency under 200 ms per request.

**Action – Design & Execution**  
* **Data layer:** Indexed all internal documents (PDFs, SharePoint, knowledge bases) into an Amazon OpenSearch cluster with fine‑grained access control.  
* **Retrieval engine:** Used SageMaker to train a Sentence‑Transformers model; queries are vectorized and matched against the index via KNN search in OpenSearch.  
* **Generation layer:** Deployed a distilBERT‑based LLM on Amazon Bedrock, feeding it top‑5 retrieved snippets as context.  
* **Orchestration:** Lambda orchestrates request flow, caches responses in ElastiCache Redis for 10 s to hit the 200 ms SLA.  

**Result**  
Within three months:  
* Ticket volume dropped 73% (≈ 12,000 tickets/month).  
* Average response latency improved from 1.2 s to 0.18 s.  
* Cost per query fell by 45% vs the legacy GPT‑4 baseline.

**Leadership Principles Highlighted**  
- **Customer Obsession & Deliver Results:** Built a system that directly cut employee friction and saved millions in support costs.  
- **Ownership & Dive Deep:** Own every component, from data ingestion to inference latency, continuously profiling and tuning.  

**Bar‑raiser cues I met**  
* Quantified impact (ticket reduction %, cost savings).  
* Demonstrated deep technical trade‑offs (OpenSearch vs DynamoDB for retrieval, Bedrock vs self‑hosted LLM).  
* Learned from a failed early prototype that over‑tokenized prompts caused hallucinations; resolved by fine‑tuning the prompt template and adding a post‑generation sanity check.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
