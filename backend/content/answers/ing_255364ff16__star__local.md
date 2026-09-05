---
qid: ing_255364ff16__star__local
question: 'Explain: of a pathing towards we mentioned that — Amazon System Design
  Interview: Design Parking Garage'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 245
output_tokens: 363
total_tokens: 608
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T23:43:19-05:00'
sources: []
---

**Situation**  
At my last company, we were tasked with redesigning the parking management for a downtown office building that had an average of 300 daily visitors and a 20 % over‑capacity rate during peak hours. The existing system used static pricing and manual ticket scanning, which caused long queues and revenue loss.

**Task**  
I needed to build a dynamic parking allocation platform that would predict demand, optimize spot assignment in real time, and adjust pricing to smooth traffic flow while maximizing occupancy revenue.

**Action**  
I first collected historical entry/exit logs, weather data, and local event schedules. Using Python and scikit‑learn I trained an LSTM model to forecast hourly arrival rates with a 95 % confidence interval. The prediction fed into a reinforcement‑learning agent (Deep Q‑Network) that learned optimal spot assignments and price adjustments based on simulated occupancy outcomes. For deployment I containerized the service in Docker, exposed it via a FastAPI endpoint, and used Kafka to stream real‑time sensor data from entry gates to the model. To keep latency under 200 ms, I offloaded inference to an NVIDIA GPU instance and cached predictions per minute.

**Result**  
After a 3‑month pilot, peak‑hour wait times dropped by 35 %, overall occupancy rose from 78 % to 92 %, and revenue increased by $18k/month. I learned that coupling time‑series forecasting with reinforcement learning can turn static parking systems into adaptive, data‑driven services, and that careful infrastructure choices (Kafka + GPU inference) are essential for meeting real‑time constraints.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
