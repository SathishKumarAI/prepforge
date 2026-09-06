---
qid: ing_5560d6fd64__think__local
question: 'Explain: Security guidelines — ''A cheat sheet for API designs'''
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 192
output_tokens: 525
total_tokens: 717
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T06:37:54-05:00'
sources: []
---

**1. Clarify the scope & assumptions**  
   - *What is meant by “security guidelines”?*  Assume it refers to best‑practice rules that keep an API from leaking data, being abused, or enabling privilege escalation.  
   - *Who is the audience?*  Target developers building REST/GraphQL endpoints; they likely know HTTP basics but not deep security.  
   - *What context?*  A “cheat sheet” implies a concise, bullet‑style reference rather than a long essay.

**2. Adopt a mental framework**  
   - **Attack surface → Mitigation**: list common vulnerabilities (injection, broken auth, etc.) and pair each with the simplest countermeasure.  
   - **Layered defense**: apply security in multiple layers—network, transport, application, data.  
   - Use the “OWASP API Security Top 10” as a skeleton; it’s widely accepted and covers most concerns.

**3. Step‑by‑step reasoning**  
   1. *Identify core pillars*: authentication, authorization, input validation, rate limiting, logging, transport security.  
   2. For each pillar, enumerate the minimal set of actions: e.g., “Use OAuth 2.0/JWT with short expiration” or “Never trust raw query parameters—sanitize/validate all inputs.”  
   3. Translate each action into a one‑liner cheat‑sheet bullet.  
   4. Organize bullets by API lifecycle (design, implementation, deployment).  
   5. Keep language simple and actionable; avoid jargon that might confuse newcomers.

**4. Common traps to avoid**  
   - *Overloading the sheet*: too many details defeat the “cheat” purpose.  
   - *Assuming all APIs are public*: include notes for internal/private endpoints but emphasize that even these need safeguards.  
   - *Ignoring context*: a single bullet like “Enable TLS” is insufficient without noting certificate management or HSTS.

**5. Sanity‑check & verbalize**  
   - Read each bullet aloud: does it read as an instruction? If not, rephrase.  
   - Verify that every OWASP API vulnerability has at least one mitigation listed.  
   - Ask a peer to skim; if they can spot a missing major risk or unclear phrase, adjust accordingly.

By following this process you’ll produce a clear, practical security cheat sheet that developers can reference quickly while designing robust APIs.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
