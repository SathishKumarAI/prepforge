---
qid: ing_c4d0b8701a__aws__local
question: You're designing an MCP server. How do you decide whether something should
  be a tool, a resource, or a prompt?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 243
output_tokens: 440
total_tokens: 683
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T12:48:00-05:00'
sources: []
---

**Situation / Task**  
At my previous role I led the redesign of a multi‑channel publishing (MCP) platform that served 4 M daily users and delivered AI‑generated content for marketing teams. The core question was whether new features should be exposed as *tools* (CLI/API), *resources* (data objects), or *prompts* (template‑based interactions).  

**Action**  
I applied **Customer Obsession** + **Dive Deep**:  
1. **Use‑case heat‑mapping** – logged 12 K distinct request patterns over a month; only 3 % of calls were for complex, reusable logic → candidate for a *tool*.  
2. **Cost & latency audit** – running heavy inference in the browser cost $0.02/req and added 250 ms lag. Off‑loading to an AWS Lambda layer (SageMaker endpoint) cut average latency from 350 ms to 120 ms and reduced compute spend by 45 %.  
3. **Governance** – resources that needed versioning or cross‑team access were stored in **Amazon S3 + DynamoDB** with fine‑grained IAM, enabling audit logs (compliance) without reinventing the wheel.  

**Result**  
The new classification reduced developer onboarding time by 30 % and increased platform usage by 18 % within two months, while keeping monthly AWS spend under $12K.

**Bar‑raiser notes**  
- Demonstrated *ownership* of both user experience and cost.  
- Showed *depth* by correlating request patterns to design decisions.  
- Quantified impact (latency, cost, adoption).  
- Learned from a failed attempt to ship all logic as monolithic binaries—pivoted to modular services instead.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
