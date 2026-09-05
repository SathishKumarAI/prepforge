---
qid: vq_e0b14c5127__eli5__local
question: What are the Control Flow activities in the Azure Data Factory?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 160
output_tokens: 237
total_tokens: 397
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T08:31:28-05:00'
sources: []
---

Imagine you’re directing a kitchen brigade that prepares a multi‑course meal. Each dish (data transformation) needs to be cooked only when the right ingredients arrive and certain conditions are met. In Azure Data Factory, the **control flow activities** are like the head chef’s playbook – they decide *when* and *how* the cooking steps run.

- **If Condition**: “Only start dessert if the main course is finished.”  
- **Switch**: “Choose a recipe based on the day of the week.”  
- **ForEach**: “Repeat this step for each guest’s order.”  
- **Until / While**: “Keep stirring until the sauce thickens.”  
- **Wait**: “Hold off for 30 minutes before adding the next ingredient.”  
- **Set Variable / Assign**: “Store the current temperature in a pot.”  

These activities let you build pipelines that branch, loop, pause, or react to data, just as a chef orchestrates timing and sequence in a busy kitchen.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
