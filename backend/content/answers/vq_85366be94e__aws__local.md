---
qid: vq_85366be94e__aws__local
question: How do you define a series in Pandas?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 229
output_tokens: 465
total_tokens: 694
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T05:01:24-05:00'
sources: []
---

**Situation & Task**

At my last role I was tasked to build an automated KPI dashboard for the marketing team that required rolling window calculations on daily spend data. The core requirement was to generate *moving averages* and *exponential weighted* series in Pandas, but the dataset was 12 M rows long and had to be refreshed every hour.

**Action**

1. **Clarify Requirements** – I confirmed the window size (7‑day moving average), whether to include NaNs, and if the calculation should be cumulative or rolling.  
2. **Design & Implementation**  
   * Used `pandas.Series.rolling(window=7).mean()` for a simple SMA.  
   * For an exponential decay, I leveraged `Series.expanding(min_periods=1).apply(lambda s: np.mean(s))` and then applied `ewm(alpha=0.3)` to weight recent days more heavily.  
   * To keep memory in check, the series were cast to `float32`.  
3. **AWS Integration** – The data lake resided on S3; I used Athena to pre‑aggregate by date, exported the result to a Parquet file, and loaded it into an EMR cluster for Pandas processing.  
4. **Scalability & Cost** – By partitioning on date and using `pyspark` where appropriate, I reduced runtime from 45 min to 8 min, cutting EMR usage cost by ~70%.  

**Result**

The dashboard now updates in under 10 minutes with accurate rolling metrics. Monthly ad spend forecasting accuracy improved by **12%** compared to the previous manual Excel approach. The solution was adopted company‑wide and reduced analyst effort by 30 hours per month.

---

### Leadership Principles Highlighted

* **Ownership** – I took full responsibility for data quality, performance tuning, and cost optimization.  
* **Dive Deep** – I dissected the Pandas internals to choose the most efficient rolling functions and benchmarked memory usage.  

Bar‑raisers will notice my quantitative impact (12% accuracy lift), deep technical choices, and the clear learning loop of iterating from Athena → EMR → dashboard.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
