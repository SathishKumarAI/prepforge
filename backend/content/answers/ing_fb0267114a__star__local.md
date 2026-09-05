---
qid: ing_fb0267114a__star__local
question: 'Explain: Ownership — Linux File Permissions Illustrated'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 342
total_tokens: 576
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T07:50:52-05:00'
sources: []
---

**Situation** – While leading the deployment of a machine‑learning inference service at my previous company, we discovered that the GPU cluster’s shared data directory was being overwritten by a nightly training job and also exposed to read access from all users on the node.

**Task** – I needed to secure the `/opt/ml/data` directory so that only the `mlservice` user could write to it, while allowing the `mlworker` group to read files for inference, and prevent any accidental writes from other processes.

**Action** – First, I changed ownership with `chown mlservice:mlworker /opt/ml/data`. Then I set permissions to `rwxr-x---` using `chmod 750 /opt/ml/data`, ensuring the owner had full rights, the group could read and execute (to traverse), and others had no access. To enforce that only the service process could create new files, I added a sticky bit (`chmod +t`) so that only file owners can delete or rename within the directory. Finally, I created an ACL rule (`setfacl -m g:mlworker:r-- /opt/ml/data`) to grant read‑only access to any user in `mlworker` if needed.

**Result** – After these changes, the inference service ran without permission errors, and we logged zero accidental data deletions or overwrites for three months. I learned that proper ownership plus a minimal set of permissions can prevent both security risks and operational hiccups in ML pipelines.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
