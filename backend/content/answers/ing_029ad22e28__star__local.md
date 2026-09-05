---
qid: ing_029ad22e28__star__local
question: 'Explain: Top-P (Nucleus) Sampling — Inference Pipeline'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 339
total_tokens: 577
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T22:33:37-05:00'
sources: []
---

**Situation** – At my last company we were deploying a conversational AI for customer support. The existing greedy decoding produced repetitive answers and often stuck on the same phrase, hurting user satisfaction scores (average CSAT dropped to 3.4/5).  

**Task** – I had to redesign the inference pipeline so that each turn generated diverse yet coherent responses, while keeping latency under 200 ms for a real‑time chat interface.  

**Action** – I replaced the greedy decoder with top‑p (nucleus) sampling. In the preprocessing stage I used a Transformer model (BERT‑based encoder + GPT‑style decoder) to generate logits for each token. Instead of picking the highest logit, I sorted them and accumulated probabilities until they exceeded a threshold *p* (0.9). This limited the candidate set to the most probable “nucleus” tokens. During decoding I performed temperature scaling (τ = 0.8) and added a repetition penalty to avoid loops. The pipeline was wrapped in TensorRT for GPU inference, and I batch‑processed 32 requests concurrently, which kept average latency at 180 ms.  

**Result** – Post‑deployment CSAT rose to 4.3/5, and the average response length increased by 15%, indicating richer answers. I learned that careful tuning of *p* and temperature balances diversity with relevance, and that integrating the sampling logic into a GPU‑accelerated pipeline keeps real‑time constraints satisfied.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
