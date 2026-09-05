---
qid: ing_c672292096__star__local
question: How do I get a receipt to get this reimbursed by my employer?
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 241
output_tokens: 292
total_tokens: 533
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T06:06:46-05:00'
sources: []
---

**Situation**  
During the launch of our customer‑feedback chatbot, I noticed that the accuracy of intent classification dropped from 93 % to 86 % after we added a new language pack for Spanish. The project deadline was two weeks away and the quality gate required at least 90 % precision.

**Task**  
I needed to bring the model back above the threshold without delaying delivery, while keeping the inference latency under 200 ms on our edge devices.

**Action**  
First, I performed a quick error‑analysis using confusion matrices and identified that the Spanish intent “BookFlight” was frequently confused with “CheckWeather.” I collected an additional 2,000 annotated examples for those intents from our internal QA team. Next, I retrained the model with a weighted loss function to emphasize the underperforming class and applied knowledge distillation to compress the architecture back to its original size. Finally, I benchmarked the new model on a Raspberry Pi cluster to confirm latency remained acceptable.

**Result**  
The precision for Spanish intents rose to 92 %, overall accuracy returned to 94 %. The chatbot met the deadline, and we learned that targeted data augmentation combined with distillation can quickly recover performance while respecting resource constraints.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
