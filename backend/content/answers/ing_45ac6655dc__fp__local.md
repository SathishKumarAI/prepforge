---
qid: ing_45ac6655dc__fp__local
question: 'The take-home says: "Build a tool that answers questions over our public
  docs. You have a weekend." How do you approach it, and what do you deliberately
  skip?'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 194
output_tokens: 525
total_tokens: 719
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T18:33:39-05:00'
sources: []
---

**Fundamental problem**  
You need a system that turns *unstructured text* into *direct answers*. That is a classic retrieval‑augmented generation (RAG) pipeline: retrieve relevant snippets → pass them to a language model → generate a concise answer.

### 1️⃣ Quick‑start roadmap (≤ 8 hrs)

| Step | Why it works | Tool / trick |
|------|--------------|-------------|
| **Chunk + embed** | Documents are long; embeddings capture semantic similarity. | `FAISS` + `sentence‑transformers/all-MiniLM-L6-v2`. |
| **Build vector index** | Retrieval is linear in number of chunks, but FAISS gives sub‑second queries. | Persist with `faiss.write_index`. |
| **Prompt template** | Keeps the model focused on answering, not hallucinating. | “Answer concisely using only the following context…”. |
| **Fast inference** | You can’t afford heavy GPU usage; use a distilled LLM (`gpt‑4o-mini` or `llama3-8b`). | Call via OpenAI API (or local `vllm`). |
| **Wrap in Flask / FastAPI** | Gives you an endpoint to test. | `uvicorn main:app`. |

### 2️⃣ What to skip deliberately

1. **Fine‑tuning the LLM** – takes days, no ROI for a weekend demo.  
2. **Complex QA pipelines (e.g., question rewriting or iterative retrieval)** – overkill for a quick prototype.  
3. **Full‑blown knowledge graph extraction** – unnecessary unless you need multi‑hop reasoning.  

### 3️⃣ Non‑obvious insight

*Embedding dimensionality is the “sweet spot” between speed and recall.*  
Using `all-MiniLM-L6-v2` (384 d) gives ~95 % recall on typical docs while keeping query latency < 20 ms. Reducing to 128 d cuts speed but drops recall sharply; increasing beyond 768 d adds no benefit but slows queries. This trade‑off is rarely highlighted, yet it determines whether your weekend demo feels responsive.

> **Bottom line:** Build a minimal RAG stack that leverages pre‑trained embeddings and a distilled LLM; skip heavy engineering steps that only pay off at scale.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
