---
qid: ing_bed45cf234__think__local
question: Your assistant reads untrusted content (web pages, customer documents, email)
  and can call tools. How do you defend against prompt injection?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 206
output_tokens: 469
total_tokens: 675
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T13:33:25-05:00'
sources: []
---

**1️⃣ Clarify the scenario & assumptions**  
- The assistant can ingest arbitrary untrusted text (web, email, docs).  
- It may invoke tools or APIs after processing that input.  
- “Prompt injection” means an attacker tries to trick the model into executing unwanted tool calls or leaking data.  
- Assume we have control over prompt construction, token limits, and a sandboxed tool‑execution environment.

**2️⃣ Adopt a layered defense framework**  
1. *Input sanitization* (regex/whitelisting) → remove suspicious patterns.  
2. *Prompt structuring* → prepend a strict instruction block that forbids tool use unless explicitly allowed.  
3. *Tool‑call gating* → whitelist only trusted tools, require explicit confirmation.  
4. *Output filtering* → post‑process results for sensitive content or disallowed actions.

**3️⃣ Step‑by‑step reasoning**  
- Strip the raw text of meta‑commands (`/tool`, `CALL`, etc.).  
- Build a prompt: “You are a safe assistant… Do not execute any tool unless the user explicitly asks.”  
- When a tool call is requested, first verify it matches the whitelist and that the request originates from a verified user context.  
- Log every tool invocation with user ID & content for audit.  
- If an injection pattern slips through, catch it in the output filter and flag or refuse.

**4️⃣ Avoid common pitfalls**  
- Don’t rely solely on token‑limit truncation; attackers can embed malicious prompts within limits.  
- Never trust that a “tool name” string is safe—parsing must be strict.  
- Avoid over‑aggressive sanitization that removes legitimate content and degrades UX.

**5️⃣ Sanity‑check & communicate**  
- Test with known injection vectors (e.g., `do something /call tool`).  
- Explain to users: “For safety, the assistant only calls approved tools after explicit consent.”  
- Keep logs; review anomalies quarterly.  

By layering sanitization, strict prompt instruction, whitelist gating, and post‑processing checks, you create a robust barrier against prompt injection while preserving legitimate functionality.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
