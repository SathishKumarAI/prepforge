---
qid: ing_84a43d9b23__star__local
question: 'Explain: Automated Evaluation w/ LLMs — Your AI Product Needs Evals \u2013
  Hamel\u2019s Blog'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 252
output_tokens: 363
total_tokens: 615
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T03:58:30-05:00'
sources: []
---

**Situation**  
At my last startup we launched a conversational assistant that answered technical support tickets. Within two weeks of deployment, our internal quality score—based on user satisfaction and error rates—was dropping to 68 %, below the 80 % threshold required for a production release.

**Task**  
I was tasked with designing an automated evaluation pipeline that could reliably measure the assistant’s performance at scale, flag regressions early, and reduce manual review time from hours to minutes.

**Action**  
First, I built a lightweight annotation dataset of 5,000 real tickets paired with ideal responses. Using OpenAI’s GPT‑4, I created a prompt that scored each generated reply on relevance, correctness, and tone, normalizing scores into a single metric (0–1). I wrapped this in an AWS Lambda function triggered by every new model inference, storing results in DynamoDB. To guard against hallucinations, I added a secondary LLM check that cross‑verified factual claims against our internal knowledge base via semantic search with Pinecone. The pipeline ran nightly, producing a dashboard in Grafana that highlighted the top 10% of tickets needing human review.

**Result**  
The automated eval cut manual QA time from 4 hrs/week to under 30 min, and we caught three regressions before they hit production—saving an estimated $15k in potential SLA penalties. The product’s quality score rose to 85 % within a month, and I documented the process as a reusable framework that other teams adopted for their own LLM‑powered features.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
