---
qid: ing_9bfd274e33__eli5__local
question: 'Explain: Back of the Envelope Calculations — Airbnb System Design - by
  Neo Kim and Hayk'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 166
output_tokens: 287
total_tokens: 453
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T12:44:35-05:00'
sources: []
---

Imagine planning a road trip across the country with a handful of friends. You quickly sketch a map on a napkin: estimate how many miles you’ll drive each day, how long it will take to reach each city, and how much gas you’ll need. That quick math is a *back‑of‑the‑envelope calculation*—a rough, intuitive estimate that tells you whether the trip is doable before you book tickets.

In Airbnb’s system design, engineers use the same trick when they first outline how many users the platform can serve or how much data storage is required. They take key numbers—like average bookings per day (a *metric*) and how many servers are needed to handle that load—and do a quick “here’s what we’d need if everything runs smoothly.” It isn’t precise, but it shows whether the design will work at scale before diving into detailed code.

The terms you’ll see:  
- **Metric** – a measurable quantity (e.g., bookings per hour).  
- **Latency** – how long a request takes to get answered.  

Back‑of‑the‑envelope calculations give engineers confidence that their big picture plans are realistic, just like the napkin map keeps your road trip on track.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
