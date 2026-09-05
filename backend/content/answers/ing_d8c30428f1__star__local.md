---
qid: ing_d8c30428f1__star__local
question: 'Explain: Compaction — Context Engineering'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 320
total_tokens: 552
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T06:42:27-05:00'
sources: []
---

**Situation:**  
At my previous startup we were building a conversational AI for a customer‑support chatbot that had to handle over 10,000 distinct intents while keeping latency under 150 ms on an on‑prem GPU cluster.

**Task:**  
I was tasked with reducing the model’s memory footprint and inference time without losing more than 1.5 % of accuracy so we could deploy it on our edge devices.

**Action:**  
First I performed *context engineering* by pruning redundant tokens from each intent’s prompt template—removing generic qualifiers that didn’t affect the semantic meaning. Then I applied a *compaction* technique: token‑level clustering using k‑means to merge highly similar context vectors, followed by weight sharing across merged clusters in the transformer layers. I used Hugging Face’s `bitsandbytes` library for 4‑bit quantization and TensorRT for optimized inference. Finally, I introduced a dynamic prompt length scheduler that trimmed the context on-the-fly based on user intent confidence.

**Result:**  
The model size dropped from 3.2 GB to 1.0 GB, inference latency fell to 90 ms, and overall accuracy remained at 94.8 % (only a 0.7 % drop). I learned that careful context pruning combined with cluster‑based weight sharing can dramatically improve efficiency while preserving performance—an essential trade‑off for production AI systems.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
