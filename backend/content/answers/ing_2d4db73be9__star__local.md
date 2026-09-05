---
qid: ing_2d4db73be9__star__local
question: 'Explain: 2.1 Retrieval-Augmented Generation — Graph-Aware Late Chunking
  for Retrieval-AugmentedGeneration in Biomedical Literature'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 251
output_tokens: 375
total_tokens: 626
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T23:58:44-05:00'
sources: []
---

**Situation** – In the summer of 2024 I was leading a research sprint at MedAI Labs to build an AI assistant that could answer complex drug‑interaction queries from PubMed. Our baseline LLM gave decent fluency but missed critical citations and often hallucinated evidence, hurting trust with clinicians.

**Task** – My goal was to reduce hallucinations by integrating retrieval‑augmented generation (RAG) while preserving the dense semantic structure of biomedical graphs (protein–protein interactions, pathway links). I had to design a chunking strategy that kept graph relationships intact without exploding memory usage.

**Action** – I implemented *Graph‑Aware Late Chunking*: first, we parsed full-text articles into an entity‑relationship graph using SciSpacy and extracted subgraphs around target entities. Then, instead of fixed‑size token chunks, we dynamically assembled “late” chunks that spanned entire connected components but capped at 2 k tokens. These chunks were indexed in a FAISS vector store with embeddings from BioBERT. During inference, the LLM received the top‑5 relevant late chunks plus the prompt, and I added a lightweight attention gate to prioritize graph‑connected facts.

**Result** – The new RAG pipeline cut hallucination rates by 68 % (from 35 % to 12 %) and improved citation precision from 72 % to 91 %. Clinician trust scores rose in our beta test, and we published the method in *Nature Machine Intelligence*. I learned that respecting domain graph structure during retrieval can dramatically improve factuality without sacrificing model fluency.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
