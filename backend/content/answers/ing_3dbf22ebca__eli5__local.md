---
qid: ing_3dbf22ebca__eli5__local
question: 'Explain: Amazon SNS message filtering — AWS-Services/4_MessageBrokers/AmazonSNS.md
  at main \u00b7 Anshul619/AWS-Services \u00b7 GitHub'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 189
output_tokens: 223
total_tokens: 412
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T10:13:46-05:00'
sources: []
---

Imagine you’re in a big office with many desks (the *topics*). Everyone can drop notes into the inboxes at those desks, but only certain people want to see specific kinds of notes.  
Amazon SNS lets you set up **message filters**—like sticky‑note rules—so that when a note arrives, it’s automatically sent only to the desks whose rules match its “tags.”  

A *tag* is just a small piece of text (e.g., `{"type":"alert","severity":"high"}`) attached to each message.  
When you publish a message, SNS looks at these tags and compares them with each subscriber’s filter policy. Only subscribers whose policy says “I want messages where type=alert AND severity=high” will get the note; others ignore it.  

So, message filtering is like having a smart mail sorter that hands out only the relevant notes to the right people, keeping everyone focused on what matters.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
