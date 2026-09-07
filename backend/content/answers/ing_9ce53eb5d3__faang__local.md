---
qid: ing_9ce53eb5d3__faang__local
question: 'Explain: Waymo System Design — Ai Companies Interview Questions'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 484
total_tokens: 717
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T00:48:46-05:00'
sources: []
---

**1️⃣ Clarify**  
We’re asked to explain *Waymo’s system design*—the end‑to‑end architecture that lets its autonomous cars navigate safely.  
Assumptions:  
- Focus on perception → planning → control, not legal or business layers.  
- Real‑time constraints (≈10 Hz) and safety certification are critical.

**2️⃣ Approach**  
Outline the pipeline:  
1. **Sensor fusion** (LiDAR, radar, cameras).  
2. **Perception & mapping** (semantic segmentation, object detection, HD map alignment).  
3. **Prediction** (trajectory forecasting of other agents).  
4. **Planning** (global route + local motion planning with constraints).  
5. **Control** (low‑level trajectory tracking and actuation).  

Then discuss data flow, parallelism, and safety checks.

**3️⃣ Depth**  
- *Sensor Fusion*: Kalman/particle filters merge multi‑modal streams; redundancy allows failover.  
- *Perception*: Deep CNNs (e.g., PointPillars) run on GPUs; outputs are 3D bounding boxes + semantic labels.  
- *Mapping*: HD maps store lane geometry, traffic rules; Waymo uses a graph database for fast lookup.  
- *Prediction*: Graph‑based RNN predicts neighbor motion over ~5 s horizon.  
- *Planning*: Hybrid A* + MPC; constraints (dynamic feasibility, comfort). Complexity ≈ O(nlogn) per frame.  
- *Control*: PID/MPC tracks planned trajectory with latency < 50 ms.  

**4️⃣ Edge Cases**  
- Sensor failure → fallback to redundancy.  
- Sudden occlusions → conservative braking.  
- Unseen road geometry → map‑less mode with increased safety margins.

**5️⃣ Optimize & Communicate**  
- Use edge TPU or FPGA for perception inference to reduce power.  
- Parallelize planning across multiple cores; cache map tiles.  
- Explain trade‑offs: higher model accuracy vs latency, larger maps vs memory.  
- Conclude with how the system is rigorously validated through simulation and closed‑track testing before deployment.  

*Word count:* ~210 words.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
