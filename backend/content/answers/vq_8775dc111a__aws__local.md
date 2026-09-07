---
qid: vq_8775dc111a__aws__local
question: Have you ever participated in an environmental cleanup?
topic: Behavioral
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 228
output_tokens: 423
total_tokens: 651
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T05:01:33-05:00'
sources: []
---

**Situation**  
In March 2024 I volunteered with the city’s “River Revive” program to clean up a 5‑mile stretch of the Green River that had been impacted by an oil spill. The cleanup was expected to take two weeks, but the team underestimated the volume of hazardous waste.

**Task**  
I was asked to design and implement a data‑driven workflow for tracking waste removal, ensuring safety compliance, and reporting progress to local regulators—essentially turning a volunteer effort into a scalable, auditable operation.

**Action**  
1. **Owned** the end‑to‑end solution: built an AWS IoT Core + Lambda pipeline that collected real‑time GPS & sensor data from mobile scanners worn by volunteers.  
2. Leveraged **Amazon DynamoDB** for immutable logging and **S3 Glacier** for long‑term archival of spill reports.  
3. Created a lightweight **AWS Amplify** dashboard that displayed live maps, quantity metrics, and compliance status.  
4. Introduced a **Cost Explorer** rule to keep spend under $1 k/month, while the system was able to handle 200+ volunteers without latency spikes.

**Result**  
- Reduced cleanup time by 35% (from 14 to 9 days).  
- Logged 12 tons of hazardous waste safely and generated a compliance report accepted by the EPA in 48 hrs.  
- The dashboard is now used quarterly for all city river projects, saving ~$15 k/year in manual reporting.

**Learnings**  
By diving deep into the operational pain points and owning the solution end‑to‑end, I demonstrated Amazon’s *Ownership* and *Dive Deep* principles—turning a community effort into a repeatable, data‑driven process that scales with minimal cost.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
