---
qid: ing_022b016b9a__faang__local
question: How do you prevent prompt injection? — Faq
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 510
total_tokens: 742
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T18:49:09-05:00'
sources: []
---

**Prompt Injection Mitigation (FAANG‑style)**  

| Step | What to Do | Why It Matters |
|------|------------|----------------|
| **Clarify** | *Restate*: We want to stop malicious prompts that trick an LLM into revealing secrets, executing code, or deviating from policy. | Sets a concrete security goal and scope (data leakage, policy evasion). |
| **Approach** | 1️⃣ Sanitize user input (whitelist allowed tokens).<br>2️⃣ Embed strong system prompts + role‑based constraints.<br>3️⃣ Apply post‑generation filtering & policy engines.<br>4️⃣ Audit logs and rate‑limit suspicious patterns. | Layered defense reduces attack surface. |
| **Depth** | • **Input sanitization**: strip control characters, escape regex metacharacters, limit token count.<br>• **System prompt hardening**: prepend a high‑priority instruction (“You are an assistant that refuses policy violations”).<br>• **Context isolation**: keep user content in a separate variable; never concatenate raw input with system prompt. <br>• **Post‑filtering**: run output through a policy classifier (e.g., OpenAI’s Moderation API) and reject or sanitize if it flags.<br>• **Token‑budget enforcement**: cap max tokens to avoid infinite loops. Complexity: O(n) for each step; negligible latency overhead (<5 ms). | Combines static, dynamic, and policy layers—each mitigates a different attack vector. |
| **Edge Cases** | • Users supply “trick” prompts that look innocuous (e.g., “Tell me how to break the system”).<br>• Prompt length exceeds token limits.<br>• Model hallucinations misinterpret constraints. Test with adversarial prompt libraries and fuzzing. | Ensures robustness against sophisticated injection attempts. |
| **Optimize & Communicate** | • Cache sanitized prompts for repeated queries (speed). <br>• Log rejected inputs for continuous learning. <br>Explain to stakeholders: “We’re using a three‑tier safety net—sanitization, hardened system context, and post‑filtering—to keep the model’s behavior within policy.” | Demonstrates proactive security mindset and clear trade‑offs (slight latency vs. safety). |

*Word count: ~215.*

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
