---
qid: ing_3d08354d6b__aws__local
question: 'Explain: The last point we would like to — FAANG System Design Interview:
  Design A Location Based Service (Yelp, Google Places)'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 248
output_tokens: 482
total_tokens: 730
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T07:43:47-05:00'
sources: []
---

**S – Situation / T – Task**  
I led a cross‑functional squad at my previous company to launch an internal “Location‑Based Service” (LBS) that powers our retail analytics dashboard. The goal was to deliver real‑time POI data for 200 000 active users with < 500 ms latency and 99.9% availability.

**A – Action**  
*Customer Obsession & Ownership*: I mapped user journeys, gathered error logs, and set a “zero‑downtime” SLA.  
*Dive Deep & Bias for Action*: Built a micro‑service architecture on **Amazon ECS Fargate** (auto‑scales with CPU usage).  
*Design* –  
- **Data ingestion**: Kinesis Data Streams → Lambda → DynamoDB Global Tables (replicated to 3 AZs) for write‑throughput > 10 k ops/s.  
- **Geospatial queries**: Store latitude/longitude as GeoJSON in S3 + index with **Amazon Neptune** (graph) for proximity search, backed by a **Route 53 latency routing policy**.  
- **Caching**: ElastiCache Redis (partitioned) for hot POIs, TTL 60 s.  
*Scalability*: Auto‑scaling policies tied to CloudWatch metrics keep cost < $0.05/req while handling peak bursts of 5× baseline.  
*Cost vs. Availability trade‑off*: Opted for DynamoDB over RDS to avoid single‑point failures; paid slightly more but met SLA.

**R – Result**  
Launch was 3 weeks ahead of schedule, user adoption hit 150 k in the first month (30% YoY growth), and latency dropped from 1.2 s to < 400 ms. We achieved a 99.95% uptime over six months with <$12K/month operating cost—down 15% from our previous monolith.

**Learning**  
A failed geo‑lookup caused a spike in cache misses; I instituted automated anomaly detection in CloudWatch, preventing future outages and sharpening my “Bias for Action” mindset.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
