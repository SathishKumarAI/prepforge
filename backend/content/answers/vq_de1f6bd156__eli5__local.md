---
qid: vq_de1f6bd156__eli5__local
question: What is a Dimension Table?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 154
output_tokens: 185
total_tokens: 339
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T08:31:03-05:00'
sources: []
---

Imagine you’re hosting a big dinner party and want to remember every guest’s details so you can serve the right food, music, and seating. A **dimension table** is like that guest list—each row gives context (age, favorite dish, seat preference) about a single person. In data engineering, it stores descriptive attributes that help explain or categorize facts (sales numbers, website visits, etc.). Think of the facts as the dishes you served; the dimension table tells you who ate what, when, and where. Each column is a simple attribute—“City,” “Product Category,” or “Time Period.” The table’s key (the guest ID) lets the system link each fact record to its descriptive details, just like matching a dish to a particular guest at your party.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
