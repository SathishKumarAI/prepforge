---
qid: ing_6cf87a5549__fp__local
question: 'Explain: Non-Functional Requirements — ChatGPT System Design - by Neo Kim
  and Hayk'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 178
output_tokens: 397
total_tokens: 575
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T19:56:16-05:00'
sources: []
---

**Non‑functional requirements (NFRs) for a ChatGPT system are not arbitrary constraints; they emerge from the *optimization of user experience under resource and safety limits*.**

*Fundamental problem*: A conversational AI must respond in real time, stay truthful, preserve privacy, and avoid abuse, all while scaling to millions of users. These goals conflict: faster inference demands more GPU memory; higher safety requires additional policy checks that add latency.

*Why they work the way they do*  
1. **Latency vs. throughput** – The *response‑time budget* is derived from human conversational expectations (≈ 200–400 ms). This converts to a hard upper bound on the number of tokens per second a single model instance can produce, guiding architecture choices such as quantization or early‑exit layers.  
2. **Reliability & availability** – Redundancy and graceful degradation are modeled as *probabilistic guarantees* (e.g., 99.9 % uptime). This leads to micro‑service decomposition and circuit breakers, directly linked to queuing theory.  
3. **Safety & privacy** – Regulatory compliance is formalized as *information‑theoretic leakage bounds*: the system must ensure that any user’s data has an entropy loss below a threshold, motivating differential‑privacy noise addition in fine‑tuning.

*Non‑obvious insight*: The most subtle NFR is **“Explainability‑by‑design”**. Rather than adding interpretability post‑hoc, it should be baked into the training objective as a *regularizer that penalizes model entropy on explanations*. This ensures that every inference carries an interpretable trace without incurring extra inference cost—an elegant fusion of information theory and human‑centered design.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
