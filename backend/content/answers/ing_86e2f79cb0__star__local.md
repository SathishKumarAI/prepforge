---
qid: ing_86e2f79cb0__star__local
question: 'Explain: uses our pc cohn to make call — UBER System design | OLA system
  design | uber architecture | amazon interview question'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 253
output_tokens: 383
total_tokens: 636
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T04:02:16-05:00'
sources: []
---

**Situation:**  
When I joined a fintech startup, we had to build a real‑time ride‑hailing platform similar to Uber/Ola that could serve 200k active users in a tier‑2 city while keeping latency under 120 ms and cost per trip below $0.02.

**Task:**  
I was tasked with designing the architecture for driver‑passenger matching, surge pricing, and dynamic routing, and implementing an ML model to predict demand hotspots and optimal driver allocation.

**Action:**  
- Built a microservices stack on Kubernetes using Go for low‑latency services (matching, billing, notifications).  
- Implemented a publish/subscribe queue (Kafka) to stream GPS events from drivers and ride requests.  
- Trained an LSTM model on historical trip data to forecast hourly demand per zone; the model fed into a reinforcement‑learning scheduler that allocated idle drivers to predicted hotspots.  
- Used Redis for real‑time state (driver location, ETA), and PostgreSQL with PostGIS for persistent storage and spatial queries.  
- Deployed A/B tests to compare static vs ML‑driven matching, tuning the reward function to balance driver earnings and passenger wait times.

**Result:**  
The system reduced average passenger wait time from 4.8 min to 2.3 min (52% improvement) and increased ride completions by 18%. Surge pricing accuracy improved by 30%, leading to a $0.01 per trip cost saving. I learned how to blend real‑time streaming, spatial databases, and ML into a scalable microservice architecture that directly impacts revenue and user satisfaction.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
