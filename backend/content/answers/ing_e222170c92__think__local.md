---
qid: ing_e222170c92__think__local
question: 'Explain: Q: Design a system that lets a customer support agent answer questions
  using data from Zendesk, Salesforce, and an internal knowledge base.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 207
output_tokens: 432
total_tokens: 639
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T15:55:57-05:00'
sources: []
---

**1️⃣ Clarify the scope & assumptions**  
   - *What* do we mean by “answer questions”? Live chat vs. email?  
   - *Who* are the agents (technical, non‑tech)?  
   - Assume all three sources expose APIs and that data privacy policies allow cross‑referencing.

**2️⃣ Adopt a layered architecture framework**  
   - **Connector layer**: pull from Zendesk, Salesforce, KB via REST/GraphQL.  
   - **Enrichment layer**: normalize schemas, dedupe, tag intents.  
   - **Inference layer**: NLP model that maps user query → best‑matching record(s).  
   - **Presentation layer**: UI widget embedded in the agent console.

**3️⃣ Step‑by‑step reasoning**  
   1. Agent types a question; the text is sent to the inference engine.  
   2. The engine queries the enriched index (Lucene/Elasticsearch) for relevant tickets, leads, and KB articles.  
   3. It scores results, merges duplicates, and returns top N snippets with source labels.  
   4. UI shows a “Suggested Answers” pane; agent can paste or edit before sending.

**4️⃣ Common pitfalls to avoid**  
   - *Over‑flooding* the agent: too many suggestions → cognitive overload.  
   - *Latency*: hitting live APIs per query will be slow; cache frequently accessed data.  
   - *Privacy leaks*: ensure Salesforce personal data is masked or not displayed unless authorized.

**5️⃣ Sanity‑check & verbalize**  
   - Verify that each layer can fail gracefully (e.g., if Zendesk API down, still show KB).  
   - Run a quick test: type “how do I reset my password?” and confirm the system pulls the correct KB article.  
   - Communicate the flow to stakeholders with a diagram and sample dialogue to ensure shared understanding.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
