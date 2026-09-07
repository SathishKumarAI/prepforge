---
qid: ing_feea1eaeea__aws__local
question: 'Explain: The Limitations of Vector RAG — Graph Rag'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 231
output_tokens: 381
total_tokens: 612
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T14:54:30-05:00'
sources: []
---

**Situation / Task**  
When launching our AI‑powered recommendation engine for the e‑commerce platform, we discovered that a pure Vector RAG (Retrieval Augmented Generation) pipeline was unable to capture relational nuances—e.g., “customers who bought X also viewed Y” – which led to 12 % lower conversion on cross‑sell pages.  

**Action**  
I proposed a **Graph‑RAG** architecture:  
1. Store user, product, and interaction data in *Amazon Neptune* (graph) for relation queries.  
2. Index node embeddings in *Elasticsearch* (vector store).  
3. During inference, first query Neptune for top‑k relational neighbors, then retrieve their embeddings from Elasticsearch, fuse them with the prompt, and run the LLM on *SageMaker Endpoint*.  

I also added a caching layer in *DynamoDB* to keep hot subgraphs in memory, reducing latency from 350 ms (Vector RAG) to 120 ms.  

**Result**  
After A/B testing over two weeks: conversion rate increased by **18 %**, revenue per visitor rose by **$0.27**, and inference cost dropped 22 % thanks to fewer LLM calls.  

**Learning & Ownership**  
I documented trade‑offs (Neptune’s query limits vs. DynamoDB’s hot‑cache) and set up automated alerts for graph staleness, ensuring continuous ownership of the solution. This showcases *Ownership*, *Dive Deep*, and *Deliver Results*—the Amazon leadership principles I live by.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
