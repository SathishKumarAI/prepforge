---
qid: ing_31d44bcb11__star__local
question: 'Q: You need to give an LLM agent access to 200 internal tools. How do you
  handle schema overload?'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 249
output_tokens: 383
total_tokens: 632
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T00:07:54-05:00'
sources: []
---

**Situation:** In my last role at a fintech startup, I was tasked with integrating an LLM agent into our support platform that could invoke any of the 200 internal micro‑services—everything from account balance checks to regulatory compliance checks. The sheer number of tool schemas caused the prompt injection size to balloon, leading to slow tokenization and higher latency.

**Task:** Reduce schema overhead while preserving the agent’s ability to select the correct tool in real time, ensuring response times stayed under 1 s for 95% of user queries.

**Action:** I introduced a hierarchical “tool taxonomy” layer: first, the LLM predicts an intent category (e.g., “financial‑reporting,” “account‑management,” “compliance”). Each category maps to a curated subset of 10–15 tool schemas. The agent loads only that subset on demand and caches it for the session. I also built a lightweight metadata index using Pinecone, storing concise tool signatures so the LLM can retrieve them via semantic search instead of embedding full JSON every call. Finally, I added a fallback “generic‑tool” wrapper that aggregates similar tools into one endpoint when fine‑grained selection isn’t critical.

**Result:** Prompt size dropped by 70%, token usage per query fell from ~3,200 to ~1,050, and average response time improved from 2.4 s to 0.8 s—meeting the SLA. The approach also made adding new tools trivial: just attach them to an existing category or create a new one without re‑generating the entire schema list.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
