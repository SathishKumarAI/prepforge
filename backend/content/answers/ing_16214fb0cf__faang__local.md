---
qid: ing_16214fb0cf__faang__local
question: 'Explain: think about it um why would we — Amazon System Design Interview:
  Design Parking Garage'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 241
output_tokens: 500
total_tokens: 741
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T19:34:52-05:00'
sources: []
---

**1️⃣ Clarify**  
The interview asks us to design a *parking‑garage* system (think Amazon parking lot).  
Key questions:  
- How many levels, bays per level?  
- Do we support electric charging, valet, or just standard spots?  
- What traffic patterns are expected (peak vs off‑peak)?  
- Are there constraints on space, cost, or latency for spot allocation?

**2️⃣ Approach**  
1. **Requirements & Constraints** – list functional (reserve, find nearest free spot) and non‑functional (latency < 50 ms, uptime > 99.9%).  
2. **High‑level components** – Sensor layer → Edge gateway → Backend service → Persistence → Frontend (app/website).  
3. **Data model** – Spot(id, level, status), Vehicle(id, spot_id), Reservation(id, vehicle_id, time_window).  
4. **Algorithm** – Greedy nearest‑spot search with priority queue; fallback to batch allocator during peak.

**3️⃣ Depth**  
- Sensors (RFID/vision) publish “free/busy” events to a message bus (Kafka).  
- Edge gateway aggregates per level and pushes a *level bitmap* to the backend, reducing traffic.  
- Backend uses Redis for real‑time spot availability (O(1)) and PostgreSQL for audit logs.  
- Allocation: pop nearest free bit from bitmap; update in Redis + async DB write.  
- Complexity: O(log N) per allocation with balanced tree if we store free spots; otherwise O(1).  
- Fault tolerance via replicated Kafka topics and multi‑AZ deployment.

**4️⃣ Edge Cases**  
- Spot sensor failure → mark as “unknown”; use redundancy or manual override.  
- Reservation conflict → double‑check before confirmation.  
- Power outage → edge gateway caches state locally, syncs on recovery.  

**5️⃣ Optimize & Communicate**  
- Cache hot spots per level to reduce DB hits.  
- Use batched writes for reservations to cut latency.  
- Explain trade‑offs: Redis gives speed but needs persistence; Kafka guarantees durability but adds complexity.  
- Wrap up by highlighting how this design scales linearly with added levels and supports future features (EV charging, dynamic pricing).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
