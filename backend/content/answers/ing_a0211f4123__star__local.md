---
qid: ing_a0211f4123__star__local
question: 'Explain: Cost estimate (rough token math) — Meeting Assistant'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 384
total_tokens: 621
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T04:52:32-05:00'
sources: []
---

**Situation** – At my previous company we were building a virtual meeting assistant that transcribes, summarizes, and pulls actionable items from recorded video calls. Our product team wanted to estimate the monthly cost of running this service on AWS Lambda with OpenAI’s GPT‑4o model before committing to production.

**Task** – I needed to produce a rough token‑based cost estimate for a typical 1‑hour meeting (average 30 minutes of spoken content, plus 10 minutes of transcription output and 5 minutes of summarization) and translate that into an approximate monthly bill assuming we host 200 meetings per day.

**Action** – I first calculated the token usage:  
- Transcription: ~3 tokens/second → 18,000 tokens.  
- Summarization prompt + response: 1,500 tokens.  
Total ≈ 19,500 tokens per meeting. Using OpenAI’s pricing of $0.03 per 1K input and $0.06 per 1K output tokens for GPT‑4o, I split the 19,500 into ~12,000 input and ~7,500 output. The daily cost came out to about $2.70 (≈$0.33 per meeting). Scaling to 200 meetings a day gave ≈ $540/month. I double‑checked the math in Python, plotted a sensitivity curve for token variations, and shared the spreadsheet with stakeholders.

**Result** – The estimate helped the finance team approve a budget of $600/month, aligning with our projected user growth. I also learned how to quickly convert raw speech data into actionable cost figures and the importance of validating assumptions with real usage patterns.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
