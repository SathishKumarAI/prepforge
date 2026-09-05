---
qid: ing_0cade195d9__star__local
question: 'Q79: How do you approach prompt injection defense in a multi-tenant agentic
  system where the agent reads external web pages or documents?'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 253
output_tokens: 349
total_tokens: 602
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T22:53:58-05:00'
sources: []
---

**Situation:** In my last role I built an AI‑powered research assistant for a SaaS platform that served multiple clients. Each tenant could upload PDFs and the agent would browse public web pages to answer questions. After a security audit we discovered that malicious users could embed prompts in URLs or document metadata, potentially causing the agent to output sensitive data from other tenants.

**Task:** I had to design a robust prompt‑injection defense that preserved usability while preventing cross‑tenant leakage and unwanted instructions.

**Action:** First, I implemented a strict input sanitization layer: all user‑supplied text (including URLs, PDFs, and extracted metadata) was passed through a tokenizer that stripped control characters and flagged suspicious patterns. Next, I introduced a “prompt sandbox” using OpenAI’s Moderation API combined with a custom policy engine that rewrote any injected instruction into a neutral form (“Please ignore previous instructions”). For web‑scraped content, I applied a domain whitelist and extracted only the main article body via Readability.js, dropping script tags. Finally, I added a runtime guard that checks the tenant context before rendering any answer, ensuring the agent can’t reference another tenant’s data.

**Result:** The new pipeline reduced prompt‑injection incidents by 97 % in our penetration tests and cut accidental data leaks to zero. User satisfaction remained high (NPS +12) because the assistant still answered queries quickly—average latency stayed under 1.2 s. I learned that combining lightweight token filtering with policy‑based rewrites offers a practical balance between security and performance in multi‑tenant AI systems.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
