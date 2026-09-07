---
qid: ing_3823ce5645__aws__local
question: 'Explain: Summary — Transfer Learning in Keras with Computer Vision Models
  - MachineLearningMastery.com'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 529
total_tokens: 768
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T07:31:25-05:00'
sources: []
---

**Situation (S)**  
I was tasked to prototype a rapid image‑classification solution for a startup that had only 5 k labeled photos but needed sub‑minute inference on edge devices.

**Task (T)**  
Leverage transfer learning in Keras so we could build a model in under two days, maintain < 200 MB size, and hit ≥ 85 % accuracy on the target domain.

**Action (A)**  

1. **Model choice & AWS services** – Picked MobileNetV2 (pre‑trained ImageNet) as the backbone; it balances accuracy with 0.3 M parameters.  
   *AWS Lambda + S3* for inference, *Amazon SageMaker* for training and hyper‑parameter tuning.  
2. **Data prep & fine‑tuning** – Resized to 224×224, applied MixUp augmentation, froze the first 70 layers (≈ 90 % of parameters) then trained the top dense block for 10 epochs with a learning rate schedule.  
3. **Scalability & cost** – Used SageMaker’s `ml.m5.large` instance; training cost ~ $0.25/hr → total $2.50. Deployment via Lambda kept per‑invocation cost <$0.00003.  
4. **Availability** – Enabled multi‑region endpoints in SageMaker to reduce latency < 100 ms for global users.  

**Result (R)**  
Achieved 87 % top‑1 accuracy on the held‑out test set, a 3 % lift over baseline CNN, and reduced model size from 45 MB (full ResNet50) to 200 KB after quantization. End‑to‑end pipeline took < 48 h.

---

### Leadership Principles  
- **Customer Obsession** – Delivered a product that meets latency & cost constraints critical for the startup’s edge use case.  
- **Ownership** – Took end‑to‑end responsibility: data prep, model choice, deployment, and monitoring.  

### Bar‑raiser cues  
- Demonstrated *dive deep* by quantifying layer freezing strategy and learning‑rate schedule.  
- Showed *bias for action* with a 2‑day prototype timeline.  
- Quantified impact (accuracy lift, cost savings).  
- Reflected on failure: initial trial with ResNet50 overfitted; pivoted to MobileNetV2 and mixed‑up augmentation—learning about model capacity vs data size.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
