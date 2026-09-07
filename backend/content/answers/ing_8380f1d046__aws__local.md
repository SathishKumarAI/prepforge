---
qid: ing_8380f1d046__aws__local
question: 'Explain: Structured Note Taking — What is Context Engineering'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 230
output_tokens: 447
total_tokens: 677
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T10:22:20-05:00'
sources: []
---

**Structured note‑taking – “Context Engineering”**

> *“Build a model that can understand the intent behind every sentence of a legal brief and surface key facts.”*  
> **Situation:** Our legal‑tech startup was launching an AI assistant for contract review. The NLP pipeline mis‑classified clauses, causing a 35 % rework rate on client drafts.  
> **Task:** I led a sprint to redesign the data ingestion layer so that the transformer could “see” document context (paragraph, section, cross‑references).  
> **Action:**  
> * Decomposed the text into a hierarchical graph: token → sentence → paragraph → document.  
> * Stored the graph in Amazon Neptune for fast traversal and enriched each node with metadata (author, date, clause type) via AWS Glue crawlers.  
> * Added an S3 bucket for raw PDFs; Lambda functions extract OCRed text and push to Kinesis Data Streams, triggering a SageMaker endpoint that tags entities and propagates context embeddings into DynamoDB.  
> * Used Amazon Personalize‑style feature stores (DynamoDB + TTL) to cache contextual vectors, cutting inference latency from 1.2 s to 250 ms per clause.  
> **Result:** The rework rate dropped to 8 % (–77 % relative), saving $120k in legal hours annually. System uptime hit 99.9 %, and the total cost of ownership fell by 18 % thanks to serverless scaling.  

**Leadership Principles Reflected**

* **Customer Obsession:** Delivered a tool that directly reduced client effort.  
* **Ownership & Dive Deep:** Took end‑to‑end responsibility, dissected every layer of data flow, and iterated on the graph schema until metrics improved dramatically.  

Bar‑raisers look for: clear ownership narrative, deep dive into architecture choices (Neptune vs DynamoDB), quantified impact (rework %, cost), and learning from the initial 35 % failure rate to arrive at a scalable, cost‑effective solution.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
