---
qid: ing_3f266d8b29__star__local
question: 'Explain: Develop Your Own Vision Models in Minutes'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 407
total_tokens: 641
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T00:34:26-05:00'
sources: []
---

**Situation:**  
In my last role at a fintech startup, we had to prototype an image‑recognition feature for our mobile app—identifying receipts and extracting key fields—before the next investor demo in just two weeks.

**Task:**  
I needed to deliver a fully functional vision model that could classify receipt types with >90 % accuracy, run inference on-device (iOS/Android), and be ready for deployment in less than 48 hours.

**Action:**  
1. I started by collecting a small but diverse dataset of ~3,000 labeled receipts from public sources and synthetic augmentation (random crops, lighting changes).  
2. Instead of training from scratch, I used **FastAI’s transfer‑learning pipeline** on top of a pre‑trained EfficientNet‑B0. This reduced training time to under an hour while preserving high accuracy.  
3. I fine‑tuned the last two layers with differential learning rates and applied early stopping based on validation loss.  
4. For deployment, I exported the model to CoreML/TF Lite using FastAI’s `export()` utility, then wrapped it in a lightweight Swift/Kotlin inference wrapper that pre‑processes images at 224×224 and returns bounding boxes via a simple SSD head.  
5. Finally, I built an automated CI pipeline with GitHub Actions to run unit tests, linting, and bundle size checks on every push.

**Result:**  
The prototype achieved **92 % top‑1 accuracy** on a held‑out test set of 500 receipts, ran at ~15 ms per image on an iPhone 13, and was integrated into the demo app. The investors were impressed, and we secured a $2M seed round. I learned that leveraging pre‑trained models, rapid data augmentation, and automated deployment pipelines can turn “minutes” of work into production‑ready AI features.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
