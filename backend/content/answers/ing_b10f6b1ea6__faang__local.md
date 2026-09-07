---
qid: ing_b10f6b1ea6__faang__local
question: 'Explain: Model Selection Guide — Reranking Strategies'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 452
total_tokens: 684
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T01:34:52-05:00'
sources: []
---

**Clarify**  
You’re asking for a concise guide on how to pick a reranking model in an AI pipeline—e.g., after retrieving candidate items, we rank them again with a more sophisticated predictor. Key assumptions: (1) you have a base ranking score; (2) you can train supervised models on labeled relevance data; (3) latency constraints differ per deployment (mobile vs server).  

**Approach**  
1. **Define objectives** – precision@k, NDCG, or business KPIs.  
2. **Collect features** – query‑embedding, user context, item metadata, interaction history.  
3. **Model family sweep** – linear models (LR), tree ensembles (XGB/LightGBM), neural nets (MLP, Transformers).  
4. **Cross‑validation & early stopping** to guard against overfitting.  
5. **Latency profiling** – measure inference time per model; prune if it exceeds the SLA.  

**Depth**  
- *Linear*: O(d) memory, fast inference, good for cold starts.  
- *Tree ensembles*: O(log n) depth, capture non‑linear interactions, but heavier on GPU/CPU.  
- *Neural*: O(h·d) parameters; can ingest embeddings directly, achieve state‑of‑the‑art NDCG, yet require more compute and careful regularization (dropout, weight decay).  
Use a calibration step to map raw scores back to the base ranking scale.

**Edge Cases**  
- Sparse features → fallback to linear.  
- Concept drift: retrain monthly or use online learning.  
- Cold‑start users: default to popularity model.  

**Optimize & Communicate**  
Start with a lightweight LR as baseline; if NDCG gain > 2%, move to XGB; only then consider a Transformer if latency budget allows. Explain trade‑offs in a slide deck: “Model complexity vs. latency vs. interpretability.” This structured narrative satisfies FAANG interviewers’ emphasis on clarity, depth, and pragmatic decision‑making.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
