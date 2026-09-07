---
qid: ing_f307a0ae16__faang__local
question: 'Explain: Build an Extractive QA Pipeline — Tutorials | Haystack'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 582
total_tokens: 818
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T04:04:32-05:00'
sources: []
---

**Clarify**  
You’re asked to explain how to build a *document‑level extractive question‑answering (QA) pipeline* using the **Haystack** framework.  
Key assumptions: we have an indexed corpus, want token‑level answer spans, and will use open‑source models (e.g., BERT/DistilBERT). Ask if real‑time latency or batch processing is required.

---

### Approach
1. **Data ingestion & indexing** – Convert PDFs/text into passages; store in a vector DB (FAISS/HNSW) with embeddings from an encoder model.  
2. **Retriever** – Query the index with BM25 + dense retrieval to fetch top‑k passages.  
3. **Reader** – Feed retrieved passages to a transformer QA head that predicts start/end logits.  
4. **Post‑processing** – Decode spans, rank by confidence, de‑duplicate, and return answer(s).  
5. **Evaluation & tuning** – Use SQuAD/HotpotQA metrics; iterate on retriever weights or reader fine‑tuning.

---

### Depth
- **Retriever**: `EmbeddingRetriever` (dense) + `BM25Retriever`. Combine scores via linear interpolation (`alpha`). Complexity O(log N * d).  
- **Reader**: `TransformerReader` (e.g., `deepset/roberta-base-squad2`) fine‑tuned on the target domain. Forward pass O(L²) for self‑attention; inference latency ~200 ms per passage.  
- **Pipeline orchestration**: Haystack’s `Pipeline` class chains retriever → reader; can parallelize retrieval with multi‑threading.  

---

### Edge Cases
- *Empty or noisy passages*: fallback to BM25 only.  
- *Long documents > max token limit*: split into overlapping chunks; risk of fragmented answers.  
- *Ambiguous queries*: multiple high‑confidence spans—present top‑k.  
- *Domain shift*: retriever embeddings may underperform; fine‑tune encoder on in‑domain data.

---

### Optimize & Communicate
1. **Caching**: Store frequently queried passages’ embeddings to cut retrieval time.  
2. **Knowledge distillation**: Compress reader for edge deployment, reducing latency by 40 %.  
3. **Explainability**: Return token scores and passage provenance; helpful for debugging and trust.  

When explaining to interviewers, emphasize the modularity (retriever + reader), trade‑offs between recall vs precision, and how Haystack’s plug‑and‑play components accelerate MVPs while still allowing deep customization. This showcases problem‑solving structure, technical depth, and awareness of production concerns—all key FAANG signals.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
