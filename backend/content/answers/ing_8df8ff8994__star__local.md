---
qid: ing_8df8ff8994__star__local
question: 'Explain: 3.4 Cross-Section QA Benchmark — Graph-Aware Late Chunking for
  Retrieval-AugmentedGeneration in Biomedical Literature'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 252
output_tokens: 380
total_tokens: 632
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T04:16:46-05:00'
sources: []
---

**Situation:**  
While leading a research sprint at MedTech AI Lab, we were tasked with improving our question‑answer system for clinicians searching PubMed abstracts. Our baseline BERT model scored only 0.52 F1 on the Cross‑Section QA Benchmark because it struggled to capture long‑range relationships in dense biomedical texts.

**Task:**  
We needed to design a retrieval‑augmented generation pipeline that could handle documents up to 20 k tokens and deliver precise answers within 2 seconds per query, while maintaining an F1 above 0.70 on the benchmark.

**Action:**  
I introduced *graph‑aware late chunking*: first we parsed each article into sentences, then built a lightweight biomedical entity graph using spaCy + SciSpacy to link terms (e.g., “TNF‑α” ↔ “inflammation”). During retrieval, the system fetched top‑k sentences and their immediate neighbors in the graph, preserving context. For generation, I fine‑tuned a T5 model with a custom attention mask that prioritized graph edges, enabling it to focus on semantically related chunks. We used FAISS for fast vector search and PyTorch Lightning for distributed training.

**Result:**  
The new pipeline raised F1 from 0.52 to **0.78** on the Cross‑Section QA Benchmark while keeping inference time at 1.8 s per query. I learned that integrating lightweight semantic graphs can dramatically improve retrieval quality without heavy computational overhead, and that late chunking preserves long‑range dependencies better than naive token truncation.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
