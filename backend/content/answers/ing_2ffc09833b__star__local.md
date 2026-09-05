---
qid: ing_2ffc09833b__star__local
question: 'Explain: Query Routing and Classification — Production Rag At Scale'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 396
total_tokens: 632
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T00:04:19-05:00'
sources: []
---

**Situation:**  
At my previous role I was the lead for a customer‑support chatbot that needed to serve 2 million daily queries while keeping response time under 200 ms. The system had to decide whether to answer directly from a knowledge base or route the question to an LLM.

**Task:**  
Design a production‑grade query routing and classification layer that could scale horizontally, reduce compute costs, and maintain high accuracy across multiple product domains.

**Action:**  
I built a two‑stage classifier. First, I used a lightweight FastText model trained on labeled FAQ logs to filter 80 % of the traffic into “simple” or “complex”. For the simple set, I queried an Elasticsearch index with BM25 scoring and returned a ranked snippet list. Complex queries were sent to a vector search in Pinecone; we embedded questions with OpenAI’s text‑embedding‑ada-002, then used cosine similarity against a pre‑computed embedding cache of policy documents. The routing decision was wrapped in a Lambda function orchestrated by Kubernetes autoscaling, so only the LLM tier spun up when needed. I also added an A/B test loop that logged latency and accuracy to adjust thresholds dynamically.

**Result:**  
The hybrid approach cut LLM calls by 72 %, slashing inference cost from $0.10/1000 queries to $0.025/1000. Latency dropped from 350 ms to 190 ms on average, and user satisfaction scores rose by 12 %. I learned that a disciplined, data‑driven routing pipeline can make large‑scale RAG both cost‑effective and performant.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
