---
qid: ing_507ce0b643__think__local
question: 'Walk me through the latency budget of a query: query understanding → retrieval
  → rerank → LLM answer. Where do you spend and where do you cut?'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 210
output_tokens: 713
total_tokens: 923
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T06:21:14-05:00'
sources: []
---

**1️⃣ Clarify scope & assumptions**  
- *What is “latency budget”?* Assume a target of ~300 ms end‑to‑end for a user query on a commercial chatbot.  
- *Components*: Query Understanding (NLU), Retrieval (vector or keyword search), Rerank (learned re‑scoring), LLM Answer (generation).  
- *Environment*: Cloud‑based, single‑region, GPU/CPU mix, no pre‑fetching.

**2️⃣ Mental model / framework**  
Treat the pipeline as a waterfall: each stage consumes time and may generate intermediate data that can be cached or batched. Use a **time‑budget tree**:  
- Root node = total budget (e.g., 300 ms).  
- Branches = stages, with child nodes for sub‑steps (tokenization, embedding, DB query, model inference).  

Apply the *Pareto principle*: ~80 % of time often comes from a few heavy steps.

**3️⃣ Step‑by‑step reasoning**  
| Stage | Typical latency | Where to cut? | How to spend? |
|-------|-----------------|---------------|---------------|
| **Query Understanding** | 20–40 ms (tokenize + intent/classify) | Offload simple regex or rule‑based parts to a fast in‑memory engine. Use lightweight BERT variants or distil models for classification. | Allocate ~30 ms; keep embeddings cached if reused. |
| **Retrieval** | 80–120 ms (vector search over millions of docs) | Index pruning: use IVF+PQ, HNSW with limited neighbors. Batch queries on GPU if many concurrent users. | Reserve ~90 ms; pre‑compute dense vectors offline. |
| **Rerank** | 40–60 ms (learned re‑scoring over top‑k) | Replace heavy transformer reranker with a simple linear or tree model, or limit k to 10–20. | Allocate ~50 ms; use CPU if batchable. |
| **LLM Answer** | 120–180 ms (generation) | Use smaller model (e.g., GPT‑NeoX 2B vs 6B), quantize to INT8, or use streaming generation with early exit on confidence. | Spend ~140 ms; enable token‑level timeouts. |

Total ≈ 300 ms.  
- **Cutting**: Heavy models → distilled or quantized versions; larger indices → approximate nearest neighbor tricks.  
- **Spending**: Where accuracy matters most (LLM answer) and where latency is naturally lower (query understanding).

**4️⃣ Common traps to avoid**  
- Assuming all stages can be parallelized—many are sequential due to data dependencies.  
- Over‑optimizing retrieval at the cost of recall; remember trade‑off.  
- Ignoring cold‑start or cache misses that inflate average latency.

**5️⃣ Sanity‑check & verbalize**  
- Add a buffer (~20 ms) for network and system overhead.  
- Verify each stage’s measured latency against target budgets before deployment.  
- Communicate the budget allocation to stakeholders as: “We invest 45 % of time in LLM generation because it drives quality, while we cut retrieval complexity by using IVF‑PQ.”

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
