---
qid: ing_597cb51383__aws__local
question: 'Explain: Agentic Systems Questions — Question Bank'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 228
output_tokens: 394
total_tokens: 622
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T08:48:14-05:00'
sources: []
---

**Situation & Task**  
I led a cross‑functional team that built an *Agentic Systems Question Bank* for our internal R&D lab. The goal was to generate high‑quality prompts that could steer large language models (LLMs) toward more autonomous, context‑aware responses—critical for our next‑gen recommendation engine.  

**Action**  
- **Ownership & Bias for Action:** I scoped the project in two sprints, defined success metrics (prompt accuracy > 92%, latency < 200 ms).  
- **Dive Deep & Deliver Results:** Leveraged **Amazon SageMaker Ground Truth** to label 150k real‑world dialogue snippets. Built a custom scoring pipeline on **AWS Lambda** + **OpenSearch** that evaluated prompt–response pairs against a rule set (coherence, factuality, safety).  
- **Invent & Simplify:** Introduced an automated “prompt‑mutation” microservice using **Amazon Bedrock** to generate variations; stored variants in **DynamoDB** for rapid retrieval.  

**Result**  
Within 4 weeks the question bank achieved a *92.7% accuracy* on our internal benchmark, cutting downstream model inference cost by 18% (≈$3k/month). The system now powers ~5,000 daily queries with < 200 ms latency and 99.9% availability via **AWS Global Accelerator** + multi‑AZ deployment.  

**Learning**  
Early iterations over‑fitted to training data; we fixed this by adding a *differential privacy* layer in the labeling step, ensuring broader generalization—an example of turning failure into an opportunity for deeper ownership and continuous improvement.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
