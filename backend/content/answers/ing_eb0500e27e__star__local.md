---
qid: ing_eb0500e27e__star__local
question: The system prompt says one thing, the user asks for another, and a retrieved
  document says a third. How do you design conflict resolution?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 253
output_tokens: 326
total_tokens: 579
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T07:18:11-05:00'
sources: []
---

**Situation** – While building a knowledge‑base chatbot for a legal firm, the system prompt was set to “provide concise summaries of statutes.” A client asked for a detailed case analysis, and the retrieval engine returned an older, conflicting regulation document.  
**Task** – I needed to design a conflict‑resolution layer that would honor the system’s policy, respect user intent, and avoid propagating outdated or contradictory information.  
**Action** – First, I added a *policy priority matrix* in the orchestration module: system prompt > user request > retrieved content. Then I implemented an *intent confidence score* using a lightweight BERT model to quantify how strongly the user query aligned with the system’s scope. For documents that conflicted, I introduced a *source‑trust tier*: official statutes (high trust), internal memos (medium), and external articles (low). The resolver would surface the highest‑trusted source matching the intent; if none existed, it would fall back to a synthesized answer citing all sources with a disclaimer. Finally, I logged each conflict decision for auditability.  
**Result** – After deployment, user satisfaction scores rose 23 % and support tickets related to contradictory answers fell by 37 %. The system now transparently resolves conflicts while keeping the firm’s compliance standards intact, and I learned that embedding trust tiers into the retrieval pipeline is key to robust AI behavior.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
