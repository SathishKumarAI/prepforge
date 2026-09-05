---
qid: ing_45156208a2__think__local
question: 'Explain: Step 2: Create a high level design — system-design-primer/solutions/system_design/pastebin/README.md
  at master \u00b7 donnemartin/system-design-primer \u00b7 GitHub'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 227
output_tokens: 424
total_tokens: 651
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T03:07:32-05:00'
sources: []
---

**1. Clarify the goal & context**  
- What is “Step 2: Create a high‑level design” in the pastebin solution?  
- Which stakeholders (developers, ops, users) will read it?  
- Assume we’re documenting a scalable key‑value store that mimics Pastebin’s behaviour.

**2. Pick a mental model / framework**  
Use the classic *system‑design‑primer* flow:  
1. **Requirements & constraints** → functional vs non‑functional.  
2. **High‑level architecture diagram** → services, data stores, cache, load balancer.  
3. **Data model & consistency guarantees**.  
4. **Scalability & fault tolerance**.  
5. **Operational concerns** (monitoring, deployment).  

**3. Reason step by step toward the answer**  
- Start with a top‑level diagram: client → API gateway → microservice → database + cache.  
- Explain each component’s role and why it was chosen (e.g., Redis for hot keys, DynamoDB for durability).  
- Discuss trade‑offs: eventual consistency vs strong consistency, CAP theorem.  
- Outline how the design supports growth: sharding, replication, read replicas.  

**4. Common traps to avoid**  
- Don’t skip constraints; without them the diagram looks arbitrary.  
- Avoid “black box” services—explain interfaces and data flow.  
- Don’t over‑optimise early; keep the high‑level view simple.  
- Beware of jargon that isn’t explained for a newcomer.

**5. Sanity‑check & communicate**  
- Run through a user story: a paste is created, retrieved, expired—does each step map to a component?  
- Ask yourself if the diagram would make sense to someone who hasn’t seen the repo before.  
- Finally, write the explanation in clear, concise sentences, linking back to the README’s sections and GitHub references.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
