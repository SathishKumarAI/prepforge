---
qid: ing_3626f7beb0__aws__local
question: 'Explain: Naive RAG (Retrieve-then-Generate) — Rag Fundamentals'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 447
total_tokens: 682
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T07:27:07-05:00'
sources: []
---

**Situation – Task**  
I was leading a prototype for an internal knowledge‑base chatbot at a SaaS firm. The product team wanted instant, accurate answers from our document corpus without re‑training the LLM each time.

**Action – Design**  
We chose **Naïve RAG (Retrieve‑then‑Generate)**:  
1. **Retrieval Layer** – Index PDFs in **Amazon Kendra** (or OpenSearch) using vector embeddings via **SageMaker Endpoint**.  
2. **Generation Layer** – Pass the top‑k snippets to a fine‑tuned **LLM on Bedrock** for context‑aware response.  
3. **Pipeline** – Orchestrated with **Step Functions**, caching recent queries in **ElastiCache (Redis)** to hit 99% cold‑start latency <200 ms.  

We measured **accuracy** (BLEU score) and **latency**: after tuning, BLEU rose from 0.42 to 0.68, while average response time dropped from 1.2 s to 350 ms, cutting infrastructure cost by ~25% using spot instances for the retrieval cluster.

**Result – Impact**  
The chatbot reduced support tickets by **18%** in Q4 and improved NPS by 12 points. The team adopted this pattern across three product lines, scaling from 10k to 1M documents with only a 3× compute increase—demonstrating strong scalability and cost efficiency.

---

### Leadership Principles

- **Customer Obsession** – Delivered faster, more accurate answers, directly improving user satisfaction.  
- **Ownership & Dive Deep** – Took end‑to‑end responsibility for data pipeline, performance tuning, and cost optimization; iterated on metrics until targets met.

> *Bar‑raiser cue:* Looked for clear ownership, depth of system understanding, quantified impact (BLEU, latency, cost), and lessons learned from the initial low‑accuracy baseline.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
