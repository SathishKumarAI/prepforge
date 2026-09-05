---
qid: ing_51e47390ae__star__local
question: 'Explain: Car Parts and Accessories, Bike Parts and Accessories, Helmets
  and other Protective Gear, Vehicle Electronics'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 247
output_tokens: 398
total_tokens: 645
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T01:12:09-05:00'
sources: []
---

**Situation:**  
When I joined my previous company, the e‑commerce platform was handling over 200 k SKUs across four major product families: car parts, bike parts, helmets & protective gear, and vehicle electronics. The search engine returned irrelevant results because many items were mislabeled or grouped incorrectly, causing a 12% drop in conversion.

**Task:**  
I was tasked with building an automated classification system that would accurately tag each SKU into the correct category and sub‑category, improve search relevance, and reduce manual tagging effort by at least 70%.

**Action:**  
I gathered a labeled dataset of 30 k product titles/descriptions and extracted features using TF‑IDF combined with word embeddings (FastText). I then trained an XGBoost model as the baseline, but found its performance plateaued. Switching to a transformer‑based classifier (DistilBERT fine‑tuned on our domain corpus) boosted accuracy from 84% to 94%. To handle edge cases (e.g., “bike frame alloy” vs. “car suspension”), I added a rule‑based post‑processing layer that checked for key tokens and adjusted probabilities accordingly. The model was packaged into a microservice with an inference latency of <50 ms, deployed via Kubernetes, and integrated into the product search pipeline.

**Result:**  
Post‑deployment, category accuracy rose to 96%, improving search click‑through by 18% and boosting sales in the four families by 15% within three months. I also cut manual labeling time from 3 hours per batch to under 30 minutes, freeing up the product team for higher‑value work. The project taught me how to blend deep learning with rule‑based logic to meet real‑world performance constraints.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
