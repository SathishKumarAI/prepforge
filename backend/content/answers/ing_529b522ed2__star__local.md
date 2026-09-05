---
qid: ing_529b522ed2__star__local
question: 'Explain: Context Engineering'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 229
output_tokens: 314
total_tokens: 543
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T01:13:30-05:00'
sources: []
---

**Situation:**  
At my previous startup we were building a customer‑support chatbot for an e‑commerce platform that handled over 5,000 tickets daily. Our initial model, fine‑tuned on generic dialogue data, scored only 62 % accuracy on intent classification and often suggested irrelevant product links.

**Task:**  
I was tasked with boosting intent recognition to at least 85 % while keeping inference latency under 150 ms per request, so the bot could run in real time on edge devices.

**Action:**  
First, I performed *context engineering*: we collected a new dataset of 20,000 labeled tickets and extracted contextual features—user’s browsing history, cart contents, and previous interaction timestamps. Using feature‑engineering pipelines in Python with Pandas and scikit‑learn, I encoded these as embeddings via SentenceTransformers. Then, I fine‑tuned a DistilBERT model on this enriched dataset, adding a lightweight attention layer to weigh recent interactions more heavily. I deployed the model using ONNX Runtime for GPU‑edge inference and set up an A/B test harness in Kubernetes.

**Result:**  
The new model achieved 88 % intent accuracy with 140 ms latency, reducing ticket resolution time by 27 %. The project taught me that thoughtful context integration can outperform raw data scaling, and that balancing feature richness with deployment constraints is key to production‑ready AI.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
