---
qid: ing_a19187547e__think__local
question: What is learned sparse retrieval, SPLADE-style, and when would you pick
  it over BM25 or a dense retriever?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 203
output_tokens: 565
total_tokens: 768
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T11:46:12-05:00'
sources: []
---

**1️⃣ Clarify the question & set assumptions**  
- *What* exactly do we need: definition of “learned sparse retrieval (SPLADE‑style)”, comparison points, and decision criteria.  
- Assume the reader knows BM25 and dense retrievers but not SPLADE specifics.

**2️⃣ Adopt a mental framework**  
- **Component view**: query → representation → index → scoring → ranking.  
- Place each method in this pipeline to see differences (handcrafted vs learned, sparse vs dense).  
- Use “when to choose” as a cost–benefit analysis: accuracy vs speed vs memory vs domain.

**3️⃣ Step‑by‑step reasoning**  

| Item | SPLADE | BM25 | Dense Retriever |
|------|--------|------|------------------|
| **Representation** | Learned, term‑level logits → sparse vector (many zeros). | Handcrafted TF–IDF scores. | Continuous dense vectors from neural nets. |
| **Indexing** | Same inverted index as BM25; indices of terms with learned weights. | Inverted list with IDF. | Flat or ANN indexes on high‑dim dense vectors. |
| **Scoring** | Dot product between sparse query and document vectors → efficient via inverted lists. | Cosine/TF–IDF dot product. | Inner product in vector space; often approximate. |
| **Training data** | Supervised relevance labels (e.g., MS MARCO). | None needed. | Requires labeled pairs or contrastive loss. |
| **Practicalities** | Needs GPU for training but inference is CPU‑friendly. | Very fast, low memory, no training. | Requires GPU/FP16; high index size. |

**4️⃣ Common traps to avoid**  
- *Assuming “sparse” always means “fast”*: a very sparse vector can still be large if many terms are used.  
- *Thinking learned sparse is just BM25 with tuned IDF*: it actually learns term importance conditioned on query context.  
- *Overlooking index size*: SPLADE vectors may have more non‑zeros than plain BM25, increasing RAM.

**5️⃣ Sanity check & verbalize**  
- Summarize: “Pick SPLADE when you want the accuracy boost of a neural model but still need the low‑latency, small‑footprint advantages of inverted indices—especially on CPU‑only deployments.”  
- Check against edge cases: in ultra‑low memory environments BM25 wins; if latency is critical and GPU is available, dense ANN may be preferable.  

This structured approach lets you internalize the decision logic for any retrieval method comparison.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
