---
qid: ing_374399cb28__think__local
question: 'Explain: Three Core Functionalities of GraphQL — REST vs GraphQL - by Ashish
  Pratap Singh'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 200
output_tokens: 400
total_tokens: 600
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T02:36:07-05:00'
sources: []
---

**1. Clarify the scope and assumptions**  
   • Identify what “core functionalities” means in this context (e.g., query language, type system, resolver architecture).  
   • Assume the audience has basic REST knowledge but is new to GraphQL’s architectural patterns.  

**2. Adopt a comparison framework**  
   • Use a side‑by‑side structure: *Feature → REST implementation → GraphQL implementation*.  
   • Map each core functionality to its REST counterpart (e.g., single endpoint vs multiple).  

**3. Reason through the three key features**  
   1. **Declarative data fetching** – explain how clients specify exact shape, contrast with REST’s over‑/under‑fetching.  
   2. **Strongly typed schema** – detail type definitions, introspection, and auto‑generation of docs; compare with ad‑hoc JSON contracts in REST.  
   3. **Resolver‑driven data resolution** – show how GraphQL resolves fields via functions, enabling batching and caching (e.g., DataLoader), versus REST’s separate endpoints each hitting a service.  

**4. Spot common pitfalls**  
   • Don’t conflate “no overfetching” with “always efficient”; mention N+1 problem.  
   • Avoid implying GraphQL is always faster; discuss network round‑trips and payload size.  
   • Clarify that GraphQL doesn’t replace REST but can coexist (e.g., hybrid APIs).  

**5. Sanity‑check & verbalize**  
   • Verify each comparison point has a clear REST example.  
   • Summarize the trade‑offs: flexibility vs complexity, tooling maturity, caching strategies.  
   • End with a quick “use case” cue (e.g., mobile app needing variable data shapes) to ground the abstract concepts.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
