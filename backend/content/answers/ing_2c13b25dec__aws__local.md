---
qid: ing_2c13b25dec__aws__local
question: 'Explain: OpenAI Agents SDK — Autogen Crewai'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 230
output_tokens: 607
total_tokens: 837
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T07:04:52-05:00'
sources: []
---

**Situation (S)**  
In my last role I was tasked with prototyping an AI‑driven customer support bot that could handle multi‑turn dialogues and fetch real‑time inventory data from our catalog.

**Task (T)**  
I chose to build the prototype on **OpenAI’s Agents SDK** combined with **CrewAI** for orchestration, because both provide a declarative “crew” model that lets agents specialize (e.g., QA, retrieval) and collaborate via shared memory. My goal was to deliver a working demo in 10 days while keeping cloud costs under $200.

**Action (A)**  
1. **Design** – Created three crew members: *Retriever* (uses OpenAI’s `text-embedding-ada-002` + Pinecone vector store), *Responder* (GPT‑4o for natural language generation) and *Validator* (Python agent that cross‑checks against our DynamoDB catalog).  
2. **AWS stack** –  
   - **Lambda** (Python runtime, 15 min timeout) orchestrates crew calls.  
   - **API Gateway** exposes a REST endpoint with throttling (5 QPS).  
   - **S3** stores conversation logs for compliance.  
   - **CloudWatch** monitors latency; we set an SLA of 500 ms average.  
3. **Cost control** – Used Lambda’s provisioned concurrency only during peak hours, and leveraged the `gpt-4o-mini` model for low‑complexity turns.  

**Result (R)**  
Within 10 days I had a fully functional bot that handled 90% of support tickets autonomously, reducing average handling time from **3 min to 45 s**—a **85% reduction**. Cloud spend stayed at **$167** for the month, and we achieved an uptime of **99.9%** in production.

---

### Leadership Principles Highlighted
- **Customer Obsession** – Delivered measurable speed‑up for end users.  
- **Ownership & Dive Deep** – Built a custom crew architecture, tuned costs, and monitored performance at the function level.

---

### What a Bar‑Raiser Listens For
- **Ownership**: I owned the entire stack from data ingestion to API design.  
- **Dive Deep**: Chose specific embeddings, vector stores, and Lambda concurrency settings based on metric thresholds.  
- **Quantified Impact**: 85% reduction in handling time, $167/month cost.  
- **Learning from Failure**: Initial prototype hit >1 s latency; we refactored to batch retrieval calls, cutting response time by 70%.

This experience showcases my ability to blend AWS services with cutting‑edge AI tooling while delivering tangible business value.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
