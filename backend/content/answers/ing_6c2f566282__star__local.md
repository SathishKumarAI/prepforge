---
qid: ing_6c2f566282__star__local
question: 'Explain: Capacity Planning — Spotify System Design - by Neo Kim and Hayk'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 241
output_tokens: 382
total_tokens: 623
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T02:03:32-05:00'
sources: []
---

**Situation**  
At my previous role, we were launching a new premium feature that would let users stream high‑resolution audio offline. The existing infrastructure was fine for standard streaming, but the new feature meant each user could download up to 100 MB per track and store it locally, which would dramatically increase storage demand and network traffic during peak hours.

**Task**  
I had to design a capacity‑planning model that predicted how many servers, storage units, and bandwidth slots we’d need for the first six months after launch while keeping costs under $500k/month and ensuring 99.9% availability.

**Action**  
First, I collected historical data on user session lengths, download frequencies, and peak times. Using a time‑series forecasting library (Prophet) I projected daily download volumes per region. Then I built a micro‑service that translated those forecasts into required compute instances via Kubernetes autoscaling rules—each pod handled 200 concurrent downloads. For storage, I calculated total data growth by multiplying average track size by predicted user base and added a 30% buffer for redundancy. I also set up an edge CDN cache to offload 70% of repeat downloads, reducing upstream bandwidth by ~40%. Finally, I ran Monte Carlo simulations to test worst‑case scenarios and adjusted the scaling thresholds accordingly.

**Result**  
When the feature launched, we stayed within budget and avoided any performance regressions. Peak latency dropped from 350 ms to 180 ms, and storage utilization hit only 68% of the projected capacity during the first month. I learned that coupling real‑time telemetry with statistical forecasting allows you to allocate just enough resources without overprovisioning—critical for a global service like Spotify.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
