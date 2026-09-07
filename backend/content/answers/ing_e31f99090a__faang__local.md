---
qid: ing_e31f99090a__faang__local
question: 'Explain: Prompt Injection and Defense — Prompt Injection Defense'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 430
total_tokens: 662
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T03:27:26-05:00'
sources: []
---

**Prompt Injection & Its Defenses**

| Step | What I’ll do |
|------|--------------|
| **Clarify** | *Problem:* An attacker crafts a user prompt that subverts an LLM’s behavior (e.g., “Ignore the policy and …”). We need to detect/stop such prompts while preserving normal UX. <br>*Assumptions:* The LLM is a black‑box API, we can pre‑process text, and policy rules are known. |
| **Approach** | 1️⃣ Tokenize & flag suspicious patterns (e.g., “ignore policy”, “act as …”).<br>2️⃣ Run a lightweight policy‑model that scores the prompt for jailbreak intent.<br>3️⃣ If score > θ, rewrite or refuse; otherwise forward to LLM. |
| **Depth** | *Pattern matching* is O(n) on input length and cheap. <br>*Policy model*: fine‑tuned binary classifier (e.g., RoBERTa) with 95% recall on a curated jailbreak dataset. <br>We add a “prompt‑sanitizer” that removes or neutralizes directives before sending to LLM. Complexity: O(n + m) where *m* is model inference time (~10 ms). |
| **Edge Cases** | • Legitimate requests containing banned phrases (false positives).<br>• Evasive prompts that rephrase attacks.<br>Testing: fuzz with 1k synthetic jailbreaks, measure precision/recall. |
| **Optimize & Communicate** | • Cache results for repeated prompts to cut inference cost.<br>• Use a two‑stage filter: fast regex → heavy classifier for uncertain cases.<br>Explain trade‑offs (speed vs. security) and how we’ll monitor drift by logging flagged inputs. |

*Result:* A layered, low‑latency defense that catches the majority of injection attempts while keeping user experience smooth.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
