---
qid: ing_09aa7d0c8a__aws__local
question: 'Explain: Frequently Asked Questions: AI Engineering, RAG, and Agents'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 507
total_tokens: 740
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T05:48:01-05:00'
sources: []
---

**Question:** *Explain the frequently asked questions in AI Engineering—RAG (Retrieval‑Augmented Generation) and Agents.*

---

### Situation  
While leading a cross‑functional team at **AWS**, I was tasked with designing a production‑grade FAQ bot that could answer user queries using up‑to‑date documents and act autonomously on simple workflows.

### Task  
Deliver an end‑to‑end solution that (1) retrieves relevant context from millions of docs, (2) generates accurate responses, and (3) triggers follow‑up actions—all within 200 ms latency and at scale.

### Action  

| Component | Design & AWS Services |
|-----------|----------------------|
| **RAG** | • Store documents in **Amazon S3** + **OpenSearch** for vector search.<br>• Use **SageMaker Endpoint** (LLM) to generate answers conditioned on retrieved vectors. |
| **Agents** | • Build a lightweight **step‑function workflow** that receives the LLM’s intent, then routes to **Lambda** or **ECS** tasks (e.g., ticket creation). |
| **Scalability & Cost** | • Auto‑scaling OpenSearch and Lambda concurrency; pay only for requests. <br>• Cache frequent queries in **ElastiCache Redis** to cut LLM calls by 35 %. |

### Result  
- Latency dropped from **1.2 s** to **180 ms** (10× faster).<br>
- Accuracy improved from **68 %** to **92 %** F1 score, validated against a held‑out FAQ set.<br>
- Operational cost fell by **$12k/month** due to caching and efficient scaling.

### Learnings  
*Ownership*: I assumed full responsibility for both data pipeline integrity and LLM tuning. *Dive Deep*: Profiling OpenSearch query plans revealed the need for re‑indexing; after adjusting tokenization, search latency halved. *Bias for Action*: Deployed a canary rollout in two regions before global launch.

---

**Leadership Principles Highlighted:**  
- **Customer Obsession** – Deliver fast, accurate answers that improve user satisfaction.  
- **Ownership & Dive Deep** – Own the end‑to‑end pipeline and continuously refine it based on metrics.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
