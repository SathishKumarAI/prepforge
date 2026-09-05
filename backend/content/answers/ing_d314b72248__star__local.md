---
qid: ing_d314b72248__star__local
question: 'Explain: Case Study 08 - AI Meeting Assistant (Transcription, Notes, Action
  Items)'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 244
output_tokens: 326
total_tokens: 570
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T06:31:47-05:00'
sources: []
---

**Situation:**  
During my last role at a SaaS startup, we were launching a new collaboration platform. Our sales team spent about 30 % of their week in meetings that produced long transcripts and fragmented action items, causing delays in closing deals.

**Task:**  
I was tasked with building an AI‑powered meeting assistant that could automatically transcribe, generate concise notes, and extract actionable tasks within minutes of a call ending.

**Action:**  
I integrated Whisper for real‑time transcription, then used GPT‑4 fine‑tuned on our sales scripts to summarize key points. For action items, I employed a rule‑based NLP pipeline combined with a lightweight entity recognizer to pull deadlines, owners, and dependencies. All outputs were pushed into our existing CRM via a custom API, tagging notes as “Meeting Summary” and creating task cards in Asana. I also added an optional Slack bot that sent instant summaries to the channel for quick reference.

**Result:**  
Within two weeks of rollout, meeting time was reduced by 22 % (from 90 min to 70 min), and action item completion rate jumped from 58 % to 84 %. The team reported a 30 % increase in deal velocity, and I learned how to blend large‑model summarization with lightweight rule engines for production reliability.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
