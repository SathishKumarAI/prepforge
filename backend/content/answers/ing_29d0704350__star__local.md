---
qid: ing_29d0704350__star__local
question: 'Explain: Appendix 2: Prompt engineering your tools'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 354
total_tokens: 589
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T23:51:50-05:00'
sources: []
---

**Situation** – In my last role I was tasked with building a chatbot that could triage customer support tickets for a SaaS platform. The existing system had an accuracy of only 68 % in correctly classifying issues into “billing”, “technical”, or “feature request” categories, leading to long wait times and high CSAT scores.

**Task** – I needed to improve classification accuracy above 90 % while keeping latency under 200 ms so the bot could run on our edge servers. The challenge was to design prompts that leveraged a large language model but also stayed concise enough for real‑time inference.

**Action** – First, I gathered a representative set of tickets and performed error analysis to identify common misclassifications. Then I experimented with prompt templates that included few‑shot examples: “Ticket: [text] → Category:”. I used the OpenAI API’s `davinci-003` engine with temperature 0.2 for deterministic outputs. To reduce token usage, I employed a two‑stage approach: a lightweight keyword‑matching filter to catch obvious cases, followed by the LLM only on ambiguous tickets. I also added a “confidence score” field in the prompt output and set a threshold to trigger human review when below 0.7.

**Result** – The new system achieved 92 % classification accuracy and cut average response time from 1.8 s to 140 ms, boosting CSAT by 12 %. I learned that carefully curated few‑shot prompts combined with pre‑filtering can dramatically improve both speed and precision in production LLM applications.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
