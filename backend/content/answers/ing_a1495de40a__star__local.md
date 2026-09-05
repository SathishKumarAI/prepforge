---
qid: ing_a1495de40a__star__local
question: 'Explain: Finetuning Large Language Models - DeepLearning.AI'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 333
total_tokens: 571
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T04:55:19-05:00'
sources: []
---

**Situation** – In my last role at a fintech startup we had an internal chatbot that answered compliance questions. The baseline GPT‑4 model was great at language but it often gave vague or policy‑incorrect answers because our domain vocabulary and regulatory nuances were missing.

**Task** – I needed to finetune the LLM so it could reliably provide accurate, policy‑compliant responses while keeping inference latency under 200 ms for our live chat service.

**Action** – I assembled a curated dataset of ~12k labeled compliance Q&A pairs from internal auditors and legal docs. Using Hugging Face Transformers and the LoRA (Low‑Rank Adaptation) technique, I added only 0.3 % trainable parameters to the base model, drastically reducing GPU memory usage. I trained on an A100 for 4 epochs with mixed precision, monitoring validation loss and a custom compliance‑accuracy metric. After training, I deployed the fine‑tuned checkpoint via TorchServe behind our CDN, ensuring that each request hit a single GPU node.

**Result** – The updated model achieved 92 % compliance accuracy versus 68 % baseline, reduced hallucination rate by 70 %, and maintained sub‑200 ms latency. This allowed us to launch the bot in production with confidence, and I learned how LoRA lets you adapt massive models cost‑effectively while preserving real‑time performance.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
