---
qid: ing_57c799f758__eli5__local
question: 'Explain: Title: EMMA: End-to-End Multimodal Model for Autonomous Driving'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 165
output_tokens: 253
total_tokens: 418
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T10:55:41-05:00'
sources: []
---

Imagine a driver who can see the road with their eyes, feel the steering wheel with their hands, and hear traffic sounds all at once—yet they only need to press one button to go straight, turn, or stop. EMMA (End‑to‑End Multimodal Model for Autonomous Driving) is that “one‑button” system for a car. It takes three kinds of input data that a human driver uses:

* **Vision** – cameras showing the road ahead.
* **Lidar** – distance sensors that map nearby objects like a 3‑D radar.
* **Control signals** – what the current steering wheel, accelerator, and brake do.

Instead of building separate software for each type and then combining their decisions, EMMA feeds all three streams into one deep neural network. The network learns to translate the raw sensory data directly into driving commands (steering angle, throttle, brake) in real time. Like a super‑sensitive single “brain” that understands sight, touch, and sound together, EMMA can navigate complex traffic while keeping the system simple and fast.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
