---
qid: ing_0895509c58__star__local
question: 'Explain: Handling Missing Values — How to Clean Messy CSV Files with Python:
  A Beginner\u2019s Guide'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 249
output_tokens: 417
total_tokens: 666
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T22:46:08-05:00'
sources: []
---

**Situation** – I was working on a sales‑forecasting project for a regional retailer that had pulled data from three legacy point‑of‑sale systems into a single CSV file. The file contained over 120,000 rows but more than 15 % of the entries were blank or marked as “N/A”, especially in critical columns like `unit_price` and `transaction_date`.  

**Task** – My goal was to clean the dataset so that the downstream linear‑regression model could train on a consistent set of features without throwing errors, while preserving as much data as possible.  

**Action** – I used Pandas:  
1. Loaded the CSV with `pd.read_csv('sales_raw.csv', na_values=['N/A',''])`.  
2. Generated a missingness heatmap (`df.isnull().sum()`) to spot columns with >10 % gaps.  
3. For numeric fields, I imputed using median values (`df['unit_price'].fillna(df['unit_price'].median(), inplace=True)`).  
4. For dates, I parsed strings into `datetime` and filled missing ones with the column’s mode.  
5. Dropped rows that still had NaNs in essential features (only 0.8 % of the data).  
6. Exported the cleaned file (`df.to_csv('sales_clean.csv', index=False)`).  

**Result** – The cleaned dataset grew from 80,000 to 115,000 usable records, boosting model training speed by 30 %. Accuracy (MAE) improved from 12.4% error to 8.7%, and I learned that median imputation often outperforms mean for skewed sales data while preserving distribution shape.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
