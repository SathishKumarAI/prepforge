---
qid: ing_752bd716c6__eli5__local
question: 'Explain: Skills and Plugins Are an Injection Surface With a Detection Ceiling'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 160
output_tokens: 196
total_tokens: 356
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T11:42:38-05:00'
sources: []
---

Think of an app as a house. **Skills** and **plugins** are like extra rooms you add—each room lets you do new things, but it also gives a burglar another way in. The *injection surface* is the number of doors and windows that could let malicious code sneak in; every added skill or plugin adds more potential “doors.”  

The **detection ceiling** is the roof that hides those intruders from your eyes. Even if a burglar slips through, you may not notice because the roof blocks cameras and alarms—so the system can’t see what’s happening inside the new rooms. In other words, skills/plugins create many entry points, yet current security tools often can’t spot every intrusion they open, making it hard to detect and stop attacks that exploit them.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
