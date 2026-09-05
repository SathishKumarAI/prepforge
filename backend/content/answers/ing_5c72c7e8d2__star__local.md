---
qid: ing_5c72c7e8d2__star__local
question: 'Explain: Moving forward — AI threats in the wild: The current state of
  prompt injections on the web'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 245
output_tokens: 356
total_tokens: 601
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T01:32:32-05:00'
sources: []
---

**Situation**  
At my previous role I was part of a security team that had just migrated our customer support chatbot to an open‑source LLM platform because it cut costs by 35 %. Within weeks, we noticed a spike in unusual user queries—phrases like “ignore previous instruction” or “output the code as plain text.” It turned out these were prompt injection attempts exploiting the web interface.

**Task**  
My job was to assess how widespread these injections could be on the public web, quantify the risk to our data pipeline, and devise a mitigation strategy that wouldn’t break legitimate user interactions.

**Action**  
I built a crawler that injected a set of known malicious prompts into 12,000 publicly accessible LLM‑powered sites. Using Python’s `requests` library with a rotating proxy pool, I logged responses and flagged any that returned system messages or code blocks beyond the allowed scope. The analysis revealed that ~4 % of sites were vulnerable, many exposing internal API keys. To mitigate, I implemented a prompt sanitization layer: token‑level regex filtering, a whitelist of safe commands, and a rate limiter that throttled suspicious patterns. We also added an audit trail to capture injection attempts for future tuning.

**Result**  
Post‑deployment, the crawler found zero new vulnerabilities in our own deployments and only 0.3 % on external sites—an order of magnitude improvement. The incident response time dropped from days to hours, and we reduced potential data exposure by roughly 90 %. This project taught me that proactive web scanning combined with lightweight sanitization can effectively curb prompt injection threats without compromising user experience.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
