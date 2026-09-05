---
qid: ing_bd05fe6222__star__local
question: 'Explain: Computer-Use Agents — Computer Use Agents'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 296
total_tokens: 531
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T05:49:01-05:00'
sources: []
---

**Situation** – At my previous company we were building an internal knowledge‑base chatbot that needed to pull up‑to‑date reports from our legacy ERP system. The business wanted the bot to fetch and summarize data in real time, but the ERP only exposed a batch‑processing API, so manual pulls were taking hours.

**Task** – I was tasked with designing a computer‑use agent that could automatically log into the ERP portal, run the necessary reports, scrape the results, and feed them back to the chatbot, all while staying within compliance limits.

**Action** – I chose Selenium for browser automation and added a headless Chrome instance wrapped in a Docker container. The agent used a scheduled cron job to trigger every 15 minutes, logged in via secure credential vaulting, navigated through the ERP UI, downloaded CSVs, parsed them with Pandas, and exposed an internal REST endpoint that the chatbot could call. I also implemented retry logic and audit logging to satisfy audit‑trail requirements.

**Result** – The bot cut report retrieval time from 2 hours to under 5 minutes, increased chatbot accuracy by 23%, and reduced manual intervention by 90%. I learned how to balance automation speed with security compliance, and how to expose a clean API for downstream services.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
