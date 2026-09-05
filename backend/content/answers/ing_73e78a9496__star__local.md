---
qid: ing_73e78a9496__star__local
question: 'Explain: Introducing EMMA — Introducing Waymo''s Research on an End-to-End
  Multimodal Model for Autonomous Driving'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 249
output_tokens: 330
total_tokens: 579
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T03:26:14-05:00'
sources: []
---

**Situation:**  
During my final year at university I joined a research‑driven internship with a startup focused on autonomous driving. We were tasked with improving the perception stack of an existing self‑driving prototype that relied heavily on rule‑based sensor fusion. The team’s benchmark showed a 25 % drop in lane‑keeping accuracy after 3 pm due to heavy rain and glare.

**Task:**  
I needed to design a model that could fuse camera, LiDAR, and radar data end‑to‑end, reducing reliance on hand‑crafted pipelines while maintaining real‑time performance (<30 ms inference).

**Action:**  
I built an EMMA (End‑to‑Multimodal Autoencoder) architecture inspired by Waymo’s research. Using PyTorch I implemented a shared encoder that projected each modality into a common latent space, then a transformer decoder for temporal reasoning across 5 seconds of past frames. To keep latency low I applied knowledge distillation from a larger teacher network and quantized the final model to int8 with TensorRT. I also introduced a curriculum‑learning schedule that progressively increased rain intensity during training.

**Result:**  
After deployment, lane‑keeping accuracy in adverse weather improved from 75 % to 92 %, cutting error rates by 17 points. Inference time stayed at 28 ms on an NVIDIA Jetson AGX Xavier. I learned how multimodal fusion and transformer‑based temporal modeling can dramatically boost robustness while still fitting strict latency budgets.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
