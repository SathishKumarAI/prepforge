---
qid: ing_44bf006cf5__star__local
question: 'Explain: State — Client-Server Architecture | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 323
total_tokens: 560
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T00:46:22-05:00'
sources: []
---

**Situation**  
At my previous startup, we were building a real‑time recommendation engine for a mobile shopping app. The internal dev team noticed that the batch‑trained models taking hours to run on the GPU cluster were too slow for the 10 ms latency requirement of the user’s in‑app feed.

**Task**  
I had to design a client‑server architecture that would serve model predictions with sub‑100 ms response time while keeping CPU usage under 30% on our edge servers and ensuring easy scalability as traffic grew from 50k to 500k active users per day.

**Action**  
I chose a lightweight Flask API backed by a TensorFlow Serving container. The client (mobile SDK) sent only the user ID and context vector; the server performed a cache‑lookup in Redis for recent predictions, falling back to a fast inference graph if missing. To reduce model size I applied post‑training quantization and pruned the dense layers, cutting inference time by 40%. I also introduced horizontal scaling with Kubernetes autoscaling based on CPU load, and used Prometheus/Grafana dashboards to monitor latency distribution.

**Result**  
Latency dropped from ~400 ms to <80 ms average, and the system handled a ten‑fold traffic increase without additional GPU resources. We saved $12k/month in cloud costs, and I learned how careful cache design and model compression can bridge the gap between ML research prototypes and production‑grade services.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
