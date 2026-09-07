---
qid: ing_c289ca8115__faang__local
question: 'Explain: Scenario 5: Design an AI-powered content moderation system'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 515
total_tokens: 750
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T02:13:25-05:00'
sources: []
---

**Clarify**  
You’re asked to sketch a high‑level design for an *AI‑powered content moderation* platform that screens user‑generated text, images, and video in real time.  
Key assumptions:  
- Scale of millions of posts per second.  
- Multiple modalities (text, image, audio).  
- Must comply with privacy laws and provide human review fallback.  

**Approach**  
1. **Data ingestion layer** – Kafka topics for each modality; a microservice streams to the AI pipeline.  
2. **Feature extraction** – separate encoders: BERT‑style transformer for text, ResNet/CLIP for images, Wav2Vec for audio.  
3. **Classification engine** – a multi‑label neural net (e.g., a Transformer with modality adapters) that outputs risk scores per policy rule.  
4. **Policy & rules engine** – interpretable rule set (regexes, hate‑speech dictionaries) that can override or augment AI decisions.  
5. **Human review queue** – items above a confidence threshold are routed to moderators; feedback is looped back as labels for continual learning.  
6. **Serving layer** – low‑latency REST/GRPC endpoints with caching (Redis) and rate limiting.

**Depth**  
- Use *model distillation* for edge inference on CDN nodes, reducing latency from ~200 ms to <50 ms.  
- Batch requests in micro‑batches of 32–64 to amortize GPU overhead.  
- Training pipeline employs continual learning: new moderation decisions are periodically merged into a nightly retrain job (≈12 h).  
- Explainability via SHAP values for each flagged content piece, displayed to moderators.

**Edge Cases**  
- Adversarial prompts that fool the model; mitigate with adversarial training.  
- Mixed‑modality posts (e.g., image + caption) – ensure consistent scoring across modalities.  
- Privacy: strip PII before feeding models; use differential privacy during training.

**Optimize & Communicate**  
Explain trade‑offs: heavier models = better accuracy but higher cost and latency; distillation balances this. Highlight that the system is modular, allowing A/B testing of new encoders without disrupting the pipeline. Conclude by stressing continuous monitoring (latency, false positives/negatives) and a feedback loop to keep the model fresh.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
