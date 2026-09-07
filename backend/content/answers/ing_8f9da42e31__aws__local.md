---
qid: ing_8f9da42e31__aws__local
question: 'Explain: Your agent reads inbound email and can send replies and search
  internal docs. Walk me through the prompt-injection attack surface and your defences.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 249
output_tokens: 417
total_tokens: 666
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T10:50:44-05:00'
sources: []
---

**Situation / Task**  
I led a team that built an AI‑powered email assistant for the legal department. The bot reads inbound mail, auto‑generates replies, and pulls relevant internal policy docs. We had to secure it from *prompt‑injection*—malicious users crafting emails that hijack the LLM’s instruction stream.

**Action**  
1. **Input sanitization & role‑based prompt framing** – All user text is wrapped in a strict “User: …” token, and we prepend an immutable system prompt (`You are a compliance assistant…`).  
2. **Prompt injection guardrails with AWS Bedrock** – We use Bedrock’s *Guardrails* to block disallowed content patterns (e.g., `“delete policy X”` or `“act as if you’re…”`).  
3. **Context isolation via Amazon KMS‑encrypted Secrets Manager** – The LLM only receives a short, pre‑validated context window; internal docs are fetched on demand through a Lambda that verifies the requester’s IAM role before returning data.  
4. **Monitoring & anomaly detection** – CloudWatch logs and GuardDuty inspect prompt patterns; we trigger an AWS Step Functions workflow to re‑evaluate any prompt exceeding a complexity threshold.

**Result**  
After deployment, zero successful injection incidents over 12 months (0/10k emails). Response latency stayed <350 ms, cost per request $0.0003, and the system maintained 99.9% availability by auto‑scaling Bedrock replicas in two AZs.  

**Learning**  
We discovered that even well‑crafted prompts can slip through if the guardrails are too permissive; tightening them reduced false positives by 42 %. This reinforced *Ownership* (owning security from design to ops) and *Dive Deep* (analyzing every prompt path).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
