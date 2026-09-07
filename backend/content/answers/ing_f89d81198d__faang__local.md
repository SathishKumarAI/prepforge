---
qid: ing_f89d81198d__faang__local
question: 'Explain: Glean Documentation'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 228
output_tokens: 767
total_tokens: 995
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T04:18:01-05:00'
sources: []
---

## Clarify  
The question asks me to explain **“Glean Documentation”** in the context of machine‑learning tooling.  
Assumptions I’d confirm:  

1. *Scope*: Are we describing the internal documentation platform used at Glean, or the public docs for a specific ML product?  
2. *Audience*: Is this for engineers, data scientists, or product managers?  
3. *Depth*: Do interviewers expect an architectural walk‑through or just a high‑level overview?

---

## Approach  
1. **Define “Glean”** – Glean is an enterprise search engine that indexes internal knowledge bases.  
2. **Identify the documentation layer** – how docs are ingested, processed, and served to ML models.  
3. **Map the ML pipeline** – from raw text → embeddings → semantic search → recommendation.  
4. **Highlight key tech choices** – indexing strategy, vector store, retrieval‑augmented generation.

---

## Depth (Core Answer)  

Glean’s documentation system is a *retrieval‑augmented knowledge base* that powers its internal search and AI assistants:

| Component | Role | Technology |
|-----------|------|------------|
| **Crawler & Ingestor** | Pulls docs from Confluence, SharePoint, GitHub, PDFs. | Scrapy + custom connectors |
| **Pre‑processor** | Cleans HTML, removes boilerplate, normalizes markdown. | spaCy for tokenization, T5 fine‑tuned summarizer |
| **Embedding Engine** | Converts text chunks into dense vectors (≈768‑dim). | Sentence‑Transformers (SBERT) fine‑tuned on company corpora |
| **Vector Store** | Stores embeddings with metadata and allows efficient ANN search. | Milvus or Faiss + PostgreSQL for relational data |
| **Retrieval Layer** | Given a query, returns top‑k relevant docs. | Cosine similarity over vectors + BM25 fallback |
| **LLM Adapter** | Feeds retrieved context into GPT‑style model to answer follow‑up questions. | OpenAI API / proprietary Llama fine‑tuned on internal Q&A |

The ML workflow:  
1. User submits a query → vectorized with same encoder.  
2. ANN search retrieves top 10 docs → passages extracted.  
3. Context + prompt fed to LLM → response generated.  

**Complexity**: Retrieval is O(log N) with Faiss; inference latency ≈150 ms per query. Trade‑offs involve storage vs freshness—vector updates are batched nightly.

---

## Edge Cases  
- **Out‑of‑scope docs** (private PDFs): need access control checks before indexing.  
- **Cold‑start queries**: fallback to keyword search if embeddings yield low confidence.  
- **Semantic drift**: periodic re‑embedding to capture evolving terminology.  

Testing strategy: unit tests for each pipeline stage, end‑to‑end integration with synthetic queries, A/B on user satisfaction.

---

## Optimize & Communicate  
*Improvements*:  
- Use **approximate nearest neighbor (ANN) pruning** with product quantization to reduce memory footprint.  
- Implement **incremental re‑embedding** using diff‑hashing to avoid full recompute.  

When explaining, I’d narrate: “Think of Glean docs as a hybrid search engine—traditional inverted indexes for speed, and dense embeddings for semantic depth. The ML stack stitches them together so that every internal question gets an answer backed by the most relevant knowledge.”

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
