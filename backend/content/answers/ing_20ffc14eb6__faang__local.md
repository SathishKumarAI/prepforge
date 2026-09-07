---
qid: ing_20ffc14eb6__faang__local
question: 'Explain: Tyres (except car tyres), Rims and Oversized Items (Automobiles)'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 242
output_tokens: 570
total_tokens: 812
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T20:01:42-05:00'
sources: []
---

**Problem Clarification**  
We need a model that can *classify* automotive parts in an image:  
- **Tyres** – all non‑car tyres (e.g., truck, bus, off‑road).  
- **Rims** – the metal wheel hubs.  
- **Oversized items** – any component larger than a standard car tyre (heavy‑duty wheels, industrial rims, etc.).  
Assumptions: we have labeled images for each class; images are RGB and contain one primary object per frame.

---

### 1. Approach

| Step | Action |
|------|--------|
| **Data prep** | Resize to 224×224, normalize, augment (rotate, scale, color jitter). |
| **Feature extractor** | Pre‑train a ResNet‑50 or EfficientNet‑B0 on ImageNet; fine‑tune on our dataset. |
| **Head** | Replace the final FC layer with a 3‑class softmax. |
| **Loss & optimizer** | Cross‑entropy + AdamW, learning rate scheduler (cosine anneal). |
| **Evaluation** | Top‑1 accuracy, confusion matrix; monitor per‑class precision/recall. |

---

### 2. Depth

- **Training loop**: epoch‑wise forward/backward pass, gradient clipping at 5.  
- **Regularization**: weight decay (0.01), dropout (p=0.3) after the penultimate layer.  
- **Complexity**: inference ≈ 1–2 ms per image on a GPU; memory ~ 200 MB.  

---

### 3. Edge Cases

| Case | Issue | Mitigation |
|------|-------|------------|
| Extremely low‑light images | Poor feature extraction | Add histogram equalization, train with synthetic lighting augmentation. |
| Overlapping objects (rim inside tyre) | Class confusion | Use bounding‑box annotations + multi‑label loss or cascade detector → classifier. |
| Very small tyres in a large frame | Scale variance | Multi‑scale training and test time pooling. |

---

### 4. Optimization & Communication

- **Speed**: Quantize to INT8 after fine‑tuning; use TensorRT for deployment.  
- **Explainability**: Grad‑CAM visualizations to show model focus on rim vs tyre edges.  
- **Narrative**: “We first confirm the data distribution, then leverage a proven backbone, fine‑tune carefully, and finally validate against realistic edge cases. Optimizing inference with quantization keeps latency low while maintaining > 92% accuracy.”

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
