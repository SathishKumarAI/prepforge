---
qid: ing_c94d433c6a__star__local
question: 'Explain: Small Language Models (SLMs) for Production'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 363
total_tokens: 599
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T06:11:48-05:00'
sources: []
---

**Situation:**  
In mid‑2024 I was leading the migration of our customer support chatbot from a large GPT‑4 deployment to an on‑premise solution because our compliance team flagged data‑leakage risks with cloud models.

**Task:**  
I had to design, train, and deploy a small language model (SLM) that could answer FAQs with 95 % accuracy while staying under 200 MB of RAM usage so it would run on our existing Linux servers.

**Action:**  
First, I curated a domain‑specific dataset from past ticket logs, cleaning 30k utterances and labeling intents. Using the Hugging Face 🤗 Transformers library, I fine‑tuned a DistilBERT base (≈66 M params) with LoRA adapters to reduce inference latency by 40 %. I then quantized the model to int8 with QLoRA, cutting size to 95 MB and improving throughput from 3.2 req/s to 7.5 req/s on our hardware. Finally, I wrapped it in a FastAPI microservice, added an adaptive caching layer, and set up A/B testing against the legacy GPT‑4 endpoint.

**Result:**  
The SLM handled 85% of queries autonomously, reducing ticket volume by 28% and cutting operational cost by $12k/month. User satisfaction scores rose from 82 % to 89 %. I learned that careful dataset curation, adapter fine‑tuning, and quantization can deliver production‑grade performance without sacrificing compliance or user experience.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
