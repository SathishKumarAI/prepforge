---
qid: ing_b1f4c316a5__aws__local
question: 'Explain: 3.1.6 Graph-Guided Retrieval — Graph-Aware Late Chunking for Retrieval-AugmentedGeneration
  in Biomedical Literature'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 248
output_tokens: 505
total_tokens: 753
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T12:07:18-05:00'
sources: []
---

**Situation (S)**  
At a pharma startup I led the NLP team that needed to build a retrieval‑augmented generation (RAG) system for clinical trial reports. The existing approach fetched entire PDFs, causing latency > 5 s and poor relevance.

**Task (T)**  
Design a *Graph‑Guided Retrieval* pipeline that uses graph‑aware late chunking to surface only the most pertinent sub‑sections for a given query while keeping costs low.

**Action (A)**  

| Step | AWS Service | Reason |
|------|-------------|--------|
| 1. Parse PDFs → **Amazon Textract** + custom NLP | Extract entities, headings, and citation graphs. |
| 2. Build graph of concepts/sections in **Amazon Neptune** | Enables subgraph queries for relevance scoring. |
| 3. Late chunking: store only *linked* chunks in **S3** (tiered with S3 Intelligent‑Tiering). | Reduces storage by ~70 % vs full chunking. |
| 4. Retrieval via **Amazon Kendra** querying Neptune’s graph + embeddings (OpenAI API) | Provides instant, relevance‑ranked results (< 200 ms). |
| 5. Feed selected chunks to **Amazon Bedrock** RAG model | Generates concise summaries with < 1 s latency. |

**Result (R)**  
- Latency dropped from 4.8 s to 0.9 s (84 % improvement).  
- Storage costs fell by 68 %.  
- Retrieval precision ↑ 15 % (BLEU‑like metric on expert‑annotated ground truth).

---

### Leadership Principles

* **Ownership** – I re‑architected the end‑to‑end pipeline, owning both data ingestion and inference.  
* **Dive Deep** – Leveraged graph analytics in Neptune to surface only highly connected chunks, turning a naïve retrieval into a knowledge‑aware process.

Bar‑raiser focus: clear ownership narrative, quantitative impact (latency & cost), depth of technical trade‑offs (Neptune vs. RDS, S3 tiering), and learning—initial attempts with flat chunking failed due to noise; switching to graph‑guided late chunking solved it.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
