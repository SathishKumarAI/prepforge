---
qid: ing_e55e71d642__star__local
question: 'Explain: DAC (Discretionary Access Control) — Designing a Permission System'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 241
output_tokens: 316
total_tokens: 557
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T07:06:29-05:00'
sources: []
---

**Situation:**  
In my last role at a fintech startup, we built an internal recommendation engine that processed sensitive customer data. The engineering team was worried that developers could accidentally expose personal information through the model training pipeline.

**Task:**  
I had to design a fine‑grained permission system using Discretionary Access Control (DAC) so that each engineer only accessed the datasets and models they were authorized for, while still allowing rapid iteration on experiments.

**Action:**  
I started by cataloguing every data asset and model artifact in an inventory. Using LDAP groups mapped to business roles, I implemented a DAC layer in our data lake’s metadata store (Apache Atlas). Permissions were expressed as “read/write” tuples tied to group IDs. For the training pipelines, I wrapped all dataset reads with a policy engine that checked the caller’s group membership before returning rows. To reduce latency, we cached permission checks per job and used role‑based default deny for any unlisted data. Finally, I built an audit log that recorded every access attempt along with the user’s identity.

**Result:**  
Within two weeks of deployment, we saw a 60 % drop in accidental data leaks during model training. The system also cut pipeline failures by 30 % because developers no longer had to request manual dataset approvals. I learned how DAC can be practically enforced at scale when combined with an underlying metadata catalog and role mapping.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
