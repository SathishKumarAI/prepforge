---
qid: ing_3b877cb000__star__local
question: 'Explain: Case Study: Lucy, A Real Estate AI Assistant'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 300
total_tokens: 537
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T00:27:37-05:00'
sources: []
---

**Situation:**  
When I joined a mid‑size real estate firm, their listing database was siloed across Excel sheets and an old CRM. Their agents were spending ~30 % of each day on manual data entry and searching for comparable sales, slowing closings by 12 %.

**Task:**  
I was tasked with building an AI assistant—“Lucy”—to automate property data ingestion, generate market‑analysis reports, and surface personalized listing recommendations in under a minute.

**Action:**  
First, I set up an Airflow DAG that pulled daily feeds from Zillow’s API and OCRed MLS PDFs using Tesseract. The cleaned data fed into a vector database (Pinecone) where each property was embedded with Sentence‑Transformers. Lucy answered agent queries via a fine‑tuned GPT‑4 model hosted on Azure OpenAI, retrieving vectors to rank relevant comps in real time. I added a feedback loop: agents could flag inaccurate suggestions, retraining the retrieval model quarterly.

**Result:**  
Lucy cut data entry time by 70 % and boosted closing speed from 45 days to 32 days—a 28 % improvement. Agents reported a 4.5/5 satisfaction rating, and I learned that marrying OCR, vector search, and LLMs can turn a tedious workflow into an AI‑powered advantage.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
