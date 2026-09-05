---
qid: ing_065927fadf__eli5__local
question: 'Explain: High availability — What is Disaster Recovery? | Google Cloud'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 161
output_tokens: 186
total_tokens: 347
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T08:45:34-05:00'
sources: []
---

Imagine you’re baking a cake for a big party. **High availability** means having extra ovens and backup ingredients so the cake can still finish baking even if one oven breaks or a bag of flour runs out. Google Cloud does this by running many copies of your application in different “zones” (think separate kitchen rooms) so if one zone has an outage, the others keep serving users.

**Disaster recovery** is like having a spare recipe and a backup location to finish the cake after a fire or flood wipes out your main kitchen. In Google Cloud you set up automated backups and copy data to another region far away. If a whole region goes down, you can bring your application back up from those copies in seconds, keeping the party going with minimal delay.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
