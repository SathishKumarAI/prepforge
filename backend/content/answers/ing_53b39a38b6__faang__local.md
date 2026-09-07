---
qid: ing_53b39a38b6__faang__local
question: 'Explain: Design the harmful-content detection system for Facebook and Instagram
  uploads.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 471
total_tokens: 707
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T21:58:49-05:00'
sources: []
---

**Clarify**  
We need an end‑to‑end pipeline that flags or blocks user‑generated images, videos, audio, and text on Facebook/Instagram when they contain harmful content (violence, hate, sexual exploitation, etc.).  
Assumptions: 1) Real‑time detection is required; 2) Models must respect privacy & legal constraints; 3) False positives should be minimal to avoid censoring legitimate content; 4) System scales to billions of uploads per day.

**Approach**  
1. **Pre‑processing** – normalize media, extract metadata (EXIF, captions, comments).  
2. **Multimodal inference** – run parallel models: image CNN + video transformer, audio spectrogram net, NLP text classifier. Fuse logits via attention‑based aggregator.  
3. **Contextual filtering** – compare against user’s history, community standards, and global thresholds.  
4. **Human review queue** – flag high‑risk or ambiguous cases for moderation.  
5. **Feedback loop** – retrain on human decisions; adjust thresholds per region.

**Depth**  
- *Model choice*: ResNet‑50 + CLIP for images, SlowFast + ViViT for videos, Wav2Vec for audio, BERT/Longformer for text. Ensemble via weighted sum with dynamic weighting based on confidence scores.  
- *Complexity*: Inference ~ 200 ms per media item; batch processing reduces GPU utilization.  
- *Trade‑offs*: Larger models → higher accuracy but latency; smaller models → faster but more false positives.

**Edge Cases**  
- Non‑English captions, low‑resolution images, heavily compressed videos, subliminal content (deepfakes).  
- Test with synthetic adversarial examples and edge‑region datasets to ensure robustness.

**Optimize & Communicate**  
- Use model distillation + quantization for mobile inference.  
- Implement A/B tests on threshold adjustments; report precision/recall per category.  
- Document decision rationale for regulators, maintaining transparency in moderation policies.  

This structured pipeline balances speed, accuracy, and fairness—key metrics for a FAANG‑grade harmful‑content detection system.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
