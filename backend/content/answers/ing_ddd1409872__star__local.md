---
qid: ing_ddd1409872__star__local
question: 'Explain: Abridge AI — Abridge AI Jobs + Careers | Built In'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 345
total_tokens: 585
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T06:51:58-05:00'
sources: []
---

**Situation**  
When I joined a startup that was building an AI‑powered interview platform, the hiring team noticed our candidate engagement metric had dropped 18 % in Q3. They wanted us to create a lightweight “AI‑bridge” feature that could quickly summarize candidates’ video responses and feed key insights into the ATS.

**Task**  
I was tasked with designing and deploying an AI bridge module that would (1) transcribe speech, (2) extract competency keywords, and (3) generate a concise 30‑second highlight reel for recruiters—all while staying under 200 ms per candidate to keep the interview flow smooth.

**Action**  
I first prototyped a Whisper‑based transcription pipeline in Python, then fine‑tuned a DistilBERT model on our own competency taxonomy. To meet latency goals I containerized the service with Docker and deployed it to AWS Lambda using GPU‑enabled inference. For the highlight reel I used OpenCV to stitch together the most keyword‑dense video snippets and added an auto‑generated subtitle overlay. I also built a small React component that displayed the summary in the recruiter dashboard, pulling data via GraphQL.

**Result**  
After rollout, candidate engagement rose 22 % over the next quarter, and recruiters reported a 35 % reduction in time spent reviewing raw video. The project earned us an internal “Innovation Award” and I learned how to balance model accuracy with real‑world latency constraints while keeping user experience top priority.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
