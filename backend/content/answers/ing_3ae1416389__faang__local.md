---
qid: ing_3ae1416389__faang__local
question: Why carry lidar, radar and cameras rather than cameras alone? Where would
  you fuse them?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 621
total_tokens: 861
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T21:01:22-05:00'
sources: []
---

**Clarify**  
The interview asks why autonomous systems still ship LiDAR, radar, and cameras instead of relying on vision alone, and at what stage the data should be fused. I’ll assume we’re building a perception stack for a self‑driving car that must meet safety and regulatory requirements under diverse weather/lighting.

**Approach**  
1. Enumerate each modality’s strengths & weaknesses.  
2. Explain how complementary data mitigates failure modes.  
3. Identify fusion layers (raw, feature, decision).  
4. Discuss practical constraints (cost, latency, sensor placement).

**Depth**  

| Modality | Strengths | Weaknesses |
|----------|-----------|------------|
| **Camera** | High‑resolution texture, color, semantic cues; cheap. | Poor depth accuracy, night/flash glare, rain/snow occlusion. |
| **LiDAR** | Precise 3‑D point cloud, good for geometry & distance; works in low light. | Sparse points at long range, expensive, affected by fog or heavy precipitation. |
| **Radar** | Robust to weather (rain, fog), long range, velocity via Doppler. | Low angular resolution, noisy shape reconstruction. |

By fusing we get a dense, accurate 3‑D semantic map: LiDAR supplies geometry, radar adds reliable range/velocity for distant objects, and cameras provide class labels and fine texture.  

**Fusion Strategy**  
1. **Early (raw) fusion** – align point clouds with camera pixels via extrinsics; useful for depth‑from‑stereo or dense mapping.  
2. **Mid (feature) fusion** – concatenate LiDAR intensity + radar Doppler channels into a 3‑D CNN, then fuse with CNN features from the RGB image. This balances computational load and preserves modality‑specific representations.  
3. **Late (decision) fusion** – ensemble object detectors (e.g., Faster‑RCNN on camera, PointPillars on LiDAR) and combine bounding boxes via weighted NMS.

Typical pipelines use mid‑level feature fusion for perception tasks, as it offers the best trade‑off between accuracy and latency.

**Edge Cases**  
- **Night/Low Light** – cameras fail; rely more on LiDAR/radar.  
- **Heavy Fog/Rain** – LiDAR returns weak; radar dominates distance estimates.  
- **Sensor Failure** – design fallback logic (e.g., camera‑only mode with conservative safety margins).

**Optimize & Communicate**  
Future work could explore adaptive weighting: a confidence network learns per‑sensor reliability online, adjusting fusion weights in real time. In an interview I’d emphasize that the goal is *redundancy* for safety and *complementarity* for accuracy, not just cost reduction. This structured reasoning aligns with FAANG expectations of clear problem framing, solution planning, technical depth, edge‑case awareness, and optimization thinking.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
