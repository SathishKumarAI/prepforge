---
qid: ing_6cf6e2285d__fp__local
question: 'Explain: Storage Estimation — Airbnb System Design - by Neo Kim and Hayk'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 175
output_tokens: 551
total_tokens: 726
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T19:56:17-05:00'
sources: []
---

**Storage Estimation for the Airbnb System**

The core problem is: *how much data will the platform need to persist for each listing over its lifetime?*  
To answer this we start from the **information‐theoretic lower bound** on storage: every datum that can be queried later must be encoded somewhere. For Airbnb, a listing’s observable state comprises

1. **Metadata** – title, description, address, host ID, and pricing rules.  
2. **Multimedia** – photos (≈ 5 MB each) and optional video.  
3. **Geospatial index** – latitude/longitude for proximity search.  
4. **Availability calendar** – a bitmask of booked dates per year.  
5. **Reviews & ratings** – user text, score, timestamp.

Assuming we store each field in its most compact form (e.g., UTF‑8 for text, 32‑bit floats for prices, 1 bit per day for availability), the expected size is:

| Field | Size per listing |
|-------|------------------|
| Metadata | ~ 0.5 KB |
| Photos (avg 10) | 50 MB |
| Video (rare) | 20 MB |
| Geospatial | < 100 B |
| Calendar (365 days) | 45 B |
| Reviews (avg 3, 200 B each) | 600 B |

Summing gives **≈ 51 MB per active listing**.  
With 10 M listings the raw data footprint is ~ 500 TB; adding replication (× 3) and overhead pushes it toward a petabyte‑scale cluster.

**Why this estimate must hold**

- *Queryability*: If we compress below the entropy of the fields, we lose exactness required for search or booking.  
- *Consistency*: Replication and sharding amplify storage linearly; underestimating leads to hot spots and degraded latency.  

**Non‑obvious insight**

Many architects forget that **availability calendars are sparse**: most dates are free, yet a naïve 1 byte per day yields 365 B. A *run‑length encoded* bitmap reduces this to ~ 10 B on average, shaving 90 % of storage for calendar data—critical when scaling to millions of listings.

Thus, a principled, entropy‑based decomposition not only guides capacity planning but also highlights compression opportunities that are often overlooked.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
