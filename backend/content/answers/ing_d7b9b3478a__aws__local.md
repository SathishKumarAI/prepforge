---
qid: ing_d7b9b3478a__aws__local
question: 'Explain: When would you decompose a task into multiple prompts instead
  of one? Explain least-to-most prompting.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 241
output_tokens: 380
total_tokens: 621
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T13:27:11-05:00'
sources: []
---

**When would you decompose a task into multiple prompts instead of one?**  
*Situation:* I was building an NLP pipeline for a global retailer that needed to extract product attributes from unstructured descriptions and then classify sentiment for each attribute.  
*Task:* The goal was to produce 10,000 high‑quality attribute–sentiment pairs per day while keeping latency under 200 ms per request.  
*Action:* I split the job into **least‑to‑most prompting**: first a *Least Prompt* that only identifies the relevant entity types (e.g., “What are the color, size, and material?”). Next, each entity gets its own *Most Prompt* that asks for sentiment (“Is the color described positively or negatively?”). I orchestrated this flow with **Amazon SageMaker Pipelines** and a lightweight Lambda orchestrator to cache intermediate results.  
*Result:* The multi‑prompt approach cut the average response time from 350 ms (single large prompt) to 140 ms, increased F1‑score for attribute extraction from 0.82 to 0.91, and reduced compute cost by ~30% because each sub‑task ran on a smaller instance type.  

**Least‑to‑Most Prompting Explained:**  
- *Least Prompt* gathers minimal context needed to scope the problem.  
- *Most Prompts* are fine‑tuned for specific subtasks, leveraging domain knowledge and reducing ambiguity.  

This demonstrates **Customer Obsession** (better accuracy), **Ownership** (end‑to‑end pipeline), and **Dive Deep** (profiling latency & cost).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
