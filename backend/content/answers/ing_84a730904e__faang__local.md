---
qid: ing_84a730904e__faang__local
question: 'Explain: The Dual-LLM Defense Pattern — Prompt Injection Defense'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 513
total_tokens: 748
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T23:53:12-05:00'
sources: []
---

**Dual‑LLM Defense Pattern – Prompt Injection Mitigation**

| Step | What I’d do |
|------|-------------|
| **Clarify** | *Problem:* An attacker crafts a user prompt that tricks an LLM into leaking internal data or executing unintended actions. We need to protect the downstream service without hurting usability. <br>*Assumptions to confirm:* 1) We have a single “frontend” LLM (LLM A) that receives raw user input; 2) A second, hardened LLM (LLM B) can act as a policy verifier; 3) Latency budget is ≤ 200 ms. |
| **Approach** | 1️⃣ Pass the raw prompt to LLM A to generate an *action plan* (intent + constraints). <br>2️⃣ Forward that plan to LLM B, which checks for disallowed content or policy violations and either approves or rewrites it. <br>3️⃣ Execute only approved plans via a sandboxed runtime. |
| **Depth** | - **LLM A** is lightweight (few‑shot) so prompt‑engineering is minimal. <br>- **LLM B** runs with stricter guardrails, possibly fine‑tuned on policy data; its output is deterministic after a few iterations. <br>- Complexity: O(1) per request for both calls; overall latency ≈ 2× single‑LLM cost. <br>- Trade‑off: extra compute vs. higher security. |
| **Edge Cases** | • Prompt that bypasses LLM B by embedding policy checks in natural language → mitigate with token filtering.<br>• Timeout on LLM B → fallback to safe default or request human review.<br>• Over‑aggressive rewriting leading to loss of user intent – test with diverse prompts. |
| **Optimize & Communicate** | • Cache frequent plan–policy pairs to cut latency.<br>• Use a lightweight rule engine for simple cases before invoking LLM B.<br>Explain the reasoning in an interview: “We separate intent extraction from policy enforcement, ensuring that even if one model is compromised, the second acts as a safety net.” |

*Result:* The Dual‑LLM pattern provides a clear, low‑latency defense against prompt injection while preserving user experience.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
