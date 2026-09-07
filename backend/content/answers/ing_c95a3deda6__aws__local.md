---
qid: ing_c95a3deda6__aws__local
question: What are Agent Skills, and when do you package knowledge as a skill rather
  than a tool, an MCP server, or retrieval?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 245
output_tokens: 713
total_tokens: 958
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T12:56:55-05:00'
sources: []
---

**Answer (Amazon‑style)**  

> *“Agent skills are reusable, declarative units that encapsulate a specific capability—like natural‑language intent handling, domain‑specific reasoning, or policy enforcement—that an autonomous agent can invoke at runtime.”*  

### When to package as a **skill**

| Decision factor | Why it matters (Leadership Principles) |
|-----------------|----------------------------------------|
| **Reusability across agents** | *Ownership*: One team owns the skill; others consume it. |
| **Encapsulation of business logic** | *Customer Obsession*: Keeps user‑facing behavior consistent and auditable. |
| **Frequency of use (high‑volume, low‑latency)** | *Bias for Action & Deliver Results*: Avoids per‑request cost spikes by caching or pre‑computing. |
| **Complexity that grows beyond a simple function** | *Dive Deep*: Requires versioning, testing, and monitoring separate from the main agent code. |

### When to keep it as a **tool / MCP server / retrieval**

- **Tool**: Simple one‑off calls (e.g., math calculator) that don’t need state or heavy validation.  
- **MCP Server**: When you need multi‑tenant isolation, fine‑grained RBAC, or external compliance guarantees.  
- **Retrieval**: For large knowledge bases where latency would be prohibitive if packaged as a skill; use vector search (e.g., Amazon Kendra + SageMaker embeddings).

---

### Technical Design Snapshot

1. **Skill Service** – *AWS Lambda* (Python) behind an API Gateway, versioned via AWS CodePipeline.  
2. **State Store** – *DynamoDB* with TTL for caching recent invocations; ensures idempotency.  
3. **Observability** – CloudWatch metrics (`skill_latency_ms`, `skill_error_rate`), X-Ray tracing to spot bottlenecks.  
4. **Scalability** – Lambda concurrency limits auto‑scale; DynamoDB partitions by skill ID for high throughput.  

### Cost & Trade‑offs

| Aspect | Benefit | Trade‑off |
|--------|---------|-----------|
| Serverless (Lambda) | Pay‑per‑use, no overprovisioning | Cold start latency (~200 ms) – mitigated with provisioned concurrency for critical skills |
| DynamoDB caching | 99.9% RCU throughput | Additional read capacity cost; eventual consistency risk mitigated by conditional writes |

---

### STAR Example

**Situation:** Our customer‑support chatbot was hitting a 15 % error rate on “order status” queries during peak hours.  
**Task:** Reduce errors and latency while keeping the skill reusable across multiple agents.  
**Action:** Created an **OrderStatusSkill** (Lambda + DynamoDB cache). Added versioned validation, added CloudWatch alarms, and integrated with Kinesis for real‑time order updates.  
**Result:** Error rate dropped to 0.8 % (93 % reduction), latency improved from 350 ms to 120 ms, and the skill was reused by three downstream agents, cutting dev effort by 40 hrs/month.

---

**Bar‑raiser takeaways:** Ownership of the skill lifecycle, deep dive into caching vs. real‑time trade‑offs, quantified impact on error rate/latency, and lessons learned from cold starts.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
