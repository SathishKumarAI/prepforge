---
qid: ing_30f901222e__faang__local
question: 'Design a hybrid architecture: some requests on-device, some to the cloud.
  How does the router decide?'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 243
output_tokens: 397
total_tokens: 640
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T20:38:19-05:00'
sources: []
---

**Clarify**  
We need a system that routes incoming inference requests either to an on‑device model or to a cloud service. The goal is low latency and high accuracy while respecting privacy, bandwidth, and cost constraints. Key assumptions:  

- On‑device models are smaller, less accurate but instant.  
- Cloud models are larger, more accurate, but incur network latency and data transfer costs.  
- User preferences (privacy mode, offline mode) can override defaults.

**Approach**  
1. **Feature extraction** – For each request compute lightweight features: device type, battery level, current network speed, user privacy flag, payload size.  
2. **Decision policy** – Use a scoring function or a small decision tree that outputs “local” vs “cloud”.  
3. **Fallback & monitoring** – If local fails (timeout, error), retry in cloud; log outcomes for continual learning.

**Depth**  
- *Scoring*: `score = w1*latency_local + w2*accuracy_gap + w3*battery + w4*privacy`.  
  - Positive score → send to cloud.  
  - Negative → local.  
- Update weights online using reinforcement learning (e.g., bandit algorithm) based on QoS metrics.  
- Complexity: O(1) per request; model size negligible.

**Edge Cases**  
- Offline device → force local.  
- Extremely large payloads → reject or split.  
- Security breach → immediate switch to local for sensitive data.  
- Model drift → periodic re‑evaluation of weights.

**Optimize & Communicate**  
Explain that the router is a lightweight, adaptive decision engine; it balances latency, accuracy, cost, and privacy. Highlight how continuous feedback refines routing policies, ensuring scalability and robustness—key signals for FAANG interviewers.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
