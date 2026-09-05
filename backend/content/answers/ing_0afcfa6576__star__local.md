---
qid: ing_0afcfa6576__star__local
question: 'Explain: if it doesn''t have that information for — Google Maps System
  Design Interview Question'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 242
output_tokens: 294
total_tokens: 536
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T22:50:45-05:00'
sources: []
---

**Situation**  
In a recent project I was building a recommendation engine for a ride‑hailing app. The model had to predict the likelihood of a driver accepting a surge request in real time, but we only had historical acceptance logs and not the drivers’ current personal schedules or weather conditions.

**Task**  
I needed to design an inference pipeline that could still provide accurate predictions without direct access to those missing variables while keeping latency under 50 ms per request.

**Action**  
I first engineered proxy features: I aggregated the last three hours of acceptance rates by driver and zone, calculated a rolling average of surge multipliers, and used a publicly available weather API to inject temperature and precipitation as static inputs. I then trained a LightGBM model with interaction terms between these proxies. For deployment, I containerized the model with Docker, exposed it via an internal gRPC service, and set up a caching layer in Redis to store the last 10 seconds of predictions per driver‑zone pair. The pipeline was benchmarked on our staging environment, achieving 45 ms inference time.

**Result**  
The surrogate feature approach boosted acceptance prediction accuracy from 68% to 82%, reducing surge cancellations by 15%. I learned that when data is missing, thoughtful proxy creation combined with efficient serving architecture can bridge the gap without compromising real‑time performance.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
