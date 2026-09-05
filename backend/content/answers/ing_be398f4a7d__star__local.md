---
qid: ing_be398f4a7d__star__local
question: 'Explain: The Final Linear and Softmax Layer — The Illustrated Transformer
  \u2013 Jay Alammar \u2013 Visualizing machine learning one concept at a time.'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 260
output_tokens: 369
total_tokens: 629
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T05:51:24-05:00'
sources: []
---

**Situation:**  
During my internship at a fintech startup, we were building an NLP model to classify customer support tickets into urgency categories (low, medium, high). Our training data was imbalanced—only 10% of tickets were “high” priority—and the model’s softmax output kept predicting “medium,” hurting SLA compliance.

**Task:**  
I had to redesign the final layers so that the transformer could produce calibrated probability scores for each class and reduce bias toward the majority class, while keeping inference latency under 50 ms per request.

**Action:**  
I added a learnable linear projection (Wₗ, bₗ) after the encoder’s pooled representation, then applied temperature‑scaled softmax:  
pᵢ = exp((zᵢ / τ)) / Σⱼ exp((zⱼ / τ)).  
I set τ=0.7 empirically to sharpen predictions on rare classes. I also incorporated class‑weighting in the cross‑entropy loss (w_high=3, w_medium=1, w_low=1) and used label smoothing (ε=0.1) to prevent overconfidence. Finally, I benchmarked the layer with TensorRT to ensure it met latency constraints.

**Result:**  
The adjusted softmax reduced “high” class misclassifications by 45%, raising overall F1 from 0.62 to 0.78 and improving SLA compliance by 30%. I learned that tuning temperature and loss weights can dramatically reshape a model’s probability distribution without sacrificing speed, and that a clear understanding of the final linear‑softmax pipeline is essential for deploying robust NLP systems.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
