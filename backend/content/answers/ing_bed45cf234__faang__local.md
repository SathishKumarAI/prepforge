---
qid: ing_bed45cf234__faang__local
question: Your assistant reads untrusted content (web pages, customer documents, email)
  and can call tools. How do you defend against prompt injection?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 250
output_tokens: 467
total_tokens: 717
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T02:06:16-05:00'
sources: []
---

**Clarify**  
We have an LLM‑powered assistant that ingests arbitrary user content (web pages, docs, email) and may invoke external tools. Prompt injection occurs when a malicious user crafts input that manipulates the model into executing unintended actions or leaking data. I’ll assume: 1) we can preprocess text before feeding it to the model; 2) tool calls are mediated by a policy engine; 3) the system must preserve user privacy and comply with regulations.

**Approach**  
1. **Sanitize & encode** incoming content (escape special tokens, strip control characters).  
2. **Contextual isolation**: wrap each user‑supplied chunk in a strict prompt template that explicitly states intent (“User says…”) and enforces no tool calls unless the policy allows it.  
3. **Tool‑call gating**: implement an explicit “allow list” of permissible actions per content type, enforced by a runtime policy evaluator.  
4. **Redaction & monitoring**: detect high‑risk patterns (e.g., `<<CALL TOOL>>`) and flag them for human review or automatic rejection.

**Depth**  
- Use a tokenizer‑aware escape strategy to neutralize prompt‑control tokens.  
- The policy engine runs in a separate process, evaluating each tool request against user role, content sensitivity, and system constraints (O(1) per call).  
- Maintain a “sandboxed” execution environment for tools; limit I/O and network access.  
- Log all inputs/outputs for auditability.

**Edge Cases**  
- Obfuscated injections via Unicode or base64 encoding.  
- Legitimate tool requests embedded in user text (e.g., “Please run `calc(2+3)`”).  
- Tool outputs that contain sensitive data; ensure they’re not exposed to other users.

**Optimize & Communicate**  
Add a lightweight heuristic that flags suspicious tokens before full tokenization, reducing compute. Explain the layered defense: sanitization → policy gating → sandboxing. Highlight trade‑offs: stricter filtering may reduce usability but is essential for safety. This structured plan balances security with functional flexibility, satisfying FAANG interview expectations.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
