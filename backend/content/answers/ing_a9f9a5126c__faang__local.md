---
qid: ing_a9f9a5126c__faang__local
question: 'Explain: Computer Vision Interview Questions — Ml Interview Prep'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 605
total_tokens: 838
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T01:19:22-05:00'
sources: []
---

**Clarify**  
You’re asking for the *most common* computer‑vision questions a hiring manager might pose in an ML interview and how you’d answer them. I’ll assume they want concise, technically correct responses that show depth, not just buzzwords.

**Approach**  
1. List 4–5 canonical CV questions (e.g., “What’s the difference between CNNs and R‑CNNs?”).  
2. For each give a short explanation plus why it matters in practice.  
3. End with a quick note on how you’d validate your answers during an interview.

**Depth**

| Question | Core Answer |
|----------|-------------|
| **1. What is the role of convolution in a CNN?** | A convolution applies learnable kernels that act as feature detectors (edges, textures). By sliding them over spatially local patches, we preserve locality and achieve parameter sharing, which dramatically reduces model size while capturing translation invariance. |
| **2. How do you handle class imbalance in image classification?** | Use a combination of data‑level techniques (oversample minority classes, apply SMOTE for images) and algorithmic tricks (class‑weighted loss or focal loss to down‑weight easy negatives). Validate with per‑class metrics rather than overall accuracy. |
| **3. Explain non‑maximum suppression (NMS).** | NMS removes redundant bounding boxes by selecting the highest‑scoring box, then discarding all others that overlap it beyond a threshold (IoU > 0.5 typical). It trades recall for precision and is essential after region proposal networks or object detectors like YOLO/SSD. |
| **4. What are feature pyramids?** | A pyramid aggregates multi‑scale features (e.g., FPN) so that small objects can be detected using high‑resolution maps while large objects use low‑resolution, semantically strong maps. It improves detection across scales without increasing inference cost dramatically. |
| **5. Why is data augmentation important in CV?** | Augmentation expands the training distribution, mitigating overfitting and improving generalization. Common ops: random crops, flips, color jitter, CutMix/ MixUp. It also simulates real‑world variations (lighting, occlusion). |

**Edge Cases**  
- Over‑aggressive NMS can drop true positives in crowded scenes.  
- Class‑weighted loss may under‑train minority classes if weights are too high.  
- Augmentations like rotation might break orientation‑sensitive tasks.

**Optimize & Communicate**  
Highlight trade‑offs (e.g., FPN adds a few layers but boosts mAP >10%). Show you can quantify improvements with ablation studies. When narrating, start each answer with the “why” before diving into the mechanics—this keeps interviewers engaged and demonstrates holistic understanding.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
