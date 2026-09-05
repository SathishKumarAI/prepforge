---
qid: ing_fa196deda9__star__local
question: 'Explain: Common Options — Text generation \u00b7 Hugging Face'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 241
output_tokens: 306
total_tokens: 547
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T07:48:38-05:00'
sources: []
---

**Situation:**  
At my previous company we were building a customer support chatbot that needed to generate natural, context‑aware responses in real time for our e‑commerce platform, which handled ~3,000 tickets per hour.

**Task:**  
I was tasked with implementing an on‑premises text generation model that could produce accurate replies within 200 ms per request, while keeping GPU usage under 30 % to stay within our data‑center budget.

**Action:**  
I chose Hugging Face’s `transformers` library and fine‑tuned a distilled GPT‑2 (distilGPT-2) on 50k labeled support tickets. To meet latency goals, I converted the model to ONNX, then deployed it with TorchServe behind an Nginx reverse proxy. For scaling, I set up horizontal pod autoscaling in Kubernetes, monitoring GPU metrics via Prometheus. I also implemented a simple prompt‑engineering pipeline: prepend the last three user messages and a system role tag (“You are a helpful support agent.”) to each request.

**Result:**  
The chatbot achieved an average response time of 180 ms with 95% BLEU score against our validation set, reducing ticket handling time by 35%. I learned how model distillation, ONNX conversion, and Kubernetes autoscaling can together deliver production‑ready NLP services at scale.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
