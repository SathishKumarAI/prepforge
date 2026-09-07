---
qid: ing_662dd881e0__aws__local
question: 'Q: How do you handle the cost of Claude Code for high-volume CI?'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 406
total_tokens: 641
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T09:16:03-05:00'
sources: []
---

**Situation / Task**  
In my last role we adopted Claude to auto‑generate boilerplate for every PR in our CI pipeline. Every build hit the OpenAI API, and at peak 200 CI jobs ran per hour, costing ~$0.15 per request – that translated to $4k/month and threatened our SLA.

**Action**  
I took **Ownership** and **Dive Deep** into the cost structure. First, I instrumented the CI logs with a “Claude token counter” using CloudWatch Logs Insights to get exact usage per repository. Next, I introduced a *pre‑compile cache* in S3 (object key = repo+commit) that stores the generated code so repeated jobs for the same commit hit S3 instead of Claude.

I also added an **AWS Lambda** layer that wraps the Claude call with a 1 second timeout and retries with exponential backoff, preventing runaway calls. For new PRs, I used a *serverless function* (API Gateway + Lambda) to trigger Claude only when cache miss occurs. Finally, I set up a daily SNS alert if the total token usage exceeds 10% of our budget.

**Result**  
The cache hit rate jumped from 5 % to 92 %, cutting API calls by **88 %** and monthly cost dropped from $4k to **$560** (≈86 % savings). Build latency stayed under 30 s, meeting our SLA. The metrics also fed into a quarterly cost‑review deck, reinforcing the value of proactive cost monitoring.

**Reflection**  
I learned that *small architectural tweaks*—caching + graceful degradation—can yield outsized ROI. I’ll keep iterating on cache granularity and explore using SageMaker for model hosting to further reduce external calls.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
