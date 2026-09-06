---
qid: ing_9d505bcc3b__think__local
question: 'Explain: You ship a policy to 300 robots. It works in the lab and degrades
  in the field. Debug it.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 204
output_tokens: 397
total_tokens: 601
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T11:30:07-05:00'
sources: []
---

**1️⃣ Clarify & State Assumptions**  
- What “policy” is (e.g., navigation, task‑allocation algorithm)?  
- What metrics signal “works” vs “degrades”?  
- Environment differences: lab is controlled; field has noise, dynamic obstacles, variable lighting.  
- Robot heterogeneity: identical firmware? Hardware drift?  

**2️⃣ Adopt a System‑Level Debugging Framework**  
- **Data collection** → logs, telemetry, sensor streams.  
- **Feature comparison** → lab vs field inputs (e.g., sensor variance).  
- **Failure mode taxonomy** → latency spikes, mis‑classification, actuator limits.  

**3️⃣ Step‑by‑Step Reasoning**  
1. Reproduce the lab scenario in simulation with recorded field data to isolate variables.  
2. Instrument robots for real‑time diagnostics (CPU load, sensor health).  
3. Correlate degradation events with environmental triggers (e.g., sudden light change).  
4. Narrow down candidate modules: perception, planning, control.  
5. Perform unit tests on each module with field‑style inputs.  

**4️⃣ Avoid Common Traps**  
- Don’t attribute all bugs to hardware drift; software bugs can surface only under edge cases.  
- Beware of “confirmation bias” when you see a pattern that matches your hypothesis but ignore counter‑evidence.  
- Don’t patch without regression tests—field fixes might break lab performance.

**5️⃣ Sanity‑Check & Communicate**  
- Cross‑validate findings with a second robot or a different field location.  
- Summarize root causes in plain language: “The policy mis‑reacts to high‑frequency sensor noise; we need a low‑pass filter.”  
- Propose incremental fixes, measure impact, and iterate until the field performance matches lab benchmarks.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
