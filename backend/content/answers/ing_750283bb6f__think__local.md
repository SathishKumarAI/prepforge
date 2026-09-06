---
qid: ing_750283bb6f__think__local
question: 'Explain: incorrect assumptions so to start off i — Amazon System Design
  Interview: Design Parking Garage'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 197
output_tokens: 451
total_tokens: 648
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T08:46:27-05:00'
sources: []
---

**Metacognition Guide – Identifying Incorrect Assumptions in a Parking‑Garage Design Interview**

1. **Clarify the Scope & Goals (and state any assumptions you’re making).**  
   * Ask whether the garage is for cars only or also bikes, scooters, etc.  
   * Decide if it’s a single‑level or multi‑story structure, and whether “design” means physical layout, software APIs, or both.  
   * Explicitly note assumptions about capacity, peak traffic, payment methods, and integration with other systems (e.g., parking sensors).

2. **Choose a Mental Model (system design framework).**  
   * Use the classic **“SCALE”** structure: *System Overview → Capacity & Performance → Architecture → Latency & Availability → Cost*.  
   * Map each component (entry gates, payment kiosks, sensor network, database) to these layers.

3. **Step‑by‑step Reasoning.**  
   * Start with user flow (entry → ticket issuance → parking → exit).  
   * For each step, list required data, latency constraints, and failure modes.  
   * Iterate: add sensors, design for scalability, then consider edge cases (e.g., power outage).

4. **Common Traps to Avoid.**  
   * Assuming a fixed number of lanes; real traffic is stochastic.  
   * Over‑optimizing for hardware when software can buffer spikes.  
   * Ignoring security—parking lots are vulnerable to fraud or vandalism.

5. **Sanity‑Check & Communicate.**  
   * Verify that each assumption aligns with interviewers’ expectations (e.g., “we’re building a SaaS solution”).  
   * Summarize the key assumptions, then present the design, noting how changes in those assumptions would shift your architecture.  

By following this sequence, you’ll surface hidden assumptions early and steer the conversation toward a robust, interviewer‑friendly parking‑garage system design.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
