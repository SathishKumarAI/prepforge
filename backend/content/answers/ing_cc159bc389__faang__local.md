---
qid: ing_cc159bc389__faang__local
question: 'Explain: Requirements — Flightbookingsearchmakemytrip'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 474
total_tokens: 707
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T02:33:52-05:00'
sources: []
---

**Clarify**  
We need a system that lets users find and book flights on MakeMyTrip.  
Assumptions:  

* Users search by origin, destination, date(s), cabin class, number of passengers.  
* Results must be sorted (price, duration, airline).  
* The service should support round‑trip, multi‑city, and one‑way bookings.  
* Real‑time availability and pricing from multiple airlines are required.  

**Approach**  

1. **Data ingestion** – pull live schedules & fares via airline APIs or a data lake.  
2. **Search engine** – index flights by key attributes; use an inverted index or Elasticsearch for fast filtering/sorting.  
3. **Scoring model** – combine price, duration, layovers, and user preference weights to rank results.  
4. **Recommendation layer** – ML model (e.g., matrix‑factorization) to surface personalized flight bundles.  
5. **Booking flow** – transactional microservice that reserves seats via airline APIs, generates a booking reference, and handles payment.  

**Depth**  

* Use distributed caching (Redis) for hot routes; fallback to batch‑updated DB for cold routes.  
* Score = w₁·price + w₂·duration + w₃·layover + user‑bias.  
* Latency target < 300 ms per query; achieve with sharded indices and async API calls.  

**Edge Cases**  

* Flights that cancel or change price between search & booking → optimistic locking, retry logic.  
* Non‑existent routes → graceful error message, suggest nearby airports.  
* Currency conversion errors → keep a fresh FX rate cache.  

**Optimize & Communicate**  

Start with a minimal viable product (search + booking) and instrument query latency. Use A/B testing to tune ranking weights; deploy ML models via a model registry for reproducibility. Explain trade‑offs: real‑time API calls give freshness but increase cost/latency vs. bulk data pulls that are cheaper but stale. Emphasize continuous monitoring of SLA metrics and user feedback loops to iterate the recommendation engine.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
