---
qid: ing_195e8b91ec__think__local
question: Your production assistant has started quoting wrong prices to customers.
  Is it an attack or a bug, and how do you find out?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 204
output_tokens: 429
total_tokens: 633
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T04:24:32-05:00'
sources: []
---

**1️⃣ Clarify the problem & state assumptions**  
- What does “wrong prices” mean (off‑by‑10%, wrong currency, outdated catalog)?  
- Does the assistant only misquote in certain contexts or all customers?  
- Assume the assistant is a deterministic software component unless evidence of malicious intent.  

**2️⃣ Adopt a systematic diagnostic framework**  
1. *Reproduce*: Ask the assistant to quote the same product twice under identical conditions.  
2. *Log & isolate*: Capture input, internal state, and output logs.  
3. *Version check*: Verify that the code deployed matches the latest verified release.  

**3️⃣ Step‑by‑step reasoning**  
- **If the quotes are consistently wrong across all attempts**, likely a bug (logic error or stale data).  
- **If they’re correct sometimes but wrong in others, especially after specific triggers (time of day, user location)**, investigate environmental variables or race conditions.  
- **If the assistant only misquotes for certain customers or after suspicious activity logs** (e.g., unusual IPs), consider a targeted attack (data tampering, injection).  

**4️⃣ Common traps to avoid**  
- *Confirmation bias*: Don’t assume it’s an attack just because you’re worried.  
- *Over‑engineering*: Don’t jump straight to security audits if the issue is simple data cache corruption.  
- *Ignoring logs*: Missing subtle clues in error messages can mislead you toward the wrong root cause.  

**5️⃣ Sanity‑check & communicate**  
- Summarize findings: “The assistant consistently misquotes after a nightly sync, indicating a bug in the price‑update routine.”  
- If security is suspected, state: “No evidence of tampering; logs show legitimate update process.”  
- Share next steps: patching logic or tightening access controls.  

By iterating through reproduction → logging → contextual analysis, you’ll distinguish an accidental bug from a deliberate attack and know how to fix it.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
