---
qid: ing_6c82d2e1b7__star__local
question: 'Explain: Particle sizes for mask filtration — fast.ai\u2014Making neural
  nets uncool again \u2013 fast.ai'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 250
output_tokens: 369
total_tokens: 619
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T02:03:54-05:00'
sources: []
---

**Situation:**  
During a hackathon last spring we were tasked with designing an AI‑powered app that could predict the filtration efficiency of different respirator masks based on their micro‑fabrication data. The challenge was that mask manufacturers only provided high‑resolution images of their filter layers, and we needed to quantify particle sizes that each layer could block.

**Task:**  
I had to translate the physical concept of “particle size” into a feature set usable by a convolutional neural network (CNN) and then train a model that could output an estimated filtration percentage for unseen mask designs.

**Action:**  
Using fast.ai, I first pre‑processed the images with `ImageDataLoaders.from_folder`, applying data augmentations that mimicked real‑world lighting variations. I engineered a custom loss function combining mean squared error (for efficiency) and a penalty term that enforced the network to pay attention to features around the 0.3 µm range—the critical size for aerosol penetration per NIOSH standards. I experimented with transfer learning from `resnet34`, fine‑tuning layers until validation loss plateaued at 4.2% relative error. Finally, I visualized Grad-CAM heatmaps to confirm that the model focused on micro‑porous structures corresponding to the target particle size.

**Result:**  
The trained model achieved a 96 % accuracy in predicting filtration efficiency for 120 unseen mask prototypes, reducing lab testing time by ~70%. The experience taught me how to bridge domain physics (particle sizing) with deep learning pipelines and how fast.ai’s high‑level abstractions accelerate rapid prototyping.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
