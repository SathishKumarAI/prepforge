---
qid: ing_1ec94a8cbd__faang__local
question: 'Explain: Next Steps — BigLaw Bench: Hallucinations | Harvey'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 561
total_tokens: 798
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T19:56:32-05:00'
sources: []
---

**Clarify**

> *Problem:* In the “BigLaw Bench” model (Harvey), we need to mitigate hallucination—i.e., when a language model outputs plausible but factually incorrect legal statements.  
> *Assumptions to confirm:*  
> 1. The system is fine‑tuned on internal case law and can retrieve documents via an index.  
> 2. Hallucinations occur mainly during zero‑shot or few‑shot reasoning steps.  
> 3. We have a feedback loop from legal reviewers (human in the loop).  

**Approach**

1. **Detection Layer:** Add a factuality classifier that scores outputs against retrieved evidence.  
2. **Retrieval Augmentation:** Use *retriever‑augmented generation* (RAG) to force the model to ground responses in indexed documents.  
3. **Re‑ranking & Confidence:** Post‑process generated sentences, re‑rank by confidence and evidence overlap.  
4. **Human‑in‑the‑Loop (HITL):** Flag low‑confidence outputs for expert review before delivery.  

**Depth**

- *Factuality Classifier:* Train a binary classifier on “verified vs. hallucinated” pairs using contrastive loss; evaluate with precision/recall at 0.9+.  
- *RAG Integration:* Pass top‑k retrieved passages as context to the decoder; fine‑tune with *retrieval‑aware prompts* (e.g., “Given the following case excerpt …”).  
- *Confidence Scoring:* Compute similarity between generated tokens and passage embeddings via cosine similarity; threshold at 0.75.  
- *Complexity:* Retrieval O(log N) per query; generation remains linear in token count.  

**Edge Cases**

- Sparse evidence → model may still hallucinate; fallback to “I’m not sure” response.  
- Ambiguous queries where multiple cases conflict; need dispute‑resolution logic (majority vote).  
- Non‑legal jargon or user typos can mislead retrieval; implement robust preprocessing.  

**Optimize & Communicate**

1. **Iterative A/B Testing:** Deploy two pipelines—baseline vs. hallucination‑mitigated—to measure reduction in errors (target <5% hallucinations).  
2. **Explainability Dashboard:** Show evidence snippets alongside answers to build trust with attorneys.  
3. **Continuous Learning Loop:** Log flagged hallucinations, retrain the classifier quarterly.  

By layering detection, retrieval, confidence scoring, and human oversight, we systematically shrink hallucination risk while keeping latency within acceptable bounds for a production legal assistant.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
