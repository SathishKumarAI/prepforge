---
qid: ing_3245e0ec3b__star__local
question: 'Explain: But while the user is in transit — Google Maps System Design Interview
  Question'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 242
output_tokens: 340
total_tokens: 582
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T00:09:08-05:00'
sources: []
---

**Situation:**  
While leading a feature‑enhancement sprint at my previous company, we noticed that drivers using our navigation app were repeatedly receiving suboptimal detours when traffic conditions changed mid‑trip. The real‑time accuracy dropped to about 65 % during peak hours.

**Task:**  
I was tasked with designing an ML pipeline that could predict the best route in transit by incorporating live traffic feeds, user preferences, and historical patterns, all while ensuring latency stayed under 200 ms for a smooth driver experience.

**Action:**  
First, I set up a Kafka stream ingesting Google Traffic API updates and our own sensor data. I then trained a LightGBM model on a 3‑month dataset of trip logs, adding features like time‑of‑day, weather, and congestion indices. The model outputs a probability score for each candidate route. Using TensorRT we converted the model to a C++ inference engine that runs on the edge device. I also implemented an A/B test framework with real‑time feedback loops so every detour decision could be logged and used to fine‑tune the model in production.

**Result:**  
After deployment, detour accuracy improved from 65 % to 92 %, cutting average trip time by 12 %. User satisfaction scores rose by 18 points on our NPS survey. I learned that coupling streaming data pipelines with lightweight inference engines is key for low‑latency, high‑accuracy navigation in transit scenarios.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
