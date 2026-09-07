---
qid: ing_65a02ff8ef__aws__local
question: Your agent spends over half its first turn just finding the relevant code.
  How do you fix that?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 395
total_tokens: 634
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T09:14:53-05:00'
sources: []
---

**Situation:**  
In a recent project, my custom AI agent spent ~55 % of its first turn just locating the relevant code snippet, delaying response time by 3 s on average and causing user frustration.

**Task:**  
Reduce lookup latency to <0.5 s while keeping accuracy above 95 %.

**Action:**  
1. **Ownership & Dive Deep** – I profiled the agent with CloudWatch traces; found that linear search over a flat file was the bottleneck.  
2. **Design change** – Replaced the file scan with an **Amazon DynamoDB** table keyed by `module_hash`. Each code block is pre‑hashed and stored as a GSI for fast lookup.  
3. **Cache layer** – Added a **DAX** cluster to keep hot queries in-memory, cutting read latency from 2 ms to <0.1 ms.  
4. **Cost/availability trade‑off** – DynamoDB on-demand pricing keeps costs <$0.02 per million reads; DAX nodes are auto‑scaled and replicated across AZs for 99.999 % availability.  
5. **Bias for Action** – Deployed the new architecture in a blue/green pipeline, monitored with CloudWatch dashboards.

**Result:**  
Lookup latency dropped from 3 s to 0.4 s (≈87 % reduction). User satisfaction scores rose from 82 % to 94 %. The solution scales linearly with codebase size and costs <10 % of the original compute spend.

*Bar‑raiser note:* I own the problem, dive into metrics, quantify impact, and iterate quickly—hallmarks of an Amazonian engineer.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
