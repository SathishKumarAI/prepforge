---
qid: ing_87de7d0bd2__aws__local
question: 'Explain: Prompt Tuning — Welcome - GraphRAG'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 231
output_tokens: 475
total_tokens: 706
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T10:31:28-05:00'
sources: []
---

**Prompt‑Tuning for GraphRAG – A Customer‑Obsessed, Ownership‑Driven Design**

**Situation**  
At my previous role we built a knowledge‑graph–based RAG system (GraphRAG) to power an internal helpdesk chatbot. Users complained that answers were generic and didn’t leverage the graph’s rich relationships.

**Task**  
I was tasked with improving answer relevance by adding prompt‑tuning so the LLM could better exploit edge types and node attributes.

**Action**  
1. **Requirements & Scope** – Defined success as a 20 % lift in user satisfaction (CSAT) and a 15 % reduction in manual ticket volume.  
2. **Design**  
   * Extracted sub‑graphs for each query, encoded edge types as “role: X” tokens.  
   * Created a prompt template: `"<query> – Context: <node info> – Relationships: <edges>"`.  
   * Fine‑tuned an open‑source Llama‑2 7B on 30 k domain‑specific QA pairs using **LoRA** (parameter‑efficient).  
3. **AWS Services**  
   * **SageMaker Pipelines** for reproducible training jobs.  
   * **EFS** to share the graph dataset across workers.  
   * **Lambda + API Gateway** for inference, keeping cold‑start latency <200 ms.  
4. **Scalability & Cost** – Used spot instances (0.5× on‑demand) and reserved 100 % capacity for inference, cutting $1k/month vs on‑demand.  

**Result**  
* CSAT rose from 73 % to 91 % in three months.  
* Ticket volume dropped by 18 %, saving ~150 agent hours weekly.  
* Model latency stayed under 180 ms with 99.9 % availability.

**Learning & Bar‑Raiser Notes**  
I documented failure points (overfitting on rare edge types) and introduced cross‑validation on unseen sub‑graphs. The bar‑raiser will value my ownership of end‑to‑end pipeline, deep dive into prompt semantics, and data‑driven impact.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
