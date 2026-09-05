---
qid: ing_deeb69eff4__star__local
question: 'Explain: Multimodal Models - Interview Questions'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 317
total_tokens: 551
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T06:54:35-05:00'
sources: []
---

**Situation**  
In my last role at a fintech startup, we were building an automated customer support chatbot that needed to understand both text and voice inputs. The existing NLP model handled text well but failed when users sent audio recordings, causing a 35% drop in first‑contact resolution.

**Task**  
I was tasked with designing a multimodal solution that could fuse speech and textual data so the bot could interpret user intent accurately regardless of input format, aiming to lift resolution rates by at least 20%.

**Action**  
I chose an encoder–decoder architecture: a wav2vec 2.0 backbone for audio embeddings, a BERT encoder for text, and a cross‑modal attention layer that merged the two streams before feeding them into a transformer decoder generating responses. I used PyTorch Lightning for training, integrated with Ray Tune to optimize hyperparameters across GPUs. To keep latency low, I pruned the audio encoder to 8 layers and quantized the model to INT8, which reduced inference time by 40 ms.

**Result**  
The multimodal bot increased first‑contact resolution from 65% to 84% within two weeks of deployment, a 19-point lift. It also cut average handling time by 12%. I learned that carefully balancing model complexity with latency is critical in real‑time applications, and that cross‑modal attention can dramatically improve intent recognition when both modalities are present.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
