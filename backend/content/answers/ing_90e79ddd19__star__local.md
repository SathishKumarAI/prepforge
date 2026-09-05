---
qid: ing_90e79ddd19__star__local
question: 'Explain: Large-Language Models — ''The Open Source AI Stack'''
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 371
total_tokens: 610
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T04:22:40-05:00'
sources: []
---

**Situation:** In my last role at a fintech startup, we were building an automated customer support chatbot that needed natural language understanding for hundreds of product‑specific queries. Our existing proprietary NLP pipeline was slow to update and couldn’t keep up with the evolving regulatory language.

**Task:** I had to design a new architecture that leveraged state‑of‑the‑art large‑language models (LLMs) while keeping everything open source so we could customize, audit, and scale it without vendor lock‑in.

**Action:** First, I evaluated Hugging Face’s Transformers library against OpenAI’s GPT‑4 API, focusing on latency, cost, and model size. I chose the 7B Llama‑2 model for its balance of performance and GPU footprint. Using Docker and Kubernetes, I containerized the inference server with TorchServe, exposing a RESTful endpoint. I integrated it into our existing microservices stack (Python FastAPI + PostgreSQL) and added an on‑premise data‑pipeline that tokenizes user queries, passes them to the LLM, then post‑processes the response for compliance tags. To ensure reproducibility, I used GitHub Actions to train fine‑tuned checkpoints on our proprietary FAQ dataset, storing weights in a private S3 bucket.

**Result:** The new chatbot cut average response time from 4 s (rule‑based) to under 800 ms and increased customer satisfaction scores by 18%. Cost per query dropped 30% because we avoided API call fees. I learned that an open‑source stack not only gives you control over data privacy but also enables rapid iteration—critical for AI products in regulated industries.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
