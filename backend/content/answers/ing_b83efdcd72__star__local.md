---
qid: ing_b83efdcd72__star__local
question: 'Explain: So all we''ll say is traffic, weather — Google Maps System Design
  Interview Question'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 243
output_tokens: 316
total_tokens: 559
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T05:39:51-05:00'
sources: []
---

**Situation:**  
During my senior internship at a rides‑hailing startup, we were tasked with redesigning our real‑time navigation module so that drivers could avoid congested routes and customers could see accurate ETA estimates during peak hours.

**Task:**  
I had to build a scalable pipeline that ingests live traffic feeds, weather alerts, and historical GPS traces, then outputs per‑segment travel times in under 200 ms for millions of concurrent users.

**Action:**  
First, I set up an event‑driven architecture using Kafka topics for “traffic”, “weather”, and “historical” streams. Each message was parsed by a Spark Structured Streaming job that applied a Kalman filter to smooth noisy speed data. For weather, I integrated the NOAA API and mapped precipitation levels to congestion multipliers via a simple linear regression model. I stored pre‑aggregated segment statistics in Redis for low‑latency lookup. Finally, I exposed a gRPC service that served the weighted travel times, caching results per user session.

**Result:**  
The new system reduced ETA error from 12 % to 3 %, cut driver detours by an average of 8 km per trip, and handled 1.2 M concurrent requests with <180 ms latency. I learned how blending streaming analytics with lightweight in‑memory caching can turn raw sensor data into actionable routing decisions at scale.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
