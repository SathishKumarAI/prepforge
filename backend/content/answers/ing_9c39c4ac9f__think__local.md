---
qid: ing_9c39c4ac9f__think__local
question: 'Explain: Pitfall 5: No Graceful Degradation — Common Pitfalls'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 194
output_tokens: 473
total_tokens: 667
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T11:23:43-05:00'
sources: []
---

**1️⃣ Clarify & Assume**

- *Clarify*: “Graceful degradation” means a system keeps working (albeit at reduced capacity) when something fails.  
- *Assumptions*: We’re talking about AI‑powered products that rely on cloud services, data pipelines, or external APIs.

---

**2️⃣ Mental Model / Framework**

Use the **“Robustness → Resilience → Graceful Degradation” ladder**:

| Layer | What it protects | Typical pitfall in AI |
|-------|------------------|----------------------|
| Robustness | Algorithmic correctness on clean data | Ignoring noisy or missing inputs |
| Resilience | System uptime, fail‑over | No fallback for external services |
| Graceful Degradation | User experience when failures occur | UI freezes or crashes instead of “service unavailable” message |

---

**3️⃣ Step‑by‑Step Reasoning**

1. **Identify critical dependencies** (e.g., GPU cluster, training data store).  
2. **Model failure modes**: loss of compute, data corruption, API timeout.  
3. **Design fallback paths**: cached predictions, simplified models, or “offline” mode.  
4. **Implement monitoring + alerting** to detect when degradation is needed.  
5. **Test end‑to‑end** with simulated failures (Chaos Monkey style).  

---

**4️⃣ Common Traps & Wrong Turns**

- *Over‑engineering*: building a full‑blown fallback that’s rarely used.  
- *Assuming “best effort” is enough*: users expect clear messages, not silent errors.  
- *Ignoring user context*: a degraded model might still be useful (e.g., lower accuracy but faster response).  

---

**5️⃣ Sanity‑Check & Communicate**

- **Ask**: “If the GPU cluster goes down, what does the user see?”  
- **Explain**: “We’ll serve predictions from a smaller model and display a banner: ‘Limited functionality due to system constraints.’”  
- **Validate**: Run a quick failure test and confirm the UI doesn’t crash.  

By walking through these steps, you can systematically avoid the *No Graceful Degradation* pitfall in AI systems.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
