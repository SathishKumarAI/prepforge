---
qid: ing_18027b5fb6__eli5__local
question: 'Explain: What’s expected at different levels — Mobile System Design Interview'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 161
output_tokens: 323
total_tokens: 484
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T09:13:41-05:00'
sources: []
---

Think of a mobile system design interview like building a smart city with a new “traffic‑control AI” that learns from drivers’ habits.

**Entry level (Junior):**  
You’re asked to sketch the city’s main roads and put a single traffic light that can change color based on how many cars are coming. You should explain why you need sensors, how you’ll store the counts, and how the light decides when to turn green or red. The focus is on simple data flow and basic learning logic.

**Mid level (Intermediate):**  
Now the city has several districts. You must design a network of traffic lights that communicate with each other, share data in real time, and use past patterns to predict rush hours. Talk about data pipelines, caching, and how you’ll train a lightweight model on the device. The interviewer expects you to balance accuracy with limited battery and bandwidth.

**Senior level (Expert):**  
You’re designing the entire traffic‑control system for millions of cars worldwide. You must plan data ingestion from billions of devices, distribute training across edge and cloud, handle privacy, scale the ML models, and ensure low latency during peak traffic. Discuss fault tolerance, continuous learning loops, and how you’ll roll out updates without disrupting drivers.

In each level, start with the core idea (the traffic light), then layer on complexity—more data sources, smarter models, larger scale—matching your experience.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
