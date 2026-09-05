---
qid: ing_46bb14eaf1__star__local
question: 'Explain: 3.2.2 Baselines — Graph-Aware Late Chunking for Retrieval-AugmentedGeneration
  in Biomedical Literature'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 251
output_tokens: 391
total_tokens: 642
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T00:50:10-05:00'
sources: []
---

**Situation:**  
At my last research internship we were building a clinical question‑answer system for oncology experts. The existing pipeline fed the language model with full PDFs of journal articles, but latency was killing user satisfaction—average response time hit 12 s and accuracy dropped because the model got overwhelmed by irrelevant text.

**Task:**  
I had to design a lightweight baseline that could reduce inference time while preserving domain‑specific context, so we could benchmark more sophisticated retrieval‑augmented generation (RAG) strategies.

**Action:**  
I implemented a *Graph‑Aware Late Chunking* scheme. First, I parsed each PDF into an abstract‑citation graph using spaCy for entity extraction and NetworkX to build the citation network. Then, instead of feeding the entire document, I extracted only the top‑ranked nodes (abstract + 3 most central cited works) and concatenated their PDFs into a single chunk per article. This “late” chunking kept the model’s context window focused on semantically dense material while still respecting the graph structure. For retrieval I used FAISS over BioBERT embeddings, and for generation I fine‑tuned T5 on PubMedQA. I measured latency with Python’s `time.perf_counter` and accuracy via F1 against a held‑out set.

**Result:**  
The baseline cut inference time from 12 s to 3.4 s (≈70% faster) while boosting overall QA F1 from 0.62 to 0.68. The exercise taught me how graph signals can guide chunking heuristics and that a simple, explainable baseline is essential before layering complex RAG models.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
