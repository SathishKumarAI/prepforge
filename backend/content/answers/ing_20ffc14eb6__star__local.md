---
qid: ing_20ffc14eb6__star__local
question: 'Explain: Tyres (except car tyres), Rims and Oversized Items (Automobiles)'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 245
output_tokens: 364
total_tokens: 609
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T23:35:40-05:00'
sources: []
---

**Situation** – In my last role at an online auto‑parts retailer, our catalog had over 50 000 items, but the search engine was mis‑ranking non‑car tyres (e.g., truck, bus) and rim sizes, causing a 12 % drop in conversion for those categories.  

**Task** – I needed to build a model that could accurately classify each product into “Tyres (non‑car), Rims, Oversized Items” so the recommender system could surface relevant listings and improve pricing signals.  

**Action** – I scraped 10 k labeled examples from suppliers’ PDFs, then engineered features: bag‑of‑words on title/description, numeric parsing of dimensions, and a rule‑based extractor for rim diameter (e.g., “18″”). Using these, I trained an XGBoost classifier with early stopping. I tuned class weights to counter the 80/10 imbalance and performed cross‑validation on 5 folds. After deployment, we added a post‑processing step that flags ambiguous predictions for manual review.  

**Result** – The model achieved 94 % F1 on the hold‑out set; in production, search relevance scores for those categories rose by 18 %, and revenue from tyre/rim sales increased by 9 % within two months. I learned how to blend NLP, numeric parsing, and tree‑based learning to solve a practical catalog‑quality problem.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
