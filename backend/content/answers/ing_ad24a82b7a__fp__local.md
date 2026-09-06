---
qid: ing_ad24a82b7a__fp__local
question: 'Explain: Retrieval Quality Drift — Rag Evaluation Patterns'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 168
output_tokens: 458
total_tokens: 626
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T22:12:43-05:00'
sources: []
---

**Retrieval‑Quality Drift in RAG Evaluation**

The core problem a Retrieval‑Augmented Generation (RAG) system solves is *information scarcity*: the language model (LM) must answer queries it has never seen during training. It does so by first fetching relevant documents from an external index, then conditioning its generation on those snippets. If the retrieved set changes over time—because new data arrive, relevance scores shift, or indexing policy evolves—the *semantic foundation* of every answer can change. That’s retrieval‑quality drift.

Why must we monitor it?  
1. **Optimization view**: The LM is trained to maximize likelihood given a fixed context distribution \(P_{\text{ctx}}(c)\). When the retrieval module alters this distribution, the objective no longer matches training, so perplexity and BLEU collapse.  
2. **Information‑theoretic view**: Retrieval supplies *mutual information* between query \(q\) and answer \(a\): \(I(q; a|c)\). Drift reduces that MI by injecting irrelevant or outdated context, lowering expected utility.  
3. **Geometric view**: In latent space, the retrieved vectors should lie near the query’s true relevance manifold. Drift pushes them off‑manifold, increasing cosine distance and hurting downstream decoding.

A non‑obvious insight: *drift is not just a performance drop; it amplifies hallucination risk.* When the retrieval engine supplies stale or contradictory facts, the LM’s confidence (often reflected in softmax entropy) can remain high because the model has never learned to flag inconsistency. Thus, evaluation metrics that only look at surface accuracy miss the underlying *semantic stability* problem.

**Evaluation Patterns**  
- **Temporal cross‑validation**: Train on a fixed index snapshot, evaluate on later snapshots.  
- **Drift‑sensitivity scores**: Measure change in answer embeddings (e.g., cosine similarity) across retrieval updates.  
- **Hallucination‑drift correlation**: Count hallucinations as retrieval changes to quantify how drift fuels misinformation.

By framing RAG evaluation around these principles, we can detect and mitigate quality drift before it undermines trust or safety.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
