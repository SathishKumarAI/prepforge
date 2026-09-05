---
qid: ing_ac39bda698__star__local
question: 'Explain: Predicting results — The Annotated ResNet-50 | Towards Data Science'
topic: Data Science
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 243
output_tokens: 342
total_tokens: 585
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T05:17:08-05:00'
sources: []
---

**Situation:**  
At my previous internship I was tasked with building a real‑time image classifier for a wildlife monitoring project. The dataset consisted of 12,000 camera trap photos, each labeled by experts as “deer,” “bear,” or “empty.” Accuracy had to be >85% before deployment on edge devices.

**Task:**  
I needed to train a model that could predict the animal species quickly while maintaining high precision, and also provide interpretable predictions so field scientists could trust the system.

**Action:**  
I chose ResNet‑50 as the backbone because of its proven balance between depth and computational cost. I used transfer learning: frozen first 30 layers, fine‑tuned the rest with a learning rate schedule (cosine annealing). To improve interpretability, I appended Grad‑CAM visualizations to each prediction, storing heatmaps alongside labels in an SQLite database for later review. I also implemented data augmentation (random flips, brightness jitter) to mitigate overfitting and used mixed‑precision training on a single RTX 3090.

**Result:**  
The final model achieved 88% top‑1 accuracy on the held‑out test set, surpassing the target by 3 points. The Grad‑CAM logs reduced false positives from 12% to 6%, as scientists could verify which image regions drove predictions. I learned how to blend performance with explainability and that a small fine‑tuning window can unlock a pre‑trained model’s full potential on domain‑specific data.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
