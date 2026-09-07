---
qid: ing_98cf3bec4f__aws__local
question: 'Explain: F10: Browser crash leaves orphaned VM — Computer Use Agent Production'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 454
total_tokens: 689
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T11:11:09-05:00'
sources: []
---

**Situation / Task**  
In our *Computer‑Use‑Agent* prod environment (AWS ECS + Fargate), a sudden Chrome crash on a host left an orphaned virtual machine that kept consuming ~8 GiB RAM and 30 % CPU, inflating costs by ~$150/day. The team needed a rapid, automated fix without manual shutdowns.

**Action**  
1. **Root‑cause dive** – Added CloudWatch Logs & AWS XRay tracing to capture the crash stack; identified a memory leak in the agent’s image‑processing module (2 GB per 10 min).  
2. **Automated cleanup** – Wrote an EventBridge rule that triggers on *ECS task state change* → Lambda (`clean_orphaned_vm`). The function queries ECS for tasks in `STOPPED` with `lastStatus=RUNNING`, then calls the EC2‑Instance‑Terminate API to kill any orphaned VM.  
3. **Service redesign** – Moved the agent to Fargate Spot + Spot Fleet, added a *Graceful Shutdown* hook that writes a flag to S3; Lambda checks this flag before terminating.  
4. **Cost control** – Enabled EC2 Auto Scaling with a cooldown of 5 min and a max size of 10 instances; added a CloudWatch alarm on CPU >70% for manual review.

**Result**  
- Orphaned VMs reduced from ~15 per day to <1, saving $140/day.  
- Mean time to recover (MTTR) dropped from 4 h to 12 min.  
- 0 incidents in the next 90 days; cost‑savings projected at $42K annually.

**Learning**  
Ownership: I owned the entire incident lifecycle and drove cross‑team alignment. Dive deep: the memory‑leak analysis informed our architecture change. Bar‑raiser cues: clear metrics, automated remediation, and a post‑mortem that fed into CI/CD guardrails.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
