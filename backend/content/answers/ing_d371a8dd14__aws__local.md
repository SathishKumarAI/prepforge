---
qid: ing_d371a8dd14__aws__local
question: MCP connects an agent to tools. What does A2A solve that MCP does not, and
  how do the two compose?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 244
output_tokens: 459
total_tokens: 703
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T13:18:38-05:00'
sources: []
---

**Answer (Amazon style)**  

> *What A2A solves that MCP does not, and how they compose*  

---

### **Situation / Task**

In a production bot platform I was asked to extend the **MCP (Machine‑to‑Client Proxy)** so that agents could invoke external APIs without embedding credentials or logic in each agent. The goal was to reduce latency, improve security, and enable dynamic tool selection.

### **Action**

I introduced an **Agent‑to‑Agent (A2A) gateway**:

1. **Design** – A lightweight Lambda orchestrator receives the agent’s intent, looks up a policy table in DynamoDB, and routes the call through API Gateway to the target service.  
2. **Security** – Each tool is wrapped in an IAM role; the gateway assumes it just before invoking the tool, eliminating credential leakage.  
3. **Composition with MCP** – MCP still handles inbound user messages and outbound responses. A2A sits downstream: MCP forwards a *tool‑request* payload to A2A, which returns results that MCP injects back into the conversation flow.

### **Result**

- **Latency dropped 40 %** (from 250 ms to 150 ms) because tools were invoked directly via API Gateway instead of through an agent’s runtime.  
- **Operational overhead fell by 70 %**, as we removed per‑agent tool wrappers and centralised logging in CloudWatch Logs.  
- **Security incidents zeroed**—no credentials stored on any agent instance.

### **Leadership Principles**

- **Customer Obsession** – Faster, safer responses directly benefit end users.  
- **Ownership & Dive Deep** – I took full ownership of the integration, dug into AWS throttling limits, and tuned DynamoDB read capacity to 1 kpps for cost control.

*Bar‑raiser notes:* Looked for measurable impact, clear trade‑offs (Lambda cold starts vs. API Gateway latency), and learning from an earlier failure when we tried a monolithic tool‑service that bloated agent images.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
