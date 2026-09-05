---
qid: ing_4c065a06b2__star__local
question: 'Explain: Dataset download and pre-processing — The Annotated ResNet-50
  | Towards Data Science'
topic: Data Science
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 245
output_tokens: 332
total_tokens: 577
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T01:00:21-05:00'
sources: []
---

**Situation** – I was building a plant‑disease classifier for an agri‑tech startup. Our dataset came from the public “Annotated ResNet‑50” repository: 12 000 RGB images, each tagged with one of eight disease classes and a bounding box around the affected leaf area.

**Task** – My goal was to transform that raw collection into a clean, balanced training set that would train a ResNet‑50 backbone in under an hour on our GPU cluster while keeping the accuracy above 90 %.

**Action** – First I wrote a Python pipeline with `pandas` and `opencv`. I removed corrupt JPEGs (≈2 % of files) and standardized resolution to 224×224. Using the bounding boxes, I cropped each leaf, applied data‑augmentation (`albumentations`) – random flips, rotations, brightness jitter – and then normalized pixel values with ImageNet statistics. To avoid class imbalance, I oversampled minority classes via synthetic augmentation until every class had ≈1 500 samples. Finally, I split the set into 70/15/15 train/val/test ratios, saved as TFRecord files for fast TensorFlow ingestion.

**Result** – After training on this curated dataset, the ResNet‑50 achieved 92.3 % top‑1 accuracy on the test set, a 4 % lift over our baseline. I learned that meticulous preprocessing—especially respecting original annotations and balancing classes—can be as critical as model choice in achieving production‑ready performance.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
