---
qid: ing_a5d1a92a04__faang__local
question: 'Explain: Driver - Push Location — Driverallocationubergojek'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 491
total_tokens: 726
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T01:10:20-05:00'
sources: []
---

**Clarify**  
The interviewer wants a concise explanation of how ride‑hailing platforms (Uber, Gojek) match a driver to a rider’s “push location” request—i.e., the algorithm that decides *which* nearby driver should be dispatched when a user taps “Book now”. Key assumptions:  
- Drivers are geolocated in real time; their status is *available/engaged*.  
- The system must minimize wait time while balancing driver earnings and platform fairness.  

**Approach**  
1. **Collect candidate pool** – all online, available drivers within a radius *R* of the rider’s pick‑up point.  
2. **Score candidates** – compute a composite score that captures distance to pickup, current ETA, surge multiplier, driver rating, and incentive bonuses.  
3. **Rank & select** – sort by lowest score (or highest utility) and dispatch the top driver.  
4. **Fallbacks** – if no driver in *R*, expand radius or trigger a “search all” mode; if still none, notify rider of delay.

**Depth**  
- **Distance metric**: haversine or road‑network shortest path (if map data available).  
- **ETA estimation**: use historical speed profiles and real‑time traffic API.  
- **Surge factor**: multiply score by surge level to encourage supply in high‑demand zones.  
- **Incentives**: add a driver‑specific bonus term that can be tuned via A/B tests.  
- Complexity: O(N log N) for sorting *N* candidates; typically N ≤ 20–30, so trivial latency (<10 ms).  

**Edge Cases**  
- Driver disconnects mid‑dispatch → re‑queue rider.  
- Multiple riders in same area → avoid “driver clustering” by staggering assignments.  
- Bad GPS data → fallback to last known location + buffer radius.

**Optimize & Communicate**  
Improvements: cache pre‑computed driver clusters; use incremental updates instead of full scans. Explain trade‑offs between strict optimality (minimize wait) and fairness (rotating high‑pay drivers). Conclude by highlighting how the algorithm scales horizontally via sharding by geographic zones, ensuring real‑time performance at millions of concurrent users.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
