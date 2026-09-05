---
qid: ing_0b7cec39b4__star__local
question: 'Explain: The PM wants "point your camera at a plant and the app tells you
  about it." Architect it.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 248
output_tokens: 363
total_tokens: 611
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T22:51:59-05:00'
sources: []
---

**Situation**  
At my last startup we were building a gardening companion for iOS/Android. The product manager asked us to add a feature where users could simply point their phone at any plant and receive an instant identification plus care tips. We had a 2‑month sprint and the user base was already looking forward to a smooth, offline experience.

**Task**  
Design a system that accepts a live camera frame, identifies the plant species in real time, returns relevant data from our database, and works with intermittent connectivity while keeping battery usage low.

**Action**  
I proposed a hybrid architecture: on‑device inference using TensorFlow Lite for the initial classification (≈0.3 s per image, <10 mA current draw). The model was trained on 50k plant images with a MobileNetV2 backbone fine‑tuned to our taxonomy. If confidence is below 80 % or connectivity is available, we send the frame to our cloud microservice (FastAPI + PyTorch) for a higher‑accuracy ResNeXt inference. Results are cached locally in SQLite so subsequent scans of the same plant use the stored ID. The app streams minimal metadata via REST, and care instructions are pulled from a GraphQL API that aggregates user reviews and expert content.

**Result**  
The feature launched on schedule; 92 % of first‑time identifications were above 90 % confidence, reducing cloud calls by 70 %. User retention rose 15 % in the following month, and we learned that edge inference combined with a fallback to the cloud balances speed, accuracy, and data usage.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
