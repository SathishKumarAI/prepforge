---
qid: ing_0417df604c__fp__local
question: 'Explain: BigLaw Bench – Retrieval — BigLaw Bench Deep Dive: Retrieval |
  Harvey'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 176
output_tokens: 392
total_tokens: 568
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T16:14:13-05:00'
sources: []
---

### BigLaw Bench – Retrieval (Deep Dive)

**Fundamental problem:**  
In a law firm, attorneys spend most of their time *searching* for precedent, statutes, or internal memos that support an argument. A naive keyword search returns thousands of documents, but the *relevant* ones are buried deep in the noise.

**Why retrieval must be probabilistic and geometry‑based:**  
1. **Information theory** tells us that relevance is a probability distribution over documents conditioned on the query.  
2. **Vector space models** (e.g., BM25, TF‑IDF) embed words into high‑dimensional vectors; similarity in this space approximates semantic closeness.  
3. **Learning to rank** turns retrieval into an optimization problem: minimize a loss that rewards ranking true positives higher than false ones.

**Deep architecture:**  
- **Embeddings:** Legal corpora are tokenized, then fed through a transformer (e.g., LegalBERT) fine‑tuned on court opinions; the resulting sentence vectors capture nuanced legal semantics.  
- **Approximate nearest neighbor (ANN):** Using HNSW graphs, the system retrieves the top‑k candidates in sub‑millisecond latency, essential for live drafting tools.  
- **Relevance feedback loop:** User clicks and edits are logged; a small neural ranker (e.g., RankNet) is updated online to adapt to evolving case law.

**Non‑obvious insight:**  
Retrieval *is* the bottleneck of any legal AI system because downstream NLP models (summarization, drafting) can only be as good as the evidence they see. Thus, a retrieval engine that actively learns from user interactions—rather than being static—is the true engine of productivity in BigLaw Bench.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
