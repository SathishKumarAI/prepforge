---
qid: ing_ea86d0a16e__star__local
question: 'Explain: Evals & quality loop — Ai System Design'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 347
total_tokens: 583
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T07:17:19-05:00'
sources: []
---

**Situation:**  
At my last startup we were launching a conversational AI for customer support, but our initial NLU model was misclassifying intent 35 % of the time, hurting CSAT scores.

**Task:**  
I had to design an evaluation‑driven quality loop that would let us continuously measure intent accuracy and iterate on training data while keeping deployment latency under 300 ms.

**Action:**  
First, I set up a real‑time eval pipeline using *Weights & Biases* to log every user query with the model’s confidence score. We built a small annotation tool in Streamlit that let our support agents flag misclassifications on the fly; each flag triggered an automatic data‑pull into an S3 bucket for nightly retraining. For metrics, we tracked F1‑score per intent and latency jitter via Prometheus alerts. On the training side, I implemented a curriculum learning schedule: start with high‑confidence samples, then gradually add low‑confidence examples to prevent catastrophic forgetting. Finally, we automated a CI/CD pipeline in GitHub Actions that ran unit tests on the eval data, retrained the model, and deployed it via Lambda if the new F1 exceeded 0.92.

**Result:**  
Within three weeks the intent accuracy jumped from 65 % to 93 %, CSAT rose by 12 points, and latency stayed below our SLA. I learned that embedding evaluation into every stage—data collection, training, deployment—creates a self‑sustaining quality loop that scales with traffic.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
