---
qid: ing_4c279dd432__think__local
question: 'Explain: Availability | System Design'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 184
output_tokens: 513
total_tokens: 697
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T03:22:24-05:00'
sources: []
---

**1️⃣ Clarify the scope & assumptions**  
- *Availability* is a non‑functional requirement; it measures how often a system can serve requests.  
- Assume we’re designing a typical web service (stateless APIs, distributed database).  
- Decide on the target availability metric (e.g., 99.9 % uptime) and the time window for measurement.

**2️⃣ Mental model / framework**  
Use the **SLO‑SLI‑SLR** hierarchy:  
- *Service Level Indicator* (actual uptime).  
- *Service Level Objective* (target uptime, e.g., 99.9 %).  
- *Service Level Requirement* (business mandate).  
Pair this with the **Availability equation**:  

\[
\text{Availability} = \frac{\text{MTBF}}{\text{MTBF}+ \text{MTTR}}
\]

where MTBF = mean time between failures, MTTR = mean time to recover.

**3️⃣ Step‑by‑step reasoning**  
1. **Identify failure points** (network, server, DB).  
2. **Quantify MTBF/MTTR** for each component (historical data or estimates).  
3. **Aggregate** using the availability formula across layers (e.g., front‑end + back‑end).  
4. **Introduce redundancy** (active‑passive, active‑active) to boost MTBF and reduce MTTR.  
5. **Design failover paths**: load balancers, auto‑scaling groups, circuit breakers.  
6. **Implement monitoring & alerts** to detect failures early → lower MTTR.

**4️⃣ Common traps to avoid**  
- Ignoring *hidden* failure modes (e.g., single point in a shared database).  
- Over‑optimistic MTBF assumptions leading to under‑provisioned redundancy.  
- Neglecting *human* MTTR; automated recovery scripts are essential.  
- Failing to validate that added redundancy doesn’t introduce new bottlenecks.

**5️⃣ Sanity‑check & communicate**  
- Verify that the calculated availability meets or exceeds the SLO.  
- Explain the trade‑offs: cost vs. uptime, complexity vs. reliability.  
- Present a concise diagram showing redundant components and their impact on MTBF/MTTR. This keeps stakeholders aligned and highlights where engineering focus should lie.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
