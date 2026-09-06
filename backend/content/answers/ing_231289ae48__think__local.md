---
qid: ing_231289ae48__think__local
question: 'Explain: Custom Evaluator Pattern — Rag Evaluation Patterns'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 188
output_tokens: 493
total_tokens: 681
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T04:58:53-05:00'
sources: []
---

**1️⃣ Clarify the goal & assumptions**  
   - *Goal:* Understand what a “Custom Evaluator Pattern” is in the context of Retrieval‑Augmented Generation (RAG) and how it differs from standard evaluation.  
   - *Assumptions:* The user knows basic RAG concepts (retrieval, generator, context), but not advanced evaluation strategies. Keep explanations concrete and avoid jargon unless defined.

**2️⃣ Adopt a mental model: “Evaluation as a pipeline”**  
   - Break the evaluator into three stages: **(a) Retrieval assessment**, **(b) Generation quality check**, **(c) Ground‑truth alignment**.  
   - Think of the custom evaluator as a plug‑in that can replace or augment any stage with domain‑specific logic.

**3️⃣ Step‑by‑step reasoning**  
   1. *Identify what needs measuring:* e.g., relevance, coherence, factual correctness.  
   2. *Choose metrics per stage*: precision/recall for retrieval, BLEU/LLaMAScore for generation, semantic similarity or question‑answer overlap for alignment.  
   3. *Design a wrapper class* that accepts the raw RAG outputs and orchestrates metric calculation, handling caching and batching.  
   4. *Integrate with training loop*: expose loss components derived from evaluator scores so the model can be fine‑tuned end‑to‑end.

**4️⃣ Common traps to avoid**  
   - Mixing up “evaluation” (offline assessment) vs. “training signal” (online reward).  
   - Overfitting the evaluator to a narrow test set; ensure diversity of queries and documents.  
   - Ignoring computational cost: caching similarity scores or using approximate nearest neighbors can keep latency low.

**5️⃣ Sanity‑check & communicate**  
   - Run a toy example with a single query–document pair, show raw scores, then the final composite metric.  
   - Explain how changing weights in the composite metric shifts model behavior (e.g., more retrieval focus vs. generation polish).  
   - Summarize: A Custom Evaluator Pattern is essentially a modular, extensible scoring engine that lets practitioners tailor RAG evaluation to their domain, feeding back into both analysis and training.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
