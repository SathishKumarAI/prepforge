---
qid: ing_5e496c7c60__faang__local
question: How do you build a golden evaluation set for RAG without months of labelling?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 541
total_tokens: 780
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T22:23:05-05:00'
sources: []
---

**Clarify**  
We need a high‑quality evaluation set for Retrieval‑Augmented Generation (RAG) that is *gold‑standard* but can be produced quickly—ideally in days rather than months of manual annotation. The goal: measure retrieval accuracy and downstream generation quality without costly labeling.

Assumptions to confirm:
- We have access to a large corpus and a pre‑trained RAG model.
- We can query the model programmatically (API or local inference).
- We can use existing QA datasets or knowledge bases as proxies for “ground truth”.

**Approach**  
1. **Seed a small human‑verified seed set** (≈ 200–300 Q&A pairs).  
2. **Generate synthetic augmentations** via back‑translation, paraphrasing, and controlled perturbation to diversify phrasing while preserving meaning.  
3. **Retrieve candidate passages** using the RAG retriever for each question.  
4. **Automated relevance scoring**: compute embeddings (e.g., SBERT) between question and retrieved passage; retain top‑k with high cosine similarity.  
5. **Self‑distillation**: let a stronger model (or ensemble) label the remaining set, flagging low‑confidence cases for manual review.  
6. **Iterative refinement**: human annotators correct only the flagged items, yielding a “golden” set in ~1 week.

**Depth**  
- Retrieval accuracy is measured by precision@k on the curated passages.  
- Generation quality via BLEU/ROUGE and semantic similarity (e.g., BERTScore).  
- Complexity: O(N·logN) for retrieval ranking; synthetic augmentation linear in N.  
- Trade‑off: more automation → faster, but risk of systematic bias; mitigated by the seed set.

**Edge Cases**  
- Rare or ambiguous queries may be mis‑labelled by distillation; test with adversarial paraphrases.  
- Corpus drift: if the underlying knowledge base changes, re‑run step 3 to update labels.

**Optimize & Communicate**  
- Parallelize retrieval and embedding computations on GPUs to cut time to < 24 h.  
- Use a lightweight web UI for annotators to review only low‑confidence samples, saving effort.  
- Present the workflow in a diagram during interview: seed → augmentation → automatic labeling → human spot‑check → final golden set. This shows structured thinking, clear trade‑offs, and practical scalability—exactly what FAANG interviewers look for.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
