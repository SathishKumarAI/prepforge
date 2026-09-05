---
qid: ing_620f44372e__star__local
question: 'Explain: Now we do tell information to Google — Google Maps System Design
  Interview Question'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 242
output_tokens: 473
total_tokens: 715
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T01:44:20-05:00'
sources: []
---

**Situation:**  
At my previous company we had a fleet‑tracking app for thousands of delivery trucks. Our dashboard showed real‑time positions, but the internal analytics were stale because we weren’t feeding live telemetry into Google Maps for route optimization.

**Task:**  
I was tasked with designing an end‑to‑end pipeline that would ingest each truck’s GPS data, enrich it with on‑the‑fly traffic predictions from our ML model, and push the refined points to the Google Maps Platform so users could see the most accurate routes in minutes.

**Action:**  
1. **Data ingestion** – I set up a Kafka topic per region that received ~10 k events/sec.  
2. **Preprocessing** – A Spark streaming job cleaned outliers, merged duplicate pings, and added timestamps.  
3. **ML inference** – We deployed a TensorFlow Serving model (trained on historical traffic logs) as a gRPC microservice; it output 5‑minute travel time estimates for each segment.  
4. **Enrichment & batching** – The stream then batched enriched points into GeoJSON blobs and signed them with our OAuth2 client credentials.  
5. **Push to Google Maps** – Using the Maps SDK’s “Real‑time Route” API, we sent a single batch per minute, respecting the 100 K calls/day quota by rotating API keys.  
6. **Monitoring** – I added Prometheus metrics (latency, error rates) and set up alerts for any drop in delivery accuracy.

**Result:**  
Within three weeks of deployment, route deviation dropped from 12% to 4%, cutting average delivery time by 18%. The system handled peak loads without downtime, and the data pipeline cost us only $0.02 per million events processed. I learned how to balance real‑time ML inference with external API constraints and the importance of observability in a live traffic feed.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
