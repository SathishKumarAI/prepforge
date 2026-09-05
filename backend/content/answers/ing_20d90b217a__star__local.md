---
qid: ing_20d90b217a__star__local
question: 'Explain: Design an enterprise assistant that answers questions over a company''s
  internal documents, respecting per-user permissions (Amazon Q-shaped).'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 249
output_tokens: 392
total_tokens: 641
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T23:35:17-05:00'
sources: []
---

**Situation:**  
At a mid‑size fintech I was tasked with building an internal knowledge assistant for our 4,000‑employee client. The system had to answer questions from engineers, compliance officers, and executives while honoring strict role‑based access controls on thousands of policy documents, code bases, and financial reports.

**Task:**  
Create a scalable, permission‑aware assistant that could return accurate answers within 1 s, with an error rate below 5%, and provide audit logs for every query.

**Action:**  
I designed a two‑layer architecture. First, I built a vector store using Amazon Kendra for semantic search on the full document corpus, tagging each chunk with its owner’s permission level. Next, I wrapped this in a Lambda‑driven retrieval‑augmented generation pipeline: the user’s query triggers a policy‑aware filter that removes any vectors outside their clearance; the remaining top‑10 embeddings are passed to an Amazon Bedrock LLM (Claude 3) which generates concise answers with source citations. I added DynamoDB audit logs and a CloudWatch dashboard for latency monitoring. To keep costs low, I employed cache layers in ElastiCache for frequently queried sections.

**Result:**  
The prototype achieved 95 % answer accuracy, 0.8‑second average latency, and reduced compliance incidents by 30 %. The client praised the transparent audit trail, and we scaled the solution to support a 12‑month growth projection while staying under budget. I learned how critical it is to intertwine semantic search with fine‑grained permission checks early in the design.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
