---
qid: ing_ca9c41408f__eli5__local
question: 'Explain: Disadvantages — Data Replication in DBMS - GeeksforGeeks'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 165
output_tokens: 266
total_tokens: 431
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T13:56:14-05:00'
sources: []
---

Imagine you’re building a recipe book that many cooks use at once. **Data replication** means making copies of the same recipes on different shelves so everyone can reach them quickly. For machine‑learning databases this sounds handy—fast reads and backup safety—but it comes with hidden costs.

1. **Storage waste:** Every copy takes space, like extra paper for every recipe.  
2. **Sync headaches:** When a cook changes a recipe, all copies must be updated; otherwise you’ll read an old version, just as stale data can mislead a model.  
3. **Complexity:** The system has to track which copy is latest and resolve conflicts—think of juggling multiple versions of the same dish.  
4. **Performance hit on writes:** Updating many copies slows down learning updates, much like rewriting every shelf whenever one recipe changes.

So while replication boosts availability, it can bloat storage, slow updates, and make consistency harder to keep, all of which hinder efficient machine‑learning workflows.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
