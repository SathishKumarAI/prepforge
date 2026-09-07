---
qid: ing_e222170c92__faang__local
question: 'Explain: Q: Design a system that lets a customer support agent answer questions
  using data from Zendesk, Salesforce, and an internal knowledge base.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 251
output_tokens: 496
total_tokens: 747
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T03:25:07-05:00'
sources: []
---

**Clarify**  
We need a real‑time assistance layer for agents that pulls the most relevant facts from three heterogeneous sources: Zendesk tickets, Salesforce CRM records, and an internal KB. The agent should see a single UI with ranked snippets and links to the original data. Assumptions: all systems expose APIs (REST/GraphQL), we can authenticate via OAuth, latency < 1 s for agent interaction, and data volumes are moderate (hundreds of tickets per day).

**Approach**  
1. **Data ingestion pipeline** – poll each source, normalize into a unified document model (title, body, metadata). Store in a searchable vector store (e.g., Pinecone or ElasticSearch with dense vectors).  
2. **Query engine** – when an agent types a question, generate a query embedding via a transformer (e.g., SBERT). Retrieve top‑k documents across all sources using similarity search.  
3. **Re‑ranking & source attribution** – re‑rank by combining semantic score + source confidence (e.g., Salesforce records get higher weight). Attach source URLs and timestamps.  
4. **UI layer** – embed the results into the agent console; allow click‑through to original ticket or record.

**Depth**  
- *Complexity*: Ingestion O(N) per batch, retrieval O(log M) with ANN indexing (M = total docs).  
- *Trade‑offs*: Real‑time vs. freshness—use incremental sync every 5 min; caching popular queries.  
- *Security*: Role‑based access control on source data; encrypt at rest and in transit.

**Edge Cases**  
- Missing or stale API keys → fallback to last cached snapshot.  
- Conflicting information (e.g., duplicate tickets) – deduplicate by ticket ID before indexing.  
- No relevant results → surface a “no match” prompt with option to search manually.

**Optimize & Communicate**  
Future improvements: fine‑tune embeddings on domain data, implement query intent classification to route to the most appropriate source first, and add feedback loops (agent upvotes/downvotes) to refine relevance. I’d explain this flow in a diagram, then walk through each component’s responsibilities, ensuring interviewers see clear problem decomposition, solid technical choices, and awareness of real‑world constraints.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
