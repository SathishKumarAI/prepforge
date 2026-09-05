---
qid: ing_6a782793e6__eli5__local
question: 'Explain: Search Engine Optimization (SEO) — AI threats in the wild: The
  current state of prompt injections on the web'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 171
output_tokens: 228
total_tokens: 399
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T11:24:47-05:00'
sources: []
---

Imagine a city’s traffic system where every road sign tells cars which way to go. SEO is like those signs—search engines read them and decide which websites show up first when someone asks a question. Now picture a mischievous driver who can slip in a note on the sign that tricks other drivers into taking a detour you didn’t intend. That’s a *prompt injection*: an attacker subtly changes the “instruction” (the search query or page content) so AI‑powered search tools give misleading results.

In the wild, hackers plant these notes in blogs, forums, or even ads. When a search engine reads the altered instruction, it may rank harmful sites higher, spread false information, or funnel users to phishing pages. The threat is real because SEO tools increasingly rely on AI to interpret content—if the input is poisoned, the output can be too. Keeping traffic signs honest (clean prompts) and adding “traffic cameras” (AI safety checks) helps protect the city’s navigation system from such detours.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
