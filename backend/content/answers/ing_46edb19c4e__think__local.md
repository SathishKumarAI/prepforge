---
qid: ing_46edb19c4e__think__local
question: 'Explain: Multi-Step Injection Defeats Single-Payload Defenses'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 191
output_tokens: 416
total_tokens: 607
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T03:11:36-05:00'
sources: []
---

**1️⃣ Clarify the question & set assumptions**  
*What exactly is meant by “single‑payload defenses”?* Assume it refers to security measures that inspect a single input token or request (e.g., one‑shot sanitization or a single prompt filter).  
*Define “multi‑step injection”.* Think of an attacker sending a sequence of requests or building a payload across stages (e.g., first leaking data, then using that leak in a second request).

**2️⃣ Adopt a mental model: layered defense vs. staged attack**  
Visualize defenses as layers applied to one input. A multi‑step attack is like bypassing each layer incrementally—each step only needs to pass the current filter, while the overall objective emerges over several exchanges.

**3️⃣ Step‑by‑step reasoning**  
1. **Stage 1:** Send a benign or partially sanitized request that passes the first filter.  
2. **Stage 2:** Use information from Stage 1 (e.g., leaked data) to craft a second request.  
3. **Stage 3:** Combine both requests or chain them so the final effect (code execution, data exfiltration) occurs, even though each individual payload was acceptable.  

Show how the attacker exploits stateful context or side‑channels that single‑payload checks ignore.

**4️⃣ Common pitfalls to avoid**  
- Assuming one‑shot filters are “complete.”  
- Forgetting about cross‑request context (session tokens, memory).  
- Overlooking indirect side‑effects like timing or error messages.  

**5️⃣ Sanity‑check & verbalize**  
Ask: *“Does each individual request look normal to the filter?”* If yes, then the attack can succeed by chaining them. Conclude that defenses must consider sequences and context, not just isolated payloads. This explanation demonstrates how multi‑step injection defeats single‑payload defenses.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
