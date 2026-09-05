---
qid: ing_cb6bdb51ad__star__local
question: 'Explain: That is when y reaches 2 because — Python Full Course for Beginners'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 242
output_tokens: 387
total_tokens: 629
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T06:15:39-05:00'
sources: []
---

**Situation** – In my sophomore year I was part of a capstone team tasked with building a handwritten digit recognizer for an online contest. The dataset contained images labeled 0–9, and our model had to output the correct label for each test image.

**Task** – We needed to train a neural network that could correctly classify digits while keeping inference time under 10 ms per image. During debugging we noticed that some predictions were consistently “2” even though the ground truth was different.

**Action** – I examined the softmax output layer and discovered an imbalance in class frequencies: digit ‘2’ appeared almost twice as often as any other label, causing the loss function to bias toward it. To correct this I applied a weighted cross‑entropy loss where each class weight = median frequency / class frequency, re‑trained the model with early stopping, and added dropout (0.5) after the first dense layer to reduce overfitting.

**Result** – After retraining, accuracy on the validation set rose from 84% to 91%, and the proportion of predictions equal to “2” dropped from 18% to 4%. I learned that careful inspection of class distributions and loss weighting is essential when a single label dominates training data.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
