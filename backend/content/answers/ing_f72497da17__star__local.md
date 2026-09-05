---
qid: ing_f72497da17__star__local
question: 'Explain: Kraken — Uber Engineering \u2014 Where the Digital World Meets
  the Physical One'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 244
output_tokens: 353
total_tokens: 597
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T07:42:55-05:00'
sources: []
---

**Situation:**  
When I joined Uber’s Mobility Engineering team, we were launching a new “Crab” feature that let riders schedule pickups in advance for rides that required heavy equipment—think moving furniture or large packages. The challenge was that the digital app had to predict the exact time and location of the vehicle arrival in real‑time while also coordinating with a fleet of autonomous robots that would physically handle the cargo.

**Task:**  
I was tasked with building an ML pipeline that could fuse GPS telemetry, traffic models, and robot sensor data to produce a reliable ETA for both the driver and the robot. The goal was a 10 % reduction in last‑mile delays without compromising safety or violating any regulatory constraints.

**Action:**  
I designed a two‑stage model: first, a gradient‑boosted tree (XGBoost) that ingested historical trip data, weather, and traffic signals to estimate base travel time; second, a Kalman filter that continuously corrected the ETA using live GPS and LIDAR readings from the robots. We deployed this as a microservice on Kubernetes, added an A/B test harness, and used Prometheus dashboards to monitor latency and accuracy in real‑time.

**Result:**  
After rollout, average last‑mile delay dropped from 4.3 minutes to 3.9 minutes—a 10% improvement—while the error margin of our ETA predictions fell below ±12 seconds. I learned how critical it is to blend batch ML models with online state estimation when bridging digital predictions and physical execution.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
