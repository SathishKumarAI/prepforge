---
qid: ing_2ecbdbac2e__aws__local
question: 'Explain: Improved reliability & disaster recovery'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 226
output_tokens: 418
total_tokens: 644
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T07:10:54-05:00'
sources: []
---

**Situation / Task**  
At my last role I led a team that built an AI‑driven recommendation engine for a global e‑commerce platform. Production incidents were hitting 4 % of the daily traffic and recovery time exceeded our SLA of 15 minutes, threatening customer trust.

**Action**  
I applied **Ownership** and **Dive Deep**:  

1. **Architecture** – Migrated to an event‑driven microservice stack on *Amazon SageMaker* (model training) + *ECS Fargate* (inference).  
2. **Reliability** – Enabled *SageMaker Endpoint Auto Scaling* with a 95 % success target and set up *AWS CloudWatch Alarms* to trigger failover to a secondary endpoint in another AZ.  
3. **Disaster Recovery** – Deployed the entire stack via *CloudFormation StackSets* across us‑east‑1 and eu‑central‑1, using *S3 Cross‑Region Replication* for training data and *DynamoDB Global Tables* for model metadata.  
4. **Cost/Availability trade‑off** – Used *Spot Instances* for training jobs (cost 60 % lower) while keeping a minimal on‑demand reserve for quick roll‑out.

**Result**  
Within three months:  
- Downtime dropped from 4 % to <0.2 %.  
- Recovery time fell below our SLA, reaching 3 minutes average.  
- Cross‑region replication added ~5 % cost but delivered *99.99 %* availability and full DR capability.  

**Reflection**  
The key lesson: proactive monitoring + automated failover beats reactive patching. I now advocate for “fail fast, recover faster” as a core practice in any AI service.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
