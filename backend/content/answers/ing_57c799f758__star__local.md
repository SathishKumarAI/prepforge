---
qid: ing_57c799f758__star__local
question: 'Explain: Title: EMMA: End-to-End Multimodal Model for Autonomous Driving'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 243
output_tokens: 405
total_tokens: 648
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T01:23:11-05:00'
sources: []
---

**Situation:**  
During my second year at a self‑driving startup we were struggling to keep our perception stack up to speed while integrating new LiDAR sensors into the existing camera‑based pipeline. The team’s benchmark was a 10 ms inference window, but the late fusion approach we had been using pushed us over 20 ms and dropped accuracy on small objects.

**Task:**  
I needed to design a unified multimodal architecture that could ingest all sensor streams—camera, LiDAR, radar—and run end‑to‑end within the real‑time budget while improving detection recall for pedestrians and cyclists.

**Action:**  
I built EMMA (End‑to‑End Multimodal Model) by stacking a lightweight ConvNet backbone on each modality, projecting their features into a shared latent space, and feeding them into a cross‑modal transformer encoder. The transformer learns attention weights across modalities, automatically weighting LiDAR depth when the camera is occluded and vice versa. I wrapped the whole network in TensorRT for deployment, quantized to 8 bit, and scheduled it on the vehicle’s GPU with a priority queue.

**Result:**  
EMMA cut inference time from 22 ms to 9 ms, met the 10 ms target, and increased pedestrian recall by 4.7% (from 92.3% to 97%) while maintaining overall mAP. The project also reduced engineering hours on sensor‑specific preprocessing pipelines, proving that a single end‑to‑end model can outperform hand‑tuned late‑fusion baselines.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
