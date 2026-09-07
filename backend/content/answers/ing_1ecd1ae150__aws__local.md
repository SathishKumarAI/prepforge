---
qid: ing_1ecd1ae150__aws__local
question: 'Explain: Designing a Convolutional Neural Network'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 228
output_tokens: 459
total_tokens: 687
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T06:37:03-05:00'
sources: []
---

**Situation & Task**  
At my last role I led a product‑vision team that needed to classify medical images in real time for an FDA‑cleared diagnostic app. The goal was a CNN that delivered > 95 % accuracy while keeping inference latency under 200 ms on edge devices.

**Action (Technical Design)**  
I scoped the problem, defined the data pipeline, and chose **SageMaker** for training, **Neptune.ai** for experiment tracking, and **ECR + ECS Fargate** for deployment. The architecture was a depth‑wise separable CNN inspired by MobileNetV2, which cut parameters by 70 % vs a ResNet baseline. I added a **batch‑norm** layer after each block to stabilize training and used **label smoothing** to reduce overfitting. For scalability, the training job spun up **8 GPU instances (P4d)** in parallel; inference was served through an **Elastic Inference** endpoint with auto‑scaling on CPU spikes.

**Result**  
We achieved 96.3 % top‑1 accuracy and 150 ms latency on a Pixel 6 device—meeting regulatory specs. Cost dropped from $2,400/month to $920/month due to the lightweight model. The deployment pipeline is now CI/CD‑driven; any new data triggers a retraining job automatically.

**Reflection (Bar‑raiser cues)**  
- **Ownership**: I owned the end‑to‑end ML lifecycle and coordinated cross‑function teams.  
- **Dive Deep**: I benchmarked multiple architectures, profiled GPU usage, and tuned hyperparameters based on empirical results.  
- **Quantified Impact**: Accuracy lift (+1.3 %) and cost savings (−63 %).  
- **Learning from Failure**: Early prototypes over‑fitted; we introduced data augmentation and early stopping—an iterative lesson that now informs all subsequent projects.

---

*Leadership Principles invoked:* Customer Obsession, Ownership, Dive Deep, Deliver Results.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
