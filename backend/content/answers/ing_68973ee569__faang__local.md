---
qid: ing_68973ee569__faang__local
question: 'Explain: which this should be reserved as well — Amazon System Design Interview:
  Design Parking Garage'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 241
output_tokens: 520
total_tokens: 761
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T22:46:48-05:00'
sources: []
---

**Clarify**

> *Design a parking‑garage management system.*  
> I’ll assume the garage is a multi‑floor building, each floor has multiple spots (compact, regular, handicap), and we need to support:  
> • Real‑time spot availability queries,  
> • Vehicle entry/exit with ticketing or RFID,  
> • Payment processing,  
> • Security & surveillance.  
> I’d confirm limits on capacity, expected traffic (vehicles/minute), and whether mobile/online reservations are required.

**Approach**

1. **Architecture diagram** – front‑end (mobile/web), API gateway, service layer, database, cache, payment gateway, analytics, monitoring.  
2. **Data model** – `Spot(id, floor, type, status)`, `Vehicle(ticket_id, plate, entry_time)`.  
3. **Key flows** – Entry → ticket/scan → lock gate → record spot; Exit → scan exit → compute fee → payment → unlock gate.  
4. **Scaling** – use read replicas for availability checks, cache hot spots, partition by floor.

**Depth**

- **Availability API**: `GET /spots?floor=3&type=compact` → returns free spots from Redis (`spot_status:{floor}:{type}`) in O(1).  
- **Entry Flow**: Gate controller publishes to Kafka topic “entry”, worker updates DB, pushes to cache.  
- **Exit Flow**: Fee = base + (duration‑hour × rate), processed through Stripe; on success gate opens.  
- **Fault tolerance**: If payment fails, ticket remains active until manual override.  
- **Complexity**: O(log N) for DB updates, O(1) for cache reads.

**Edge Cases**

- Spot already occupied → return 409.  
- Gate failure → rollback ticket.  
- Over‑capacity → queue or redirect to partner lots.  
- Power outage → fallback local lock and offline logs.

**Optimize & Communicate**

- **Cache warm‑up** on startup, use Bloom filters for quick “spot exists” checks.  
- **Analytics**: track peak times, spot turnover; feed into dynamic pricing.  
- **Security**: encrypt RFID tags, audit logs.  
- I’d explain trade‑offs (cache staleness vs latency) and how monitoring dashboards would surface bottlenecks during interviews.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
