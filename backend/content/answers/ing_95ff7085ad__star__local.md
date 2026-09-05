---
qid: ing_95ff7085ad__star__local
question: 'Explain: Non-functional Requirements — Mapserviceyelpgooglemap'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 348
total_tokens: 586
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T04:32:48-05:00'
sources: []
---

**Situation:**  
When I joined a fintech startup, we were building an in‑app navigation feature that let users find nearby ATMs and bank branches, similar to what Yelp or Google Maps offers. The app had to handle millions of concurrent users on mobile networks with limited data plans.

**Task:**  
I was tasked with defining the non‑functional requirements (NFRs) for the map service: latency < 200 ms per request, 99.9% uptime, battery efficiency, and compliance with GDPR location data rules. I also had to decide how to cache tiles and route data to meet these constraints.

**Action:**  
I started by benchmarking existing open‑source tile servers (Mapbox GL) and measured latency on a simulated edge network using Gatling. To reduce load, I implemented an in‑memory LRU cache for the most frequent tiles, and added GeoJSON compression with Brotli before transmission. For battery life, I introduced adaptive update intervals that throttled location polling to 5 s when idle. I also integrated a consent layer that masked user coordinates after 15 minutes of inactivity, satisfying GDPR.

**Result:**  
After deployment, average request latency dropped from 350 ms to 140 ms, and battery consumption during navigation decreased by 22%. The service achieved 99.97% uptime over six months, and we received a positive audit from our privacy compliance team. I learned that balancing caching strategies with real‑time accuracy is key in high‑scale map services.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
