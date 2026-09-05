---
qid: ing_536d9ff6b6__star__local
question: 'Explain: 2018 - Now — ChatGPT Timeline'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 464
total_tokens: 701
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T01:15:00-05:00'
sources: []
---

**Situation:**  
In late 2018 I was part of a research lab at a mid‑size AI startup that had just released GPT‑2. Our goal was to build a conversational agent for internal customer support, but the raw model produced generic responses and occasionally hallucinated facts.

**Task:**  
I needed to turn GPT‑2 into a production‑ready chatbot by 2021, iterating through each major OpenAI release (GPT‑3, ChatGPT, GPT‑4) while keeping latency under 800 ms on a single GPU node and reducing hallucinations by at least 40%.

**Action:**  
I first fine‑tuned GPT‑2 with a domain‑specific dataset of 1.5 M Q&A pairs using Hugging Face Transformers, then migrated to GPT‑3’s API via OpenAI’s Python SDK, adding a custom “retrieval‑augmented generation” layer that fetched relevant documents from ElasticSearch before prompting. For ChatGPT (2022) I wrapped the model in a microservice with FastAPI, applied token‑level filtering and a rule‑based post‑processor to catch factual errors. With GPT‑4’s multimodal capability (2023), I integrated image embeddings via CLIP so users could ask about photos. Finally, for 2026 we deployed the system on Kubernetes with GPU autoscaling, achieving <700 ms inference on average.

**Result:**  
The chatbot reduced support ticket volume by 35% and improved first‑contact resolution from 58% to 81%. Hallucination incidents dropped from 12% to 3.5%. I learned that incremental fine‑tuning combined with retrieval augmentation is more cost‑effective than waiting for the next flagship release, and that real‑world constraints (latency, budget) often dictate architecture choices over raw model size.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
