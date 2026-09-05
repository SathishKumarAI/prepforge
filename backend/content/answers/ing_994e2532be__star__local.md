---
qid: ing_994e2532be__star__local
question: DeepSeek-Math reported similar results. How is your work different?
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 356
total_tokens: 596
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T04:39:13-05:00'
sources: []
---

**Situation**  
During my PhD I was tasked with building a proof‑generation model for the new OpenMath library. The team had just released DeepSeek‑Math, which already achieved state‑of‑the‑art accuracy on theorem‑proving benchmarks. Our goal was to push the boundary by integrating symbolic reasoning into the neural pipeline.

**Task**  
I needed to design an architecture that not only matched DeepSeek‑Math’s performance but also reduced hallucinations and improved explainability for domain experts, while keeping inference latency below 200 ms on a single GPU.

**Action**  
I built a hybrid transformer–symbolic system: the encoder is a RoBERTa base fine‑tuned on 2 M annotated proofs; the decoder incorporates a lightweight symbolic engine that enforces type constraints after each generation step. I introduced a curriculum‑learning schedule where the model first learns simple induction steps, then progressively harder lemmas. For explainability, I added a provenance layer that outputs proof trees alongside generated text. We trained on 4 GPUs for 48 h, using mixed precision and gradient checkpointing to stay memory‑efficient.

**Result**  
On the standard MathDataset benchmark our model achieved **87.3 % exact‑match accuracy**, surpassing DeepSeek‑Math’s 84.5 %. Hallucination rate dropped from 12 % to 4 %, and inference latency remained under 180 ms. The experiment taught me that tightly coupling neural generation with symbolic constraints yields both higher precision and greater trustworthiness in mathematical AI.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
