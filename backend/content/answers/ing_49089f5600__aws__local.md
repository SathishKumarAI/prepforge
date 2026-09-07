---
qid: ing_49089f5600__aws__local
question: 'Explain: Failure Mode #2: Poor Placement of Retrieved Information'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 231
output_tokens: 398
total_tokens: 629
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T08:10:41-05:00'
sources: []
---

**Failure Mode #2: Poor Placement of Retrieved Information**  
*Leadership Principles:* **Customer Obsession** + **Ownership**

**Situation (S)** – In 2023 I led a team building an AI‑driven FAQ bot for our e‑commerce platform. Users complained that the bot’s answers were accurate but buried deep in the chat, requiring multiple scrolls and mouse clicks.

**Task (T)** – Redesign the UI/UX so that relevant information surfaces instantly, reducing friction while keeping response latency under 200 ms.

**Action (A)** –  
1. **Dive Deep into logs:** Traced user interactions to pinpoint where the bot’s `response_text` was appended late in the rendering pipeline.  
2. **AWS Lambda + API Gateway**: Refactored the bot endpoint to stream partial responses via Server‑Sent Events, so the UI renders text as soon as it is generated.  
3. **Amazon CloudFront + Edge Lambda@Edge**: Cached frequently requested FAQ snippets at edge locations, cutting round‑trip time by ~35 %.  
4. **React component refactor:** Implemented a “sticky answer bar” that pins the first 200 characters; full content loads lazily.  

**Result (R)** – Post‑deployment, we saw a **42% drop in support tickets** related to answer visibility and a **25% increase in average session duration**, directly boosting conversion by $1.8 M monthly. Cost impact was neutral because Lambda usage fell 12% while CloudFront cache hit ratio rose 18%.

*Bar‑raiser notes:* I took full ownership, delved into the root cause with data, quantified the lift, and learned that UI placement can be as critical as model accuracy.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
