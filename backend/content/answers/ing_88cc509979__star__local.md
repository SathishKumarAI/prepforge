---
qid: ing_88cc509979__star__local
question: 'Explain: AI Capabilities and Limitations — Claude Academy \u00b7 Learn
  to work and build with Claude'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 249
output_tokens: 352
total_tokens: 601
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T04:06:19-05:00'
sources: []
---

**Situation** – In early 2024 I was leading a product‑team that wanted to add a smart recommendation engine to our e‑commerce app. We had a tight six‑month timeline and a budget of $150k for AI tooling.

**Task** – My goal was to prototype a system that could predict the next product a shopper would buy, with at least 70 % top‑3 accuracy, while keeping inference latency under 200 ms on mobile devices.

**Action** – I started by evaluating open‑source transformer models. Using Hugging Face’s `transformers` library and the DistilBERT architecture, I fine‑tuned a model on our clickstream data. To address the latency constraint, I applied quantization (INT8) and leveraged ONNX Runtime for mobile deployment. During testing I discovered that the model overfit to recent purchase patterns—an AI limitation: it can’t generalize beyond its training distribution. I mitigated this by adding synthetic noise to the input features and incorporating a regularization layer. For continuous learning, I set up an automated pipeline in Airflow that retrained the model weekly with new data.

**Result** – The final recommendation engine achieved 73 % top‑3 accuracy and ran at 140 ms on average on iOS devices. User engagement rose by 12 %, and we saved $30k by avoiding a paid API subscription. I learned that while AI can deliver powerful insights, its effectiveness hinges on careful data preparation, awareness of distribution shifts, and engineering trade‑offs between accuracy and performance.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
