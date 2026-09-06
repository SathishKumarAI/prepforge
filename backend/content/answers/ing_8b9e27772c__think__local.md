---
qid: ing_8b9e27772c__think__local
question: Your agent reads web pages and can send email. How do you defend against
  indirect prompt injection?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 197
output_tokens: 454
total_tokens: 651
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T10:17:48-05:00'
sources: []
---

**Metacognition for Defending Against Indirect Prompt Injection**

1. **Clarify the threat surface and constraints**  
   - *What* are we protecting? (The prompt that drives downstream LLMs.)  
   - *Where* can malicious content sneak in? (Web‑scraped text, user‑supplied emails, or third‑party APIs).  
   - *Assumptions*: The agent has read‑only access to web pages and outbound email capability; it cannot modify the LLM itself.

2. **Apply a layered “sanitize‑then‑validate” framework**  
   - First, strip or neutralise any control characters or scripting tags that could influence prompt formatting.  
   - Second, run content through a whitelist/blacklist filter (e.g., block known injection patterns like `{{`, `}}`, or shell commands).  
   - Third, enforce context boundaries: prepend a fixed instruction header to every prompt so injected text is treated as data, not code.

3. **Step‑by‑step reasoning**  
   - *Extract* → clean → *tokenise* → check for prohibited tokens → *assemble* with safe prefix → send to LLM.  
   - For emails: validate sender/domain, scan attachments for malicious payloads before forwarding.

4. **Avoid common traps**  
   - Don’t rely solely on regex; attackers can obfuscate.  
   - Don’t assume the LLM will ignore malformed inputs—prompt injection exploits its own parsing logic.  
   - Beware of “trust‑on‑first‑use” bugs: a single sanitized instance doesn’t guarantee future safety.

5. **Sanity‑check & communicate**  
   - Run unit tests with known injection vectors; confirm no policy breach.  
   - Log every sanitisation step and the final prompt sent, so auditors can trace how data flowed.  
   - When explaining to stakeholders: “We first scrub any control characters, then enforce a strict content whitelist, and finally prepend a defensive header—this ensures injected text cannot alter our LLM’s behaviour.”

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
