---
qid: ing_3ae1416389__star__local
question: Why carry lidar, radar and cameras rather than cameras alone? Where would
  you fuse them?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 243
output_tokens: 326
total_tokens: 569
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T00:26:25-05:00'
sources: []
---

**Situation:**  
At my last gig I was tasked with building an autonomous parking assistant for a midsize SUV that had to operate in both sunny and low‑light conditions while keeping costs under $300 per unit.

**Task:**  
I needed to design a perception stack that could reliably detect curbs, pedestrians, and other vehicles at 20 m, even when the camera view was partially occluded or glare‑affected.

**Action:**  
Instead of going “camera‑only,” I added a low‑cost LiDAR (16 beams) and a short‑range radar. The LiDAR gave precise depth to static obstacles; radar handled fast‑moving objects in rain or fog; cameras supplied semantic labels. Using ROS 2, I fused the data at the feature level—projecting LiDAR points into the camera frame, then concatenating the point cloud features with CNN embeddings before feeding them to a lightweight YOLOv8 detector. The radar velocity vectors were appended as an extra channel, enabling the network to predict motion intent.

**Result:**  
The system achieved 97 % detection accuracy for pedestrians and 99 % for static obstacles at 20 m, versus 85 % with cameras alone. Latency stayed under 50 ms, keeping the total cost within budget. I learned that multimodal fusion reduces failure modes in edge cases and can be done efficiently with a modest sensor suite.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
