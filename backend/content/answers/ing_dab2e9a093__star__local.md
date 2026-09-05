---
qid: ing_dab2e9a093__star__local
question: 'Explain: Round 1: Practical LLM coding (45 minutes)'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 341
total_tokens: 580
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T06:45:26-05:00'
sources: []
---

**Situation** – In my last role at a fintech startup, we were building an AI‑powered compliance chatbot that needed to interpret regulatory language and respond accurately in real time. The first sprint was a “practical LLM coding” challenge: implement a fine‑tuned model within 45 minutes that could answer FAQs with a confidence score above 0.85.

**Task** – I had to set up the environment, load a pre‑trained transformer, apply domain‑specific adapters, and expose an inference endpoint—all while keeping latency under 200 ms for a production API.

**Action** – I started by spinning up a Docker container with PyTorch 2.0 and the Hugging Face Transformers library. Using LoRA adapters, I froze the base weights and trained only 1% of the parameters on our curated FAQ dataset (≈3k examples). I leveraged FastAPI to expose a lightweight REST endpoint and used ONNX Runtime for acceleration. To meet latency targets, I performed dynamic quantization and batch‑sized inference with torch.no_grad(). Finally, I added a simple confidence filter that routed low‑score responses to human review.

**Result** – The prototype achieved 0.87 accuracy on the validation set, 180 ms average latency, and reduced developer effort by 40% compared to a full fine‑tune. It also taught me how to balance model size, inference speed, and deployment constraints in a tight time window.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
