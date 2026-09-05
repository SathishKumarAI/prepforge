---
qid: ing_1759eedd58__eli5__local
question: 'Explain: Cost per Query (Full RAG Triad) — Rag Evaluation Patterns'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 163
output_tokens: 254
total_tokens: 417
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T09:12:37-05:00'
sources: []
---

Think of a smart assistant as a chef who must decide what to cook for each customer’s order (the “query”). The **Cost per Query** is how much it takes the chef to prepare that dish – ingredients bought, time spent chopping, and energy used in cooking.  

In a *Full RAG Triad* (Retrieve‑Augment‑Generate), three steps happen:

1. **Retrieve** – pull the right recipes (data) from the pantry.  
2. **Augment** – mix those recipes with fresh spices (context).  
3. **Generate** – actually whip up the final dish (answer).

Each step costs something: buying ingredients, stirring, and plating. The **Cost per Query** sums all three so we know how expensive a single customer’s request is.  

When we evaluate *RAG patterns*, we compare different chefs—some may skip spices (fast but bland), others use extra ovens (slow but richer). By measuring cost per query for each pattern, we pick the one that gives the best flavor‑to‑price ratio for our kitchen.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
