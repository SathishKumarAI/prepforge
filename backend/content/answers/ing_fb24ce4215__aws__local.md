---
qid: ing_fb24ce4215__aws__local
question: 'Q: With every AI lab shipping its own agent SDK (Claude Agent SDK, OpenAI
  Agents SDK, Google ADK), how do you avoid vendor lock-in?'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 252
output_tokens: 511
total_tokens: 763
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T14:46:14-05:00'
sources: []
---

**Situation:**  
While building a multi‑tenant AI platform for our e‑commerce partners, I noticed each partner shiped its own agent SDK (Claude, OpenAI, Google). Relying on any single vendor would lock us into pricing, feature drift, and compliance gaps.

**Task:**  
Design an abstraction that lets us run any vendor’s agents while keeping the core platform independent, scalable, and cost‑effective.

**Action:**  
I introduced a **“Unified Agent Runtime” (UAR)** built on AWS Fargate + Step Functions.  
1. **Adapter Layer:** For each SDK I wrote a thin adapter that exposes a common JSON RPC interface (`/invoke`, `/status`). The adapters run in stateless containers, so we can swap them without touching the platform code.  
2. **Orchestration:** A single AWS Lambda orchestrates calls via Step Functions, handling retries, timeouts, and exponential back‑off—ensuring high availability.  
3. **Observability:** CloudWatch metrics (latency, error rate) feed into an Athena dashboard; we set SLOs of 99.5 % uptime per vendor.  
4. **Cost Control:** We use Fargate Spot for adapters and schedule them on a pay‑as‑you‑go basis—$0.01/hr per container.  

**Result:**  
Within six months, we supported three vendors without any platform code changes, reduced vendor‑specific maintenance by 70 %, and cut operational costs by 35 %. The platform now scales to 10k concurrent agent invocations with <200 ms latency, meeting our SLA.

---

### Leadership Principles Anchored
- **Customer Obsession** – giving partners freedom to choose vendors while keeping a unified experience.  
- **Ownership & Dive Deep** – building adapters that encapsulate vendor quirks; deeply monitoring for performance drift.  

### Bar‑raiser Expectations
- **Ownership:** Clear ownership of UAR and continuous improvement loop.  
- **Dive Deep:** Quantified latency, error budgets, and cost per invocation.  
- **Learning from Failure:** Post‑mortems on adapter failures led to auto‑rollback logic in Step Functions.

This design keeps us vendor‑agnostic, scalable, and cost‑efficient—exactly what Amazon needs for a robust AI platform.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
