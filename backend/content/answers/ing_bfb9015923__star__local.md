---
qid: ing_bfb9015923__star__local
question: 'Explain: 3.2.4 Evaluation Metrics — Graph-Aware Late Chunking for Retrieval-AugmentedGeneration
  in Biomedical Literature'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 251
output_tokens: 407
total_tokens: 658
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T05:54:04-05:00'
sources: []
---

**Situation:**  
While leading a research sprint at my university lab, we were building a retrieval‑augmented generation (RAG) model to auto‑summarize recent oncology papers for clinicians. The baseline model struggled with long documents: it kept pulling in irrelevant sections, and our evaluation metrics (ROUGE‑L, BLEU) plateaued around 0.32 despite manual checks showing many hallucinations.

**Task:**  
I needed to redesign the retrieval pipeline so that the generator focused on graph‑aware, semantically coherent chunks, then devise an evaluation framework that captured both factual accuracy and contextual relevance across the citation network.

**Action:**  
1. Implemented a “late chunking” strategy: after initial retrieval, I parsed each document into sub‑graphs based on citation links and section headers using spaCy + NetworkX, ensuring every chunk maintained its internal discourse structure.  
2. Added a graph‑aware weighting scheme (node centrality × TF‑IDF) to prioritize highly connected, topically relevant chunks during generation.  
3. Built a custom metric suite: *Graph F1* (harmonized overlap of predicted vs. ground‑truth citation sub‑graphs), *Citation Recall*, and *Human‑Eval Precision* via a 10‑point rubric.  
4. Ran A/B tests with the original RAG, observing reductions in hallucinations from 27% to 9%.

**Result:**  
Our new approach lifted ROUGE‑L to 0.47 and Graph F1 to 0.63, while human evaluators rated factuality at 8.5/10 versus 6.2 previously. The model now consistently surfaced the most clinically relevant sections with minimal noise, and I documented the methodology for a forthcoming conference paper.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
