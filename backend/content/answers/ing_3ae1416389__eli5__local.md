---
qid: ing_3ae1416389__eli5__local
question: Why carry lidar, radar and cameras rather than cameras alone? Where would
  you fuse them?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 165
output_tokens: 193
total_tokens: 358
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T10:09:33-05:00'
sources: []
---

Imagine driving a car that must avoid a puddle on the road.  
A camera is like looking at the puddle with your eyes: it shows color and shape, but if you’re in fog or the light is low, the picture blurs.  

Lidar (laser “eye”) and radar are like feeling the puddle’s depth with your hands – they give precise distance even when vision fails.  
By combining (“fusing”) the camera’s rich image with lidar’s exact range and radar’s steady motion data, the car gets a full‑sized, clear map of its surroundings—just as a driver who can see, feel, and hear better avoids trouble.

Sensors are fused inside the vehicle’s computer (the “brain”), where algorithms merge the streams into one coherent scene before any decision or steering command is made.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
