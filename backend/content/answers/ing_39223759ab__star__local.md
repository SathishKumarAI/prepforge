---
qid: ing_39223759ab__star__local
question: 'Explain: Model Sizes — Llm Internals'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 348
total_tokens: 582
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T00:22:59-05:00'
sources: []
---

**Situation:**  
At my previous startup, we were building an on‑device chatbot for a smart‑watch platform. The watch’s CPU could only handle models under 30 MB, but our base GPT‑2 model was 500 MB and ran in seconds on cloud GPUs.

**Task:**  
I needed to shrink the language model to fit the device without losing conversational quality, while keeping inference latency below 200 ms per turn.

**Action:**  
First, I benchmarked token‑level perplexity across several checkpoints of a distilled GPT‑2 (distilGPT‑2) and found a 3× size reduction with only 4% loss in perplexity. Next, I applied weight quantization to int8, which cut the model size by another 50 % and reduced memory bandwidth. To maintain fluency, I fine‑tuned on a curated watch‑friendly dataset for two epochs, monitoring BLEU scores every epoch. Finally, I wrapped the inference in a C++ runtime with tensorRT optimization, enabling batch‑size‑1 execution within 150 ms.

**Result:**  
The final model was 12 MB, ran at 140 ms per response, and achieved an average perplexity of 28.7 versus 32.3 on the full model—an acceptable trade‑off. I learned that careful checkpoint selection, quantization, and runtime tuning can reconcile size constraints with user experience.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
