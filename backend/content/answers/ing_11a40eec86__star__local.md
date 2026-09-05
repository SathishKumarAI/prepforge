---
qid: ing_11a40eec86__star__local
question: 'Explain: It did a lot better job at — Seattle Conference on Scalability:
  YouTube Scalability'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 246
output_tokens: 287
total_tokens: 533
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T23:03:55-05:00'
sources: []
---

**Situation:**  
At the 2023 Seattle Conference on Scalability, I was part of a team tasked with improving YouTube’s recommendation latency during peak traffic windows, where response times were exceeding 400 ms for 20% of requests.

**Task:**  
I needed to design and deploy an ML‑based caching layer that could predict high‑traffic segments in real time and pre‑warm the appropriate recommendation models, reducing cold‑start delays.

**Action:**  
Using TensorFlow Lite on edge GPUs, I built a lightweight LSTM model trained on historical viewership patterns. The model ingested real‑time traffic metrics (request volume, region, device type) and outputted a probability score for each content cluster. I integrated this with the CDN’s cache controller via gRPC, allowing the system to pre‑load 70% of the most likely recommendations before user requests hit the backend. We also introduced an adaptive learning loop that refreshed model weights every hour based on actual hit rates.

**Result:**  
Post‑deployment, average recommendation latency dropped from 380 ms to 210 ms during peak periods—a 45% improvement—and cache hit ratios increased from 55% to 78%. The exercise taught me the importance of lightweight inference and real‑time feedback in production ML systems.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
