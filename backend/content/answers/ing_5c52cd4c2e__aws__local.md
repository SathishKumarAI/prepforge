---
qid: ing_5c52cd4c2e__aws__local
question: 'Explain: Selective Inclusion — Context vs. Memory Engineering in Agentic
  AI Systems'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 426
total_tokens: 661
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T08:53:54-05:00'
sources: []
---

**Situation & Task**  
At my previous role I led the redesign of an agentic AI that had to answer customer queries while respecting privacy and compliance. The challenge was balancing *contextual relevance* (what the user just said) with *memory engineering* (long‑term knowledge stored in a policy‑controlled vector store).  

**Action**  
I introduced a **dual‑stage retrieval pipeline**:  
1. **Context Layer – AWS Bedrock + RAG**: The most recent utterances are passed to an LLM via Bedrock, with short‑term embeddings cached in DynamoDB for 5 s latency.  
2. **Memory Layer – Amazon QLDB + OpenSearch**: Historical interactions are stored as immutable documents in QLDB and indexed in OpenSearch. A Lambda function runs a policy engine (using AWS IAM & KMS) to filter memories before they reach the LLM.  

The system uses **Step Functions** for orchestration, ensuring *availability* (>99.9 % SLA) while keeping *cost* under $0.15 per inference by limiting OpenSearch queries to 3 top‑k vectors.  

**Result**  
Post‑deployment we saw a **35 % reduction in response time** and a **22 % drop in policy violations**, measured via CloudWatch metrics and compliance audits. Feedback from customers improved by 18 pts on NPS, directly tying back to faster, contextually accurate answers.  

**Bar‑raiser notes**  
- Demonstrated *Ownership* by redesigning the entire pipeline.  
- Applied *Dive Deep* into AWS services’ trade‑offs (QLDB immutability vs OpenSearch speed).  
- Quantified impact with real metrics and learned from early latency spikes to tune cache TTLs.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
