---
qid: ing_8432d2ec2d__star__local
question: 'Explain: Recent — METR'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 481
total_tokens: 713
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T03:57:48-05:00'
sources: []
---

**Situation:**  
When I joined the smart‑city analytics team at CityData Labs, we were tasked with improving real‑time traffic forecasting for Los Angeles. The benchmark dataset we used was METR‑LA, a high‑frequency sensor network that records vehicle speeds every 5 minutes across 325 road segments.

**Task:**  
I had to design a model that reduced the root‑mean‑square error (RMSE) on the test set below the industry baseline of 12.4 km/h while keeping inference latency under 200 ms so it could run on edge devices at each traffic light.

**Action:**  
I started by profiling the dataset and discovered that 17 % of the segments were highly seasonal. I engineered a “time‑of‑day” embedding and added a graph convolutional layer to capture spatial correlations between neighboring sensors. For training, I used a custom loss that weighted recent time steps more heavily (exponential decay), which aligned with our real‑time objective. To meet latency constraints, I quantized the model to 8‑bit weights after training and deployed it on an NVIDIA Jetson Nano, using TensorRT for acceleration.

**Result:**  
The final model achieved an RMSE of 10.7 km/h— a 13 % improvement over the baseline—and inference time dropped to 145 ms per segment. The deployment also reduced cloud bandwidth usage by 60 %. I learned that careful data‑driven feature engineering combined with lightweight model optimization can deliver both accuracy and operational feasibility in real‑world traffic systems.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
