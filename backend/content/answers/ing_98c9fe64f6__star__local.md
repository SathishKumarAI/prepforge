---
qid: ing_98c9fe64f6__star__local
question: 'Explain: Helix Tidies the Living Room — Helix 02 Living Room Tidy'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 244
output_tokens: 380
total_tokens: 624
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T04:38:06-05:00'
sources: []
---

**Situation:**  
At my last company we were tasked with launching “Helix 02 Living Room Tidy,” an AI‑powered home‑automation feature that automatically detects clutter in a living room and suggests or executes tidying actions. The product launch deadline was only six weeks away, and the team had to prove the system could reduce user‑reported messiness by at least 30%.

**Task:**  
I needed to build a computer‑vision pipeline that could reliably identify objects (couches, toys, books) from live camera feeds, classify them as “tidy” or “untidy,” and generate actionable suggestions while keeping inference latency under 200 ms on edge devices.

**Action:**  
I started with a YOLOv8 model pre‑trained on COCO, fine‑tuned it on our own annotated dataset of 4,000 living‑room images. To keep the model lightweight I applied pruning and quantization (int8), then deployed it to NVIDIA Jetson Nano using TensorRT for real‑time inference. For the suggestion engine, I built a rule‑based system that maps detected clutter levels to user‑friendly prompts (“Put the blue cushion back on the sofa”). I also integrated a reinforcement‑learning loop so the model could learn from user feedback over time.

**Result:**  
The final system achieved 92 % detection accuracy and ran at ~150 ms per frame. In beta testing, users reported a 45 % reduction in clutter perception, surpassing our target. The project taught me how to balance model performance with edge constraints and the value of iterative user feedback loops in ML product development.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
