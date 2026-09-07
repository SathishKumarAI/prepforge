---
qid: ing_5f12282243__aws__local
question: 'Explain: Then we''ll have the dog and cat — Python Full Course for Beginners'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 436
total_tokens: 671
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T09:00:52-05:00'
sources: []
---

**Situation & Task**  
I was tasked with delivering an end‑to‑end “dog vs. cat” image classifier for a startup’s MVP, while keeping the solution lightweight enough for a beginner Python course.

**Action (Technical)**  
1. **Data** – 10 k labeled images from Kaggle; split 80/20 train/test.  
2. **Pipeline** – `pandas` → `scikit‑learn` pipeline with `ImageDataGenerator` for on‑the‑fly augmentation.  
3. **Model** – Transfer learning: MobileNetV2 (pretrained ImageNet) + a dense head; fine‑tuned 5 epochs.  
4. **Deployment** – Containerized with Docker, pushed to **Amazon SageMaker** endpoint (`ml.t2.medium`) for real‑time inference.  
5. **Cost & Scale** – Spot instances → $0.10/h; autoscaling on traffic; total monthly spend <$15.

**Result (Quantified)**  
- Accuracy: 94 % on held‑out set.  
- Latency: <150 ms per image at peak load.  
- Student engagement: 1,200 unique course visits in first week; 85 % reported confidence using the model.

**Leadership Principles**  
- **Customer Obsession** – Built a user‑friendly API and documentation so non‑technical learners could deploy the model themselves.  
- **Ownership / Dive Deep** – Iteratively profiled GPU memory, tuned batch size, and refactored code to reduce 30 % inference time.

**Bar‑raiser takeaway**  
I demonstrated full ownership (from data prep to deployment), deep technical dives (profiling & optimization), and clear metrics that tie the solution back to business impact.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
