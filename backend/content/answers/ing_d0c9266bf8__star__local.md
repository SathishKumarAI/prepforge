---
qid: ing_d0c9266bf8__star__local
question: How do you structure a prompt to be resistant to prompt injection from retrieved
  or user-supplied content?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 246
output_tokens: 335
total_tokens: 581
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T06:26:51-05:00'
sources: []
---

**Situation:** I was leading the backend for a fintech chatbot that used GPT‑4 to answer user queries about account balances. After a security audit, we discovered that users could inject malicious prompts via the “context” field, causing the model to reveal sensitive data.

**Task:** My goal was to redesign our prompt construction so it would be immune to prompt injection from both retrieved documents and raw user input, while keeping response quality high.

**Action:** I introduced a strict two‑tier prompt template. First, every request is wrapped in a *system* message that sets the role (“You are a secure banking assistant”) and enforces a policy of never revealing personal data unless explicitly authorized. Second, I escaped all user content using a JSON‑encoded string before concatenation, and stripped any control characters or known injection patterns (e.g., “;”, “--”, “DROP”). I also limited the length of retrieved snippets to 200 tokens and pre‑validated them against an allowlist of keywords. Finally, I added a post‑processing filter that scans model output for any disallowed substrings before sending it back.

**Result:** After deployment, our penetration tests showed zero successful injection attempts, and user satisfaction scores rose by 12% because responses became more consistent. I learned the importance of treating every piece of external text as potentially hostile and building layered safeguards around prompt assembly.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
