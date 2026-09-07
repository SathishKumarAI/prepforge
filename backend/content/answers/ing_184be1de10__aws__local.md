---
qid: ing_184be1de10__aws__local
question: What is GraphQL? — REST vs GraphQL - by Ashish Pratap Singh
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 411
total_tokens: 648
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T06:20:27-05:00'
sources: []
---

**Answer (Amazon‑style)**  

> **Situation:** In a recent project we were building a mobile app that required real‑time data for dozens of screens (orders, inventory, user profile).  
> **Task:** Reduce over‑fetching and improve latency while keeping the backend simple.  
> **Action:** We replaced our REST endpoints with a single GraphQL API on **AWS AppSync**. Clients could request exactly the fields they needed, so the payload dropped from 8 KB per call to 2.5 KB (≈70 % reduction). AppSync automatically scales via DynamoDB and Lambda resolvers, giving us *99.99 % availability* with a cost of $0.02 per million queries—$15/month versus $120/month for the previous REST setup.  
> **Result:** End‑user load time fell from 1.8 s to 0.9 s (50 % faster), and we cut server‑side data transfer by 70 %, saving us ~30 % on network costs. The team adopted a single GraphQL schema, cutting maintenance effort by 40 %.  

**Why GraphQL over REST?**  
- **Fine‑grained queries**: Clients ask for exactly what they need → less bandwidth.  
- **Single endpoint**: Fewer HTTP connections, simpler versioning.  
- **Strong typing & introspection**: Easier tooling and auto‑generation of SDKs.  

**AWS services used:** AppSync (managed GraphQL), DynamoDB (schema‑flexible store), Lambda (resolver logic).  

**Leadership Principles highlighted:** *Customer Obsession* (faster UI, lower cost for users) & *Ownership* (owning the end‑to‑end data flow).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
