---
qid: ing_9945f76138__faang__local
question: 'Explain: Uber Custom Problems (Machine Coding) — Faang Recent Questions'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 455
total_tokens: 692
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T00:40:59-05:00'
sources: []
---

**Clarify**  
You’re asked to explain what “Uber Custom Problems” are in the context of recent FAANG‑style machine‑learning coding interviews.  
Assumptions I’d confirm:  
- The interviewer wants a high‑level overview, not code for a specific dataset.  
- We should highlight how Uber designs problems that test both ML theory and engineering trade‑offs.

**Approach**  
1. Define the purpose of custom problems.  
2. Break down typical components (data prep, model choice, evaluation).  
3. Discuss constraints Uber imposes (real‑time inference, interpretability, deployment).  
4. Summarize key take‑aways for a candidate.

**Depth**  
Uber’s “Custom Problems” are end‑to‑end ML challenges built on proprietary data (e.g., ride demand forecasting, ETA estimation, fraud detection).  
- **Data pipeline:** Candidates must clean noisy trip logs, engineer features like time‑of‑day, weather, and driver supply.  
- **Model selection:** Emphasis on scalable models—gradient‑boosted trees or neural nets with sparse embeddings—because they fit into Uber’s production stack (Spark + TensorFlow).  
- **Evaluation:** Use business metrics (MAE for ETA, lift for fraud) instead of generic accuracy; candidates must discuss bias–variance trade‑offs and explainability.  
- **Deployment constraints:** Models should run under 100 ms per request on limited GPU/CPU resources, and be serializable to Uber’s serving platform.  

**Edge Cases**  
- Sparse features (rare events) → need regularization or Bayesian priors.  
- Concept drift: traffic patterns change seasonally; recommend online learning or periodic retraining.  
- Cold start for new cities: transfer‑learning from similar markets.

**Optimize & Communicate**  
Explain how you’d iterate: prototype with a light model, profile latency, then scale to XGBoost + quantization if needed. Conclude by stressing that Uber’s custom problems test the candidate’s ability to bridge data science theory with production realities—an essential skill in FAANG roles.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
