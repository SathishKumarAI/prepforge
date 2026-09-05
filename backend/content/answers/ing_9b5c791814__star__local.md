---
qid: ing_9b5c791814__star__local
question: Design a secure architecture for an agent that reads untrusted web/email
  content AND has access to a user's private data. How do you defeat prompt injection
  by construction?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 257
output_tokens: 340
total_tokens: 597
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T04:42:53-05:00'
sources: []
---

**Situation:** In my last role I built an AI assistant that could ingest public web pages and user emails while accessing confidential customer records from our CRM. The team was worried about prompt‑injection attacks where malicious content could trick the model into leaking private data.

**Task:** My goal was to design a secure architecture that would isolate untrusted input, enforce strict data boundaries, and make injection impossible by construction.

**Action:** I started by sandboxing the ingestion layer in an isolated container with a minimal runtime—only the HTTP client and a tokenizer. All raw content first passed through a rule‑based sanitizer that stripped script tags, removed embedded URLs, and flagged any request for internal fields. Next, I built a “policy oracle” service that received every prompt fragment and applied a deterministic policy graph: if a token sequence referenced any private field, the oracle would reject or replace it with a placeholder. The AI model itself ran inside a hardened VM with read‑only access to its own weights; no direct file system or network I/O was allowed. Finally, I added an audit trail that logged every prompt, decision, and output for compliance review.

**Result:** After deployment, we processed over 10 million public documents without any data leakage incidents. The policy oracle reduced false positives by 30% compared to a naive regex filter, and the overall latency increased only 12 ms per request—well within our SLA. I learned that treating prompt injection as an architectural boundary, not just a runtime check, provides robust protection against sophisticated attacks.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
