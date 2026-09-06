---
qid: ing_e0214e61e7__think__local
question: 'Explain: Traffic — Back of the Envelope - System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 190
output_tokens: 519
total_tokens: 709
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T15:45:58-05:00'
sources: []
---

**1️⃣ Clarify the scope & assumptions**  
   • Define *traffic* (e.g., HTTP requests per second, user sessions).  
   • Decide whether we’re designing a single service or an entire platform.  
   • Assume typical constraints: latency < 100 ms, high availability, cost‑efficiency.

**2️⃣ Adopt a layered mental model**  
   - **Load estimation** → **Capacity planning** → **Scalable architecture** → **Observability & resilience**.  
   Use the *“back‑of‑the envelope”* rule: rough numbers first, refine later.

**3️⃣ Step‑by‑step reasoning**  
   1. **Measure current traffic**: scrape logs or use a monitoring API; get peak QPS and average bytes per request.  
   2. **Project growth**: apply a conservative CAGR (e.g., 20 %/year).  
   3. **Compute required instances**:  
      \[
      \text{Instances} = \frac{\text{Peak QPS}}{\text{QPS per instance}}
      \]  
      Estimate QPS per instance from benchmarking or vendor specs.  
   4. **Choose distribution strategy**: round‑robin, least‑conn, or sticky sessions.  
   5. **Add redundancy**: at least two AZs, auto‑scaling groups.  
   6. **Plan for bursty traffic**: provision a small “spike” pool or use serverless functions.

**4️⃣ Common traps to avoid**  
   • Over‑optimizing latency before scaling logic.  
   • Ignoring cold starts in serverless models.  
   • Forgetting that network egress can be the hidden cost driver.  
   • Assuming linear scalability; many services plateau after a point.

**5️⃣ Sanity‑check & communicate**  
   - **Back‑of‑the envelope**: Verify that the estimated instance count is within realistic budgets and that latency targets are met with the chosen distribution.  
   - **Explain to stakeholders**: “We’re planning X instances in two AZs, auto‑scale on CPU > 70 %, and use a CDN to shave 30 % of edge traffic.”  

Repeat this loop as new metrics arrive; the key is iterating from rough estimates to measured data while keeping an eye on cost, latency, and resilience.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
