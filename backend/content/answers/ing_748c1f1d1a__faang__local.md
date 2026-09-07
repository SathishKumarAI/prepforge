---
qid: ing_748c1f1d1a__faang__local
question: 'Explain: Prompt-injection defence (layered, assume the prompt fails)'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 638
total_tokens: 875
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T23:15:30-05:00'
sources: []
---

**Prompt‑Injection Defense – Layered & “Fail‑Safe” Design**

| **Step** | **What We Do** | **Why It Matters** |
|----------|----------------|--------------------|
| 1️⃣ Clarify | *Problem:* An attacker crafts a user prompt that manipulates the LLM into leaking data or performing forbidden actions. <br>*Assumptions to confirm:* (a) model has no built‑in guardrails, (b) we can pre‑process prompts, (c) external policy engine available. | Sets boundaries for the solution space and surfaces hidden constraints. |
| 2️⃣ Approach | 1. **Input sanitization** – strip or escape control tokens that trigger special behaviors.<br>2. **Prompt templating** – embed user text into a fixed safe wrapper (`"User says: {text}"`).<br>3. **Post‑generation filtering** – run output through an NLG safety classifier and redact sensitive content.<br>4. **Policy enforcement layer** – a separate service that checks the final prompt against a rule set (e.g., no `{"role":"system"}` injection). | A multi‑hop defense reduces reliance on any single component; each layer covers different attack vectors. |
| 3️⃣ Depth | *Sanitization:* regex to remove `<script>`, control characters, or hidden tokens (`\x00`). <br>*Templating:* use a language model prompt that never accepts `role: system` overrides; enforce strict JSON schema for user blocks. <br>*Filtering:* apply an LLM‑based “dangerous content” detector with threshold 0.8 and strip or replace flagged spans. <br>*Policy service:* stateless microservice exposing `/check(prompt)` returning `{allowed:true/false}`; if false, the request is rejected before hitting the LLM. <br>**Complexity:** O(n) for sanitization + O(1) API calls per policy check. Trade‑off: extra latency (~20–30 ms) vs. security guarantee. |
| 4️⃣ Edge Cases | • Attackers use obfuscated Unicode to bypass regex.<br>• Legitimate prompts that contain the word “system” as user content.<br>• Policy engine downtime → fallback to safe default (deny). <br>*Tests:* fuzzing with random Unicode, boundary‑value tests for templating placeholders, simulate policy outage. |
| 5️⃣ Optimize & Communicate | • Cache policy results for repeated prompts.<br>• Use Bloom filters to quickly reject obvious malicious patterns before full regex scan.<br>• Document the layered flow in architecture diagrams and provide a rollback plan (e.g., toggle individual layers). <br>When presenting, walk through each layer, explain its threat model, show performance numbers, and conclude with “If any layer fails, we deny or sanitize to keep the system safe.” | Demonstrates clear reasoning, acknowledges trade‑offs, and showcases readiness for production‑grade security.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
