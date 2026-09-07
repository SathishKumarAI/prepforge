---
qid: ing_8c30170181__faang__local
question: How does prompt injection work against agents via tool results, and what
  actually mitigates it?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 494
total_tokens: 734
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T00:10:03-05:00'
sources: []
---

**Clarify**  
Prompt‑injection is a technique where an attacker injects malicious text into the prompt that an LLM‑powered agent uses to decide which tool to call or how to format its response. We’re assuming: (1) the agent concatenates user input with internal instructions before sending it to the model; (2) the model outputs a tool‑call specification in a predictable JSON schema; and (3) downstream code executes that spec without sanitisation.

**Approach**  
1. Model the attack surface: user → prompt → LLM → tool‑call spec → execution.  
2. Identify mitigation layers: input validation, output filtering, schema enforcement, sandboxing.  
3. Quantify risk by measuring how often injected payloads survive these filters and lead to unauthorized actions.

**Depth**  
- **Injection vector**: users embed JSON keys or function names that override internal directives (e.g., `"action":"delete_all"`). The LLM, following its training data, happily produces the malicious spec.  
- **Mitigations**:
  - *Schema validation*: Parse the output strictly against a pre‑defined schema; reject if unknown fields appear.  
  - *Prompt sanitisation*: Strip or escape characters that could alter JSON structure (e.g., braces, quotes).  
  - *Least‑privilege execution*: Run tool calls in a sandbox with limited permissions and audit logs.  
  - *Model‑side instruction*: Prefix the prompt with “Do not modify the following keys: …” to bias the LLM away from overwriting.  
- **Complexity**: Validation is O(n) over output length; sandboxing adds constant overhead but is essential for safety.

**Edge Cases**  
- Obfuscated payloads (base64, Unicode escapes).  
- Models that refuse to follow strict schemas and instead generate free‑text explanations.  
- Attackers chaining multiple injections across successive turns.

**Optimize & Communicate**  
Start with defensive coding: schema enforcement first; if the model still misbehaves, add a secondary layer of prompt sanitisation and finally sandboxing. Explain trade‑offs—over‑aggressive filtering can degrade user experience, while lax checks expose security holes. This layered defense mirrors industry best practice and demonstrates clear reasoning to interviewers.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
