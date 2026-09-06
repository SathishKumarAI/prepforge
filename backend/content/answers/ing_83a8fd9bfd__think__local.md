---
qid: ing_83a8fd9bfd__think__local
question: Define SLOs for a customer support agent. Every span returns 200 and latency
  is fine. What do you actually alert on?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 205
output_tokens: 543
total_tokens: 748
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T09:44:19-05:00'
sources: []
---

**1️⃣ Clarify the problem & assumptions**

- *What* are we monitoring? The HTTP API that serves a support‑agent UI.
- *What does “every span returns 200 and latency is fine” mean?* It suggests the service itself is healthy, but there may still be downstream issues or business‑level problems (e.g., response time to end users).
- Assume we have SLOs defined for **user‑perceived performance** (e.g., ticket resolution time) and **system reliability** (e.g., error rate).

---

**2️⃣ Mental model / framework**

Use the **SLO–SLI–SLT triangle**:

1. **Service Level Indicator (SLI)** – measurable metric.
2. **Service Level Objective (SLO)** – target for that SLI.
3. **Service Level Threshold (SLT)** – alerting rule when SLO is violated.

Apply this to both *technical* and *business* metrics.

---

**3️⃣ Reason step‑by‑step**

1. Identify SLIs:  
   - API error rate (already 0% → no alert).  
   - End‑to‑end latency as seen by agents or customers.  
   - Ticket resolution time, first‑reply time.  
2. Set SLOs: e.g., “95 % of tickets resolved within 24 h”, “90 % of API responses < 200 ms”.  
3. Define SLTs: thresholds that trigger alerts when the SLI falls below the SLO (e.g., >5 % of tickets unresolved in 48 h).  
4. Choose alerting granularity: per‑region, per‑service, or overall.

---

**4️⃣ Common traps to avoid**

- **Alerting on metrics that are already perfect** (error rate) → wasted noise.  
- **Ignoring business‑level SLIs**; focusing only on API internals misses user frustration.  
- **Using too strict thresholds** that cause frequent false positives.  
- **Not correlating alerts with root causes** (e.g., downstream DB lag).

---

**5️⃣ Sanity‑check & communicate**

- Verify that the SLOs reflect real business goals.  
- Test alerting rules against historical data to ensure they fire only when meaningful.  
- Explain to stakeholders: “We’ll alert on ticket resolution delays and user‑visible latency, not on internal 200 responses.”  

By following this structured approach you’ll end up with alerts that truly signal degradation in the customer support experience.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
