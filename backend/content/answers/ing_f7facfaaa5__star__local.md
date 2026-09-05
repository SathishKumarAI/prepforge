---
qid: ing_f7facfaaa5__star__local
question: 'Explain: Augmentation — The Annotated ResNet-50 | Towards Data Science'
topic: Data Science
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 242
output_tokens: 301
total_tokens: 543
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T07:44:46-05:00'
sources: []
---

**Situation** – In a Kaggle competition for diabetic retinopathy detection, our baseline ResNet‑50 model scored only 0.78 AUC on the validation set because the dataset was heavily imbalanced and the images were low‑resolution.

**Task** – I had to boost performance without overfitting, so my goal was to augment the training data in a way that preserved pathological features while increasing diversity.

**Action** – I wrapped ResNet‑50 in a custom `torchvision.transforms` pipeline. First, I applied random horizontal flips and rotations (±15°) to mimic camera angle variations. Then I used color jittering (brightness ±0.2, contrast ±0.3) and Gaussian noise with σ=0.01 to emulate lighting changes. To maintain disease annotations, I added a CLAHE step that enhanced vessel visibility without altering lesion labels. Finally, I employed mix‑up and cut‑mix strategies at 10% probability each, generating blended samples while preserving label consistency through weighted averaging.

**Result** – The augmented model achieved an AUC of **0.87** on the holdout set—a 9% lift—while reducing variance across folds. I learned that carefully designed augmentation can both regularize and enrich feature learning when paired with a strong backbone like ResNet‑50.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
