---
qid: vq_5422c3b70c__faang__local
question: Schedule Trigger in ADF?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 229
output_tokens: 451
total_tokens: 680
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T18:10:49-05:00'
sources: []
---

**Clarify**  
The interviewer asks how to schedule a trigger in Azure Data Factory (ADF). I’d confirm they want a *time‑based* trigger (e.g., daily, hourly) that fires pipelines automatically. Ask if the trigger should be one‑off or recurring, whether it needs parameters, and if there’s any dependency on other triggers.

**Approach**  
1. Create the pipeline with all activities.  
2. In ADF UI/ARM template, add a **Schedule Trigger**: set *Recurrence* (frequency, interval), *Start time*, optional *End time*.  
3. Bind the trigger to the pipeline and publish.  
4. For parameterized runs, use the *Parameters* tab in the trigger definition.

**Depth**  
- In ARM JSON:  
  ```json
  {
    "name":"DailyTrigger",
    "properties":{
      "type":"ScheduleTrigger",
      "typeProperties":{
        "recurrence":{
          "frequency":"Day",
          "interval":1,
          "startTime":"2024‑01‑01T00:00Z"
        }
      },
      "pipelines":[{"pipelineReference":{"referenceName":"MyPipeline","type":"PipelineReference"}}]
    }
  }
  ```
- Complexity is O(1) for creation; runtime cost is negligible.  
- Triggers can be paused/resumed and have a *maximum concurrent runs* setting to throttle load.

**Edge Cases**  
- Time‑zone drift: ADF uses UTC; adjust startTime accordingly.  
- Overlapping executions if the pipeline takes longer than the interval – use “Maximum concurrency” or enable *Trigger scheduling with dependency*.  
- Parameter mismatch causes failure; validate schema before publishing.

**Optimize & Communicate**  
Explain that for dynamic schedules (e.g., based on data arrival) a **Blob Event Trigger** or **Data Lake Storage event** might be preferable. I’d mention monitoring via the ADF monitor pane and logging to Azure Monitor for alerting, closing with “This setup gives you an automated, repeatable pipeline execution with minimal operational overhead.”

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
