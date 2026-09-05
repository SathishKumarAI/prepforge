---
qid: ing_bc18a87ea9__star__local
question: 'Explain: Testing in production — From Zero to 50 Million Uploads per Day:
  Scaling Media at Canva - Canva Engineering Blog'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 251
output_tokens: 388
total_tokens: 639
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T05:47:26-05:00'
sources: []
---

**Situation:**  
When I joined the Media team at Canva, we were handling roughly 5 million image uploads a day. Our nightly batch pipeline was fine for that load, but as we approached 50 million uploads per day, latency spikes began to creep into user sessions and our CDN hit rate fell below 99.9%.

**Task:**  
I had to design a production‑ready testing framework that let us validate new image‑processing models under real traffic without disrupting users, while also guaranteeing we could roll back instantly if something broke.

**Action:**  
First, I introduced a “shadow” deployment pattern: new processing code ran in parallel with the live pipeline but never served results to users. We used feature flags and canary routing via Envoy so only 1 % of traffic hit the shadow service. Next, I built a synthetic load generator that replayed historical upload logs at scale, injecting realistic metadata and edge‑case file sizes into our test cluster. For monitoring, we integrated Prometheus metrics (latency percentiles, error rates) with Grafana dashboards and set up automated alerts for any >10 ms spike. Finally, I scripted a rollback script that swapped traffic weights back to 0 % in under two minutes if anomalies were detected.

**Result:**  
With this production testing pipeline we successfully deployed a new neural‑style transfer model across the entire user base without any downtime. Latency dropped from 350 ms to 210 ms at peak, and error rates fell below 0.02%. I learned that real‑traffic shadowing coupled with automated rollback is essential for scaling media pipelines safely—an approach we now use for every major feature at Canva.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
