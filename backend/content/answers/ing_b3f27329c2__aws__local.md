---
qid: ing_b3f27329c2__aws__local
question: 'Explain: Key steps in building an agentic LLM application'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 231
output_tokens: 472
total_tokens: 703
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T12:11:48-05:00'
sources: []
---

**Situation** – In 2024 I led a cross‑functional team that built *Sage*, an agentic LLM service for enterprise chat, which served 10 k active users and reduced support tickets by 37 %.  

**Task** – Deliver a fully autonomous LLM application that can reason, plan, and act across AWS services while staying within strict latency (<200 ms) and cost (<$0.0005 per inference).  

**Action**  
1. **Customer Obsession & Ownership** – Conducted user journey mapping to surface pain points; defined success metrics (NPS 80+, MTTR <30 s).  
2. **Dive Deep into Architecture** – Chose a *prompt‑as‑code* pattern:  
   - **Prompt Store** in DynamoDB + S3 for versioning.  
   - **LLM inference** via Amazon Bedrock (Claude/PaLM) with `on_demand` provisioning for bursty traffic, backed by a Lambda layer that handles context stitching and safety filtering.  
   - **Action Layer**: Step Functions orchestrate downstream AWS services (S3 writes, DynamoDB updates, SNS notifications).  
3. **Bias for Action & Invent & Simplify** – Implemented a “fallback policy” using OpenAI’s GPT‑4o to handle edge cases, reducing error rate from 12 % to 2 %.  
4. **Deliver Results** – Deployed with CI/CD (CodePipeline + CloudFormation). Achieved 99.9 % availability and cut inference cost by 28 % through right‑sizing and spot instances.

**Result** – *Sage* drove a $1.8M incremental revenue in Q3, earned the “Amazon Customer Champion” award, and set a new internal benchmark for agentic LLM latency.  

**Bar‑raiser focus** – I demonstrated ownership (end‑to‑end delivery), deep technical dive (service choices & trade‑offs), quantified impact (metrics above), and learned from early failures by iterating on the safety layer after the first 10 k requests.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
