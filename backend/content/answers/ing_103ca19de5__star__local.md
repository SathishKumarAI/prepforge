---
qid: ing_103ca19de5__star__local
question: 'Explain: In Scope — Socialnetworkfacebookinstagram'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 348
total_tokens: 583
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T23:00:43-05:00'
sources: []
---

**Situation:**  
At a startup we were building an automated image‑tagging service for a new photo‑sharing app that aimed to compete with Instagram’s quick upload flow. Our initial model was trained on generic ImageNet data and produced only ~45 % top‑1 accuracy on user photos, causing low engagement.

**Task:**  
I had to boost the tagging accuracy to at least 80 % while keeping inference latency under 200 ms per image so that uploads remained instant.

**Action:**  
First, I collected a labeled dataset of 300k in‑app images using crowdsourced annotations. Then I switched from a vanilla ResNet-50 to EfficientNet‑B3 for better parameter efficiency. To reduce inference time, I applied TensorRT optimizations and quantized the model to INT8, which cut runtime by ~35 %. I also implemented a two‑stage pipeline: a lightweight feature extractor that filters out non‑photographic content, followed by the full model only on relevant images. Finally, I set up an A/B test harness in our CI/CD pipeline to evaluate precision/recall continuously.

**Result:**  
Accuracy jumped from 45 % to 82 % top‑1 while inference stayed below 180 ms. User engagement metrics rose 25 % in the first month, and we reduced server cost by ~15 % thanks to the lighter model. I learned that domain‑specific data curation and careful hardware-aware optimization are key for production ML at scale.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
