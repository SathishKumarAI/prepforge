---
qid: ing_92d8df3d98__faang__local
question: 'Explain: 🔎 RAG & Retrieval — Cheatsheet'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 584
total_tokens: 817
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T00:26:06-05:00'
sources: []
---

## Clarify  
The interviewer wants a concise cheat‑sheet on *Retrieval‑Augmented Generation (RAG)* and the underlying *retrieval* mechanisms used in modern AI pipelines. I’ll assume they’re interested in:  

1. What RAG is and why it matters.  
2. Core components (retriever, generator).  
3. Typical architectures & training signals.  
4. Common pitfalls & evaluation.

## Approach  
I’ll structure the answer into short bullet blocks that mirror a cheat‑sheet: definition → pipeline → key methods → metrics → edge cases. Each section will be brief but technically accurate, keeping total word count 160–240.

## Depth  

| Section | Key Points |
|---------|------------|
| **Definition** | RAG = a two‑stage model where a *retriever* fetches relevant documents and a *generator* (often a transformer) conditions on both the query and retrieved text to produce an answer. |
| **Pipeline** | 1️⃣ Query → 2️⃣ Retriever (dense or sparse, BM25, DPR, FAISS) → 3️⃣ Retrieve k passages → 4️⃣ Concatenate with query → 5️⃣ Generator → Output. |
| **Retrievers** | *Sparse*: TF‑IDF/BM25; *Dense*: sentence embeddings from pretrained models (DPR, Sentence‑BERT). Dense retrievers are end‑to‑end trainable and capture semantic similarity beyond keyword overlap. |
| **Generators** | Usually a fine‑tuned GPT/PaLM variant with cross‑attention over the retrieved context. Some systems use *prompt tuning* or *adapter layers* to keep base weights frozen. |
| **Training Signals** | Joint loss = cross‑entropy (generation) + retrieval loss (contrastive or ranking). Retrieval can be pre‑trained offline and fine‑tuned jointly. |
| **Evaluation** | Exact match & BLEU for generation; recall@k, MRR for retrieval. Human evaluation on factual correctness is critical. |

## Edge Cases  
*No relevant docs*: generator hallucination rises → mitigate with *retrieval confidence thresholds*.  
*Large k*: memory blow‑up → use approximate nearest neighbors (FAISS) and reduce context size.  
*Domain shift*: retriever embeddings may not generalize → fine‑tune on target domain data.

## Optimize & Communicate  
Explain trade‑offs: dense retrievers give higher recall but cost more inference time; sparse retrievers are fast but miss paraphrases. Mention hybrid approaches (e.g., BM25+DPR) and cache strategies for repeated queries. Conclude with a quick “cheat‑sheet” bullet list summarizing the above points, ready for a whiteboard recap.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
