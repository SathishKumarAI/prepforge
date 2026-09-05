---
qid: ing_19b0e5cf71__star__local
question: 'Explain: Requirements — Meeting Assistant'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 231
output_tokens: 385
total_tokens: 616
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T23:20:54-05:00'
sources: []
---

**Situation**  
When my startup pivoted from a generic chatbot to a productivity suite, the product manager asked us to build a “meeting assistant” that could auto‑schedule, transcribe, and summarize minutes for our enterprise clients. The existing internal calendar system was fragmented across Outlook, Google Calendar, and an on‑premise Exchange server.

**Task**  
I had to design a single API endpoint that would ingest calendar invites from any provider, trigger real‑time transcription via Whisper‑API, generate concise bullet points using GPT‑4, and push the output back into each client’s chosen platform—all within 24 hours of the meeting start.

**Action**  
I first built an OAuth‑2.0 middleware to pull events from all calendars, normalizing them into a unified JSON schema. For transcription I used Whisper with a custom “meeting” prompt to improve accuracy on technical jargon. Then I leveraged OpenAI’s fine‑tuned summarization model, passing the transcript and key agenda items as context. Finally, I wrote an idempotent webhook that posted the summary as a draft email in Outlook or Google Mail, and created a Slack thread for quick reference. Throughout, I used Docker Compose for local dev and AWS Fargate for production to keep latency under 5 seconds.

**Result**  
The assistant cut manual minute‑taking time by 70%, saving our clients an average of 3 hours per week. The API achieved <0.9 s latency on 90th percentile requests, and the accuracy of the summaries was rated 4.6/5 in a post‑deployment survey. I learned how to balance real‑time constraints with complex NLP pipelines and how critical it is to abstract heterogeneous calendar data into a single model for seamless integration.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
