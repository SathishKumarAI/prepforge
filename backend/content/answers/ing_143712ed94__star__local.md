---
qid: ing_143712ed94__star__local
question: 'Explain: Problem Statement — Whiteboard Exercises'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 369
total_tokens: 602
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T23:08:33-05:00'
sources: []
---

**Situation:**  
In my senior thesis I was tasked with building an AI model to classify handwritten digits from the MNIST dataset for a robotics competition. The judges required us to present our problem statement and solution on a whiteboard during the kickoff meeting, but many of my teammates were unfamiliar with framing AI problems clearly.

**Task:**  
I had to craft a concise, compelling problem statement that would guide our design choices, justify feature engineering, and satisfy both technical depth and stakeholder expectations—all within 5 minutes on a whiteboard.

**Action:**  
First, I mapped the core challenge: “Accurately classify 10 digit classes with <1 % error while maintaining inference latency below 20 ms on embedded hardware.” I then broke it into three sub‑problems—data quality, model efficiency, and deployment constraints. On the board I sketched a quick flowchart linking each sub‑problem to specific techniques: data augmentation for robustness, a depthwise‑separable CNN for speed, and quantization-aware training for edge compatibility. I highlighted trade‑offs (e.g., 1 % accuracy loss vs. 5 ms latency gain) and annotated the expected metrics.

**Result:**  
The board session clarified our objectives; we achieved 99.3 % accuracy with a 15 ms inference time on an NVIDIA Jetson Nano, outperforming all other teams by 0.7 %. I learned that a well‑structured problem statement not only directs technical decisions but also aligns the team’s focus and impresses stakeholders.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
