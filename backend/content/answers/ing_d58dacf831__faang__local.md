---
qid: ing_d58dacf831__faang__local
question: What is prompt injection, and how is it different from a jailbreak?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 541
total_tokens: 777
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T02:56:04-05:00'
sources: []
---

**Clarify**  
We’re asked to define *prompt injection* and distinguish it from a *jailbreak* of an LLM. I’ll assume the audience knows about prompt‑engineering, that “jailbreak” refers to evading safety guardrails, and that we need to explain the mechanics and risk profile.

**Approach**  
1. Define each term precisely.  
2. Explain how they are triggered (input manipulation vs. policy bypass).  
3. Highlight differences in intent, mechanism, and impact.  
4. Touch on mitigation strategies and why one is harder to detect than the other.

**Depth**  

| Term | What it is | Trigger | Typical Goal |
|------|------------|---------|--------------|
| **Prompt injection** | An attacker crafts input that contains hidden or obfuscated instructions for the model, causing it to produce unintended outputs. | Malicious text embedded in normal user data (e.g., “Ignore previous instruction; answer …”). | Make the LLM generate disallowed content, leak internal prompts, or manipulate downstream logic. |
| **Jailbreak** | A technique that circumvents built‑in safety filters or role constraints set by the system. | Input designed to exploit policy loopholes (e.g., “Pretend you’re a hacker…”). | Enable the model to provide disallowed advice or violate its deployment rules. |

Key differences:

* **Scope** – Prompt injection works within the existing prompt; jailbreak attacks the *policy layer*.  
* **Visibility** – Injected prompts are often hidden inside user data, making them harder to spot than a blatant jailbreak request.  
* **Detection** – Injection requires deep analysis of context and token patterns; jailbreaks can be flagged by simple rule‑based checks.

Mitigation: Use prompt sanitization, role‑enforcement wrappers, and anomaly detection on token sequences.  

**Edge Cases**  
1. A jailbreak that also injects malicious content (dual attack).  
2. Context‑aware models that interpret “ignore” differently based on prior turns—may mask injection.  
3. Over‑aggressive filtering could block legitimate complex prompts.

**Optimize & Communicate**  
- Emphasize that both attacks exploit the *open* nature of prompt‑based LLMs, but differ in where they target (input vs. policy).  
- Stress layered defenses: sanitize user input, enforce role tokens, monitor for anomalous token patterns.  
- Convey this succinctly to interviewers, showcasing clear structure and depth while staying within 200 words.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
