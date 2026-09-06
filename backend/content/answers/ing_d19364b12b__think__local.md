---
qid: ing_d19364b12b__think__local
question: 'Explain: What you’re actually trying to do — Mobile System Design Interview'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 193
output_tokens: 428
total_tokens: 621
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T14:47:47-05:00'
sources: []
---

**1️⃣ Clarify the core goal & assumptions**  
   - *What’s being asked?* The interviewer wants you to articulate **what you’re really trying to accomplish** when designing a mobile system (e.g., “deliver low‑latency, high‑throughput messaging”).  
   - *Assume:* You have basic requirements (user load, budget, platform constraints) but the exact metric isn’t given.  

**2️⃣ Adopt a design framework**  
   - Use the classic **“Goal → Constraints → Trade‑offs → Architecture”** loop.  
   - Start with the *business goal* (e.g., maximize user engagement), then list *technical constraints* (battery, network variability, device heterogeneity).  

**3️⃣ Step‑by‑step reasoning**  
   1. **Identify success metrics** – latency, uptime, cost per request, etc.  
   2. **Map high‑level requirements** to those metrics.  
   3. **Translate constraints into design decisions** (e.g., local caching for offline use).  
   4. **Iterate on trade‑offs**: “If we lower latency by X, we’ll consume Y more battery.”  

**4️⃣ Avoid common traps**  
   - *Over‑engineering:* Don’t dive into micro‑optimizations before the goal is clear.  
   - *Assuming perfect conditions:* Mobile networks are flaky; design for graceful degradation.  
   - *Ignoring user experience:* Latency matters, but so does UI responsiveness and perceived speed.  

**5️⃣ Sanity‑check & communicate**  
   - Rephrase the goal in one sentence: “We’re building a system that keeps users engaged by delivering content with < 200 ms latency on 4G/5G.”  
   - Ask a quick sanity question to the interviewer (“Does this align with what you had in mind?”) to confirm alignment before moving deeper.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
