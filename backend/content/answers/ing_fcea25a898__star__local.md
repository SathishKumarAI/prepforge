---
qid: ing_fcea25a898__star__local
question: 'Q39: How do you evaluate and compare RAG systems objectively?'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 380
total_tokens: 619
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T07:54:25-05:00'
sources: []
---

**Situation:**  
When I joined a fintech startup, we were building an AI‑powered customer support chatbot that needed to pull up-to-date policy documents and FAQ snippets from our internal knowledge base while still providing natural language responses. We had two RAG (Retrieval‑Augmented Generation) prototypes—one using ElasticSearch for retrieval and another leveraging Pinecone with dense embeddings.

**Task:**  
I was tasked with objectively evaluating which system delivered higher relevance, lower latency, and better user satisfaction so we could ship the most reliable chatbot within a 6‑week deadline.

**Action:**  
1. Designed a benchmark suite of 5,000 real support tickets, annotated with ground‑truth documents.  
2. Implemented an automated pipeline that ran each prototype through the same query set, recording retrieval precision@k, response latency, and token usage.  
3. Conducted A/B user studies on our internal chat platform; collected NPS scores and qualitative feedback.  
4. Ran a cost‑benefit analysis: measured GPU hours, storage costs, and operational overhead for each backend.

**Result:**  
The Pinecone model achieved 12% higher precision@5 (0.82 vs. 0.70), reduced average response time from 1.8 s to 1.2 s, and improved NPS by 18 points. However, its GPU cost was 25% higher than ElasticSearch. Balancing performance with budget, we adopted a hybrid approach—ElasticSearch for high‑frequency queries and Pinecone for complex semantic searches—delivering a system that met our SLA and kept costs within target. I learned the importance of aligning technical metrics with business constraints when comparing AI pipelines.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
