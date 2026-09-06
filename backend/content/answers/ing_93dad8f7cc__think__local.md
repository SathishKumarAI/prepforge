---
qid: ing_93dad8f7cc__think__local
question: 'Explain: Converting Age to a Number — How to Clean Messy CSV Files with
  Python: A Beginner\u2019s Guide'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 205
output_tokens: 371
total_tokens: 576
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T10:51:51-05:00'
sources: []
---

**1️⃣ Clarify & Set Assumptions**  
- Identify what “messy” means for age columns (text, ranges, missing values).  
- Assume a typical CSV with a header and that we can use pandas/NumPy.  

**2️⃣ Mental Model / Framework**  
- *Data Cleaning Pipeline*: Ingest → Inspect → Transform → Validate.  
- *Type Conversion Strategy*: Map every possible string pattern to an integer or NaN.  

**3️⃣ Step‑by‑Step Reasoning**  
1. Load the CSV with `pd.read_csv`.  
2. Inspect unique values in the age column (`df['age'].unique()`).  
3. Build a conversion function:  
   - Strip whitespace, lower‑case.  
   - Handle exact numbers → int.  
   - Regex for ranges (e.g., “20–25”) → take midpoint or flag as NaN.  
   - Recognize placeholders (“unknown”, “-”) → np.nan.  
4. Apply the function with `df['age_clean'] = df['age'].apply(convert)`.  
5. Verify results: check dtypes, missing counts, and a quick histogram.  

**4️⃣ Common Traps to Avoid**  
- Forgetting that pandas reads everything as strings unless specified.  
- Over‑aggressive regex that drops legitimate values.  
- Neglecting locale differences in number separators (comma vs dot).  

**5️⃣ Sanity Check & Communicate**  
- Print summary statistics (`df['age_clean'].describe()`).  
- Show before/after samples side‑by‑side.  
- Explain any assumptions made about ambiguous entries so the user can adjust if needed.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
