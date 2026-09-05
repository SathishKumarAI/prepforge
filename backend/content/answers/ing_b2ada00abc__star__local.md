---
qid: ing_b2ada00abc__star__local
question: 'Explain: 3.3 Full-Text Evaluation Design — Graph-Aware Late Chunking for
  Retrieval-AugmentedGeneration in Biomedical Literature'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 252
output_tokens: 349
total_tokens: 601
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T05:29:09-05:00'
sources: []
---

**Situation:**  
At my previous role at a health‑tech startup, we were building a research assistant that could pull up relevant studies from PubMed for clinicians. The system’s retrieval module kept returning long PDFs; the downstream language model struggled to generate concise summaries because it had to process entire documents in one go.

**Task:**  
I was tasked with redesigning the evaluation pipeline so the generation model could handle *chunked* content while still understanding document structure—essentially creating a graph‑aware, late‑chunking strategy that preserved citation relationships and context for accurate summarization.

**Action:**  
First, I parsed each PDF into a dependency graph of sections, figures, and tables using spaCy + PyMuPDF. Then I implemented a late chunking routine: the retrieval engine returned top‑k documents; I split them into semantic chunks based on the graph edges, attaching metadata (section titles, citation IDs). These chunks were fed to a transformer model fine‑tuned on biomedical summarization, with an attention mask that respected the graph links. Finally, I built an automated evaluation script that compared generated summaries against manually curated gold standards using ROUGE‑L and domain‑specific BLEU scores.

**Result:**  
The new pipeline cut inference time by 35% while boosting ROUGE‑L from 0.42 to 0.57 on a held‑out set of 200 papers. Clinicians reported the summaries were “more focused and contextually accurate.” I learned that marrying graph structures with late chunking can dramatically improve both efficiency and quality in retrieval‑augmented generation for complex domains.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
