---
qid: ing_84041ed74f__faang__local
question: 'Explain: Evaluation & debugging — Rag And Retrieval'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 231
output_tokens: 521
total_tokens: 752
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T23:51:47-05:00'
sources: []
---

**1️⃣ Clarify**  
We’re asked to explain how *Evaluation* and *Debugging* work for a Retrieval‑Augmented Generation (RAG) system—i.e., a model that first pulls relevant passages from a corpus and then generates an answer.  
Assumptions: the evaluator has labeled queries, ground‑truth answers, and a retrieval component (BM25/FAISS). We’re focusing on *human‑in‑the‑loop* metrics, not just raw perplexity.

**2️⃣ Approach**  
1. **Define success criteria** – relevance (retrieval recall@k), answer quality (BLEU/F1 vs gold), hallucination rate.  
2. **Collect test data** – balanced queries across topics.  
3. **Run pipeline** – retrieve, generate, store outputs and retrieved docs.  
4. **Automated scoring** – compute retrieval metrics + language‑model scores.  
5. **Human review** – flag mis‑retrieved or hallucinated responses.  
6. **Iterate debugging** – trace errors to either retrieval or generation stage.

**3️⃣ Depth**  
- *Retrieval*: recall@k, MRR; use a debug log of top‑k passages.  
- *Generation*: BLEU/F1, ROUGE, and a hallucination detector (e.g., checking for factual consistency against the gold answer).  
- *Pipeline tracing*: attach unique IDs to queries → retrieval logs → generated text; enables reproducible debugging.  
Complexity: Retrieval O(log N) per query; generation O(L²) with transformer decoder. Trade‑off: higher k improves recall but increases hallucination risk.

**4️⃣ Edge Cases**  
- Empty or ambiguous queries → fallback “I don’t know.”  
- Duplicate passages in corpus → inflate recall artificially.  
- Out‑of‑domain topics → low retrieval precision; test on unseen categories.

**5️⃣ Optimize & Communicate**  
- Introduce *retrieval‑aware* loss during fine‑tuning to align the generator with retrieved context.  
- Use a confidence threshold: if retrieval score < τ, ask for clarification.  
- Present results in dashboards (precision‑recall curves + error heatmaps).  
Narrate: “We first ensured that what we feed the model is useful; then we measured how well it turns that into correct answers, and finally we pinpointed whether failures came from missing facts or hallucinations.”

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
