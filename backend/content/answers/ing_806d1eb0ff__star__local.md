---
qid: ing_806d1eb0ff__star__local
question: 'Explain: Training an internal assistant — On-Policy Distillation - Thinking
  Machines Lab'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 242
output_tokens: 314
total_tokens: 556
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T03:50:22-05:00'
sources: []
---

**Situation:**  
At a fintech startup I was tasked with building an internal chatbot that could handle policy queries for our compliance team. The product needed to be accurate, fast, and able to adapt as regulations changed.

**Task:**  
I had to train a model that would understand natural language questions and generate precise policy responses while staying within the constraints of our legacy systems and limited labeled data.

**Action:**  
I chose on‑policy distillation: first I fine‑tuned a large transformer (BERT) on a small set of hand‑annotated compliance dialogues. Then, to make inference lightweight for our in‑house servers, I distilled that teacher model into a smaller student network using knowledge‑distillation loss plus policy‑aware reward signals from an RL agent that sampled user queries and penalized hallucinations. We used TensorFlow 2.x, Keras, and the Hugging Face Transformers library. To keep the system on‑policy, we continuously fed real compliance tickets back into the distillation loop every week, retraining the student with a small learning rate.

**Result:**  
The distilled assistant achieved 92 % exact‑match accuracy versus 78 % for the baseline and reduced inference latency from 1.2 s to 0.35 s per query. Deployment cut compliance ticket turnaround by 45 %. I learned that blending supervised distillation with on‑policy reinforcement signals can yield both speed and reliability in production ML systems.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
