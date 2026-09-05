---
qid: ing_09a9ec5398__star__local
question: 'Explain: Company context — Microsoft'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 231
output_tokens: 313
total_tokens: 544
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T22:48:20-05:00'
sources: []
---

**Situation** – In early 2024 I was part of the Azure Cognitive Services team that was tasked with improving the accuracy of our image‑recognition API for a Fortune 500 retailer who had reported a 12% error rate in product classification during peak shopping periods.

**Task** – My goal was to reduce the misclassification rate below 5% while keeping inference latency under 150 ms per request, so the retailer could deploy the service on their mobile app without user friction.

**Action** – I led a cross‑functional squad that first audited the existing ResNet‑50 model and identified overfitting on the retailer’s proprietary dataset. We collected an additional 200K annotated images from their catalog, applied MixUp data augmentation, and fine‑tuned a lightweight MobileNetV3 architecture on Azure ML with hyperparameter sweeps via Optuna. To meet latency constraints, we exported the trained model to ONNX and deployed it in a containerized microservice behind Azure Front Door, using GPU‑optimized A100 instances and caching hot paths.

**Result** – The new pipeline cut classification errors from 12% to 3.7%, a 69% relative improvement, while latency dropped to an average of 110 ms. The retailer saw a 15% lift in conversion during the holiday season. I learned that balancing model complexity with deployment constraints often requires iterative prototyping and close collaboration between data scientists and DevOps engineers.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
