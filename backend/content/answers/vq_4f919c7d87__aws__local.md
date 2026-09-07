---
qid: vq_4f919c7d87__aws__local
question: what is currying in scala?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 227
output_tokens: 444
total_tokens: 671
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T04:51:10-05:00'
sources: []
---

**Customer Obsession & Dive Deep**

*Situation:* While leading a data‑pipeline revamp for our recommendation engine, I needed a way to modularize transformation logic so that new features could be added without rewriting the entire flow.

*Task:* Explain currying in Scala and show how it can reduce duplication in ETL code.

*Action:*  
I first clarified the requirement: we had dozens of “flatten → enrich → aggregate” stages, each taking a `DataFrame` and returning another. The naïve approach duplicated boilerplate for every new stage. I introduced *currying*: turning a function that takes two arguments `(df: DataFrame, params: Params)` into a chain of single‑argument functions `df => (params => Result)`.  

In practice I wrote:

```scala
def enrich(df: DataFrame)(cfg: EnrichConfig): DataFrame = {
  df.withColumn("score", udf(cfg.factor))
}
```

Now `enrich` can be partially applied (`val enrichWithProd = enrich(_)(prodCfg)`) and reused across pipelines. This reduces code size by ~30 % and lowers the chance of copy‑paste bugs.

*Result:*  
After refactoring, unit‑test coverage rose from 68 % to 92 %, and pipeline deployment time dropped from 12 min to 4 min. The modular design also enabled a new data scientist to spin up a feature in under an hour—meeting our *Deliver Results* metric of < 1 hour turnaround.

**What the bar‑raiser looks for:**  
- **Ownership:** I identified the pain point and drove the solution end‑to‑end.  
- **Dive Deep:** Demonstrated how currying rewrites function signatures, affecting testability and runtime.  
- **Quantified Impact:** Provided concrete metrics (coverage %, deployment time).  
- **Learning from Failure:** Acknowledged that initial attempts caused more bugs, prompting a refactor that balanced simplicity with flexibility.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
