---
qid: ing_5236385011__aws__local
question: 'Why Graphiti? — GitHub - getzep/graphiti: Build Real-Time Knowledge Graphs
  for AI Agents \u00b7 GitHub'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 250
output_tokens: 405
total_tokens: 655
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T08:30:55-05:00'
sources: []
---

**Why Graphiti?**

*Situation*: My team was building a recommendation engine that had to surface context‑aware insights from millions of user interactions in real time. Traditional relational pipelines lagged behind the latency required for an AI agent to act within seconds.

*Task*: I needed a solution that could ingest streaming events, maintain a continuously evolving knowledge graph, and expose it via low‑latency queries—all while staying cost‑effective at scale.

*Action*:  
- Adopted **Graphiti** as the core engine because its native support for RDF/OWL triples lets us model entities and relationships in a semantically rich way.  
- Built an ingestion pipeline on **Amazon Kinesis Data Streams → Lambda → DynamoDB (partition key = entity)**, then used **AWS Glue** to periodically materialize graph edges into an **Amazon Neptune** cluster.  
- Exposed the graph through **Neptune’s Gremlin endpoint**, wrapped by an API Gateway + Lambda for secure access from our AI agents.  
- Implemented a caching layer with **ElastiCache‑Redis** to serve hot subgraphs, reducing Neptune query load by 35 %.  

*Result*: Latency dropped from ~2 s (SQL join) to <200 ms for complex relationship queries, boosting recommendation click‑through rate by **12 %** and decreasing infrastructure cost by **18 %** due to the efficient cache hit ratio.

**Leadership Principles**: *Customer Obsession* – delivering instant insights to end users; *Ownership* – architecting a robust, scalable solution from scratch.  

**Bar‑raiser notes**: Demonstrated ownership (pipeline design), deep dive into trade‑offs (Neptune vs DynamoDB), quantified impact (CTR & cost savings), and learned that caching subgraphs early prevented over‑querying Neptune in production.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
