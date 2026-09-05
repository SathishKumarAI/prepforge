---
qid: ing_56692d4939__star__local
question: 'Explain: Multiple driver accepting trip — Driverallocationubergojek'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 353
total_tokens: 591
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T01:20:41-05:00'
sources: []
---

**Situation**  
At my previous gig I worked on the surge‑pricing module for a ride‑hailing app. Every time a user requested a trip during peak hours, we’d send the request to dozens of nearby drivers via our microservice cluster. Unfortunately, about 20 % of those requests were accepted by multiple drivers at once, causing double bookings and customer confusion.

**Task**  
I had to design a driver‑allocation routine that guarantees a single driver is chosen even when several are available simultaneously, while keeping latency below 200 ms so the app feels instant.

**Action**  
I built a lightweight “leader election” protocol on top of Redis’ `SETNX` command. When a trip request arrives, each candidate driver attempts to acquire a short‑lived lock key (`trip:<id>`). Only the first successful `SETNX` wins and triggers a publish–subscribe event that cancels all other pending requests. I wrapped this in a retry loop with exponential backoff to handle transient network hiccups. The microservice also logs every lock acquisition attempt, enabling us to monitor contention rates in real time.

**Result**  
After deployment, duplicate trip assignments dropped from 20 % to <0.5 %. Trip‑to‑driver handshakes completed in an average of 120 ms, and our support tickets related to double bookings fell by 75 %. I learned that a simple distributed lock can solve complex concurrency problems if you expose enough observability for tuning.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
