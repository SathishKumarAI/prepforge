---
qid: ing_51f0026ac3__eli5__local
question: 'Explain: Disjoint Sets: — OG CS61B Data Structures and Sorting Cheat Sheet'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 165
output_tokens: 267
total_tokens: 432
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T10:47:03-05:00'
sources: []
---

**Disjoint Sets (Union‑Find)**  
Imagine a collection of people who each belong to their own secret club. At first everyone is alone, so every club has just one member. When two clubs decide to merge, all members of both clubs become part of the new single club—no one stays in the old ones.  

The data structure that keeps track of these “clubs” is called a **Disjoint Set Union (DSU)** or **Union‑Find**.  
- *MakeSet(x)* creates a new singleton club for person x.  
- *Find(x)* tells you which club member x belongs to by returning the club’s “leader.”  
- *Union(x, y)* joins the clubs of x and y so that they share one leader.

Internally each club is represented by a linked list or tree; we only need to know who the current leader (representative) is. This structure lets us quickly answer questions like “Are these two people in the same club?” and “Merge these two clubs.” It’s essential for algorithms that need to combine groups efficiently, such as Kruskal’s algorithm for minimum spanning trees or network connectivity checks.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
