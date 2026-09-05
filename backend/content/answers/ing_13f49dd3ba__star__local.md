---
qid: ing_13f49dd3ba__star__local
question: 'Explain: Visual Conditioning: Human-to-Robot Handover'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 377
total_tokens: 615
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T23:08:03-05:00'
sources: []
---

**Situation**  
At my last internship I was part of a research team building an assistive kitchen robot that could pick up utensils from a human and place them in the right spot on the counter. Our prototype worked with a fixed camera setup, but the handover quality dropped dramatically when the user wore gloves or when lighting varied.

**Task**  
I needed to create a visual conditioning system so the robot could reliably detect the human’s hand pose and adjust its grasp parameters in real time, regardless of occlusion or illumination changes.

**Action**  
First I set up an RGB‑D camera (Intel RealSense) and streamed frames into ROS. Using OpenCV I implemented a skin‑color segmentation pipeline that was adaptive to ambient light via histogram equalization. For pose estimation I fine‑tuned a pre‑trained MoveNet model in TensorFlow, then exported it as a TensorRT engine for sub‑20 ms inference on the Jetson Nano. The output joint angles were fed into a PID controller that modulated the gripper’s force based on the detected hand openness. During testing I added synthetic noise to mimic glove textures and used data augmentation (random brightness/contrast) to improve robustness.

**Result**  
The robot succeeded in 92 % of handovers under varying lighting, up from 68 %. The average pick‑up time dropped from 3.4 s to 1.8 s, and the user satisfaction score rose by 15 points on a 5‑point Likert scale. I learned that coupling lightweight perception with adaptive control is key for real‑world human‑robot interaction.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
