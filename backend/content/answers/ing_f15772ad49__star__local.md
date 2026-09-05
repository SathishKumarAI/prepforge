---
qid: ing_f15772ad49__star__local
question: 'Explain: Welcoming The Interaction Company — Blog | Cognition'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 337
total_tokens: 575
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T07:31:01-05:00'
sources: []
---

**Situation**  
When I joined a fintech startup, our customer support ticket volume spiked 40 % after launching a new mobile feature. Our SLA was slipping and the data science team had no visibility into which user actions triggered complaints.

**Task**  
I was tasked with building an automated system that could surface the most common interaction pain points in real time, so product owners could prioritize fixes without wading through thousands of tickets manually.

**Action**  
First I scraped the support logs and extracted text embeddings using a pretrained BERT model. Then I clustered the embeddings with HDBSCAN to discover natural groups of complaints. To make it actionable, I built a lightweight Flask API that pushed each cluster’s top keywords and a confidence score to our internal dashboard via Grafana. Finally, I set up an Alertmanager rule: if any cluster’s ticket count crossed 10 in a 24‑hour window, a Slack message was sent to the product team with a brief summary and link to the raw tickets.

**Result**  
Within two weeks, we reduced average ticket resolution time by 25 % (from 8 h to 6 h). The product team reported that having an automated “interaction heat map” let them triage issues faster than manual triage. I learned that combining NLP embeddings with density‑based clustering can surface actionable insights in near real time, a pattern I now reuse whenever we need to turn noisy logs into clear priorities.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
