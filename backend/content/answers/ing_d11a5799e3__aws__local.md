---
qid: ing_d11a5799e3__aws__local
question: What is the difference between RAG and fine-tuning?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 231
output_tokens: 600
total_tokens: 831
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T13:13:50-05:00'
sources: []
---

**Answer (Amazon style)**  

During my last role at a fintech startup I led the migration of our customer‑support chatbot from a rule‑based system to an LLM‑powered solution. The core question was whether to use **Retrieval‑Augmented Generation (RAG)** or **fine‑tuning** the model on our domain data.

| | RAG | Fine‑tuning |
|---|---|---|
| **Data usage** | Uses a vector store (e.g., Pinecone/FAISS) to fetch relevant passages at inference time. | Requires a curated, labeled dataset and retraining the entire model. |
| **Latency** | Adds a query step but keeps base LLM size small; ~200 ms per call on SageMaker endpoint. | Larger fine‑tuned models increase GPU memory needs → higher cost & latency (~400 ms). |
| **Scalability** | Vector index scales horizontally; new docs are added without retraining. | Every update triggers a full re‑train cycle, which is costly at scale. |
| **Cost** | Pay per query for vector store + inference (≈$0.03/query). | Pay for training hours + larger endpoint (≈$1/hour). |

**STAR Example**

- **Situation:** Our SLA required 95 % accurate responses within 3 seconds.
- **Task:** Choose an architecture that balances freshness of knowledge and cost.
- **Action:** Implemented RAG using Amazon Bedrock for the LLM, Pinecone for vector search, and Lambda for orchestration. Deployed a SageMaker endpoint with a 4‑GPU instance; added auto‑scaling based on CloudWatch metrics.
- **Result:** Achieved 97 % accuracy, reduced latency to 180 ms, and cut inference cost by 38 % compared to a fine‑tuned GPT‑3.5 baseline.

**Leadership Principles Anchored**

- *Customer Obsession*: Delivered faster, more accurate answers, improving NPS from 78 to 85.
- *Ownership & Dive Deep*: I wrote the end‑to‑end pipeline, monitored metrics, and iterated on index tuning until latency hit target.
- *Bias for Action*: Went live within two weeks of prototype, avoiding a month‑long retraining cycle.

**Bar‑raiser cues**

- Demonstrated ownership by handling both data ingestion and model serving.
- Showed depth with specific AWS services (Bedrock, Pinecone, Lambda) and cost calculations.
- Quantified impact: latency ↓ 55 %, cost ↓ 38 %.
- Learned from a failed fine‑tuning attempt that took 12 hours and exceeded budget; pivoted to RAG for agility.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
