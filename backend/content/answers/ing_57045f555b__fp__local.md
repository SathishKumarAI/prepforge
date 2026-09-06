---
qid: ing_57045f555b__fp__local
question: 'We send you a take-home: build a RAG service over this corpus, we say roughly
  six hours. What do you do before writing any code?'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 190
output_tokens: 469
total_tokens: 659
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T19:09:49-05:00'
sources: []
---

### Before I write a line of code for the RAG service

1. **Clarify the objective**  
   *What is “answering correctly” in this domain?*  
   Define success metrics (BLEU, ROUGE, human‑rated relevance) and tolerance for hallucination.

2. **Characterize the corpus**  
   *Size, modality, structure.*  
   Compute token counts, document lengths, and any inherent hierarchy (chapters → sections).  
   Spot duplicates or noisy entries that could corrupt embeddings.

3. **Model‑agnostic feasibility check**  
   Estimate memory for dense vectors (`dim × #docs`) versus sparse TF‑IDF.  
   Decide if GPU/CPU will be sufficient for real‑time retrieval.

4. **Design the retrieval pipeline**  
   *Indexing strategy* (FAISS, Milvus, ElasticSearch) ↔ *distance metric* (cosine vs L2).  
   Sketch a “query–vector → nearest neighbors → context” flow diagram.

5. **Plan for query distribution and cold‑start**  
   Generate synthetic queries from the corpus to gauge coverage; identify outliers that may need special handling.

6. **Evaluation framework**  
   Set up a reproducible test harness: split into train/dev/test, automate metrics, and prepare a baseline (e.g., BM25).

7. **Risk & mitigation map**  
   *Hallucination*: plan prompt‑engineering or filtering;  
   *Latency*: pre‑compute embeddings;  
   *Scalability*: consider sharding or hybrid dense–sparse retrieval.

> **Non‑obvious insight:** The *retrieval vector space* is the bottleneck, not the language model. A poorly constructed embedding (e.g., using raw BERT without fine‑tuning on domain data) can make even a perfect LLM useless, because it never sees relevant passages. Therefore, invest early effort into a domain‑adapted encoder; this pays off linearly in downstream accuracy and latency.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
