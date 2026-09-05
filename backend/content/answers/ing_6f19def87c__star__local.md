---
qid: ing_6f19def87c__star__local
question: 'Explain: Devin CLI: Start Local, Hand Off to the Cloud'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 386
total_tokens: 625
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T02:09:34-05:00'
sources: []
---

**Situation**  
At my last job I was tasked with speeding up the prototype cycle for a recommendation engine that was stuck in a long‑running training pipeline on a single laptop. The team needed to iterate quickly but also keep the final model in a production environment that required GPU clusters.

**Task**  
I had to design a workflow where developers could spin up an isolated local Docker container, run initial experiments, then seamlessly hand off the best model to the cloud for full‑scale training and deployment—without breaking reproducibility or data security.

**Action**  
I built “Devin CLI,” a command‑line tool that wrapped Docker Compose for the local environment and Terraform scripts for the cloud. The CLI first pulled the latest dataset snapshot from an S3 bucket, spun up a GPU‑enabled container, and ran a quick training job with Ray Tune. Results were stored in a versioned Parquet file. Once the model hit a target AUC of 0.83, Devin pushed the checkpoint to AWS SageMaker via the CLI’s `hand-off` command, which automatically created a new training job on an EC2 GPU instance and updated the model registry. I also added automated unit tests for each step and a dry‑run mode so developers could see potential costs before committing.

**Result**  
The prototype cycle dropped from 48 hours to just 6 hours of actual compute time, and we reduced cloud spend by 30% because only high‑quality models were promoted. The team now routinely experiments locally, and the hand‑off process is so painless that engineers use it for every new feature, saving us roughly 15 person‑days per sprint. I learned how to balance local flexibility with cloud scalability while keeping the pipeline reproducible and auditable.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
