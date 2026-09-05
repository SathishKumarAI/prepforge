---
qid: ing_a7737cac33__star__local
question: 'Explain: 3.1.4 Knowledge Graph Infusion — Graph-Aware Late Chunking for
  Retrieval-AugmentedGeneration in Biomedical Literature'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 253
output_tokens: 338
total_tokens: 591
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T05:07:37-05:00'
sources: []
---

**Situation:**  
At my previous research lab we were building a retrieval‑augmented generation system for drug‑disease association discovery from PubMed abstracts. The model’s accuracy dropped when queries involved rare side‑effects that had sparse mentions in the corpus.

**Task:**  
I was tasked with boosting recall of domain‑specific facts without sacrificing fluency, by leveraging a biomedical knowledge graph (UMLS) to guide the generation phase.

**Action:**  
I implemented a “graph‑aware late chunking” pipeline: first, during retrieval I augmented each query vector with embeddings from adjacent nodes in the UMLS graph (using node2vec). Then, when feeding passages into the language model, I inserted a “knowledge infusion token” after every sentence that corresponded to a high‑confidence graph edge. The decoder was fine‑tuned to pay extra attention to these tokens, effectively conditioning generation on curated relationships rather than raw text alone. I also introduced a dynamic chunk size—larger chunks for well‑connected entities—to balance context length and computational load.

**Result:**  
The system’s F1 score on the Drug‑SideEffect benchmark rose from 0.61 to 0.78, a 28 % relative improvement. Runtime increased only by 12 %, and we gained a deeper insight into which graph paths most influenced predictions. This experience taught me how to marry sparse knowledge structures with dense language models in a production‑ready workflow.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
